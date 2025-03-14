<script setup lang="ts">
import { onMounted, ref } from 'vue'

import { useFetch } from '#app'
import { useAgentStore } from '#shared/store/agentStore'
import type { Agent } from '~/entities/agent/model/agent'
import AgentsList from '~/features/agents-list/AgentsList.vue'
import AgentsListSkeleton from '~/features/agents-list/AgentsListSkeleton.vue'

const agentStore = useAgentStore()

const isLoading = ref<boolean>(true)

onMounted(() => {
  setTimeout(async () => {
    const { data: agents } = await useFetch('/api/agents')
    agentStore.setAgents(agents.value as Agent[])
    isLoading.value = false
  }, 1500)
})
</script>

<template>
  <AgentsList
    v-if="!isLoading && agentStore.agents"
    :agents="agentStore.agents"
  />
  <AgentsListSkeleton v-else />
</template>

<style scoped lang="scss"></style>
