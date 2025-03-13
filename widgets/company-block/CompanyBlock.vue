<script setup lang="ts">
import { ref } from 'vue'

import { useFetch } from '#app'

const { data: companyData } = await useFetch('/api/company')
const { data: reviewsData } = await useFetch('/api/reviews')

const isShowPhone = ref<boolean>(false)

const toggleShowPhone = () => {
  isShowPhone.value = !isShowPhone.value
}
</script>

<template>
  <div class="company">
    <div class="company-img">
      <img :src="companyData?.logo" :alt="companyData?.name" />
    </div>
    <div class="company-title">{{ companyData?.name }}</div>
    <div class="company-stats">
      <div class="item">
        <q-icon name="verified" size="xs" />
        Документы проверены
      </div>
      <div v-if="reviewsData" class="item">
        <q-icon name="star" size="xs" />
        {{ reviewsData.rating }}
      </div>
      <div v-if="reviewsData" class="item">
        {{ reviewsData.reviewsCount }} отзывов
      </div>
    </div>
    <div class="company-action">
      <div v-if="isShowPhone" class="company-phone">8 (800) 555 35-35</div>
      <q-btn color="primary" class="big" @click="toggleShowPhone">{{
        isShowPhone ? 'Скрыть номер телефона' : 'Показать номер телефона'
      }}</q-btn>
    </div>
  </div>
</template>

<style scoped lang="scss">
.company {
  display: flex;
  flex-direction: column;
  align-items: center;

  &-img {
    width: 120px;
    height: 120px;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 20px;
    }
  }

  &-title {
    font-weight: 600;
    font-size: 24px;
    line-height: 117%;
    margin-top: 24px;
  }

  &-stats {
    display: flex;
    align-items: center;
    gap: 4px;
    margin-top: 12px;

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

  &-phone {
    font-size: 15px;
    line-height: 133%;
  }

  &-action {
    margin-top: 24px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 12px;
  }
}
</style>
