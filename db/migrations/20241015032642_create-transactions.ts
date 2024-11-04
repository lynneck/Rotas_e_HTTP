import { Knex } from 'knex'

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable('transactions', (tables) => {
    tables.uuid('id').primary()
    tables.text('title').notNullable()
    tables.decimal('amount', 10, 2).notNullable()
    tables.timestamp('created_at').defaultTo(knex.fn.now()).notNullable()
  })
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTable('transactions')
}
