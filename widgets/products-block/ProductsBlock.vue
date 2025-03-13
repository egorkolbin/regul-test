<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'

import { useFetch } from '#app'
import type { Product, ProductStatus } from '~/entities/product/model/product'
import ProductList from '~/features/product-list/ProductList.vue'
import ProductListSkeleton from '~/features/product-list/ProductListSkeleton.vue'

const isLoading = ref<boolean>(true)
const productsData = ref<Product[] | null>(null)
const selectedStatus = ref<ProductStatus | null>(null)

const statusOptions = ref<{ label: string; value: ProductStatus | null }[]>([
  { label: 'Все товары и услуги', value: null },
  { label: 'Продвигаются', value: 'active' },
  { label: 'Не продвигаются', value: 'inactive' },
  { label: 'Скрыто', value: 'closed' }
])

const filteredProducts = computed<Product[]>(() => {
  if (!productsData.value) return []
  if (!selectedStatus.value) return productsData.value
  return productsData.value.filter(
    (product) => product.status === selectedStatus.value
  )
})

onMounted(() => {
  console.log(productsData.value)
  setTimeout(async () => {
    const { data } = await useFetch('/api/products')
    productsData.value = data.value
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
      v-if="!isLoading && productsData"
      :products="filteredProducts"
    />
    <ProductListSkeleton v-else />
  </div>
</template>

<style scoped lang="scss">
.select {
  max-width: 438px;
  margin: 24px auto;
}
</style>
