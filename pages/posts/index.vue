<script setup lang="ts">
import {ref, watchEffect, computed} from 'vue'

const totalCount: Ref<number> = ref(0)
const currentPage: Ref<number> = ref(1)
const itemsPerPage: Ref<number> = ref(5)
const resultCount: Ref<number> = ref(0)
const itemPerPageCount: Ref<number[]> = ref([5, 30, 50, 83])

interface PostsDataModel {
  createdAt: string,
  description: string,
  image: string,
  preview: string,
  title: string,
  id: number,
}

interface PostModel {
  post: PostsDataModel[]
  length: any
  slice(index: number, arg1: number): any
}

const {
    data,
    pending,
    refresh,
    error,
} = await useLazyFetch<PostModel>('/api/data', {
    server: false,
})

const lengthPages = () => {
    resultCount.value = data.value.length
    if (currentPage.value >= totalPages) {
        currentPage.value = totalPages
    }
}

const paginate = computed(() => {
    if (!data.value || !data.value.length) return

    lengthPages()

    const index: number = (currentPage.value * itemsPerPage.value) - itemsPerPage.value
    return data.value.slice(index, index + itemsPerPage.value)
})

const updateLimitCount = (limit: number) => {
    itemsPerPage.value = Number(limit)
    refresh()
}

const totalPages = watchEffect(() => {
    return totalCount.value = Math.ceil(resultCount.value / itemsPerPage.value)
})

const setPage = (pageNumber: number): void => {
    currentPage.value = pageNumber
    refresh()
}

</script>

<template>
  <div v-if="pending">
    Loading...
  </div>
  <div v-else-if="error">
    {{ error.message }}
  </div>
  <PostCards
    v-else
    :posts="paginate"
    :items-per-page="itemsPerPage"
    :result-count="resultCount"
    :current-page="currentPage"
  />
  <div
    data-testid="pagination"
    class="pagination"
  >
    <Pagination
      :total-pages="totalCount"
      :current-page="currentPage"
      :item-per-page-count="itemPerPageCount"
      :item-per-page="itemsPerPage"
      @page="setPage"
      @limit="updateLimitCount"
    />
  </div>
</template>

<style lang="scss" scoped>
.pagination {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20rem;
}
</style>
