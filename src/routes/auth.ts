import { Router } from "express";
import config from '../database/knexfile';
import { knex } from 'knex';

const authRouter = Router();

authRouter.get('/', async (req, res) => {
    return await knex(config.use).table('').insert({})
});

export { authRouter };