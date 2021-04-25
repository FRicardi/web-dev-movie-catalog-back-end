import { Router } from 'express';

const moviesRouter = Router();

moviesRouter.get('/', (request, response) => {
    return response.json('this will be an amazing movie enpoint'); 
});

export default moviesRouter;