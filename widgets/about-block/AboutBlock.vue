<script setup lang="ts">
import { computed } from 'vue'

import Map from '~/features/map/Map.vue'

const currentTime = new Date()

const workStartHour = 8
const workEndHour = 23

const isWorkingTime = computed(() => {
  const hours = currentTime.getHours()
  const minutes = currentTime.getMinutes()
  return (
    hours >= workStartHour &&
    (hours < workEndHour || (hours === workEndHour && minutes === 0))
  )
})
</script>

<template>
  <div class="about">
    <div class="about-block">
      <div class="about-title">О компании</div>
      <div class="about-text">
        Копкой занимаемся 15 лет. Все началось с хобби и плавно переросло в
        любимую работу. Работаем с профессиональной техникой.
      </div>
    </div>
    <div :class="['about-block', 'time', { inactive: !isWorkingTime }]">
      <div class="about-title">Режим работы</div>
      <div class="about-text">
        Сегодня с {{ workStartHour }}:00 до {{ workEndHour }}:00
      </div>
    </div>
    <div class="about-map">
      <div class="about-block">
        <div class="about-title">Местоположение</div>
        <div class="about-text primary">
          Ростов на Дону, Воронежская ул., 42А корп. 1
        </div>
      </div>
      <Map />
    </div>
  </div>
</template>

<style scoped lang="scss">
@use '/app/assets/scss/variables' as *;

.about {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;

  @media (max-width: $tablet) {
    margin-bottom: 48px;
  }

  &-block {
    width: 560px;
    display: flex;
    flex-direction: column;
    gap: 8px;
    padding: 20px;
    border-radius: 16px;

    @media (max-width: $tablet) {
      width: 100%;
    }

    &.time {
      background: var(--white-100);
    }

    &.inactive {
      opacity: 0.3;
    }
  }

  &-map {
    display: flex;
    width: 560px;

    @media (max-width: $tablet) {
      width: 100%;
      flex-direction: column-reverse;
    }

    .about-block {
      width: auto;
    }
  }

  &-title {
    font-weight: 600;
    font-size: 24px;
    line-height: 117%;

    @media (max-width: $tablet) {
      font-size: 20px;
      line-height: 120%;
    }
  }

  &-text {
    font-size: 17px;
    line-height: 165%;

    &.primary {
      color: var(--primary);
    }

    @media (max-width: $tablet) {
      font-size: 15px;
      line-height: 160%;
    }
  }
}
</style>
