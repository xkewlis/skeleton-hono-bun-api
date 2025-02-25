import { Options, Sequelize } from "sequelize";
import appConfig from './dotenv';

const config: Options = {
    host: appConfig.DB_HOST,
    port: appConfig.DB_PORT,
    username: appConfig.DB_USERNAME,
    password: appConfig.DB_PASSWORD,
    database: appConfig.DB_NAME,
    logging: false,
    dialect: 'mysql',
}

const sequelize = new Sequelize(config);



export default sequelize;