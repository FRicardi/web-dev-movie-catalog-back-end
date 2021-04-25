import { knex } from 'knex';
import config from '../database/knexfile';
import { Movie } from '../interfaces/movie';
import { Review } from '../interfaces/review';
import { reviewService } from './reviews';

export class MovieService {
    private static _instance:any = new MovieService();
    table: string = 'movies';
    
    async getAll() {
        let movies: Movie[] = await knex(config.use)
        .table(this.table)
        .select('*');

        const addReviews = async () => {
            return Promise.all(movies.map(async (movie) => {
                const movieReviews: Review[] = await reviewService.getAllMovieReviews(movie.id);
                let acm = 0;
                for(let review of movieReviews) {
                    acm += review.review;
                }
                movie.reviewAverage = acm/movieReviews.length;
                movie.reviews = movieReviews;
                return movie;
            }));
        }

        let moviesWithReviews: Movie[] = await addReviews();
        
        return moviesWithReviews;
    }

    async getById(id: number) {
        const movie: Movie = await knex(config.use).table(this.table).select('*').where('id', id).first();
        return movie;
    }

    async insert(movie: Movie) {
        return knex(config.use).table(this.table).insert(movie);
    }

    static get instance() {
      return this._instance;
    }
}

export const movieService = MovieService.instance;