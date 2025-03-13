export const useFormatDate = () => {
  const formatDate = (date: string) => {
    const currentDate = new Date()
    const productDate = new Date(date)

    const diffInMs = currentDate.getTime() - productDate.getTime()
    const diffInDays = Math.floor(diffInMs / (1000 * 60 * 60 * 24))

    if (diffInDays > 0) {
      const daySuffix =
        diffInDays === 1 ? 'день' : diffInDays <= 4 ? 'дня' : 'дней'
      return `${diffInDays} ${daySuffix}`
    }

    return 'Сегодня'
  }

  return {
    formatDate
  }
}
