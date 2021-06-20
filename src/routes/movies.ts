import { Router } from 'express';
import { Movie, MovieList } from '../interfaces/movie';
import { movieService } from '../services/movies';

const moviesRouter = Router();

moviesRouter.get('/', async (request, response) => {
    try {
        const queryParameters = request.query;
        const movies: MovieList = await movieService.getAll(queryParameters);
        return response.json({ movies }); 
    } catch (e) {
        response.status(500);
        response.send({error: e});
    }
});

moviesRouter.get('/:id', async (request, response) => {
    try {
        const movie: Movie = await movieService.getById(request.params.id);
        return response.json({ movie }); 
    } catch (e) {
        response.status(500);
        response.send({error: e});
    }
});

// Deprecated
moviesRouter.post('/', async (request, response) => {
    try {
        const movie = await movieService.insert(request.body.movie);
        return response.json({success: movie}); 
    } catch (e) {
        response.status(500);
        response.send({error: e});
    }
});


export default moviesRouter;