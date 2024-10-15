import {Router} from 'express';

const goalsRouter = Router();

goalsRouter.get('/', (req, res) => {
    res.send('My goals are to learn Node.js and Express.js, React.js and MongoDB and to find my first job');
})

export default goalsRouter;