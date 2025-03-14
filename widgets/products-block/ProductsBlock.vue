<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'

import { useFetch } from '#app'
import { useProductStore } from '#shared/store/productStore'
import type { Product, ProductStatus } from '~/entities/product/model/product'
import ProductList from '~/features/product-list/ProductList.vue'
import ProductListSkeleton from '~/features/product-list/ProductListSkeleton.vue'

const productStore = useProductStore()

const isLoading = ref<boolean>(true)
const selectedStatus = ref<ProductStatus | null>(null)

const statusOptions = ref<{ label: string; value: ProductStatus | null }[]>([
  { label: 'Все товары и услуги', value: null },
  { label: 'Продвигаются', value: 'active' },
  { label: 'Не продвигаются', value: 'inactive' },
  { label: 'Скрыто', value: 'closed' }
])

const filteredProducts = computed<Product[]>(() => {
  if (!productStore.products) return []
  if (!selectedStatus.value) return productStore.products
  return productStore.products.filter(
    (product) => product.status === selectedStatus.value
  )
})

onMounted(() => {
  setTimeout(async () => {
    const { data } = await useFetch('/api/products')
    productStore.setProducts(data.value as Product[])
    isLoading.value = false
  }, 1500)
})
</script>

<template>
  <div class="container">
    <div class="select">
      <q-select
        v-model="selectedStatus"
        :options="statusOptions"
        outlined
        dense
        map-options
        emit-value
      />
    </div>

    <ProductList
      v-if="!isLoading && productStore.products"
      :products="filteredProducts"
    />
    <ProductListSkeleton v-else />
  </div>
</template>

<style scoped lang="scss">
@use '/app/assets/scss/variables' as *;

.select {
  max-width: 438px;
  margin: 24px auto;

  @media (max-width: $tablet) {
    width: 100%;
    max-width: none;
  }
}
</style>
