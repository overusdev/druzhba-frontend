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
@import '@/assets/styles/media.scss';

html {
    font-family: 'Montserrat', sans-serif;
}

.container {
    margin-right: auto;
    margin-left: auto;

    @include desktop {
      max-width: 1110px;
    }
}
</style>