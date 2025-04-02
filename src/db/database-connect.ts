import { DataSource, DataSourceOptions } from "typeorm";

import dotenv from "dotenv";
dotenv.config();

export const dbConfig = {
  host: "localhost",
  port: 5432,
  user: process.env.DATABASE_USERNAME,
  password: process.env.DATABASE_PASSWORD,
  name: process.env.DATABASE_NAME,
};

//finished

const dataSourceOptions: DataSourceOptions = {
  type: "postgres",
  host: dbConfig.host,
  port: dbConfig.port,
  username: dbConfig.user,
  password: dbConfig.password,
  database: dbConfig.name,
  entities: [`${__dirname}/models/*.{ts,js}`],
  synchronize: true,
  //   migrations: [`${__dirname}/migrations/**/*.{ts,js}`],
  //   subscribers: [`${__dirname}/subscribers/**/*.{ts,js}`],
  //   migrationsTableName: "_migrations",
};
export const AppDataSource = new DataSource(dataSourceOptions);
