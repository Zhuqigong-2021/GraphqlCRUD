import {
  GraphQLID,
  GraphQLList,
  GraphQLObjectType,
  GraphQLString,
} from 'graphql';
import { resolve } from 'path';
import { UserType } from '../TypeDefs/User';
import { Users } from '../../Entities/User';

export const GET_ALL_USERS = {
  type: new GraphQLList(UserType),
  resolve() {
    return Users.find();
  },
};

export const GET_ONE_USER = {
  type: UserType,
  args: { id: { type: GraphQLID } },
  async resolve(parent: any, args: any) {
    const { id } = args;
    const user = await Users.findOne({ where: { id: id } });
    if (user) {
      return user;
    } else {
      throw new Error('THIS USER DOES NOT EXIST');
    }
  },
};
