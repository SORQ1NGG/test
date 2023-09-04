<script setup lang="ts">
import { IPropsInterface } from './types'

const props = defineProps<IPropsInterface>()

const formatDate = (v: string): String => {
    return new Date(v).toLocaleString()
}

</script>

<template>
  <section
    class="post-lists"
  >
    <article
      v-for="post in props.posts"
      :key="post.id"
      data-testid="post-wrapper"
      class="post-wrapper"
    >
      <div class="post-img">
        <img
          :src="post.image ? '_nuxt/assets/image/no-image.jpg' : null"
          alt="Blog Post Image"
        >
      </div>
      <div class="post-info">
        <h2 class="post-title">
          {{ post.title }}
        </h2>
        <p class="post-preview">
          {{ post.preview }}
        </p>
        <p class="post-create">
          {{ formatDate(post.createdAt) }}
        </p>
      </div>
      <button class="btn">
        <NuxtLink :to="`/posts/${post.id}`">
          <p>Read post</p>
        </NuxtLink>
      </button>
    </article>
  </section>
</template>

<style src="./style.scss" lang="scss" scoped />
