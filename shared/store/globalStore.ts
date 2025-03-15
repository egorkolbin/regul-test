import { defineStore } from 'pinia'
import { ref, watch } from 'vue'

import { useRoute } from '#vue-router'

export const useGlobalStore = defineStore('globalStore', () => {
  const route = useRoute()
  const activeTab = ref<string>((route.query.tab as string) || '')
  const isDrawerOpen = ref<boolean>(false)

  const setActiveTab = (tab: string) => {
    activeTab.value = tab
  }

  const toggleDrawerOpen = () => {
    isDrawerOpen.value = !isDrawerOpen.value
  }

  watch(
    () => route.query.tab,
    (newTab) => {
      activeTab.value = (newTab as string) || ''
    },
    { immediate: true }
  )

  return {
    activeTab,
    isDrawerOpen,
    setActiveTab,
    toggleDrawerOpen
  }
})
