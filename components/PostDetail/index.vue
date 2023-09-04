<script setup lang="ts">
import {IPropsData} from './types'
import {useRouter} from 'vue-router'

const router = useRouter()

const props = defineProps<IPropsData>()

</script>

<template>
  <section class="detail">
    <button
      class="btn"
      @click="router.back()"
    >
      Back
    </button>
    <h1 class="title">
      {{ props.post.title }}
    </h1>
    <div class="post-detail">
      <h2 class="post-detail_title">
        Description
      </h2>
      <div class="post-detail_content">
        <p class="post-detail_description">
          {{ props.post.description }}
        </p>
      </div>
    </div>
  </section>
</template>

<style src="./style.scss" lang="scss" scoped />
