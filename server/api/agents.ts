import { Agent } from '~/entities/agent/model/agent'

export default defineEventHandler(async (event) => {
  const agentsData: Agent[] = [
    {
      name: 'Дмитрий Хитрый',
      img: '/img/agents/1.png',
      documents: true,
      reviews: [1, 2, 3, 4, 5],
      description:
        'Помог справиться с потерей и организовать похороны для 126 семей ну и еще чуть описания, чтобы дойти до конца строки и текст будет отсекаться'
    },
    {
      name: 'Апполинарий Землеперекопский',
      img: '/img/agents/2.png',
      documents: true,
      reviews: [],
      description:
        'Помог справиться с потерей и организовать похороны для 126 семей.'
    },
    {
      name: 'Фёдор Сумкин',
      img: '/img/agents/3.png',
      documents: false,
      reviews: [5, 5, 5, 5, 5, 5, 5, 5, 5],
      description:
        'Помог справиться с потерей и организовать похороны для 126 семей ну и еще чуть описания, чтобы дойти до конца строки и текст будет отсекаться'
    },
    {
      name: 'Василий Копушин',
      img: '/img/agents/4.png',
      documents: true,
      reviews: [1, 2, 4, 5, 2, 3, 1, 2],
      description:
        'Помог справиться с потерей и организовать похороны для 126 семей ну и еще чуть описания, чтобы дойти до конца строки и текст будет отсекаться'
    },
    {
      name: 'Феофан Кусакин',
      img: '/img/agents/5.png',
      documents: true,
      reviews: [3, 2, 4, 5, 2, 3, 3, 2],
      description:
        'Помог справиться с потерей и организовать похороны для 126 семей ну и еще чуть описания, чтобы дойти до конца строки и текст будет отсекаться'
    },
    {
      name: 'Василиса Землеперекопская',
      img: '/img/agents/6.png',
      documents: true,
      reviews: [1, 2, 3, 1, 2, 3, 3, 2, 1],
      description:
        'Помог справиться с потерей и организовать похороны для 126 семей ну и еще чуть описания, чтобы дойти до конца строки и текст будет отсекаться'
    }
  ]

  return agentsData
})
