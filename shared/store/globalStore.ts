import { defineStore } from 'pinia'
import { ref } from 'vue'

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

  return {
    activeTab,
    isDrawerOpen,
    setActiveTab,
    toggleDrawerOpen
  }
})
