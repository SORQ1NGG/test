<script setup lang="ts">
import { computed } from 'vue'
import { pagination } from '../../utils/helpers/pagination.js'
import { IPropsPagination } from './types'

const props = defineProps<IPropsPagination>()

const emit = defineEmits<{
  page: [pageNumber: number]
  limit: [value: number]
}>()

const paginationComputed = computed(() => {
    return props.totalPages ? pagination(props.currentPage, props.totalPages) : 0
})

const limitCount = (event: number) => {
    emit('limit', event)
}

</script>

<template>
  <NuxtLink
    v-for="pageNumber in paginationComputed"
    :key="pageNumber"
    role="button"
    class="pagination-btn"
    :class="currentPage === pageNumber ? 'active-page': null"
  >
    <span
      v-if="pageNumber === '...'"
      class="dots"
    >
      {{ pageNumber }}
    </span>
    <span
      v-else
      class="btn-link"
      @click="emit('page', pageNumber)"
    >
      {{ pageNumber }}
    </span>
  </NuxtLink>
  <div class="items-per-page">
    <span>Posts per page: </span>
    <select
      :value="itemPerPage"
      class="select select-items"
      @input="limitCount($event.target.value)"
    >
      <option
        v-for="limitSizes in props.itemPerPageCount"
        :key="limitSizes"
        :value="limitSizes"
      >
        {{ limitSizes }}
      </option>
    </select>
  </div>
</template>

<style src="./style.scss" lang="scss" scoped />
