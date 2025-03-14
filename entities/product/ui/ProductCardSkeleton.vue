<script lang="ts" setup></script>

<template>
  <q-card class="product">
    <div class="product-img"></div>
    <div class="product-price"></div>
    <div class="product-title"></div>
    <div class="product-action"></div>
  </q-card>
</template>

<style scoped lang="scss">
@use '/app/assets/scss/mixins' as m;

.product {
  padding: 8px;
  box-shadow: none;

  &-img {
    width: 100%;
    border-radius: 20px !important;
    aspect-ratio: 1.286;
    @include m.skeleton;
  }

  &-price {
    width: 40%;
    height: 20px;
    margin-top: 16px;
    @include m.skeleton;
    border-radius: 4px !important;
  }

  &-title {
    height: 20px;
    margin: 12px 0 9px;
    @include m.skeleton;
    border-radius: 4px !important;
  }

  &-action {
    height: 56px;
    border-top: 1px solid var(--grey);
    @include m.skeleton;
    border-radius: 4px !important;
  }
}
</style>
