<script setup lang="ts">
import {ref} from 'vue'
import {NO_IMG_SRC} from '../../constants/images'
import {IPropsImage} from './types'

const props = defineProps<IPropsImage>()

const load: Ref<boolean> = ref(false)
const errorLoad: Ref<boolean> = ref(false)
</script>

<template>
  <div
    class="img"
    :class="{
      'img--no-image': !props.src || errorLoad,
      'img--empty': !load,
    }"
  >
    <img
      v-if="props.src"
      :src="props.src || NO_IMG_SRC"
      :alt="props.alt"
      loading="lazy"
    >
    <div
      v-if="props.circleLoader"
      class="loader"
    >
      Loading....
    </div>
  </div>
</template>

<style src="./style.scss" lang="scss" />
