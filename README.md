# Web Dev - Movie Catalog Back-end
 
This is the back-end piece of web development subject at UNISINOS. It uses node.js with typescript as its base, using express as server and knex to access SQLITE3 database.

## Installation
```
npm install
npm run knex:migrate:latest
npm start
```
Create a file named ``.env`` on the root folder with ``SECRET`` attribute. This attribute will be used as secret key to generate JWT.

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
GET: get all movies from YTS, paginated, returning MovieList object.

/movies/:id
GET: get movie by its id, returning movie object with Movie type inside

/reviews
POST: post a review to a movie with Review interface type

/reviews/:movie_id
GET: get reviews for a movie, returning reviews object with Review[] type inside

/auth/
POST: returns json web token for the user sent. receives username and password

/auth/create
POST: Creates an user from its username and password

```

## Author
fricardi <felipericardi5@gmail.com>