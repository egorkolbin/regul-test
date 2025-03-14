<script setup lang="ts">
import { useNuxtApp } from '#app'
import { useGlobalStore } from '#shared/store/globalStore'
import Sidebar from '~/features/sidebar/Sidebar.vue'

const { $viewport } = useNuxtApp()
const globalStore = useGlobalStore()
</script>

<template>
  <header class="header">
    <div class="header-container container">
      <template v-if="$viewport.isGreaterOrEquals('tablet')">
        <div class="header-side">
          <div class="header-logo">Annoncé</div>
          <div class="header-categories">
            <q-icon name="grid_view" size="18px" />
            Все категории
          </div>
        </div>
        <div class="header-side">
          <div class="header-place">
            <q-icon name="place" size="18px" />
            Ростов-на-Дону
          </div>
          <div class="header-action">Разместить объявление</div>
          <div class="header-menu" @click="globalStore.toggleDrawerOpen">
            <q-icon name="menu" size="24px" />
            <div class="avatar">
              <img src="/img/agents/1.png" alt="" />
            </div>
          </div>
        </div>
      </template>

      <template v-else>
        <div class="header-menu" @click="globalStore.toggleDrawerOpen">
          <q-icon name="menu" size="24px" />
        </div>
        <div class="header-logo">Annoncé</div>
        <div class="header-cart">
          <span>1</span>
          <img src="/img/icons/cart.svg" alt="" />
        </div>
      </template>
    </div>

    <Sidebar v-model="globalStore.isDrawerOpen" />
  </header>
</template>

<style scoped lang="scss">
@use '/app/assets/scss/variables' as *;

.header {
  height: 64px;
  background: var(--header-bg);
  display: flex;
  align-items: center;
  color: var(--black);

  @media (max-width: $tablet) {
    height: 56px;
  }

  &-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  &-side {
    display: flex;
    align-items: center;
    gap: 24px;

    @media (max-width: $desktop) {
      gap: 12px;
    }
  }

  &-logo {
    font-family: var(--second-font);
    font-weight: 600;
    font-size: 28px;
    line-height: 100%;
    color: var(--total-black);
  }

  &-categories {
    display: flex;
    align-items: center;
    gap: 8px;
    font-weight: 500;
    font-size: 15px;
    line-height: 160%;
    text-align: center;
    border-radius: 40px;
    padding: 12px 16px;
    background: var(--grey);
    cursor: pointer;

    @media (max-width: $desktop) {
      padding: 8px;
    }
  }

  &-place {
    display: flex;
    align-items: center;
    gap: 4px;
    font-size: 15px;
    line-height: 160%;
    padding-right: 30px;
    border-right: 1px solid var(--grey-300);

    @media (max-width: $desktop) {
      padding-right: 12px;
    }
  }

  &-action {
    font-weight: 500;
    font-size: 15px;
    line-height: 160%;
    color: var(--primary);
    cursor: pointer;
  }

  &-menu {
    border-radius: 24px;
    padding: 4px 4px 4px 12px;
    background: var(--grey);
    display: flex;
    align-items: center;
    gap: 8px;
    cursor: pointer;

    @media (max-width: $tablet) {
      padding: 0;
      border-radius: 0;
      background: transparent;
    }

    .avatar {
      width: 40px;
      flex: 0 0 40px;
      height: 40px;

      img {
        width: 100%;
        height: 100%;
        border-radius: 40px;
      }
    }
  }

  &-cart {
    position: relative;
    span {
      position: absolute;
      top: -4px;
      right: -4px;
      width: 16px;
      height: 16px;
      border-radius: 50%;
      background: var(--primary);
      border: 1px solid var(--white);
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: 600;
      font-size: 11px;
      line-height: 109%;
      text-align: center;
      color: var(--white-100);
    }
  }
}
</style>
