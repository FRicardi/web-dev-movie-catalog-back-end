import { Knex, knex } from 'knex';
import config from '../database/knexfile';
import { Movie } from '../interfaces/movie';

export class MovieService {
    private static _instance = new MovieService();
    table: string = 'movies';
    
    async getAll() {
        const movies: Movie[] = await knex(config.use).table(this.table).select('*');
        return movies;
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