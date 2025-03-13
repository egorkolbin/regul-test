<script setup lang="ts">
import { onMounted, ref } from 'vue'

import { useFetch } from '#app'
import type { Agent } from '~/entities/agent/model/agent'
import AgentsList from '~/features/agents-list/AgentsList.vue'
import AgentsListSkeleton from '~/features/agents-list/AgentsListSkeleton.vue'

const agentsData = ref<Agent[] | null>(null)
const isLoading = ref<boolean>(true)

onMounted(() => {
  setTimeout(async () => {
    const { data: agents } = await useFetch('/api/agents')
    agentsData.value = agents.value
    isLoading.value = false
  }, 1500)
})
</script>

<template>
  <div class="container">
    <AgentsList v-if="!isLoading && agentsData" :agents="agentsData" />
    <AgentsListSkeleton v-else />
  </div>
</template>

<style scoped lang="scss"></style>
