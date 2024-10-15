import {Router} from 'express';

const links = [
    {
        title: 'About us',
        path: '/about.html',
    },
    {
        title: 'All products',
        path: '/products',
    },
    {
        title: 'Add your own product',
        path: '/products/add',
    }
]

const router = Router()
router.get('/', (req, res) => {
    res.render('index', {
        links,
    })
})

export default router