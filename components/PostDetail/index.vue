<script setup lang="ts">

const router = useRouter()

interface DataInterface {
  description: string
}

interface IProps {
  post: DataInterface
}

const props = defineProps<IProps>()
</script>

<template>
  <button class="btn" @click="router.back()">
    Back
  </button>
  <div class="post-detail">
    <h2 class="post-detail_title">Description</h2>
    <p class="post-detail_description">{{ props.post.description }}</p>
  </div>
</template>

<style src="./style.scss" lang="scss" scoped />