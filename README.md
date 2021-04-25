# Web Dev - Movie Catalog Back-end
 
This is the back-end piece of web development subject at UNISINOS. It uses node.js with typescript as its base, using express as server and knex to access SQLITE3 database.

## Installation
```
npm install
npm run knex:migrate:latest
npm start
```
After this, you should be up and running :) If you rather, you can use ``yarn`` aswell.

## Structure

```
|->src
   |-> database (database related code, migrations sqlite file, etc)
   |-> services (services code, database access. validations, etc)
   |-> routes (route definition code) 
```
 
## Endpoints
```
/movies 
GET: get all movies, returning movies object with Movie[] type inside
POST: post a movie to database with Movie interface type

/movies/:id
GET: get movie by its id, returning movie object with Movie type inside

/reviews
POST: post a review to a movie with Review interface type

/reviews/:movie_id
GET: get reviews for a movie, returning reviews object with Review[] type inside

```

## Author
fricardi <felipericardi5@gmail.com>