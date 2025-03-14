import { defineStore } from 'pinia'
import { ref } from 'vue'

import type { Product } from '~/entities/product/model/product'

export const useProductStore = defineStore('productStore', () => {
  const products = ref<Product[] | null>(null)

  const setProducts = (items: Product[]) => {
    products.value = items
  }

  return {
    products,
    setProducts
  }
})
