<script setup lang="ts">
import Pagination from '../../components/Pagination/index'

interface PostsInterface {
  title: string,
  preview: string,
  createdAt: string,
  image: string,
  id: number,
}

interface IProps {
  posts: PostsInterface[]
}

const props = defineProps<IProps>()

const formatDate = (v: string): String => {
  return new Date(v).toLocaleString()
}

const currentPage: Ref<number> = ref(1)
const itemsPerPage: Ref<number> = ref(5)
const resultCount: Ref<number> = ref(0)

const paginate = computed(() => {
  if (!props.posts || !props.posts.length) return

  resultCount.value = props.posts.length
  if (currentPage.value >= totalPages.value) {
    currentPage.value = totalPages.value
  }
  const index: number = currentPage.value * itemsPerPage.value - itemsPerPage.value
  return props.posts.slice(index, index + itemsPerPage.value)
})

const totalPages = computed<number>(() => {
  if (resultCount.value === 0) {
    return 1
  } else {
    return Math.ceil(resultCount.value / itemsPerPage.value)
  }
})

const setPage = (pageNumber: number): Number => {
  return currentPage.value = pageNumber
}

</script>

<template>
  <section class="post-lists">
    <article v-for="post in paginate" :key="post.id" class="post-wrapper">
      <div class="post-img">
        <img :src="props.image" alt="Blog Post Image">
      </div>
      <div class="post-info">
        <h2 class="post-title">{{ post.title }}</h2>
        <p class="post-preview">{{ post.preview }}</p>
        <p class="post-create">{{ formatDate(post.createdAt) }}</p>
      </div>
      <button class="btn">
        <NuxtLink :to="`/posts/${post.id}`">
          <p>Read post</p>
        </NuxtLink>
      </button>
    </article>
  </section>
  <div class="post-pagination">
    <Pagination
        @page="setPage"
        :total-pages="totalPages"
        :current-page="currentPage"
    />
  </div>
</template>

<style src="./style.scss" lang="scss" scoped/>