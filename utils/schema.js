import { mysqlTable } from "drizzle-orm/mysql-core";

export const USERS = mysqlTable('users',{
    id:varchar('id',{length:45}).primaryKey(),
    name:varchar('name',{length:45}).notNull(),
    email:varchar('email',{length:45}).notNull(),
    password:varchar('password',{length:100}.notNull())
});

