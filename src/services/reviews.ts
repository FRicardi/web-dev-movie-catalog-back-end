import { knex } from 'knex';
import config from '../database/knexfile';
import { Review } from '../interfaces/review';

export class ReviewService {
    private static _instance = new ReviewService();
    table: string = 'reviews';
    static get instance() {
      return this._instance;
    }
}

export const reviewService = ReviewService.instance;
