<template>
  <div class="news">
    <div class="container">
      <PageTitle title="Новости СНТ"/>
      <div class="news__item-wrapper">
          <MainBlocks
            inner
            more
            :items="allNews"/>
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
    const storeNews = useNews();
    const allNews = storeNews.news;
    return {
      PageTitle,
      allNews
    }
  }
}
</script>