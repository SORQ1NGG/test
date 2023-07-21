<template>
  <section class="hero-section">
    <div class="hero-inner">
      <h2 class="title">Home</h2>
      <p class="description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi aut corporis ducimus itaque
        maiores nulla
        perferendis repellendus sequi ut veniam!</p>
      <p class="description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi aut corporis ducimus itaque
        maiores nulla
        perferendis repellendus sequi ut veniam!</p>
      <p class="description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi aut corporis ducimus itaque
        maiores nulla
        perferendis repellendus sequi ut veniam!</p>
    </div>
    <img src="~/assets/image/post-office.jpg" alt="post office image" class="hero-img">
  </section>
</template>

<style lang="scss" scoped>
.title {
  font-size: 36px;
  color: #222;
  font-weight: 700;
  margin-bottom: 20px;
}

.hero {
  &-section {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  &-img {
    width: 640px;
  }
}

.description {
  width: 700px;
  color: #222;

  &:not(:last-child) {
    margin-bottom: 10px;
  }
}
</style>