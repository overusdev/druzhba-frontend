<template>
    <div class="main-items">
        <NuxtLink
            v-for="item in items"
            :key="item.id"
            :to="item.link"
            class="main-items__link"
        >
            <span
                class="main-items__item"
                v-html="item.title"
            >
            </span>
        </NuxtLink>
    </div>
</template>

<script lang="js">
    import { useMain } from '~/stores/mainItems';

    export default {
        setup() {
            const store = useMain();
            const items = store.getMainItems();

            return {
                items
            }
        }
    }

</script>

<style lang="scss" scoped>
    @import '~/assets/styles/media.scss';
    @import '~/assets/styles/variables.scss';

    .main-items {
        display: flex;
        flex-direction: column;

        @include desktop {
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
            flex-wrap: wrap;
        }

        &__link {
            text-decoration: none;
        }

        &__item {
            height: 200px;
            width: 350px;
            color: #fff;
            background: rgba(48, 117, 38, 0.8);
            border: 1px solid #307526;
            margin-bottom: 24px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-weight: 500;
            font-size: 16px;
            line-height: 20px;
            text-align: center;
            letter-spacing: 0.01em;
            text-transform: uppercase;
            text-decoration: none;

            @include desktop {
                margin-bottom: 0;
                font-size: 22px;
                line-height: 27px;
                cursor: pointer;
                transition: $transitionDefault;

                &:hover {
                    transform: scale(1.1);
                    background: #fff;
                    font-weight: 700;
                    color: #307526;
                }
            }
        }
    }

</style>