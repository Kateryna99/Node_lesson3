// Я ДУМАЮ ШО Я НЕПРАВИЛЬНО ЗРОЗУМІЛА ЗАВДАННЯ, СОРРІ. ТУТ ,МАБУТЬ, ЧЕРЕЗ appendFile в 'fs' потрібно було робити)))

import { Router } from 'express'

const getTitle = (url) => !url ? 'About me' : url;
const getFavorite = (url) => {
  switch (url) {
    case 'music':
      return 'Rock n Roll';
    case 'coffee':
      return 'Black Roast Kenia';
    default:
      return 'You !!';
  }
}

const router = Router()
router.get('/:title?', (req, res) => {
  const urlValue = req.params.title
  res.render('index', {
    title: getTitle(urlValue),
    favorite: getFavorite(urlValue)
  })
})

export default router