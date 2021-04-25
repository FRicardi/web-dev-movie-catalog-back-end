import { knex } from 'knex';
import config from '../database/knexfile';
import { Review } from '../interfaces/review';

const table: string = 'reviews';

export class ReviewService {
    async getAllMovieReviews(movie_id: number) {
      const reviews: Review[] = await knex(config.use).table(table).select('*').where('movie_id', movie_id);
      return reviews;
    }

    async insert(review: Review) {
      return knex(config.use).table(table).insert(review);
    }

    static get instance() {
      return new ReviewService();
    }
}

export const reviewService = ReviewService.instance;