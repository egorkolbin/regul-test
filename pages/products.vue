<script lang="ts" setup>
import { useGlobalStore } from '#shared/store/globalStore'
import NavigateTabs from '~/features/navigate-tabs/NavigateTabs.vue'
import AgentsBlock from '~/widgets/agents-block/AgentsBlock.vue'
import CompanyBlock from '~/widgets/company-block/CompanyBlock.vue'
import ProductsBlock from '~/widgets/products-block/ProductsBlock.vue'

const globalStore = useGlobalStore()
</script>

<template>
  <div class="page">
    <CompanyBlock />

    <NavigateTabs />

    <KeepAlive>
      <ProductsBlock v-if="globalStore.activeTab === ''" />
    </KeepAlive>

    <keep-alive>
      <AgentsBlock v-if="globalStore.activeTab === 'agents'" />
    </keep-alive>
  </div>
</template>

<style scoped lang="scss"></style>
