import { Router } from 'express';
import { Review } from '../interfaces/review';
import { reviewService } from '../services/reviews';

const reviewsRouter = Router();

reviewsRouter.get('/:movie_id', async (request, response) => {
    const reviews: Review[] = await reviewService.getAllMovieReviews(Number(request.params.movie_id));
    return response.json({ reviews });
});

reviewsRouter.post('/', async (request, response) => {
    const review = await reviewService.insert(request.body.review);
    return response.json({ review });
});

export default reviewsRouter;