import {Router} from 'express'

const getCurrentSeason = () => {
    const currentMonth = new Date().getMonth()

    switch (currentMonth) {
        case '0':
        case '1':
        case '11':
            return 'Winter';
        case '2':
        case '3':
        case '4':
            return 'Spring';
        case '5':
        case '6':
        case '7':
            return 'Summer';
        default:
            return 'Fall';
    }
}

const seasonRouter = Router()
seasonRouter.get('/', (req, res) => {
    res.render('season', {
        season: getCurrentSeason()
    })
})
export default seasonRouter