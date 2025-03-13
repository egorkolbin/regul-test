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
  <div class="q-pa-md" style="max-width: 400px">
    <q-form @submit="handleLogin" class="q-gutter-md">
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

      <q-btn label="Войти" type="submit" color="primary" :loading="isLoading" />
    </q-form>
  </div>
</template>
