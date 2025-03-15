<script lang="ts" setup>
import { useNuxtApp } from '#app'
import type { Product } from '~/entities/product/model/product'
import { useFormatCurrency } from '~/shared/hooks/useFormatCurrency'
import { useFormatDate } from '~/shared/hooks/useFormatDate'

import { getStatusLabel } from '../model/productUtils'

const props = defineProps<{
  product: Product
}>()

const { $viewport } = useNuxtApp()
const { formatCurrency } = useFormatCurrency()
const { formatDate } = useFormatDate()

const status = ref(props.product.status)

const updateStatus = () => (status.value = 'active')
</script>

<template>
  <q-card class="product">
    <div class="product-img">
      <div class="product-badges">
        <div class="badge">
          <q-icon name="visibility" size="sm" />
          <span>{{ product.views }}</span>
        </div>
        <div class="badge">
          <q-icon name="event" size="sm" />
          <span>{{ formatDate(product.dateAt) }}</span>
        </div>
      </div>
      <div v-if="$viewport.isLessThan('tablet')" class="product-events">
        Действия
      </div>
      <img :src="product.image" alt="" class="image" />
    </div>
    <div class="product-price">{{ formatCurrency(product.price) }}</div>
    <div class="product-title">{{ product.name }}</div>
    <div class="product-action">
      <div :class="['product-status', status]">
        {{ getStatusLabel(status) }}
      </div>
      <q-btn
        v-if="status === 'inactive'"
        label="Продвигать"
        color="primary"
        @click="updateStatus"
      />
    </div>
  </q-card>
</template>

<style scoped lang="scss">
@use '/app/assets/scss/variables' as *;

.product {
  padding: 8px;
  box-shadow: none;
  display: flex;
  flex-direction: column;

  &-img {
    position: relative;
    width: 100%;
    overflow: hidden;
    aspect-ratio: 1.286;

    .image {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 20px;
    }
  }

  &-badges {
    position: absolute;
    top: 8px;
    left: 8px;
    display: flex;
    align-items: center;
    gap: 4px;

    .badge {
      display: flex;
      align-items: center;
      gap: 8px;
      background: var(--black-bg);
      border-radius: 12px;
      padding: 4px 8px;
      color: var(--white-100);

      span {
        font-weight: 500;
        font-size: 13px;
        line-height: 154%;
      }
    }
  }

  &-events {
    position: absolute;
    top: 8px;
    right: 8px;
    padding: 6px 12px;
    background: var(--white-100);
    border-radius: 12px;
    border: 1px solid var(--grey-100);
    font-weight: 500;
    font-size: 13px;
    line-height: 154%;
    text-align: center;
  }

  &-price {
    font-weight: 500;
    font-size: 17px;
    line-height: 118%;
    margin-top: 16px;
  }

  &-title {
    font-weight: 500;
    font-size: 15px;
    line-height: 160%;
    margin: 12px 0 9px;

    @media (max-width: $tablet) {
      margin: 4px 0 12px;
    }
  }

  &-action {
    height: 56px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 4px;
    padding: 12px 0 4px;
    border-top: 1px solid var(--grey);
    margin-top: auto;
  }

  &-status {
    line-height: 133%;
    font-size: 15px;

    &.active {
      width: 100%;
      text-align: center;
      color: var(--primary);
    }

    &.inactive {
      font-size: 13px;
      line-height: 138%;
      color: var(--text);
    }

    &.closed {
      width: 100%;
      text-align: center;
      color: var(--red);
    }
  }
}
</style>
