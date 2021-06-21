import { Router } from 'express';
import { Review } from '../interfaces/review';
import { reviewService } from '../services/reviews';

const reviewsRouter = Router();

reviewsRouter.get('/:movie_id', async (request, response) => {
    try {
        const reviews: Review[] = await reviewService.getAllMovieReviews(Number(request.params.movie_id));
        return response.json({ reviews });
    } catch (e) {
        response.status(500);
        response.send({error: e});
    }
});

reviewsRouter.post('/', async (request, response) => {
    try {
        const review = await reviewService.insert(request.body.review);
        return response.json({ review });
    } catch (e) {
        response.status(500);
        response.send({error: e});
    }
});

export { reviewsRouter };