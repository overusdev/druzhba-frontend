<template>
  <div class="default">
    <Header />
    Some default layout shared across all pages
    <slot />
    <Footer />
  </div>
</template>

<script setup lang="ts">
</script>


<style lang="scss" scoped>
@import '@/assets/styles/main.scss';
</style>