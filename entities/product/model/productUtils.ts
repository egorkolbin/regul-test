export const getStatusLabel = (status: string) => {
  switch (status) {
    case 'active':
      return 'Объявление продвигается'
    case 'inactive':
      return 'Увеличьте количество просмотров'
    case 'closed':
      return 'Объявление скрыто'
  }
}
