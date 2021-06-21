export interface CreateUser {
    username: string;
    password: string;
}

export interface GetUser {
    username?: string;
    id?: number;
}