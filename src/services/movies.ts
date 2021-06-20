import { knex } from 'knex';
import config from '../database/knexfile';
import { Movie, MovieList, MovieQuery } from '../interfaces/movie';
import { Review } from '../interfaces/review';
import { reviewService } from './reviews';
import { ytsIntegrationService } from './ytsIntegrationService';

export class MovieService {
    private static _instance:any = new MovieService();
    table: string = 'movies';
    
    async getAll(queryParameters: MovieQuery) {
        let movieList = await ytsIntegrationService.getMovieList(queryParameters);
        
        const addReviews = async () => {
            const listedMovies = movieList.data.movies;
            return Promise.all(listedMovies.map(async (movie) => {
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

        movieList.movies = await addReviews();
        
        return movieList;
    }

    async getById(id: string) {
        const movie: Movie = await ytsIntegrationService.getMovieDetails(id);
        return movie;
    }

    async insert(movie: Movie) {
        return knex(config.use).table(this.table).insert(movie);
    }

    validateMovie(movie: Movie) {
        var errors: string[] = []; 
    }

    static get instance() {
      return this._instance;
    }
}

export const movieService = MovieService.instance;