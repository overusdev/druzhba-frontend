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


<style lang="scss">
@import '@/assets/styles/main.scss';

html {
    font-family: 'Montserrat', sans-serif;
}
</style>