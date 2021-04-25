import { Review } from "./review";

export interface Movie {
    id: number;
    name: string;
    type: string;
    category: string;
    producer: string;
    director: string;
    cast: string;
    year: number;
    reviewAverage?: number;
    reviews: Review[];
}
