import { Router } from 'express';
import moviesRouter from './movies';
import reviewsRouter from './reviews';

const routes = Router();

routes.use('/movies', moviesRouter);
routes.use('/reviews', reviewsRouter);

export default routes;