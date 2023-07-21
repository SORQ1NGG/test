<script setup lang="ts">
import PostDetail from '../../components/PostDetail/index'

const {id} = useRoute().params

const API_URI: string = `https://6082e3545dbd2c001757abf5.mockapi.io/qtim-test-work/posts/${id}`

interface IPost  {
  id: number,
  description: string
}

const {data: post} = await useFetch<IPost>(API_URI)

if (!post.value) {
  throw createError({statusCode: 404, statusMessage: 'Post not found'})
}
</script>

<template>
  <PostDetail :post="post"/>
</template>

