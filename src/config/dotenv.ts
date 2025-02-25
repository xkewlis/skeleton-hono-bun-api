import  * as dotenv from 'dotenv';
import * as path from 'path';

// Determine the environment (default is "development")
const env = process.env.NODE_ENV ?? "development";
const envFile = `.env.${env}`;

// Load the corresponding file
const envFound = dotenv.config({ path: path.resolve(__dirname, `../../${envFile}`) });

if (envFound.error) {
  throw new Error(`⚠️  Couldn't find ${envFile} file  ⚠️`);
}

export default {
    PORT: Number(process.env.PORT) ?? 3000,
    DB_HOST: process.env.DB_HOST ?? 'localhost',
    DB_PORT: Number(process.env.DB_PORT) ?? 3306,
    DB_USERNAME: process.env.DB_USERNAME ?? '',
    DB_PASSWORD: process.env.DB_PASSWORD ?? '',
    DB_NAME: process.env.DB_NAME ?? '',
}