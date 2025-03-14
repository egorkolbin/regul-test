<script lang="ts" setup>
import { useQuasar } from 'quasar'

import { useAuth } from '#imports'

const { signIn } = useAuth()
const $q = useQuasar()

const form = reactive({
  login: '',
  password: ''
})

const isLoading = ref(false)

const handleLogin = async () => {
  try {
    isLoading.value = true
    await signIn(form, { redirect: '/products' })
    $q.notify({
      type: 'positive',
      message: 'Успешный вход!',
      position: 'top'
    })
  } catch (error) {
    $q.notify({
      type: 'negative',
      message: 'Ошибка авторизации. Проверьте логин и пароль',
      position: 'top'
    })
  } finally {
    isLoading.value = false
  }
}
</script>

<template>
  <div class="page">
    <h1>Авторизация</h1>

    <q-form @submit="handleLogin" class="form">
      <q-input
        v-model="form.login"
        label="Логин"
        :rules="[(val) => !!val || 'Обязательное поле']"
      />

      <q-input
        v-model="form.password"
        label="Пароль"
        type="password"
        :rules="[(val) => !!val || 'Обязательное поле']"
      />

      <q-btn
        :label="isLoading ? 'Загрузка...' : 'Войти'"
        type="submit"
        color="primary"
        class="big"
        :loading="isLoading"
      />
    </q-form>
  </div>
</template>

<style scoped lang="scss">
@use '/app/assets/scss/variables' as *;

.page {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 24px;
  padding: 0 16px;

  .form {
    width: 540px;
    display: flex;
    flex-direction: column;
    align-items: center;

    @media (max-width: $tablet) {
      width: 100%;
    }

    .q-input {
      width: 100%;
    }

    .q-btn {
      width: 50%;

      @media (max-width: $tablet) {
        width: 100%;
      }
    }
  }
}
</style>
