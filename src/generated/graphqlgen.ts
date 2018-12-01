// Code generated by github.com/prisma/graphqlgen, DO NOT EDIT.

import { GraphQLResolveInfo } from "graphql";
import { User } from "./prisma-client";
import { Context } from "../types";

export namespace QueryResolvers {
  export const defaultResolvers = {};

  export type UsersResolver = (
    parent: undefined,
    args: {},
    ctx: Context,
    info: GraphQLResolveInfo
  ) => User[] | Promise<User[]>;

  export interface Type {
    users: (
      parent: undefined,
      args: {},
      ctx: Context,
      info: GraphQLResolveInfo
    ) => User[] | Promise<User[]>;
  }
}

export namespace UserResolvers {
  export const defaultResolvers = {
    id: (parent: User) => parent.id,
    email: (parent: User) => parent.email,
    firstname: (parent: User) => parent.firstname,
    lastname: (parent: User) => parent.lastname
  };

  export type IdResolver = (
    parent: User,
    args: {},
    ctx: Context,
    info: GraphQLResolveInfo
  ) => string | Promise<string>;

  export type EmailResolver = (
    parent: User,
    args: {},
    ctx: Context,
    info: GraphQLResolveInfo
  ) => string | Promise<string>;

  export type FirstnameResolver = (
    parent: User,
    args: {},
    ctx: Context,
    info: GraphQLResolveInfo
  ) => string | Promise<string>;

  export type LastnameResolver = (
    parent: User,
    args: {},
    ctx: Context,
    info: GraphQLResolveInfo
  ) => string | Promise<string>;

  export type FullnameResolver = (
    parent: User,
    args: {},
    ctx: Context,
    info: GraphQLResolveInfo
  ) => string | Promise<string>;

  export interface Type {
    id: (
      parent: User,
      args: {},
      ctx: Context,
      info: GraphQLResolveInfo
    ) => string | Promise<string>;

    email: (
      parent: User,
      args: {},
      ctx: Context,
      info: GraphQLResolveInfo
    ) => string | Promise<string>;

    firstname: (
      parent: User,
      args: {},
      ctx: Context,
      info: GraphQLResolveInfo
    ) => string | Promise<string>;

    lastname: (
      parent: User,
      args: {},
      ctx: Context,
      info: GraphQLResolveInfo
    ) => string | Promise<string>;

    fullname: (
      parent: User,
      args: {},
      ctx: Context,
      info: GraphQLResolveInfo
    ) => string | Promise<string>;
  }
}

export namespace MutationResolvers {
  export const defaultResolvers = {};

  export interface ArgsSignup {
    email: string;
    password: string;
    firstname: string;
    lastname: string;
  }

  export interface ArgsSignin {
    email: string;
    password: string;
  }

  export type SignupResolver = (
    parent: undefined,
    args: ArgsSignup,
    ctx: Context,
    info: GraphQLResolveInfo
  ) => User | Promise<User>;

  export type SigninResolver = (
    parent: undefined,
    args: ArgsSignin,
    ctx: Context,
    info: GraphQLResolveInfo
  ) => User | Promise<User>;

  export type SignoutResolver = (
    parent: undefined,
    args: {},
    ctx: Context,
    info: GraphQLResolveInfo
  ) => string | null | Promise<string | null>;

  export interface Type {
    signup: (
      parent: undefined,
      args: ArgsSignup,
      ctx: Context,
      info: GraphQLResolveInfo
    ) => User | Promise<User>;

    signin: (
      parent: undefined,
      args: ArgsSignin,
      ctx: Context,
      info: GraphQLResolveInfo
    ) => User | Promise<User>;

    signout: (
      parent: undefined,
      args: {},
      ctx: Context,
      info: GraphQLResolveInfo
    ) => string | null | Promise<string | null>;
  }
}

export interface Resolvers {
  Query: QueryResolvers.Type;
  User: UserResolvers.Type;
  Mutation: MutationResolvers.Type;
}
