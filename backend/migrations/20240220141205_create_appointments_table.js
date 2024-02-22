/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('appointments', function(table) {
        table.increments('id').primary();
        table.integer('pet_id').unsigned().notNullable();
        table.foreign('pet_id').references('pets.id');
        table.string('type', 255).notNullable();
        table.datetime('date_time').notNullable();
        table.string('location', 255).notNullable();
        table.timestamps(true, true);
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable('appointments');
};
