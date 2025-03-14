<script setup lang="ts">
import type { Agent } from '~/entities/agent/model/agent'
import AgentCard from '~/entities/agent/ui/AgentCard.vue'

defineProps<{
  agents: Agent[]
}>()
</script>

<template>
  <div class="agents">
    <div class="agents-list">
      <template v-for="agent in agents" :key="agent.id">
        <AgentCard :agent="agent" />
      </template>
    </div>
  </div>
</template>

<style scoped lang="scss">
@use 'AgentsList';
</style>
