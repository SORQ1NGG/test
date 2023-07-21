<script setup lang="ts">
import PostCard from "../../components/PostCards/index"

interface PostsDataModel {
  createdAt: string,
  description: string,
  image: string,
  preview: string,
  title: string,
  id: number,
}

interface PostModel {
  data: PostsDataModel[]
}

const { data } = await useFetch<PostModel>('/api/data')
</script>

<template>
  <PostCard :posts="data"/>
</template>
