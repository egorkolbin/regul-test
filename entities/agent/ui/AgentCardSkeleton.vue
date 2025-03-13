<script setup lang="ts"></script>

<template>
  <q-card class="agent">
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
  </q-card>
</template>

<style scoped lang="scss">
.agent {
  width: 560px;
  box-shadow: none;
  background: #f5f5f5;
  border-radius: 20px;
  padding: 20px;
  display: flex;
  align-items: flex-start;
  gap: 20px;

  &-info {
    flex: 1 1 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
  }

  &-img {
    flex: 0 0 140px;
    aspect-ratio: 1;
    background: linear-gradient(90deg, #e0e0e0 25%, #f0f0f0 50%, #e0e0e0 75%);
    background-size: 200% 100%;
    animation: shimmer 1.5s infinite;
    border-radius: 20px !important;
  }

  &-name {
    width: 100%;
    height: 28px;
    flex: 0 0 28px;
    background: linear-gradient(90deg, #e0e0e0 25%, #f0f0f0 50%, #e0e0e0 75%);
    background-size: 200% 100%;
    animation: shimmer 1.5s infinite;
    border-radius: 4px !important;
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
        background: linear-gradient(
          90deg,
          #e0e0e0 25%,
          #f0f0f0 50%,
          #e0e0e0 75%
        );
        background-size: 200% 100%;
        animation: shimmer 1.5s infinite;
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
    background: linear-gradient(90deg, #e0e0e0 25%, #f0f0f0 50%, #e0e0e0 75%);
    background-size: 200% 100%;
    animation: shimmer 1.5s infinite;
    border-radius: 4px !important;
    margin-top: 12px;
  }
}

@keyframes shimmer {
  from {
    background-position: -200% 0;
  }
  to {
    background-position: 200% 0;
  }
}
</style>
