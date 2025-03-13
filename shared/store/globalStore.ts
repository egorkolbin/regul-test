import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useGlobalStore = defineStore('globalStore', () => {
  const route = useRoute()

  const activeTab = ref<string>((route.query.tab as string) || '')

  const setActiveTab = (tab: string) => {
    activeTab.value = tab
  }

  return {
    activeTab,
    setActiveTab
  }
})
