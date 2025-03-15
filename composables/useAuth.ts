export const useAuth = () => {
  const token = useState<string | null>('token', () =>
    localStorage.getItem('token')
  )

  const isAuthenticated = useState<boolean>(
    'isAuthenticated',
    () => !!token.value
  )

  const signIn = async (
    form: { login: string; password: string },
    options?: { redirect: string }
  ) => {
    if (form.login === 'admin' && form.password === 'secret') {
      const fakeToken = 'jwt_example_token_123456'
      localStorage.setItem('token', fakeToken)

      token.value = fakeToken
      isAuthenticated.value = true

      if (options?.redirect) {
        await navigateTo(options.redirect)
      }
    } else {
      throw new Error('Неверный логин или пароль')
    }
  }

  const signOut = async () => {
    localStorage.removeItem('token')
    isAuthenticated.value = false
    token.value = null
    await navigateTo('/login')
  }

  return { isAuthenticated, token, signIn, signOut }
}
