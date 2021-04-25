import { Router } from 'express';
import { Movie } from '../interfaces/movie';
import { movieService } from '../services/movies';

const moviesRouter = Router();

moviesRouter.get('/', async (request, response) => {
    const movies = await movieService.getAll();
    return response.json({ movies }); 
});

moviesRouter.get('/:id', async (request, response) => {
    const movie = await movieService.getById(Number(request.params.id));
    return response.json({ movie }); 
});

moviesRouter.post('/', async (request, response) => {
    const movie = await movieService.insert(request.body.movie);
    return response.json({success: movie}); 
});

export default moviesRouter;