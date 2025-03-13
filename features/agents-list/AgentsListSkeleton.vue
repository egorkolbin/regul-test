<script setup lang="ts">
import AgentCardSkeleton from '~/entities/agent/ui/AgentCardSkeleton.vue'
</script>

<template>
  <div class="agents">
    <div class="agents-list">
      <template v-for="agent in 6" :key="agent.id">
        <AgentCardSkeleton :agent="agent" />
      </template>
    </div>
  </div>
</template>

<style scoped lang="scss">
.agents {
  margin: 32px auto 0;
  display: flex;
  justify-content: center;
  &-list {
    display: flex;
    flex-direction: column;
    gap: 12px;
  }
}
</style>
