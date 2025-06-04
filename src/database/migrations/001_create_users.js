export const up = function (knex) {
  return knex.schema
    .createTable("users", function (table) {
      table.increments("id").primary();
      table.string("email", 255).notNullable().unique();
      table.string("name", 255).notNullable();
      table.string("password_hash", 255).notNullable();
      table.timestamp("created_at").notNullable().defaultTo(knex.fn.now());
      table.timestamp("updated_at").notNullable().defaultTo(knex.fn.now());
      table.timestamp("deleted_at").nullable();

      table.index(["email"]);
      table.index(["created_at"]);
    })
    .then(() => {
      // trigger updated_at
      return knex.raw(`
      CREATE OR REPLACE FUNCTION update_updated_at_column()
      RETURNS TRIGGER AS $$
      BEGIN
        NEW.updated_at = NOW();
        RETURN NEW;
      END;
      $$ language 'plpgsql';
      
      CREATE TRIGGER update_users_updated_at 
        BEFORE UPDATE ON users 
        FOR EACH ROW 
        EXECUTE FUNCTION update_updated_at_column();
    `);
    });
};

export const down = function (knex) {
  return knex
    .raw("DROP TRIGGER IF EXISTS update_users_updated_at ON users")
    .then(() => knex.raw("DROP FUNCTION IF EXISTS update_updated_at_column()"))
    .then(() => knex.schema.dropTable("users"));
};
