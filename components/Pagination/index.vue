<script setup lang="ts">

interface IProps {
  totalPages: number,
  currentPage: number
}

const props = defineProps<IProps>()

const emit = defineEmits<{page: [pageNumber: number]}>()

</script>

<template>
  <button
      v-for="pageNumber in props.totalPages"
      :key="pageNumber.id"
      @click="emit('page', pageNumber)"
      class="pagination-btn"
      :class="currentPage === pageNumber ? 'active-page': null"
  >
    {{ pageNumber }}
  </button>
</template>

<style src="./style.scss" lang="scss" scoped/>