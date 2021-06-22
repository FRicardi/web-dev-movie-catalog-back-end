import MD5 from "crypto-js/md5";
import { knex } from 'knex';
import config from '../database/knexfile';
import { CreateUser, GetUser } from '../interfaces/user';
import { sign, verify } from 'jsonwebtoken';

import * as dotenv from "dotenv";
dotenv.config({ path: __dirname+'/../../.env' });

const users: string = 'users';

export class UserService {
    async createUser (user: CreateUser) {
        user.password = MD5(user.password).toString();

        return await knex(config.use).table(users).insert(user);
    }

    async getUser (user: CreateUser) {
        user.password = MD5(user.password).toString();
        const resultUser: GetUser = await knex(config.use)
                                    .table(users)
                                    .select('*')
                                    .where('username', user.username)
                                    .where('password', user.password)
                                    .first() as GetUser;
                                    
        return resultUser;
    }

    loginUser(id) {
        const token = sign({id}, process.env.SECRET, {
            expiresIn: 300
        });
        
        return token;
    }

    verifyJWT(req, res, next){
        const token = req.headers['x-access-token'];
        if (!token) {
            return res.status(401).json({ auth: false, message: 'No token provided.' });
        }
        
        verify(token, process.env.SECRET, function(err, decoded) {
          if (err) {
            return res.status(500).json({ auth: false, message: 'Failed to authenticate token.' });
          }
          
          req.userId = decoded.id;
          next();
        });
    }

    static get instance () {
        return new UserService();
    }
}

export const userService = UserService.instance;