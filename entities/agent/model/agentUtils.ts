export const getAverageReview = (reviews: number[]): string => {
  if (!reviews || reviews.length === 0) return '0'
  const sum = reviews.reduce((acc, review) => acc + review, 0)
  return (sum / reviews.length).toFixed(1)
}
