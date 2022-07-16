<template>
  <div class="header">
    Header text
  </div>
</template>

<script setup lang="ts">
// definePageMeta({
//   layout: false,
// });
</script>

<style lang="scss" scoped>
@import '~/assets/styles/media.scss';
.header {
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  color: #000000;

  @include desktop {
    color: red;
  }

}
</style>