<template>
  <div class="page">
    <h1 class="page__title">{{ title }}</h1>
  </div>
</template>

<script lang="js">

export default {
    name: 'PageTitle',
    props: {
        title: String,
    },
}
</script>

<style lang="scss" scoped>
@import '~/assets/styles/media.scss';

.page {
    &__title {
        margin-top: 40px;
        display: inline-flex;
        font-style: normal;
        font-weight: 600;
        font-size: 30px;
        line-height: 37px;
        color: #307526;
        border-bottom: 3px solid #307526;
    }
}
</style>