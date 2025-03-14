<script setup lang="ts">
import { useNuxtApp } from '#app'

const props = defineProps({
  modelValue: {
    type: Boolean,
    required: true
  }
})

const { $viewport } = useNuxtApp()
const emit = defineEmits(['update:modelValue'])

const isDrawerOpen = ref(false)

watch(
  () => props.modelValue,
  (newValue) => {
    isDrawerOpen.value = newValue
  }
)

watch(
  () => isDrawerOpen.value,
  (newValue) => {
    emit('update:modelValue', newValue)
  }
)
</script>

<template>
  <q-layout>
    <q-drawer
      v-model="isDrawerOpen"
      :side="$viewport.isGreaterOrEquals('tablet') ? 'right' : 'left'"
      overlay
      behavior="mobile"
      class="sidebar"
    >
      <div class="q-pa-md">
        <div
          v-if="$viewport.isLessThan('tablet')"
          class="sidebar-close"
          @click="isDrawerOpen = false"
        >
          <q-icon name="close" size="sm" />
        </div>
        <q-list>
          <q-item clickable>
            <q-item-section>Пункт 1</q-item-section>
          </q-item>
          <q-item clickable>
            <q-item-section>Пункт 2</q-item-section>
          </q-item>
          <q-item clickable>
            <q-item-section>Пункт 3</q-item-section>
          </q-item>
        </q-list>
      </div>
    </q-drawer>
  </q-layout>
</template>

<style scoped lang="scss">
@use '/app/assets/scss/variables' as *;

.q-layout {
  min-height: 0;
  width: 0;
}

.sidebar-close {
  display: flex;
  justify-content: flex-end;
}
</style>
