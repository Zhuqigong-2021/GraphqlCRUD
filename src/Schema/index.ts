import { GraphQLObjectType, GraphQLSchema } from 'graphql';
import { CREATE_USER, DELETE_USER, UPDATE_PASSWORD } from './Mutations/User';
import { GET_ALL_USERS, GET_ONE_USER } from './Queries/User';
const RootQuery = new GraphQLObjectType({
  name: 'RootQuery',
  fields: {
    getAllUsers: GET_ALL_USERS,
    getOneUser: GET_ONE_USER,
  },
});
const Mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    createUser: CREATE_USER,
    deleteUser: DELETE_USER,
    updatePassword: UPDATE_PASSWORD,
  },
});

export const schema = new GraphQLSchema({
  query: RootQuery,
  mutation: Mutation,
});