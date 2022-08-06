<template>
    <div class="main-page">
      <div class="container">
        {{ lastNews }}
      </div>
    </div>
</template>

<script lang="js">
import { useNews } from "~/stores/news";

definePageMeta({
  layout: "default",
});

export default {
  setup() {
    const store = useNews();
    const lastNews = store.getLastNews();
    return {
      store,
      lastNews,
    }
  }
}
</script>

<style lang="scss" scoped>
// @import '@/assets/styles/main.scss';
</style>