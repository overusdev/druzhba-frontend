<template>
  <div class="header">
    <div class="container">
      <div class="header__wrapper">
        <div class="header__logo-wrapper">
          <img 
            src="~/assets/images/header/Logo.png"
            alt="Лого"
            class="header__logo"
          >
          <p class="header__logo-note">садовое некоммерческое товарищество</p>
        </div>
        <div class="header__menu">
          <nuxt-link
            v-for="item in menuItems"
            :key="item"
            class="header__menu-item"
          >
            {{ item.name }}
          </nuxt-link>
        </div>
      </div>
    </div>

  </div>
</template>

<script setup lang="ts">
  const count = ref(0);
  const increment = () => count.value++;
  const menuItems = [
    {
      name: 'Новости',
    },
    {
      name: 'Документы',
    },
    {
      name: 'Обьявления',
    },
    {
      name: 'Галерея',
    },
    {
      name: 'Контакты',
    },
  ];
</script>

<style lang="scss" scoped>
@import '~/assets/styles/media.scss';
.header {
  &__logo {
    width: 255px;
    height: 60px;
    margin-bottom: 8px;
  }

  &__logo-note {
    font-weight: 400;
    font-size: 12px;
    line-height: 15px;
    color: #000000;
  }

  &__wrapper {
    position: relative;
    padding: 40px 14px 18px 14px;
    border-bottom: 1px solid #000;

    @include desktop {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 45px 0 18px 0;
    }
  }

  &__menu {
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: center;
    top: 145px;
    background: #fff;
    left: 0;
    right: 0;
    padding-top: 30px;

    @include desktop {
      position: static;
      flex-direction: row;
      align-items: center;
      padding-top: 0;
    }
  }

  &__menu-item {
    font-weight: 400;
    font-size: 20px;
    line-height: 24px;
    margin-bottom: 30px;

    @include desktop {
      margin-left: 16px;
      font-size: 16px;
      line-height: 20px;
      margin-bottom: 0;
    }
  }

}
</style>