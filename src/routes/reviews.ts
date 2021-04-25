import { Router } from 'express';
import { Review } from '../interfaces/review';
import { movieService } from '../services/movies';

const reviewsRouter = Router();

export default reviewsRouter;