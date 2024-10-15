import { Router } from 'express'

const productsRouter = Router();

const products = [
  {
    id: 1,
    title: 'Potato',
    price: 15.99,
    image: 'https://www.kew.org/sites/default/files/styles/original/public/2022-07/Picture_of_many_potatoes.jpg.webp?itok=RmCx1XI4',
    description: 'Potato from our own garden'
  },
  {
    id: 2,
    title: 'Tomato',
    price: 12.49,
    image: 'https://media.post.rvohealth.io/wp-content/uploads/2020/09/AN313-Tomatoes-732x549-Thumb-732x549.jpg',
    description: 'Fresh tomatoes picked today'
  },
  {
    id: 3,
    title: 'Carrot',
    price: 8.99,
    image: 'https://ucarecdn.com/459eb7be-115a-4d85-b1d8-deaabc94c643/-/format/auto/-/preview/3000x3000/-/quality/lighter/',
    description: 'Organic carrots, rich in vitamins'
  },
  {
    id: 4,
    title: 'Cucumber',
    price: 10.25,
    image: 'https://www.gardenia.net/wp-content/uploads/2023/05/cucumis-sativus-780x520.webp',
    description: 'Crisp cucumbers grown naturally'
  },
  {
    id: 5,
    title: 'Onion',
    price: 7.35,
    image: 'https://images.immediate.co.uk/production/volatile/sites/30/2019/08/Onion-72ea178.jpg?quality=90&webp=true&resize=375,341',
    description: 'Strong and flavorful onions'
  },
  {
    id: 6,
    title: 'Garlic',
    price: 5.50,
    image: 'https://post.healthline.com/wp-content/uploads/2018/06/garlic-1296x728-header.jpg',
    description: 'Fresh garlic bulbs, perfect for seasoning'
  }
];


productsRouter.get('/', (req, res) => {
  res.render('products', {
    products
  })
})

productsRouter.get('/add', (req, res) => {
  res.render('addProductForm')
})

export default productsRouter;