<script setup lang="ts">
import { useNuxtApp } from '#app'
import type { Agent } from '~/entities/agent/model/agent'
import { getAverageReview } from '~/entities/agent/model/agentUtils'

const props = defineProps<{
  agent: Agent
}>()

const { $viewport } = useNuxtApp()

const averageReview = computed(() => getAverageReview(props.agent.reviews))
</script>

<template>
  <q-card class="agent">
    <template v-if="$viewport.isGreaterOrEquals('tablet')">
      <div class="agent-img">
        <img :src="agent.img" alt="" />
      </div>
      <div class="agent-info">
        <div class="agent-name">{{ agent.name }}</div>
        <div class="agent-stats">
          <div v-if="agent.documents" class="item">
            <q-icon name="verified" size="xs" />
            Документы проверены
          </div>
          <div v-if="agent.reviews.length" class="item">
            <q-icon name="star" size="xs" />
            {{ averageReview }}
          </div>
          <div v-if="agent.reviews.length" class="item">
            {{ agent.reviews.length }} отзывов
          </div>
          <div v-if="!agent.reviews.length" class="item">Нет отзывов</div>
        </div>
        <div class="agent-description">
          {{ agent.description }}
        </div>
      </div>
    </template>
    <template v-else>
      <div class="agent-header">
        <div class="agent-img">
          <img :src="agent.img" alt="" />
        </div>
        <div class="agent-info">
          <div class="agent-name">{{ agent.name }}</div>
          <div class="agent-stats">
            <div v-if="agent.documents" class="item">
              <q-icon name="verified" size="xs" />
              Проверен
            </div>
            <div v-if="agent.reviews.length" class="item">
              <q-icon name="star" size="xs" />
              {{ averageReview }}
            </div>
            <div v-if="agent.reviews.length" class="item">
              {{ agent.reviews.length }} отзывов
            </div>
            <div v-if="!agent.reviews.length" class="item">Нет отзывов</div>
          </div>
        </div>
      </div>
      <div class="agent-description">
        {{ agent.description }}
      </div>
    </template>
  </q-card>
</template>

<style scoped lang="scss">
@use '/app/assets/scss/variables' as *;

.agent {
  width: 100%;
  max-width: 560px;
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
    display: flex;
    align-items: flex-start;
    gap: 12px;
  }

  &-img {
    flex: 0 0 140px;
    height: 140px;

    @media (max-width: $tablet) {
      flex: 0 0 48px;
      height: 48px;
    }

    img {
      width: 100%;
      height: 100%;
      border-radius: 20px;
      object-fit: cover;

      @media (max-width: $tablet) {
        border-radius: 10px;
      }
    }
  }

  &-name {
    font-weight: 600;
    font-size: 24px;
    line-height: 117%;

    @media (max-width: $tablet) {
      font-weight: 600;
      font-size: 20px;
      line-height: 120%;
    }
  }

  &-stats {
    display: flex;
    align-items: center;
    gap: 4px;
    margin-top: 4px;

    .item {
      display: flex;
      align-items: center;
      gap: 4px;
      font-size: 15px;
      line-height: 133%;

      i {
        color: var(--primary);
      }

      &:after {
        display: block;
        content: '•';
        font-size: 15px;
      }

      &:last-child {
        &:after {
          display: none;
        }
      }
    }
  }

  &-description {
    font-size: 15px;
    line-height: 160%;
    margin-top: 12px;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
    overflow: hidden;
    text-overflow: ellipsis;

    @media (max-width: $tablet) {
      margin-top: 0;
      display: block;
    }
  }
}
</style>
