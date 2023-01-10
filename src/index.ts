import express from 'express';
import { graphqlHTTP } from 'express-graphql';
import { schema } from './Schema/index';
import cors from 'cors';
import { DataSource } from 'typeorm';
import { Users } from './Entities/User';
export const AppDataSource = new DataSource({
  type: 'mysql',
  database: 'GraphqlCRUD',
  username: 'root',
  password: 'root',
  logging: true,
  synchronize: false,
  entities: [Users],
});
AppDataSource.initialize()
  .then(() => {
    console.log('graphql server is connected with mysql');
  })
  .catch((error) => console.log(error));
const main = async () => {
  const app = express();
  app.use(cors());
  app.use(express.json());
  app.use(
    '/graphql',
    graphqlHTTP({
      schema,
      graphiql: true,
    })
  );

  app.listen(3001, () => {
    console.log('SERVER RUNNING ON PORT http:localhost:3001/graphql');
  });
};

main().catch((err) => console.log(err));
