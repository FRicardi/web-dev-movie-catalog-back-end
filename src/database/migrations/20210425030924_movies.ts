import { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTableIfNotExists('movies', (table: Knex.TableBuilder) => {
        table.increments();
        table.string('name');
        table.string('type');
        table.string('category');
        table.string('producer');
        table.string('director');
        table.string('cast');
        table.integer('year');
    });
}


export async function down(knex: Knex): Promise<void> {
    return knex.schema.dropTable('movies');
}

