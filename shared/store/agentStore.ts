import { defineStore } from 'pinia'
import { ref } from 'vue'

import type { Agent } from '~/entities/agent/model/agent'

export const useAgentStore = defineStore('agentStore', () => {
  const agents = ref<Agent[] | null>(null)

  const setAgents = (items: Agent[]) => {
    agents.value = items
  }

  return {
    agents,
    setAgents
  }
})
