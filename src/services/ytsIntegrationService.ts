import axios from "axios";
import { Movie, MovieList, MovieQuery } from "../interfaces/movie";

const YTS_MOVIE_DETAILS_URL:string = "https://yts.mx/api/v2/movie_details.json?with_cast=true&with_images=true&movie_id=";
const YTS_MOVIE_LIST_URL:string = "https://yts.mx/api/v2/list_movies.json?";

export class YtsIntegrationService {
    async getMovieList(queryParameters: MovieQuery) {
        const queryParametersParsed = YtsIntegrationService.getQueryParameters(queryParameters);
        const ytsPayload = (await axios.get(YTS_MOVIE_LIST_URL + queryParametersParsed)).data;

        return ytsPayload;
    }

    async getMovieDetails(movieId: string) {
        const ytsPayload = (await axios.get(YTS_MOVIE_DETAILS_URL + movieId)).data;
        const movieDetails: Movie = ytsPayload.data.movie;

        if (movieDetails.id !== 0) {
            return movieDetails;
        }

        throw 'Error fetching movie';
    }

    static getQueryParameters(params: MovieQuery): string {
        return Object.keys(params)
            .map(key => `${key}=${params[key]}`)
            .join('&');
    }

    static get instance() {
        return new YtsIntegrationService;
    }
}

export const ytsIntegrationService = YtsIntegrationService.instance;