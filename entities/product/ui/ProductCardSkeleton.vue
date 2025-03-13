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
.product {
  padding: 8px;
  box-shadow: none;

  &-img {
    width: 100%;
    border-radius: 20px !important;
    aspect-ratio: 1.286;
    background: linear-gradient(90deg, #e0e0e0 25%, #f0f0f0 50%, #e0e0e0 75%);
    background-size: 200% 100%;
    animation: shimmer 1.5s infinite;
  }

  &-price {
    width: 40%;
    height: 20px;
    margin-top: 16px;
    background: linear-gradient(90deg, #e0e0e0 25%, #f0f0f0 50%, #e0e0e0 75%);
    background-size: 200% 100%;
    animation: shimmer 1.5s infinite;
    border-radius: 4px !important;
  }

  &-title {
    height: 20px;
    margin: 12px 0 9px;
    background: linear-gradient(90deg, #e0e0e0 25%, #f0f0f0 50%, #e0e0e0 75%);
    background-size: 200% 100%;
    animation: shimmer 1.5s infinite;
    border-radius: 4px !important;
  }

  &-action {
    height: 56px;
    border-top: 1px solid #e8e8e8;
    background: linear-gradient(90deg, #e0e0e0 25%, #f0f0f0 50%, #e0e0e0 75%);
    background-size: 200% 100%;
    animation: shimmer 1.5s infinite;
    border-radius: 4px !important;
  }
}

@keyframes shimmer {
  from {
    background-position: -200% 0;
  }
  to {
    background-position: 200% 0;
  }
}
</style>
