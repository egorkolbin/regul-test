import { Product } from '~/entities/product/model/product'

export default defineEventHandler(async (event) => {
  const productsData: Product[] = [
    {
      id: 1,
      name: 'Сlavia Nord Grand сценическое цифровое пианино',
      image: '/img/products/1.png',
      price: 450500,
      views: 750,
      dateAt: 'Thu Mar 13 2025 18:45:03 GMT+0400',
      status: 'active'
    },
    {
      id: 2,
      name: 'Hyundai Sonata 2.0 AT, 2023, 30 км',
      image: '/img/products/2.png',
      price: 3285000,
      views: 255,
      dateAt: 'Thu Mar 11 2025 18:45:03 GMT+0400',
      status: 'inactive'
    },
    {
      id: 3,
      name: '2-к. квартира, 46 м², 1/5 эт.',
      image: '/img/products/3.png',
      price: 4800000,
      views: 255,
      dateAt: 'Thu Mar 11 2025 18:45:03 GMT+0400',
      status: 'inactive'
    },
    {
      id: 4,
      name: 'Старые барабаны',
      image: '/img/products/4.png',
      price: 7500,
      views: 255,
      dateAt: 'Thu Mar 11 2025 18:45:03 GMT+0400',
      status: 'inactive'
    },
    {
      id: 5,
      name: 'DMX сплиттер RJ45 to 4x XLR Stairville',
      image: '/img/products/5.png',
      price: 7500,
      views: 255,
      dateAt: 'Thu Mar 11 2025 18:45:03 GMT+0400',
      status: 'inactive'
    },
    {
      id: 6,
      name: 'Мотоцикл honda',
      image: '/img/products/6.png',
      price: 217500,
      views: 255,
      dateAt: 'Thu Mar 11 2025 18:45:03 GMT+0400',
      status: 'inactive'
    },
    {
      id: 7,
      name: 'Иж юпитер 5',
      image: '/img/products/7.png',
      price: 17900,
      views: 255,
      dateAt: 'Thu Mar 11 2025 18:45:03 GMT+0400',
      status: 'inactive'
    },
    {
      id: 8,
      name: 'Пылесос кёрхер с водяным мешком для сбора пыли',
      image: '/img/products/8.png',
      price: 7500,
      views: 255,
      dateAt: 'Thu Mar 11 2025 18:45:03 GMT+0400',
      status: 'closed'
    }
  ]

  return productsData
})
