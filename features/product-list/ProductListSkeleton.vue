<script setup lang="ts">
import ProductCardSkeleton from '~/entities/product/ui/ProductCardSkeleton.vue'
</script>

<template>
  <div class="products">
    <div class="products-list">
      <template v-for="product in 8" :key="product">
        <ProductCardSkeleton />
      </template>
    </div>
  </div>
</template>

<style scoped lang="scss">
@use 'ProductList';
</style>
