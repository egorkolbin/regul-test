import { computed } from 'vue'

import { useAgentStore } from '#shared/store/agentStore'
import { useGlobalStore } from '#shared/store/globalStore'
import { useProductStore } from '#shared/store/productStore'
import { useRoute, useRouter } from '#vue-router'

export const useNavigateTabs = () => {
  const route = useRoute()
  const router = useRouter()
  const globalStore = useGlobalStore()
  const productStore = useProductStore()
  const agentStore = useAgentStore()

  const tabs = computed(() => [
    {
      label: `Товары и услуги ${productStore.products?.length || ''}`,
      value: ''
    },
    { label: `Агенты ${agentStore.agents?.length || ''}`, value: 'agents' },
    { label: 'О компании', value: 'about' }
  ])

  const updateTab = (tab: string) => {
    const query = { ...route.query }
    if (tab) {
      query.tab = tab
    } else {
      delete query.tab
    }
    router.push({ query })
    globalStore.setActiveTab(tab)
  }

  return { tabs, activeTab: computed(() => globalStore.activeTab), updateTab }
}
