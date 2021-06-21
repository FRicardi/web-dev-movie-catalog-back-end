import { Router } from 'express';
import { authRouter } from './auth';
import { moviesRouter } from './movies';
import { reviewsRouter } from './reviews';

const routes = Router();

routes.use('/movies', moviesRouter);
routes.use('/auth', authRouter);
routes.use('/reviews', reviewsRouter);

export default routes;