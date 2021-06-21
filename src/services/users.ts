// import { SHA256 } from 'crypto-ts';
import { knex } from 'knex';
import config from '../database/knexfile';
import { CreateUser, GetUser } from '../interfaces/user';

const users: string = 'users';

export class UserService {
    async createUser (user: CreateUser) {
        // user.password = SHA256(user.password).toString();

        return await knex(config.use).table(users).insert(user)
    }

    async getUser (user: CreateUser) {
        // user.password = SHA256(user.password).toString();

        const resultUser: GetUser = await knex(config.use)
                                    .table(users)
                                    .select('*')
                                    .where('username', user.username)
                                    .where('password', user.password) as GetUser;

        return resultUser;
    }

    static get instance () {
        return new UserService();
    }
}

export const userService = UserService.instance;