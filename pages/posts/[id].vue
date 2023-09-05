<script setup lang="ts">

interface IPost {
    id: number,
    description: string,
    title: string
}


const {id} = useRoute().params as any

const API_URI: string = `https://6082e3545dbd2c001757abf5.mockapi.io/qtim-test-work/posts/${id}`

const {data: post, pending} = await useFetch<IPost>(API_URI, {key: id})

if (!post.value) {
    throw createError({statusCode: 404, statusMessage: 'Post not found'})
}
</script>

<template>
  <div v-if="pending">
    Loading....
  </div>
  <PostDetail
    v-else
    :post="post"
  />
</template>

