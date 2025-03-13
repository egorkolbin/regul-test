<script setup lang="ts">
import { ref, watch } from 'vue'

import { useGlobalStore } from '#shared/store/globalStore'
import { useRoute, useRouter } from '#vue-router'

const route = useRoute()
const router = useRouter()
const globalStore = useGlobalStore()

const tabs = ref([
  { label: 'Товары и услуги', value: '' },
  { label: 'Агенты', value: 'agents' },
  { label: 'О компании', value: 'about' }
])

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
      :class="[{ active: globalStore.activeTab === tab.value }]"
    />
  </div>
</template>

<style scoped lang="scss">
.navigate {
  &-tabs {
    width: 100%;
    display: flex;
    justify-content: center;
    gap: 8px;
    margin: 32px auto 0;
    padding-bottom: 32px;
    border-bottom: 1px solid #ccc;
  }
}
</style>
