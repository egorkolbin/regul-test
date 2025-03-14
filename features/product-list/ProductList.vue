<script setup lang="ts">
import type { Product } from '~/entities/product/model/product'
import ProductCard from '~/entities/product/ui/ProductCard.vue'

defineProps<{
  products: Product[]
}>()
</script>

<template>
  <div class="products">
    <div class="products-list">
      <template v-for="product in products" :key="product.id">
        <ProductCard :product="product" />
      </template>
    </div>
  </div>
</template>

<style scoped lang="scss">
@use 'ProductList';
</style>
