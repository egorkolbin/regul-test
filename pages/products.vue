<script lang="ts" setup>
import { useNuxtApp } from '#app'
import { useGlobalStore } from '#shared/store/globalStore'
import NavigateTabs from '~/features/navigate-tabs/ui/NavigateTabs.vue'
import AboutBlock from '~/widgets/about-block/AboutBlock.vue'
import AgentsBlock from '~/widgets/agents-block/AgentsBlock.vue'
import CompanyBlock from '~/widgets/company-block/CompanyBlock.vue'
import Footer from '~/widgets/footer/Footer.vue'
import Header from '~/widgets/header/Header.vue'
import ProductsBlock from '~/widgets/products-block/ProductsBlock.vue'

const { $viewport } = useNuxtApp()
const globalStore = useGlobalStore()
</script>

<template>
  <div class="page">
    <Header />

    <CompanyBlock v-if="$viewport.isGreaterOrEquals('tablet')" />

    <NavigateTabs />

    <KeepAlive>
      <ProductsBlock v-if="globalStore.activeTab === ''" />
    </KeepAlive>

    <keep-alive>
      <AgentsBlock v-if="globalStore.activeTab === 'agents'" />
    </keep-alive>

    <AboutBlock v-if="globalStore.activeTab === 'about'" />

    <Footer />
  </div>
</template>

<style scoped lang="scss"></style>
