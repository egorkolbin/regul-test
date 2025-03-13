export default defineNuxtRouteMiddleware((to) => {
  const { isAuthenticated } = useAuth()

  if (to.path === '/') {
    return navigateTo(isAuthenticated.value ? '/products' : '/login')
  }

  if (to.path === '/products' && !isAuthenticated.value) {
    return navigateTo('/login')
  }

  if (to.path === '/login' && isAuthenticated.value) {
    return navigateTo('/products')
  }
})
