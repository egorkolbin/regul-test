<script setup lang="ts">
import { useNuxtApp } from '#app'
const { $viewport } = useNuxtApp()
</script>

<template>
  <q-card class="agent">
    <template v-if="$viewport.isGreaterOrEquals('tablet')">
      <div class="agent-img"></div>
      <div class="agent-info">
        <div class="agent-name"></div>
        <div class="agent-stats">
          <div class="item">
            <span></span>
          </div>
          <div class="item">
            <span></span>
          </div>
          <div class="item">
            <span></span>
          </div>
        </div>
        <div class="agent-description"></div>
      </div>
    </template>
    <template v-else>
      <div class="agent-header">
        <div class="agent-img"></div>
        <div class="agent-info">
          <div class="agent-name"></div>
          <div class="agent-stats">
            <div class="item">
              <span></span>
            </div>
            <div class="item">
              <span></span>
            </div>
            <div class="item">
              <span></span>
            </div>
          </div>
        </div>
      </div>
      <div class="agent-description"></div>
    </template>
  </q-card>
</template>

<style scoped lang="scss">
@use '/app/assets/scss/variables' as *;
@use '/app/assets/scss/mixins' as m;

.agent {
  width: 560px;
  box-shadow: none;
  background: var(--white-100);
  border-radius: 20px;
  padding: 20px;
  display: flex;
  align-items: flex-start;
  gap: 20px;

  @media (max-width: $tablet) {
    max-width: none;
    border-radius: 16px;
    padding: 16px;
    flex-direction: column;
    gap: 8px;
  }

  &-header {
    width: 100%;
    display: flex;
    align-items: flex-start;
    gap: 12px;
  }

  &-info {
    flex: 1 1 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
  }

  &-img {
    flex: 0 0 140px;
    aspect-ratio: 1;
    @include m.skeleton;
    border-radius: 20px !important;

    @media (max-width: $tablet) {
      flex: 0 0 48px;
      height: 48px;
      border-radius: 10px !important;
    }
  }

  &-name {
    width: 100%;
    height: 28px;
    flex: 0 0 28px;
    @include m.skeleton;
    border-radius: 4px !important;

    @media (max-width: $tablet) {
      height: 24px;
    }
  }

  &-stats {
    display: flex;
    align-items: center;
    gap: 4px;
    margin-top: 4px;
    flex: 0 0 20px;

    .item {
      flex: 1 1 100%;
      height: 100%;
      display: flex;
      align-items: center;
      gap: 4px;

      span {
        flex: 1 1 100%;
        height: 100%;
        @include m.skeleton;
        border-radius: 4px !important;
      }

      &:after {
        display: block;
        content: '•';
        font-size: 15px;
        line-height: 1;
      }

      &:last-child {
        &:after {
          display: none;
        }
      }
    }
  }

  &-description {
    flex: 1 1 100%;
    height: 100%;
    @include m.skeleton;
    border-radius: 4px !important;
    margin-top: 12px;

    @media (max-width: $tablet) {
      margin-top: 0;
      width: 100%;
      flex: 0 0 48px;
    }
  }
}
</style>
