<script setup lang="ts">
import { useNavigateTabs } from '../model/useNavigateTabs'

const { tabs, activeTab, updateTab } = useNavigateTabs()
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
      :class="['tab', { active: activeTab === tab.value }]"
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
