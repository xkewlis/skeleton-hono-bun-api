import { Hono } from 'hono'
import sequelize from './config/database';
import dotenv from './config/dotenv';
import { V1Routes } from './routes/routes';

const app = new Hono()
app.route("/v1", new V1Routes().routes);
await sequelize.sync();


export default { 
  port: dotenv.PORT, 
  fetch: app.fetch, 
} 