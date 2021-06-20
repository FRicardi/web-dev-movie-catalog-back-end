import { Review } from "./review";

export interface MovieQuery {
    limit?: number;
    page?: number;
    query_term?: string;
    sort_by?: string;
    order_by?: string;
}

export interface MovieList {
    movies: Movie[];
    page_number: number;
    movie_count: number;
    limit: number;
}

export interface Movie {
    id: number;
    title: string;
    year: number;
    genres: string[];
    description_full: string;
    language: string;
    large_cover_image: string;
    cast: CastMember[];
    runtime: number;
    reviewAverage?: number;
    reviews: Review[];
}

export interface CastMember {
    name: string;
    character_name: string;
}