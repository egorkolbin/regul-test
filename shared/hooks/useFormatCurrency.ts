export const useFormatCurrency = () => {
  const formatCurrency = (value: number) =>
    new Intl.NumberFormat('ru-RU', {
      style: 'currency',
      currency: 'RUB'
    }).format(value)

  return {
    formatCurrency
  }
}
