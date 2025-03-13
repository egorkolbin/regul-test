export interface Product {
  id: number
  name: string
  image: string
  price: number
  views: number
  dateAt: string
  status: ProductStatus
}

export type ProductStatus = 'active' | 'inactive' | 'closed'
