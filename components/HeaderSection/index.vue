<template>
  <header class="header">
    <nav class="header-inner">
      <div class="container header-content">
        <NuxtLink
          to="/"
        >
          <img
            class="header-logo"
            src="_nuxt/assets/image/post-logo.png"
            alt="logo image"
          >
        </NuxtLink>
        <div class="header-list">
          <div class="header-link">
            <NuxtLink to="/">
              Home
            </NuxtLink>
          </div>
          <div class="header-link">
            <NuxtLink to="/posts">
              Posts
            </NuxtLink>
          </div>
        </div>
      </div>
    </nav>
  </header>
</template>

<style src="./style.scss" lang="scss" scoped />
