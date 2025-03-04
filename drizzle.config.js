import { defineConfig } from "drizzle-kit";
export default defineConfig({
  driver: "mysql2",
  schema: "./utils/schema.js",
  dialect:"mysql",
  dbCredentials:{
    host: "127.0.0.1",
    user: "root",
    database: "interviewmate",
    password: "",
    port: '3306'
  }
});
//change dbCredentials