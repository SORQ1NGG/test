<script setup>
  import HeaderSection from '../components/HeaderSection/index'
</script>

<template>
<HeaderSection />
  <main class="main">
    <div class="container">
      <slot/>
    </div>
  </main>
</template>