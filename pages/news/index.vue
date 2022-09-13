<template>
  <div class="news">
    <div class="container">
      <PageTitle title="Новости СНТ"/>
      <div class="news__item-wrapper">
        <div
          v-for="item in store.news"
          :key="item.title"
          class="news__item"
        >
          {{ item.title }}
        
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="js">
import PageTitle from '~/components/page-title/PageTitle';
import { useNews } from "~/stores/news";

export default {
  components: { PageTitle },
  setup() {
    const store = useNews();
    return {
      store,
      PageTitle
    }
  }
}
</script>