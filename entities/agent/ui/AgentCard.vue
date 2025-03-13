<script setup lang="ts">
import type { Agent } from '~/entities/agent/model/agent'

const props = defineProps<{
  agent: Agent
}>()

const averageReview = computed(() => {
  if (!props.agent.reviews || props.agent.reviews.length === 0) return 0
  const sum = props.agent.reviews.reduce((acc, review) => acc + review, 0)
  return (sum / props.agent.reviews.length).toFixed(1)
})
</script>

<template>
  <q-card class="agent">
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
      <div class="agent-description">{{ agent.description }}</div>
    </div>
  </q-card>
</template>

<style scoped lang="scss">
.agent {
  width: 100%;
  max-width: 560px;
  box-shadow: none;
  background: #f5f5f5;
  border-radius: 20px;
  padding: 20px;
  display: flex;
  align-items: flex-start;
  gap: 20px;

  &-img {
    flex: 0 0 140px;
    aspect-ratio: 1;

    img {
      width: 100%;
      height: 100%;
      border-radius: 20px;
      object-fit: cover;
    }
  }

  &-name {
    font-weight: 600;
    font-size: 24px;
    line-height: 117%;
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
    font-size: 15px;
    line-height: 160%;
    margin-top: 12px;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
    overflow: hidden;
    text-overflow: ellipsis;
  }
}
</style>
