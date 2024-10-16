import {Router} from 'express';

const dayRouter = Router();

const getCurrentDay = () => {
    const date = new Date().getDay();

    switch (date) {
        case 0:
            return 'Sunday';
        case 1:
            return 'Monday';
        case 2:
            return 'Tuesday';
        case 3:
            return 'Wednesday';
        case 4:
            return 'Thursday';
        case 5:
            return 'Friday';
        case 6:
            return 'Saturday';
        default:
            return 'Invalid Date';
    }
}

dayRouter.get('/', (req, res) => {
    res.render('day', {
        day: getCurrentDay(),
    })
})

export default dayRouter;