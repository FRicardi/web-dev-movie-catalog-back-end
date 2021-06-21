import { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTableIfNotExists('users', (table: Knex.TableBuilder) => {
        table.increments();
        table.string('username').unique().notNullable();
        table.string('password').notNullable();
    });
}

export async function down(knex: Knex): Promise<void> {
}
