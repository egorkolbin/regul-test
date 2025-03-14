<script setup lang="ts">
import { ref, watch } from 'vue'

import { useAgentStore } from '#shared/store/agentStore'
import { useGlobalStore } from '#shared/store/globalStore'
import { useProductStore } from '#shared/store/productStore'
import { useRoute, useRouter } from '#vue-router'

const route = useRoute()
const router = useRouter()
const globalStore = useGlobalStore()
const productStore = useProductStore()
const agentStore = useAgentStore()

const tabs = ref([
  { label: 'Товары и услуги', value: '' },
  { label: 'Агенты', value: 'agents' },
  { label: 'О компании', value: 'about' }
])

watch(
  () => productStore.products?.length,
  (newLength) => {
    tabs.value[0].label = `Товары и услуги ${newLength}`
  }
)

watch(
  () => agentStore.agents?.length,
  (newLength) => {
    tabs.value[1].label = `Агенты ${newLength}`
  }
)

watch(
  () => route.query.tab,
  (newTab) => {
    globalStore.setActiveTab((newTab as string) || '')
  }
)

const updateTab = (tab: string) => {
  const query = { ...route.query }

  if (tab) {
    query.tab = tab
  } else {
    delete query.tab
  }

  router.push({ query })
}
</script>

<template>
  <div class="navigate-tabs">
    <q-btn
      v-for="tab in tabs"
      :key="tab.value"
      :label="tab.label"
      color="grey"
      @click="updateTab(tab.value)"
      no-caps
      dense
      unelevated
      :class="['tab', { active: globalStore.activeTab === tab.value }]"
    />
  </div>
</template>

<style scoped lang="scss">
@use '/app/assets/scss/variables' as *;

.navigate {
  &-tabs {
    width: 100%;
    display: flex;
    justify-content: center;
    gap: 8px;
    margin: 32px auto 0;
    padding-bottom: 32px;
    border-bottom: 1px solid var(--grey-300);

    .tab {
      white-space: nowrap;
    }

    @media (max-width: $tablet) {
      margin: 0;
      padding: 8px 16px;
      overflow: scroll;
      justify-content: flex-start;
    }

    &::-webkit-scrollbar {
      display: none;
    }
  }
}
</style>
