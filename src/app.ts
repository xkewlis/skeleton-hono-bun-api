import { Hono } from 'hono'
import sequelize from './config/database';
import dotenv from './config/dotenv';

const app = new Hono()

app.get('/', (c) => {
  return c.text('Hello Hono!')
})

await sequelize.sync();


export default { 
  port: dotenv.PORT, 
  fetch: app.fetch, 
} 