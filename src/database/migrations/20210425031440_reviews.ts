import { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTableIfNotExists('reviews', (table: Knex.TableBuilder) => {
        table.increments();
        table.bigInteger('movie_id').unsigned().index().references('id').inTable('movies')
        table.string('comment');
        table.integer('review');
    });
}

export async function down(knex: Knex): Promise<void> {
}
