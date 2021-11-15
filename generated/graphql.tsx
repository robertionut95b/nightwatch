import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions =  {}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The javascript `Date` as string. Type represents date and time as the ISO Date string. */
  DateTime: any;
};

export type Account = {
  __typename?: 'Account';
  access_token?: Maybe<Scalars['String']>;
  expires_at?: Maybe<Scalars['Int']>;
  id: Scalars['String'];
  id_token?: Maybe<Scalars['String']>;
  oauth_token?: Maybe<Scalars['String']>;
  oauth_token_secret?: Maybe<Scalars['String']>;
  provider: Scalars['String'];
  providerAccountId: Scalars['String'];
  refresh_token?: Maybe<Scalars['String']>;
  scope?: Maybe<Scalars['String']>;
  session_state?: Maybe<Scalars['String']>;
  token_type?: Maybe<Scalars['String']>;
  type: Scalars['String'];
  user: User;
  userId: Scalars['String'];
};

export type AccountAvgAggregate = {
  __typename?: 'AccountAvgAggregate';
  expires_at?: Maybe<Scalars['Float']>;
};

export type AccountAvgOrderByAggregateInput = {
  expires_at?: Maybe<SortOrder>;
};

export type AccountCountAggregate = {
  __typename?: 'AccountCountAggregate';
  _all: Scalars['Int'];
  access_token: Scalars['Int'];
  expires_at: Scalars['Int'];
  id: Scalars['Int'];
  id_token: Scalars['Int'];
  oauth_token: Scalars['Int'];
  oauth_token_secret: Scalars['Int'];
  provider: Scalars['Int'];
  providerAccountId: Scalars['Int'];
  refresh_token: Scalars['Int'];
  scope: Scalars['Int'];
  session_state: Scalars['Int'];
  token_type: Scalars['Int'];
  type: Scalars['Int'];
  userId: Scalars['Int'];
};

export type AccountCountOrderByAggregateInput = {
  access_token?: Maybe<SortOrder>;
  expires_at?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  id_token?: Maybe<SortOrder>;
  oauth_token?: Maybe<SortOrder>;
  oauth_token_secret?: Maybe<SortOrder>;
  provider?: Maybe<SortOrder>;
  providerAccountId?: Maybe<SortOrder>;
  refresh_token?: Maybe<SortOrder>;
  scope?: Maybe<SortOrder>;
  session_state?: Maybe<SortOrder>;
  token_type?: Maybe<SortOrder>;
  type?: Maybe<SortOrder>;
  userId?: Maybe<SortOrder>;
};

export type AccountCreateInput = {
  access_token?: Maybe<Scalars['String']>;
  expires_at?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['String']>;
  id_token?: Maybe<Scalars['String']>;
  oauth_token?: Maybe<Scalars['String']>;
  oauth_token_secret?: Maybe<Scalars['String']>;
  provider: Scalars['String'];
  providerAccountId: Scalars['String'];
  refresh_token?: Maybe<Scalars['String']>;
  scope?: Maybe<Scalars['String']>;
  session_state?: Maybe<Scalars['String']>;
  token_type?: Maybe<Scalars['String']>;
  type: Scalars['String'];
  user: UserCreateNestedOneWithoutAccountsInput;
};

export type AccountCreateManyInput = {
  access_token?: Maybe<Scalars['String']>;
  expires_at?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['String']>;
  id_token?: Maybe<Scalars['String']>;
  oauth_token?: Maybe<Scalars['String']>;
  oauth_token_secret?: Maybe<Scalars['String']>;
  provider: Scalars['String'];
  providerAccountId: Scalars['String'];
  refresh_token?: Maybe<Scalars['String']>;
  scope?: Maybe<Scalars['String']>;
  session_state?: Maybe<Scalars['String']>;
  token_type?: Maybe<Scalars['String']>;
  type: Scalars['String'];
  userId: Scalars['String'];
};

export type AccountCreateManyUserInput = {
  access_token?: Maybe<Scalars['String']>;
  expires_at?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['String']>;
  id_token?: Maybe<Scalars['String']>;
  oauth_token?: Maybe<Scalars['String']>;
  oauth_token_secret?: Maybe<Scalars['String']>;
  provider: Scalars['String'];
  providerAccountId: Scalars['String'];
  refresh_token?: Maybe<Scalars['String']>;
  scope?: Maybe<Scalars['String']>;
  session_state?: Maybe<Scalars['String']>;
  token_type?: Maybe<Scalars['String']>;
  type: Scalars['String'];
};

export type AccountCreateManyUserInputEnvelope = {
  data: Array<AccountCreateManyUserInput>;
  skipDuplicates?: Maybe<Scalars['Boolean']>;
};

export type AccountCreateNestedManyWithoutUserInput = {
  connect?: Maybe<Array<AccountWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<AccountCreateOrConnectWithoutUserInput>>;
  create?: Maybe<Array<AccountCreateWithoutUserInput>>;
  createMany?: Maybe<AccountCreateManyUserInputEnvelope>;
};

export type AccountCreateOrConnectWithoutUserInput = {
  create: AccountCreateWithoutUserInput;
  where: AccountWhereUniqueInput;
};

export type AccountCreateWithoutUserInput = {
  access_token?: Maybe<Scalars['String']>;
  expires_at?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['String']>;
  id_token?: Maybe<Scalars['String']>;
  oauth_token?: Maybe<Scalars['String']>;
  oauth_token_secret?: Maybe<Scalars['String']>;
  provider: Scalars['String'];
  providerAccountId: Scalars['String'];
  refresh_token?: Maybe<Scalars['String']>;
  scope?: Maybe<Scalars['String']>;
  session_state?: Maybe<Scalars['String']>;
  token_type?: Maybe<Scalars['String']>;
  type: Scalars['String'];
};

export type AccountGroupBy = {
  __typename?: 'AccountGroupBy';
  _avg?: Maybe<AccountAvgAggregate>;
  _count?: Maybe<AccountCountAggregate>;
  _max?: Maybe<AccountMaxAggregate>;
  _min?: Maybe<AccountMinAggregate>;
  _sum?: Maybe<AccountSumAggregate>;
  access_token?: Maybe<Scalars['String']>;
  expires_at?: Maybe<Scalars['Int']>;
  id: Scalars['String'];
  id_token?: Maybe<Scalars['String']>;
  oauth_token?: Maybe<Scalars['String']>;
  oauth_token_secret?: Maybe<Scalars['String']>;
  provider: Scalars['String'];
  providerAccountId: Scalars['String'];
  refresh_token?: Maybe<Scalars['String']>;
  scope?: Maybe<Scalars['String']>;
  session_state?: Maybe<Scalars['String']>;
  token_type?: Maybe<Scalars['String']>;
  type: Scalars['String'];
  userId: Scalars['String'];
};

export type AccountListRelationFilter = {
  every?: Maybe<AccountWhereInput>;
  none?: Maybe<AccountWhereInput>;
  some?: Maybe<AccountWhereInput>;
};

export type AccountMaxAggregate = {
  __typename?: 'AccountMaxAggregate';
  access_token?: Maybe<Scalars['String']>;
  expires_at?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['String']>;
  id_token?: Maybe<Scalars['String']>;
  oauth_token?: Maybe<Scalars['String']>;
  oauth_token_secret?: Maybe<Scalars['String']>;
  provider?: Maybe<Scalars['String']>;
  providerAccountId?: Maybe<Scalars['String']>;
  refresh_token?: Maybe<Scalars['String']>;
  scope?: Maybe<Scalars['String']>;
  session_state?: Maybe<Scalars['String']>;
  token_type?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  userId?: Maybe<Scalars['String']>;
};

export type AccountMaxOrderByAggregateInput = {
  access_token?: Maybe<SortOrder>;
  expires_at?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  id_token?: Maybe<SortOrder>;
  oauth_token?: Maybe<SortOrder>;
  oauth_token_secret?: Maybe<SortOrder>;
  provider?: Maybe<SortOrder>;
  providerAccountId?: Maybe<SortOrder>;
  refresh_token?: Maybe<SortOrder>;
  scope?: Maybe<SortOrder>;
  session_state?: Maybe<SortOrder>;
  token_type?: Maybe<SortOrder>;
  type?: Maybe<SortOrder>;
  userId?: Maybe<SortOrder>;
};

export type AccountMinAggregate = {
  __typename?: 'AccountMinAggregate';
  access_token?: Maybe<Scalars['String']>;
  expires_at?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['String']>;
  id_token?: Maybe<Scalars['String']>;
  oauth_token?: Maybe<Scalars['String']>;
  oauth_token_secret?: Maybe<Scalars['String']>;
  provider?: Maybe<Scalars['String']>;
  providerAccountId?: Maybe<Scalars['String']>;
  refresh_token?: Maybe<Scalars['String']>;
  scope?: Maybe<Scalars['String']>;
  session_state?: Maybe<Scalars['String']>;
  token_type?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  userId?: Maybe<Scalars['String']>;
};

export type AccountMinOrderByAggregateInput = {
  access_token?: Maybe<SortOrder>;
  expires_at?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  id_token?: Maybe<SortOrder>;
  oauth_token?: Maybe<SortOrder>;
  oauth_token_secret?: Maybe<SortOrder>;
  provider?: Maybe<SortOrder>;
  providerAccountId?: Maybe<SortOrder>;
  refresh_token?: Maybe<SortOrder>;
  scope?: Maybe<SortOrder>;
  session_state?: Maybe<SortOrder>;
  token_type?: Maybe<SortOrder>;
  type?: Maybe<SortOrder>;
  userId?: Maybe<SortOrder>;
};

export type AccountOrderByRelationAggregateInput = {
  _count?: Maybe<SortOrder>;
};

export enum AccountOrderByRelevanceFieldEnum {
  AccessToken = 'access_token',
  Id = 'id',
  IdToken = 'id_token',
  OauthToken = 'oauth_token',
  OauthTokenSecret = 'oauth_token_secret',
  Provider = 'provider',
  ProviderAccountId = 'providerAccountId',
  RefreshToken = 'refresh_token',
  Scope = 'scope',
  SessionState = 'session_state',
  TokenType = 'token_type',
  Type = 'type',
  UserId = 'userId'
}

export type AccountOrderByRelevanceInput = {
  fields: Array<AccountOrderByRelevanceFieldEnum>;
  search: Scalars['String'];
  sort: SortOrder;
};

export type AccountOrderByWithAggregationInput = {
  _avg?: Maybe<AccountAvgOrderByAggregateInput>;
  _count?: Maybe<AccountCountOrderByAggregateInput>;
  _max?: Maybe<AccountMaxOrderByAggregateInput>;
  _min?: Maybe<AccountMinOrderByAggregateInput>;
  _sum?: Maybe<AccountSumOrderByAggregateInput>;
  access_token?: Maybe<SortOrder>;
  expires_at?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  id_token?: Maybe<SortOrder>;
  oauth_token?: Maybe<SortOrder>;
  oauth_token_secret?: Maybe<SortOrder>;
  provider?: Maybe<SortOrder>;
  providerAccountId?: Maybe<SortOrder>;
  refresh_token?: Maybe<SortOrder>;
  scope?: Maybe<SortOrder>;
  session_state?: Maybe<SortOrder>;
  token_type?: Maybe<SortOrder>;
  type?: Maybe<SortOrder>;
  userId?: Maybe<SortOrder>;
};

export type AccountOrderByWithRelationAndSearchRelevanceInput = {
  _relevance?: Maybe<AccountOrderByRelevanceInput>;
  access_token?: Maybe<SortOrder>;
  expires_at?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  id_token?: Maybe<SortOrder>;
  oauth_token?: Maybe<SortOrder>;
  oauth_token_secret?: Maybe<SortOrder>;
  provider?: Maybe<SortOrder>;
  providerAccountId?: Maybe<SortOrder>;
  refresh_token?: Maybe<SortOrder>;
  scope?: Maybe<SortOrder>;
  session_state?: Maybe<SortOrder>;
  token_type?: Maybe<SortOrder>;
  type?: Maybe<SortOrder>;
  user?: Maybe<UserOrderByWithRelationAndSearchRelevanceInput>;
  userId?: Maybe<SortOrder>;
};

export type AccountProviderProviderAccountIdCompoundUniqueInput = {
  provider: Scalars['String'];
  providerAccountId: Scalars['String'];
};

export enum AccountScalarFieldEnum {
  AccessToken = 'access_token',
  ExpiresAt = 'expires_at',
  Id = 'id',
  IdToken = 'id_token',
  OauthToken = 'oauth_token',
  OauthTokenSecret = 'oauth_token_secret',
  Provider = 'provider',
  ProviderAccountId = 'providerAccountId',
  RefreshToken = 'refresh_token',
  Scope = 'scope',
  SessionState = 'session_state',
  TokenType = 'token_type',
  Type = 'type',
  UserId = 'userId'
}

export type AccountScalarWhereInput = {
  AND?: Maybe<Array<AccountScalarWhereInput>>;
  NOT?: Maybe<Array<AccountScalarWhereInput>>;
  OR?: Maybe<Array<AccountScalarWhereInput>>;
  access_token?: Maybe<StringNullableFilter>;
  expires_at?: Maybe<IntNullableFilter>;
  id?: Maybe<StringFilter>;
  id_token?: Maybe<StringNullableFilter>;
  oauth_token?: Maybe<StringNullableFilter>;
  oauth_token_secret?: Maybe<StringNullableFilter>;
  provider?: Maybe<StringFilter>;
  providerAccountId?: Maybe<StringFilter>;
  refresh_token?: Maybe<StringNullableFilter>;
  scope?: Maybe<StringNullableFilter>;
  session_state?: Maybe<StringNullableFilter>;
  token_type?: Maybe<StringNullableFilter>;
  type?: Maybe<StringFilter>;
  userId?: Maybe<StringFilter>;
};

export type AccountScalarWhereWithAggregatesInput = {
  AND?: Maybe<Array<AccountScalarWhereWithAggregatesInput>>;
  NOT?: Maybe<Array<AccountScalarWhereWithAggregatesInput>>;
  OR?: Maybe<Array<AccountScalarWhereWithAggregatesInput>>;
  access_token?: Maybe<StringNullableWithAggregatesFilter>;
  expires_at?: Maybe<IntNullableWithAggregatesFilter>;
  id?: Maybe<StringWithAggregatesFilter>;
  id_token?: Maybe<StringNullableWithAggregatesFilter>;
  oauth_token?: Maybe<StringNullableWithAggregatesFilter>;
  oauth_token_secret?: Maybe<StringNullableWithAggregatesFilter>;
  provider?: Maybe<StringWithAggregatesFilter>;
  providerAccountId?: Maybe<StringWithAggregatesFilter>;
  refresh_token?: Maybe<StringNullableWithAggregatesFilter>;
  scope?: Maybe<StringNullableWithAggregatesFilter>;
  session_state?: Maybe<StringNullableWithAggregatesFilter>;
  token_type?: Maybe<StringNullableWithAggregatesFilter>;
  type?: Maybe<StringWithAggregatesFilter>;
  userId?: Maybe<StringWithAggregatesFilter>;
};

export type AccountSumAggregate = {
  __typename?: 'AccountSumAggregate';
  expires_at?: Maybe<Scalars['Int']>;
};

export type AccountSumOrderByAggregateInput = {
  expires_at?: Maybe<SortOrder>;
};

export type AccountUpdateInput = {
  access_token?: Maybe<NullableStringFieldUpdateOperationsInput>;
  expires_at?: Maybe<NullableIntFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  id_token?: Maybe<NullableStringFieldUpdateOperationsInput>;
  oauth_token?: Maybe<NullableStringFieldUpdateOperationsInput>;
  oauth_token_secret?: Maybe<NullableStringFieldUpdateOperationsInput>;
  provider?: Maybe<StringFieldUpdateOperationsInput>;
  providerAccountId?: Maybe<StringFieldUpdateOperationsInput>;
  refresh_token?: Maybe<NullableStringFieldUpdateOperationsInput>;
  scope?: Maybe<NullableStringFieldUpdateOperationsInput>;
  session_state?: Maybe<NullableStringFieldUpdateOperationsInput>;
  token_type?: Maybe<NullableStringFieldUpdateOperationsInput>;
  type?: Maybe<StringFieldUpdateOperationsInput>;
  user?: Maybe<UserUpdateOneRequiredWithoutAccountsInput>;
};

export type AccountUpdateManyMutationInput = {
  access_token?: Maybe<NullableStringFieldUpdateOperationsInput>;
  expires_at?: Maybe<NullableIntFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  id_token?: Maybe<NullableStringFieldUpdateOperationsInput>;
  oauth_token?: Maybe<NullableStringFieldUpdateOperationsInput>;
  oauth_token_secret?: Maybe<NullableStringFieldUpdateOperationsInput>;
  provider?: Maybe<StringFieldUpdateOperationsInput>;
  providerAccountId?: Maybe<StringFieldUpdateOperationsInput>;
  refresh_token?: Maybe<NullableStringFieldUpdateOperationsInput>;
  scope?: Maybe<NullableStringFieldUpdateOperationsInput>;
  session_state?: Maybe<NullableStringFieldUpdateOperationsInput>;
  token_type?: Maybe<NullableStringFieldUpdateOperationsInput>;
  type?: Maybe<StringFieldUpdateOperationsInput>;
};

export type AccountUpdateManyWithWhereWithoutUserInput = {
  data: AccountUpdateManyMutationInput;
  where: AccountScalarWhereInput;
};

export type AccountUpdateManyWithoutUserInput = {
  connect?: Maybe<Array<AccountWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<AccountCreateOrConnectWithoutUserInput>>;
  create?: Maybe<Array<AccountCreateWithoutUserInput>>;
  createMany?: Maybe<AccountCreateManyUserInputEnvelope>;
  delete?: Maybe<Array<AccountWhereUniqueInput>>;
  deleteMany?: Maybe<Array<AccountScalarWhereInput>>;
  disconnect?: Maybe<Array<AccountWhereUniqueInput>>;
  set?: Maybe<Array<AccountWhereUniqueInput>>;
  update?: Maybe<Array<AccountUpdateWithWhereUniqueWithoutUserInput>>;
  updateMany?: Maybe<Array<AccountUpdateManyWithWhereWithoutUserInput>>;
  upsert?: Maybe<Array<AccountUpsertWithWhereUniqueWithoutUserInput>>;
};

export type AccountUpdateWithWhereUniqueWithoutUserInput = {
  data: AccountUpdateWithoutUserInput;
  where: AccountWhereUniqueInput;
};

export type AccountUpdateWithoutUserInput = {
  access_token?: Maybe<NullableStringFieldUpdateOperationsInput>;
  expires_at?: Maybe<NullableIntFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  id_token?: Maybe<NullableStringFieldUpdateOperationsInput>;
  oauth_token?: Maybe<NullableStringFieldUpdateOperationsInput>;
  oauth_token_secret?: Maybe<NullableStringFieldUpdateOperationsInput>;
  provider?: Maybe<StringFieldUpdateOperationsInput>;
  providerAccountId?: Maybe<StringFieldUpdateOperationsInput>;
  refresh_token?: Maybe<NullableStringFieldUpdateOperationsInput>;
  scope?: Maybe<NullableStringFieldUpdateOperationsInput>;
  session_state?: Maybe<NullableStringFieldUpdateOperationsInput>;
  token_type?: Maybe<NullableStringFieldUpdateOperationsInput>;
  type?: Maybe<StringFieldUpdateOperationsInput>;
};

export type AccountUpsertWithWhereUniqueWithoutUserInput = {
  create: AccountCreateWithoutUserInput;
  update: AccountUpdateWithoutUserInput;
  where: AccountWhereUniqueInput;
};

export type AccountWhereInput = {
  AND?: Maybe<Array<AccountWhereInput>>;
  NOT?: Maybe<Array<AccountWhereInput>>;
  OR?: Maybe<Array<AccountWhereInput>>;
  access_token?: Maybe<StringNullableFilter>;
  expires_at?: Maybe<IntNullableFilter>;
  id?: Maybe<StringFilter>;
  id_token?: Maybe<StringNullableFilter>;
  oauth_token?: Maybe<StringNullableFilter>;
  oauth_token_secret?: Maybe<StringNullableFilter>;
  provider?: Maybe<StringFilter>;
  providerAccountId?: Maybe<StringFilter>;
  refresh_token?: Maybe<StringNullableFilter>;
  scope?: Maybe<StringNullableFilter>;
  session_state?: Maybe<StringNullableFilter>;
  token_type?: Maybe<StringNullableFilter>;
  type?: Maybe<StringFilter>;
  user?: Maybe<UserRelationFilter>;
  userId?: Maybe<StringFilter>;
};

export type AccountWhereUniqueInput = {
  id?: Maybe<Scalars['String']>;
  provider_providerAccountId?: Maybe<AccountProviderProviderAccountIdCompoundUniqueInput>;
};

export type Actor = {
  __typename?: 'Actor';
  _count?: Maybe<ActorCount>;
  createdAt: Scalars['DateTime'];
  id: Scalars['Int'];
  movies: Array<Movie>;
  name: Scalars['String'];
  series?: Maybe<Serie>;
  seriesId?: Maybe<Scalars['Int']>;
  updatedAt: Scalars['DateTime'];
};


export type ActorMoviesArgs = {
  cursor?: Maybe<MovieWhereUniqueInput>;
  distinct?: Maybe<Array<MovieScalarFieldEnum>>;
  orderBy?: Maybe<Array<MovieOrderByWithRelationAndSearchRelevanceInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<MovieWhereInput>;
};

export type ActorAvgAggregate = {
  __typename?: 'ActorAvgAggregate';
  id?: Maybe<Scalars['Float']>;
  seriesId?: Maybe<Scalars['Float']>;
};

export type ActorAvgOrderByAggregateInput = {
  id?: Maybe<SortOrder>;
  seriesId?: Maybe<SortOrder>;
};

export type ActorCount = {
  __typename?: 'ActorCount';
  movies: Scalars['Int'];
};

export type ActorCountAggregate = {
  __typename?: 'ActorCountAggregate';
  _all: Scalars['Int'];
  createdAt: Scalars['Int'];
  id: Scalars['Int'];
  name: Scalars['Int'];
  seriesId: Scalars['Int'];
  updatedAt: Scalars['Int'];
};

export type ActorCountOrderByAggregateInput = {
  createdAt?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  name?: Maybe<SortOrder>;
  seriesId?: Maybe<SortOrder>;
  updatedAt?: Maybe<SortOrder>;
};

export type ActorCreateInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  movies?: Maybe<MovieCreateNestedManyWithoutActorsInput>;
  name: Scalars['String'];
  series?: Maybe<SerieCreateNestedOneWithoutActorsInput>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type ActorCreateManyInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['Int']>;
  name: Scalars['String'];
  seriesId?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type ActorCreateManySeriesInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['Int']>;
  name: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type ActorCreateManySeriesInputEnvelope = {
  data: Array<ActorCreateManySeriesInput>;
  skipDuplicates?: Maybe<Scalars['Boolean']>;
};

export type ActorCreateNestedManyWithoutMoviesInput = {
  connect?: Maybe<Array<ActorWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<ActorCreateOrConnectWithoutMoviesInput>>;
  create?: Maybe<Array<ActorCreateWithoutMoviesInput>>;
};

export type ActorCreateNestedManyWithoutSeriesInput = {
  connect?: Maybe<Array<ActorWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<ActorCreateOrConnectWithoutSeriesInput>>;
  create?: Maybe<Array<ActorCreateWithoutSeriesInput>>;
  createMany?: Maybe<ActorCreateManySeriesInputEnvelope>;
};

export type ActorCreateOrConnectWithoutMoviesInput = {
  create: ActorCreateWithoutMoviesInput;
  where: ActorWhereUniqueInput;
};

export type ActorCreateOrConnectWithoutSeriesInput = {
  create: ActorCreateWithoutSeriesInput;
  where: ActorWhereUniqueInput;
};

export type ActorCreateWithoutMoviesInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  name: Scalars['String'];
  series?: Maybe<SerieCreateNestedOneWithoutActorsInput>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type ActorCreateWithoutSeriesInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  movies?: Maybe<MovieCreateNestedManyWithoutActorsInput>;
  name: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type ActorGroupBy = {
  __typename?: 'ActorGroupBy';
  _avg?: Maybe<ActorAvgAggregate>;
  _count?: Maybe<ActorCountAggregate>;
  _max?: Maybe<ActorMaxAggregate>;
  _min?: Maybe<ActorMinAggregate>;
  _sum?: Maybe<ActorSumAggregate>;
  createdAt: Scalars['DateTime'];
  id: Scalars['Int'];
  name: Scalars['String'];
  seriesId?: Maybe<Scalars['Int']>;
  updatedAt: Scalars['DateTime'];
};

export type ActorListRelationFilter = {
  every?: Maybe<ActorWhereInput>;
  none?: Maybe<ActorWhereInput>;
  some?: Maybe<ActorWhereInput>;
};

export type ActorMaxAggregate = {
  __typename?: 'ActorMaxAggregate';
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  seriesId?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type ActorMaxOrderByAggregateInput = {
  createdAt?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  name?: Maybe<SortOrder>;
  seriesId?: Maybe<SortOrder>;
  updatedAt?: Maybe<SortOrder>;
};

export type ActorMinAggregate = {
  __typename?: 'ActorMinAggregate';
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  seriesId?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type ActorMinOrderByAggregateInput = {
  createdAt?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  name?: Maybe<SortOrder>;
  seriesId?: Maybe<SortOrder>;
  updatedAt?: Maybe<SortOrder>;
};

export type ActorOrderByRelationAggregateInput = {
  _count?: Maybe<SortOrder>;
};

export enum ActorOrderByRelevanceFieldEnum {
  Name = 'name'
}

export type ActorOrderByRelevanceInput = {
  fields: Array<ActorOrderByRelevanceFieldEnum>;
  search: Scalars['String'];
  sort: SortOrder;
};

export type ActorOrderByWithAggregationInput = {
  _avg?: Maybe<ActorAvgOrderByAggregateInput>;
  _count?: Maybe<ActorCountOrderByAggregateInput>;
  _max?: Maybe<ActorMaxOrderByAggregateInput>;
  _min?: Maybe<ActorMinOrderByAggregateInput>;
  _sum?: Maybe<ActorSumOrderByAggregateInput>;
  createdAt?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  name?: Maybe<SortOrder>;
  seriesId?: Maybe<SortOrder>;
  updatedAt?: Maybe<SortOrder>;
};

export type ActorOrderByWithRelationAndSearchRelevanceInput = {
  _relevance?: Maybe<ActorOrderByRelevanceInput>;
  createdAt?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  movies?: Maybe<MovieOrderByRelationAggregateInput>;
  name?: Maybe<SortOrder>;
  series?: Maybe<SerieOrderByWithRelationAndSearchRelevanceInput>;
  seriesId?: Maybe<SortOrder>;
  updatedAt?: Maybe<SortOrder>;
};

export enum ActorScalarFieldEnum {
  CreatedAt = 'createdAt',
  Id = 'id',
  Name = 'name',
  SeriesId = 'seriesId',
  UpdatedAt = 'updatedAt'
}

export type ActorScalarWhereInput = {
  AND?: Maybe<Array<ActorScalarWhereInput>>;
  NOT?: Maybe<Array<ActorScalarWhereInput>>;
  OR?: Maybe<Array<ActorScalarWhereInput>>;
  createdAt?: Maybe<DateTimeFilter>;
  id?: Maybe<IntFilter>;
  name?: Maybe<StringFilter>;
  seriesId?: Maybe<IntNullableFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
};

export type ActorScalarWhereWithAggregatesInput = {
  AND?: Maybe<Array<ActorScalarWhereWithAggregatesInput>>;
  NOT?: Maybe<Array<ActorScalarWhereWithAggregatesInput>>;
  OR?: Maybe<Array<ActorScalarWhereWithAggregatesInput>>;
  createdAt?: Maybe<DateTimeWithAggregatesFilter>;
  id?: Maybe<IntWithAggregatesFilter>;
  name?: Maybe<StringWithAggregatesFilter>;
  seriesId?: Maybe<IntNullableWithAggregatesFilter>;
  updatedAt?: Maybe<DateTimeWithAggregatesFilter>;
};

export type ActorSumAggregate = {
  __typename?: 'ActorSumAggregate';
  id?: Maybe<Scalars['Int']>;
  seriesId?: Maybe<Scalars['Int']>;
};

export type ActorSumOrderByAggregateInput = {
  id?: Maybe<SortOrder>;
  seriesId?: Maybe<SortOrder>;
};

export type ActorUpdateInput = {
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  movies?: Maybe<MovieUpdateManyWithoutActorsInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  series?: Maybe<SerieUpdateOneWithoutActorsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type ActorUpdateManyMutationInput = {
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type ActorUpdateManyWithWhereWithoutMoviesInput = {
  data: ActorUpdateManyMutationInput;
  where: ActorScalarWhereInput;
};

export type ActorUpdateManyWithWhereWithoutSeriesInput = {
  data: ActorUpdateManyMutationInput;
  where: ActorScalarWhereInput;
};

export type ActorUpdateManyWithoutMoviesInput = {
  connect?: Maybe<Array<ActorWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<ActorCreateOrConnectWithoutMoviesInput>>;
  create?: Maybe<Array<ActorCreateWithoutMoviesInput>>;
  delete?: Maybe<Array<ActorWhereUniqueInput>>;
  deleteMany?: Maybe<Array<ActorScalarWhereInput>>;
  disconnect?: Maybe<Array<ActorWhereUniqueInput>>;
  set?: Maybe<Array<ActorWhereUniqueInput>>;
  update?: Maybe<Array<ActorUpdateWithWhereUniqueWithoutMoviesInput>>;
  updateMany?: Maybe<Array<ActorUpdateManyWithWhereWithoutMoviesInput>>;
  upsert?: Maybe<Array<ActorUpsertWithWhereUniqueWithoutMoviesInput>>;
};

export type ActorUpdateManyWithoutSeriesInput = {
  connect?: Maybe<Array<ActorWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<ActorCreateOrConnectWithoutSeriesInput>>;
  create?: Maybe<Array<ActorCreateWithoutSeriesInput>>;
  createMany?: Maybe<ActorCreateManySeriesInputEnvelope>;
  delete?: Maybe<Array<ActorWhereUniqueInput>>;
  deleteMany?: Maybe<Array<ActorScalarWhereInput>>;
  disconnect?: Maybe<Array<ActorWhereUniqueInput>>;
  set?: Maybe<Array<ActorWhereUniqueInput>>;
  update?: Maybe<Array<ActorUpdateWithWhereUniqueWithoutSeriesInput>>;
  updateMany?: Maybe<Array<ActorUpdateManyWithWhereWithoutSeriesInput>>;
  upsert?: Maybe<Array<ActorUpsertWithWhereUniqueWithoutSeriesInput>>;
};

export type ActorUpdateWithWhereUniqueWithoutMoviesInput = {
  data: ActorUpdateWithoutMoviesInput;
  where: ActorWhereUniqueInput;
};

export type ActorUpdateWithWhereUniqueWithoutSeriesInput = {
  data: ActorUpdateWithoutSeriesInput;
  where: ActorWhereUniqueInput;
};

export type ActorUpdateWithoutMoviesInput = {
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  series?: Maybe<SerieUpdateOneWithoutActorsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type ActorUpdateWithoutSeriesInput = {
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  movies?: Maybe<MovieUpdateManyWithoutActorsInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type ActorUpsertWithWhereUniqueWithoutMoviesInput = {
  create: ActorCreateWithoutMoviesInput;
  update: ActorUpdateWithoutMoviesInput;
  where: ActorWhereUniqueInput;
};

export type ActorUpsertWithWhereUniqueWithoutSeriesInput = {
  create: ActorCreateWithoutSeriesInput;
  update: ActorUpdateWithoutSeriesInput;
  where: ActorWhereUniqueInput;
};

export type ActorWhereInput = {
  AND?: Maybe<Array<ActorWhereInput>>;
  NOT?: Maybe<Array<ActorWhereInput>>;
  OR?: Maybe<Array<ActorWhereInput>>;
  createdAt?: Maybe<DateTimeFilter>;
  id?: Maybe<IntFilter>;
  movies?: Maybe<MovieListRelationFilter>;
  name?: Maybe<StringFilter>;
  series?: Maybe<SerieRelationFilter>;
  seriesId?: Maybe<IntNullableFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
};

export type ActorWhereUniqueInput = {
  id?: Maybe<Scalars['Int']>;
};

export type AffectedRowsOutput = {
  __typename?: 'AffectedRowsOutput';
  count: Scalars['Int'];
};

export type AggregateAccount = {
  __typename?: 'AggregateAccount';
  _avg?: Maybe<AccountAvgAggregate>;
  _count?: Maybe<AccountCountAggregate>;
  _max?: Maybe<AccountMaxAggregate>;
  _min?: Maybe<AccountMinAggregate>;
  _sum?: Maybe<AccountSumAggregate>;
};

export type AggregateActor = {
  __typename?: 'AggregateActor';
  _avg?: Maybe<ActorAvgAggregate>;
  _count?: Maybe<ActorCountAggregate>;
  _max?: Maybe<ActorMaxAggregate>;
  _min?: Maybe<ActorMinAggregate>;
  _sum?: Maybe<ActorSumAggregate>;
};

export type AggregateDirector = {
  __typename?: 'AggregateDirector';
  _avg?: Maybe<DirectorAvgAggregate>;
  _count?: Maybe<DirectorCountAggregate>;
  _max?: Maybe<DirectorMaxAggregate>;
  _min?: Maybe<DirectorMinAggregate>;
  _sum?: Maybe<DirectorSumAggregate>;
};

export type AggregateEpisode = {
  __typename?: 'AggregateEpisode';
  _avg?: Maybe<EpisodeAvgAggregate>;
  _count?: Maybe<EpisodeCountAggregate>;
  _max?: Maybe<EpisodeMaxAggregate>;
  _min?: Maybe<EpisodeMinAggregate>;
  _sum?: Maybe<EpisodeSumAggregate>;
};

export type AggregateGenre = {
  __typename?: 'AggregateGenre';
  _avg?: Maybe<GenreAvgAggregate>;
  _count?: Maybe<GenreCountAggregate>;
  _max?: Maybe<GenreMaxAggregate>;
  _min?: Maybe<GenreMinAggregate>;
  _sum?: Maybe<GenreSumAggregate>;
};

export type AggregateLanguage = {
  __typename?: 'AggregateLanguage';
  _avg?: Maybe<LanguageAvgAggregate>;
  _count?: Maybe<LanguageCountAggregate>;
  _max?: Maybe<LanguageMaxAggregate>;
  _min?: Maybe<LanguageMinAggregate>;
  _sum?: Maybe<LanguageSumAggregate>;
};

export type AggregateMovie = {
  __typename?: 'AggregateMovie';
  _avg?: Maybe<MovieAvgAggregate>;
  _count?: Maybe<MovieCountAggregate>;
  _max?: Maybe<MovieMaxAggregate>;
  _min?: Maybe<MovieMinAggregate>;
  _sum?: Maybe<MovieSumAggregate>;
};

export type AggregateSeason = {
  __typename?: 'AggregateSeason';
  _avg?: Maybe<SeasonAvgAggregate>;
  _count?: Maybe<SeasonCountAggregate>;
  _max?: Maybe<SeasonMaxAggregate>;
  _min?: Maybe<SeasonMinAggregate>;
  _sum?: Maybe<SeasonSumAggregate>;
};

export type AggregateSerie = {
  __typename?: 'AggregateSerie';
  _avg?: Maybe<SerieAvgAggregate>;
  _count?: Maybe<SerieCountAggregate>;
  _max?: Maybe<SerieMaxAggregate>;
  _min?: Maybe<SerieMinAggregate>;
  _sum?: Maybe<SerieSumAggregate>;
};

export type AggregateSession = {
  __typename?: 'AggregateSession';
  _count?: Maybe<SessionCountAggregate>;
  _max?: Maybe<SessionMaxAggregate>;
  _min?: Maybe<SessionMinAggregate>;
};

export type AggregateUser = {
  __typename?: 'AggregateUser';
  _count?: Maybe<UserCountAggregate>;
  _max?: Maybe<UserMaxAggregate>;
  _min?: Maybe<UserMinAggregate>;
};

export type AggregateVerificationRequest = {
  __typename?: 'AggregateVerificationRequest';
  _count?: Maybe<VerificationRequestCountAggregate>;
  _max?: Maybe<VerificationRequestMaxAggregate>;
  _min?: Maybe<VerificationRequestMinAggregate>;
};

export type DateTimeFieldUpdateOperationsInput = {
  set?: Maybe<Scalars['DateTime']>;
};

export type DateTimeFilter = {
  equals?: Maybe<Scalars['DateTime']>;
  gt?: Maybe<Scalars['DateTime']>;
  gte?: Maybe<Scalars['DateTime']>;
  in?: Maybe<Array<Scalars['DateTime']>>;
  lt?: Maybe<Scalars['DateTime']>;
  lte?: Maybe<Scalars['DateTime']>;
  not?: Maybe<NestedDateTimeFilter>;
  notIn?: Maybe<Array<Scalars['DateTime']>>;
};

export type DateTimeNullableFilter = {
  equals?: Maybe<Scalars['DateTime']>;
  gt?: Maybe<Scalars['DateTime']>;
  gte?: Maybe<Scalars['DateTime']>;
  in?: Maybe<Array<Scalars['DateTime']>>;
  lt?: Maybe<Scalars['DateTime']>;
  lte?: Maybe<Scalars['DateTime']>;
  not?: Maybe<NestedDateTimeNullableFilter>;
  notIn?: Maybe<Array<Scalars['DateTime']>>;
};

export type DateTimeNullableWithAggregatesFilter = {
  _count?: Maybe<NestedIntNullableFilter>;
  _max?: Maybe<NestedDateTimeNullableFilter>;
  _min?: Maybe<NestedDateTimeNullableFilter>;
  equals?: Maybe<Scalars['DateTime']>;
  gt?: Maybe<Scalars['DateTime']>;
  gte?: Maybe<Scalars['DateTime']>;
  in?: Maybe<Array<Scalars['DateTime']>>;
  lt?: Maybe<Scalars['DateTime']>;
  lte?: Maybe<Scalars['DateTime']>;
  not?: Maybe<NestedDateTimeNullableWithAggregatesFilter>;
  notIn?: Maybe<Array<Scalars['DateTime']>>;
};

export type DateTimeWithAggregatesFilter = {
  _count?: Maybe<NestedIntFilter>;
  _max?: Maybe<NestedDateTimeFilter>;
  _min?: Maybe<NestedDateTimeFilter>;
  equals?: Maybe<Scalars['DateTime']>;
  gt?: Maybe<Scalars['DateTime']>;
  gte?: Maybe<Scalars['DateTime']>;
  in?: Maybe<Array<Scalars['DateTime']>>;
  lt?: Maybe<Scalars['DateTime']>;
  lte?: Maybe<Scalars['DateTime']>;
  not?: Maybe<NestedDateTimeWithAggregatesFilter>;
  notIn?: Maybe<Array<Scalars['DateTime']>>;
};

export type Director = {
  __typename?: 'Director';
  _count?: Maybe<DirectorCount>;
  createdAt: Scalars['DateTime'];
  id: Scalars['Int'];
  movies: Array<Movie>;
  name: Scalars['String'];
  series?: Maybe<Serie>;
  seriesId?: Maybe<Scalars['Int']>;
  updatedAt: Scalars['DateTime'];
};


export type DirectorMoviesArgs = {
  cursor?: Maybe<MovieWhereUniqueInput>;
  distinct?: Maybe<Array<MovieScalarFieldEnum>>;
  orderBy?: Maybe<Array<MovieOrderByWithRelationAndSearchRelevanceInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<MovieWhereInput>;
};

export type DirectorAvgAggregate = {
  __typename?: 'DirectorAvgAggregate';
  id?: Maybe<Scalars['Float']>;
  seriesId?: Maybe<Scalars['Float']>;
};

export type DirectorAvgOrderByAggregateInput = {
  id?: Maybe<SortOrder>;
  seriesId?: Maybe<SortOrder>;
};

export type DirectorCount = {
  __typename?: 'DirectorCount';
  movies: Scalars['Int'];
};

export type DirectorCountAggregate = {
  __typename?: 'DirectorCountAggregate';
  _all: Scalars['Int'];
  createdAt: Scalars['Int'];
  id: Scalars['Int'];
  name: Scalars['Int'];
  seriesId: Scalars['Int'];
  updatedAt: Scalars['Int'];
};

export type DirectorCountOrderByAggregateInput = {
  createdAt?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  name?: Maybe<SortOrder>;
  seriesId?: Maybe<SortOrder>;
  updatedAt?: Maybe<SortOrder>;
};

export type DirectorCreateInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  movies?: Maybe<MovieCreateNestedManyWithoutDirectorsInput>;
  name: Scalars['String'];
  series?: Maybe<SerieCreateNestedOneWithoutDirectorsInput>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type DirectorCreateManyInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['Int']>;
  name: Scalars['String'];
  seriesId?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type DirectorCreateManySeriesInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['Int']>;
  name: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type DirectorCreateManySeriesInputEnvelope = {
  data: Array<DirectorCreateManySeriesInput>;
  skipDuplicates?: Maybe<Scalars['Boolean']>;
};

export type DirectorCreateNestedManyWithoutMoviesInput = {
  connect?: Maybe<Array<DirectorWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<DirectorCreateOrConnectWithoutMoviesInput>>;
  create?: Maybe<Array<DirectorCreateWithoutMoviesInput>>;
};

export type DirectorCreateNestedManyWithoutSeriesInput = {
  connect?: Maybe<Array<DirectorWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<DirectorCreateOrConnectWithoutSeriesInput>>;
  create?: Maybe<Array<DirectorCreateWithoutSeriesInput>>;
  createMany?: Maybe<DirectorCreateManySeriesInputEnvelope>;
};

export type DirectorCreateOrConnectWithoutMoviesInput = {
  create: DirectorCreateWithoutMoviesInput;
  where: DirectorWhereUniqueInput;
};

export type DirectorCreateOrConnectWithoutSeriesInput = {
  create: DirectorCreateWithoutSeriesInput;
  where: DirectorWhereUniqueInput;
};

export type DirectorCreateWithoutMoviesInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  name: Scalars['String'];
  series?: Maybe<SerieCreateNestedOneWithoutDirectorsInput>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type DirectorCreateWithoutSeriesInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  movies?: Maybe<MovieCreateNestedManyWithoutDirectorsInput>;
  name: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type DirectorGroupBy = {
  __typename?: 'DirectorGroupBy';
  _avg?: Maybe<DirectorAvgAggregate>;
  _count?: Maybe<DirectorCountAggregate>;
  _max?: Maybe<DirectorMaxAggregate>;
  _min?: Maybe<DirectorMinAggregate>;
  _sum?: Maybe<DirectorSumAggregate>;
  createdAt: Scalars['DateTime'];
  id: Scalars['Int'];
  name: Scalars['String'];
  seriesId?: Maybe<Scalars['Int']>;
  updatedAt: Scalars['DateTime'];
};

export type DirectorListRelationFilter = {
  every?: Maybe<DirectorWhereInput>;
  none?: Maybe<DirectorWhereInput>;
  some?: Maybe<DirectorWhereInput>;
};

export type DirectorMaxAggregate = {
  __typename?: 'DirectorMaxAggregate';
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  seriesId?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type DirectorMaxOrderByAggregateInput = {
  createdAt?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  name?: Maybe<SortOrder>;
  seriesId?: Maybe<SortOrder>;
  updatedAt?: Maybe<SortOrder>;
};

export type DirectorMinAggregate = {
  __typename?: 'DirectorMinAggregate';
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  seriesId?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type DirectorMinOrderByAggregateInput = {
  createdAt?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  name?: Maybe<SortOrder>;
  seriesId?: Maybe<SortOrder>;
  updatedAt?: Maybe<SortOrder>;
};

export type DirectorOrderByRelationAggregateInput = {
  _count?: Maybe<SortOrder>;
};

export enum DirectorOrderByRelevanceFieldEnum {
  Name = 'name'
}

export type DirectorOrderByRelevanceInput = {
  fields: Array<DirectorOrderByRelevanceFieldEnum>;
  search: Scalars['String'];
  sort: SortOrder;
};

export type DirectorOrderByWithAggregationInput = {
  _avg?: Maybe<DirectorAvgOrderByAggregateInput>;
  _count?: Maybe<DirectorCountOrderByAggregateInput>;
  _max?: Maybe<DirectorMaxOrderByAggregateInput>;
  _min?: Maybe<DirectorMinOrderByAggregateInput>;
  _sum?: Maybe<DirectorSumOrderByAggregateInput>;
  createdAt?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  name?: Maybe<SortOrder>;
  seriesId?: Maybe<SortOrder>;
  updatedAt?: Maybe<SortOrder>;
};

export type DirectorOrderByWithRelationAndSearchRelevanceInput = {
  _relevance?: Maybe<DirectorOrderByRelevanceInput>;
  createdAt?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  movies?: Maybe<MovieOrderByRelationAggregateInput>;
  name?: Maybe<SortOrder>;
  series?: Maybe<SerieOrderByWithRelationAndSearchRelevanceInput>;
  seriesId?: Maybe<SortOrder>;
  updatedAt?: Maybe<SortOrder>;
};

export enum DirectorScalarFieldEnum {
  CreatedAt = 'createdAt',
  Id = 'id',
  Name = 'name',
  SeriesId = 'seriesId',
  UpdatedAt = 'updatedAt'
}

export type DirectorScalarWhereInput = {
  AND?: Maybe<Array<DirectorScalarWhereInput>>;
  NOT?: Maybe<Array<DirectorScalarWhereInput>>;
  OR?: Maybe<Array<DirectorScalarWhereInput>>;
  createdAt?: Maybe<DateTimeFilter>;
  id?: Maybe<IntFilter>;
  name?: Maybe<StringFilter>;
  seriesId?: Maybe<IntNullableFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
};

export type DirectorScalarWhereWithAggregatesInput = {
  AND?: Maybe<Array<DirectorScalarWhereWithAggregatesInput>>;
  NOT?: Maybe<Array<DirectorScalarWhereWithAggregatesInput>>;
  OR?: Maybe<Array<DirectorScalarWhereWithAggregatesInput>>;
  createdAt?: Maybe<DateTimeWithAggregatesFilter>;
  id?: Maybe<IntWithAggregatesFilter>;
  name?: Maybe<StringWithAggregatesFilter>;
  seriesId?: Maybe<IntNullableWithAggregatesFilter>;
  updatedAt?: Maybe<DateTimeWithAggregatesFilter>;
};

export type DirectorSumAggregate = {
  __typename?: 'DirectorSumAggregate';
  id?: Maybe<Scalars['Int']>;
  seriesId?: Maybe<Scalars['Int']>;
};

export type DirectorSumOrderByAggregateInput = {
  id?: Maybe<SortOrder>;
  seriesId?: Maybe<SortOrder>;
};

export type DirectorUpdateInput = {
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  movies?: Maybe<MovieUpdateManyWithoutDirectorsInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  series?: Maybe<SerieUpdateOneWithoutDirectorsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type DirectorUpdateManyMutationInput = {
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type DirectorUpdateManyWithWhereWithoutMoviesInput = {
  data: DirectorUpdateManyMutationInput;
  where: DirectorScalarWhereInput;
};

export type DirectorUpdateManyWithWhereWithoutSeriesInput = {
  data: DirectorUpdateManyMutationInput;
  where: DirectorScalarWhereInput;
};

export type DirectorUpdateManyWithoutMoviesInput = {
  connect?: Maybe<Array<DirectorWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<DirectorCreateOrConnectWithoutMoviesInput>>;
  create?: Maybe<Array<DirectorCreateWithoutMoviesInput>>;
  delete?: Maybe<Array<DirectorWhereUniqueInput>>;
  deleteMany?: Maybe<Array<DirectorScalarWhereInput>>;
  disconnect?: Maybe<Array<DirectorWhereUniqueInput>>;
  set?: Maybe<Array<DirectorWhereUniqueInput>>;
  update?: Maybe<Array<DirectorUpdateWithWhereUniqueWithoutMoviesInput>>;
  updateMany?: Maybe<Array<DirectorUpdateManyWithWhereWithoutMoviesInput>>;
  upsert?: Maybe<Array<DirectorUpsertWithWhereUniqueWithoutMoviesInput>>;
};

export type DirectorUpdateManyWithoutSeriesInput = {
  connect?: Maybe<Array<DirectorWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<DirectorCreateOrConnectWithoutSeriesInput>>;
  create?: Maybe<Array<DirectorCreateWithoutSeriesInput>>;
  createMany?: Maybe<DirectorCreateManySeriesInputEnvelope>;
  delete?: Maybe<Array<DirectorWhereUniqueInput>>;
  deleteMany?: Maybe<Array<DirectorScalarWhereInput>>;
  disconnect?: Maybe<Array<DirectorWhereUniqueInput>>;
  set?: Maybe<Array<DirectorWhereUniqueInput>>;
  update?: Maybe<Array<DirectorUpdateWithWhereUniqueWithoutSeriesInput>>;
  updateMany?: Maybe<Array<DirectorUpdateManyWithWhereWithoutSeriesInput>>;
  upsert?: Maybe<Array<DirectorUpsertWithWhereUniqueWithoutSeriesInput>>;
};

export type DirectorUpdateWithWhereUniqueWithoutMoviesInput = {
  data: DirectorUpdateWithoutMoviesInput;
  where: DirectorWhereUniqueInput;
};

export type DirectorUpdateWithWhereUniqueWithoutSeriesInput = {
  data: DirectorUpdateWithoutSeriesInput;
  where: DirectorWhereUniqueInput;
};

export type DirectorUpdateWithoutMoviesInput = {
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  series?: Maybe<SerieUpdateOneWithoutDirectorsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type DirectorUpdateWithoutSeriesInput = {
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  movies?: Maybe<MovieUpdateManyWithoutDirectorsInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type DirectorUpsertWithWhereUniqueWithoutMoviesInput = {
  create: DirectorCreateWithoutMoviesInput;
  update: DirectorUpdateWithoutMoviesInput;
  where: DirectorWhereUniqueInput;
};

export type DirectorUpsertWithWhereUniqueWithoutSeriesInput = {
  create: DirectorCreateWithoutSeriesInput;
  update: DirectorUpdateWithoutSeriesInput;
  where: DirectorWhereUniqueInput;
};

export type DirectorWhereInput = {
  AND?: Maybe<Array<DirectorWhereInput>>;
  NOT?: Maybe<Array<DirectorWhereInput>>;
  OR?: Maybe<Array<DirectorWhereInput>>;
  createdAt?: Maybe<DateTimeFilter>;
  id?: Maybe<IntFilter>;
  movies?: Maybe<MovieListRelationFilter>;
  name?: Maybe<StringFilter>;
  series?: Maybe<SerieRelationFilter>;
  seriesId?: Maybe<IntNullableFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
};

export type DirectorWhereUniqueInput = {
  id?: Maybe<Scalars['Int']>;
};

export type EnumRoleFieldUpdateOperationsInput = {
  set?: Maybe<Role>;
};

export type EnumRoleFilter = {
  equals?: Maybe<Role>;
  in?: Maybe<Array<Role>>;
  not?: Maybe<NestedEnumRoleFilter>;
  notIn?: Maybe<Array<Role>>;
};

export type EnumRoleWithAggregatesFilter = {
  _count?: Maybe<NestedIntFilter>;
  _max?: Maybe<NestedEnumRoleFilter>;
  _min?: Maybe<NestedEnumRoleFilter>;
  equals?: Maybe<Role>;
  in?: Maybe<Array<Role>>;
  not?: Maybe<NestedEnumRoleWithAggregatesFilter>;
  notIn?: Maybe<Array<Role>>;
};

export type Episode = {
  __typename?: 'Episode';
  id: Scalars['Int'];
  imdbRating: Scalars['Float'];
  plot: Scalars['String'];
  poster: Scalars['String'];
  runtime: Scalars['Int'];
  season: Season;
  seasonId: Scalars['Int'];
  title: Scalars['String'];
};

export type EpisodeAvgAggregate = {
  __typename?: 'EpisodeAvgAggregate';
  id?: Maybe<Scalars['Float']>;
  imdbRating?: Maybe<Scalars['Float']>;
  runtime?: Maybe<Scalars['Float']>;
  seasonId?: Maybe<Scalars['Float']>;
};

export type EpisodeAvgOrderByAggregateInput = {
  id?: Maybe<SortOrder>;
  imdbRating?: Maybe<SortOrder>;
  runtime?: Maybe<SortOrder>;
  seasonId?: Maybe<SortOrder>;
};

export type EpisodeCountAggregate = {
  __typename?: 'EpisodeCountAggregate';
  _all: Scalars['Int'];
  id: Scalars['Int'];
  imdbRating: Scalars['Int'];
  plot: Scalars['Int'];
  poster: Scalars['Int'];
  runtime: Scalars['Int'];
  seasonId: Scalars['Int'];
  title: Scalars['Int'];
};

export type EpisodeCountOrderByAggregateInput = {
  id?: Maybe<SortOrder>;
  imdbRating?: Maybe<SortOrder>;
  plot?: Maybe<SortOrder>;
  poster?: Maybe<SortOrder>;
  runtime?: Maybe<SortOrder>;
  seasonId?: Maybe<SortOrder>;
  title?: Maybe<SortOrder>;
};

export type EpisodeCreateInput = {
  imdbRating: Scalars['Float'];
  plot: Scalars['String'];
  poster: Scalars['String'];
  runtime: Scalars['Int'];
  season: SeasonCreateNestedOneWithoutEpisodeIdsInput;
  title: Scalars['String'];
};

export type EpisodeCreateManyInput = {
  id?: Maybe<Scalars['Int']>;
  imdbRating: Scalars['Float'];
  plot: Scalars['String'];
  poster: Scalars['String'];
  runtime: Scalars['Int'];
  seasonId: Scalars['Int'];
  title: Scalars['String'];
};

export type EpisodeCreateManySeasonInput = {
  id?: Maybe<Scalars['Int']>;
  imdbRating: Scalars['Float'];
  plot: Scalars['String'];
  poster: Scalars['String'];
  runtime: Scalars['Int'];
  title: Scalars['String'];
};

export type EpisodeCreateManySeasonInputEnvelope = {
  data: Array<EpisodeCreateManySeasonInput>;
  skipDuplicates?: Maybe<Scalars['Boolean']>;
};

export type EpisodeCreateNestedManyWithoutSeasonInput = {
  connect?: Maybe<Array<EpisodeWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<EpisodeCreateOrConnectWithoutSeasonInput>>;
  create?: Maybe<Array<EpisodeCreateWithoutSeasonInput>>;
  createMany?: Maybe<EpisodeCreateManySeasonInputEnvelope>;
};

export type EpisodeCreateOrConnectWithoutSeasonInput = {
  create: EpisodeCreateWithoutSeasonInput;
  where: EpisodeWhereUniqueInput;
};

export type EpisodeCreateWithoutSeasonInput = {
  imdbRating: Scalars['Float'];
  plot: Scalars['String'];
  poster: Scalars['String'];
  runtime: Scalars['Int'];
  title: Scalars['String'];
};

export type EpisodeGroupBy = {
  __typename?: 'EpisodeGroupBy';
  _avg?: Maybe<EpisodeAvgAggregate>;
  _count?: Maybe<EpisodeCountAggregate>;
  _max?: Maybe<EpisodeMaxAggregate>;
  _min?: Maybe<EpisodeMinAggregate>;
  _sum?: Maybe<EpisodeSumAggregate>;
  id: Scalars['Int'];
  imdbRating: Scalars['Float'];
  plot: Scalars['String'];
  poster: Scalars['String'];
  runtime: Scalars['Int'];
  seasonId: Scalars['Int'];
  title: Scalars['String'];
};

export type EpisodeListRelationFilter = {
  every?: Maybe<EpisodeWhereInput>;
  none?: Maybe<EpisodeWhereInput>;
  some?: Maybe<EpisodeWhereInput>;
};

export type EpisodeMaxAggregate = {
  __typename?: 'EpisodeMaxAggregate';
  id?: Maybe<Scalars['Int']>;
  imdbRating?: Maybe<Scalars['Float']>;
  plot?: Maybe<Scalars['String']>;
  poster?: Maybe<Scalars['String']>;
  runtime?: Maybe<Scalars['Int']>;
  seasonId?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
};

export type EpisodeMaxOrderByAggregateInput = {
  id?: Maybe<SortOrder>;
  imdbRating?: Maybe<SortOrder>;
  plot?: Maybe<SortOrder>;
  poster?: Maybe<SortOrder>;
  runtime?: Maybe<SortOrder>;
  seasonId?: Maybe<SortOrder>;
  title?: Maybe<SortOrder>;
};

export type EpisodeMinAggregate = {
  __typename?: 'EpisodeMinAggregate';
  id?: Maybe<Scalars['Int']>;
  imdbRating?: Maybe<Scalars['Float']>;
  plot?: Maybe<Scalars['String']>;
  poster?: Maybe<Scalars['String']>;
  runtime?: Maybe<Scalars['Int']>;
  seasonId?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
};

export type EpisodeMinOrderByAggregateInput = {
  id?: Maybe<SortOrder>;
  imdbRating?: Maybe<SortOrder>;
  plot?: Maybe<SortOrder>;
  poster?: Maybe<SortOrder>;
  runtime?: Maybe<SortOrder>;
  seasonId?: Maybe<SortOrder>;
  title?: Maybe<SortOrder>;
};

export type EpisodeOrderByRelationAggregateInput = {
  _count?: Maybe<SortOrder>;
};

export enum EpisodeOrderByRelevanceFieldEnum {
  Plot = 'plot',
  Poster = 'poster',
  Title = 'title'
}

export type EpisodeOrderByRelevanceInput = {
  fields: Array<EpisodeOrderByRelevanceFieldEnum>;
  search: Scalars['String'];
  sort: SortOrder;
};

export type EpisodeOrderByWithAggregationInput = {
  _avg?: Maybe<EpisodeAvgOrderByAggregateInput>;
  _count?: Maybe<EpisodeCountOrderByAggregateInput>;
  _max?: Maybe<EpisodeMaxOrderByAggregateInput>;
  _min?: Maybe<EpisodeMinOrderByAggregateInput>;
  _sum?: Maybe<EpisodeSumOrderByAggregateInput>;
  id?: Maybe<SortOrder>;
  imdbRating?: Maybe<SortOrder>;
  plot?: Maybe<SortOrder>;
  poster?: Maybe<SortOrder>;
  runtime?: Maybe<SortOrder>;
  seasonId?: Maybe<SortOrder>;
  title?: Maybe<SortOrder>;
};

export type EpisodeOrderByWithRelationAndSearchRelevanceInput = {
  _relevance?: Maybe<EpisodeOrderByRelevanceInput>;
  id?: Maybe<SortOrder>;
  imdbRating?: Maybe<SortOrder>;
  plot?: Maybe<SortOrder>;
  poster?: Maybe<SortOrder>;
  runtime?: Maybe<SortOrder>;
  season?: Maybe<SeasonOrderByWithRelationAndSearchRelevanceInput>;
  seasonId?: Maybe<SortOrder>;
  title?: Maybe<SortOrder>;
};

export enum EpisodeScalarFieldEnum {
  Id = 'id',
  ImdbRating = 'imdbRating',
  Plot = 'plot',
  Poster = 'poster',
  Runtime = 'runtime',
  SeasonId = 'seasonId',
  Title = 'title'
}

export type EpisodeScalarWhereInput = {
  AND?: Maybe<Array<EpisodeScalarWhereInput>>;
  NOT?: Maybe<Array<EpisodeScalarWhereInput>>;
  OR?: Maybe<Array<EpisodeScalarWhereInput>>;
  id?: Maybe<IntFilter>;
  imdbRating?: Maybe<FloatFilter>;
  plot?: Maybe<StringFilter>;
  poster?: Maybe<StringFilter>;
  runtime?: Maybe<IntFilter>;
  seasonId?: Maybe<IntFilter>;
  title?: Maybe<StringFilter>;
};

export type EpisodeScalarWhereWithAggregatesInput = {
  AND?: Maybe<Array<EpisodeScalarWhereWithAggregatesInput>>;
  NOT?: Maybe<Array<EpisodeScalarWhereWithAggregatesInput>>;
  OR?: Maybe<Array<EpisodeScalarWhereWithAggregatesInput>>;
  id?: Maybe<IntWithAggregatesFilter>;
  imdbRating?: Maybe<FloatWithAggregatesFilter>;
  plot?: Maybe<StringWithAggregatesFilter>;
  poster?: Maybe<StringWithAggregatesFilter>;
  runtime?: Maybe<IntWithAggregatesFilter>;
  seasonId?: Maybe<IntWithAggregatesFilter>;
  title?: Maybe<StringWithAggregatesFilter>;
};

export type EpisodeSumAggregate = {
  __typename?: 'EpisodeSumAggregate';
  id?: Maybe<Scalars['Int']>;
  imdbRating?: Maybe<Scalars['Float']>;
  runtime?: Maybe<Scalars['Int']>;
  seasonId?: Maybe<Scalars['Int']>;
};

export type EpisodeSumOrderByAggregateInput = {
  id?: Maybe<SortOrder>;
  imdbRating?: Maybe<SortOrder>;
  runtime?: Maybe<SortOrder>;
  seasonId?: Maybe<SortOrder>;
};

export type EpisodeUpdateInput = {
  imdbRating?: Maybe<FloatFieldUpdateOperationsInput>;
  plot?: Maybe<StringFieldUpdateOperationsInput>;
  poster?: Maybe<StringFieldUpdateOperationsInput>;
  runtime?: Maybe<IntFieldUpdateOperationsInput>;
  season?: Maybe<SeasonUpdateOneRequiredWithoutEpisodeIdsInput>;
  title?: Maybe<StringFieldUpdateOperationsInput>;
};

export type EpisodeUpdateManyMutationInput = {
  imdbRating?: Maybe<FloatFieldUpdateOperationsInput>;
  plot?: Maybe<StringFieldUpdateOperationsInput>;
  poster?: Maybe<StringFieldUpdateOperationsInput>;
  runtime?: Maybe<IntFieldUpdateOperationsInput>;
  title?: Maybe<StringFieldUpdateOperationsInput>;
};

export type EpisodeUpdateManyWithWhereWithoutSeasonInput = {
  data: EpisodeUpdateManyMutationInput;
  where: EpisodeScalarWhereInput;
};

export type EpisodeUpdateManyWithoutSeasonInput = {
  connect?: Maybe<Array<EpisodeWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<EpisodeCreateOrConnectWithoutSeasonInput>>;
  create?: Maybe<Array<EpisodeCreateWithoutSeasonInput>>;
  createMany?: Maybe<EpisodeCreateManySeasonInputEnvelope>;
  delete?: Maybe<Array<EpisodeWhereUniqueInput>>;
  deleteMany?: Maybe<Array<EpisodeScalarWhereInput>>;
  disconnect?: Maybe<Array<EpisodeWhereUniqueInput>>;
  set?: Maybe<Array<EpisodeWhereUniqueInput>>;
  update?: Maybe<Array<EpisodeUpdateWithWhereUniqueWithoutSeasonInput>>;
  updateMany?: Maybe<Array<EpisodeUpdateManyWithWhereWithoutSeasonInput>>;
  upsert?: Maybe<Array<EpisodeUpsertWithWhereUniqueWithoutSeasonInput>>;
};

export type EpisodeUpdateWithWhereUniqueWithoutSeasonInput = {
  data: EpisodeUpdateWithoutSeasonInput;
  where: EpisodeWhereUniqueInput;
};

export type EpisodeUpdateWithoutSeasonInput = {
  imdbRating?: Maybe<FloatFieldUpdateOperationsInput>;
  plot?: Maybe<StringFieldUpdateOperationsInput>;
  poster?: Maybe<StringFieldUpdateOperationsInput>;
  runtime?: Maybe<IntFieldUpdateOperationsInput>;
  title?: Maybe<StringFieldUpdateOperationsInput>;
};

export type EpisodeUpsertWithWhereUniqueWithoutSeasonInput = {
  create: EpisodeCreateWithoutSeasonInput;
  update: EpisodeUpdateWithoutSeasonInput;
  where: EpisodeWhereUniqueInput;
};

export type EpisodeWhereInput = {
  AND?: Maybe<Array<EpisodeWhereInput>>;
  NOT?: Maybe<Array<EpisodeWhereInput>>;
  OR?: Maybe<Array<EpisodeWhereInput>>;
  id?: Maybe<IntFilter>;
  imdbRating?: Maybe<FloatFilter>;
  plot?: Maybe<StringFilter>;
  poster?: Maybe<StringFilter>;
  runtime?: Maybe<IntFilter>;
  season?: Maybe<SeasonRelationFilter>;
  seasonId?: Maybe<IntFilter>;
  title?: Maybe<StringFilter>;
};

export type EpisodeWhereUniqueInput = {
  id?: Maybe<Scalars['Int']>;
};

export type FloatFieldUpdateOperationsInput = {
  decrement?: Maybe<Scalars['Float']>;
  divide?: Maybe<Scalars['Float']>;
  increment?: Maybe<Scalars['Float']>;
  multiply?: Maybe<Scalars['Float']>;
  set?: Maybe<Scalars['Float']>;
};

export type FloatFilter = {
  equals?: Maybe<Scalars['Float']>;
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Scalars['Float']>>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  not?: Maybe<NestedFloatFilter>;
  notIn?: Maybe<Array<Scalars['Float']>>;
};

export type FloatWithAggregatesFilter = {
  _avg?: Maybe<NestedFloatFilter>;
  _count?: Maybe<NestedIntFilter>;
  _max?: Maybe<NestedFloatFilter>;
  _min?: Maybe<NestedFloatFilter>;
  _sum?: Maybe<NestedFloatFilter>;
  equals?: Maybe<Scalars['Float']>;
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Scalars['Float']>>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  not?: Maybe<NestedFloatWithAggregatesFilter>;
  notIn?: Maybe<Array<Scalars['Float']>>;
};

export type Genre = {
  __typename?: 'Genre';
  _count?: Maybe<GenreCount>;
  createdAt: Scalars['DateTime'];
  id: Scalars['Int'];
  movies: Array<Movie>;
  name: Scalars['String'];
  series: Array<Serie>;
  updatedAt: Scalars['DateTime'];
};


export type GenreMoviesArgs = {
  cursor?: Maybe<MovieWhereUniqueInput>;
  distinct?: Maybe<Array<MovieScalarFieldEnum>>;
  orderBy?: Maybe<Array<MovieOrderByWithRelationAndSearchRelevanceInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<MovieWhereInput>;
};


export type GenreSeriesArgs = {
  cursor?: Maybe<SerieWhereUniqueInput>;
  distinct?: Maybe<Array<SerieScalarFieldEnum>>;
  orderBy?: Maybe<Array<SerieOrderByWithRelationAndSearchRelevanceInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<SerieWhereInput>;
};

export type GenreAvgAggregate = {
  __typename?: 'GenreAvgAggregate';
  id?: Maybe<Scalars['Float']>;
};

export type GenreAvgOrderByAggregateInput = {
  id?: Maybe<SortOrder>;
};

export type GenreCount = {
  __typename?: 'GenreCount';
  movies: Scalars['Int'];
  series: Scalars['Int'];
};

export type GenreCountAggregate = {
  __typename?: 'GenreCountAggregate';
  _all: Scalars['Int'];
  createdAt: Scalars['Int'];
  id: Scalars['Int'];
  name: Scalars['Int'];
  updatedAt: Scalars['Int'];
};

export type GenreCountOrderByAggregateInput = {
  createdAt?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  name?: Maybe<SortOrder>;
  updatedAt?: Maybe<SortOrder>;
};

export type GenreCreateInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  movies?: Maybe<MovieCreateNestedManyWithoutGenresInput>;
  name: Scalars['String'];
  series?: Maybe<SerieCreateNestedManyWithoutGenresInput>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type GenreCreateManyInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['Int']>;
  name: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type GenreCreateNestedManyWithoutMoviesInput = {
  connect?: Maybe<Array<GenreWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<GenreCreateOrConnectWithoutMoviesInput>>;
  create?: Maybe<Array<GenreCreateWithoutMoviesInput>>;
};

export type GenreCreateNestedManyWithoutSeriesInput = {
  connect?: Maybe<Array<GenreWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<GenreCreateOrConnectWithoutSeriesInput>>;
  create?: Maybe<Array<GenreCreateWithoutSeriesInput>>;
};

export type GenreCreateOrConnectWithoutMoviesInput = {
  create: GenreCreateWithoutMoviesInput;
  where: GenreWhereUniqueInput;
};

export type GenreCreateOrConnectWithoutSeriesInput = {
  create: GenreCreateWithoutSeriesInput;
  where: GenreWhereUniqueInput;
};

export type GenreCreateWithoutMoviesInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  name: Scalars['String'];
  series?: Maybe<SerieCreateNestedManyWithoutGenresInput>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type GenreCreateWithoutSeriesInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  movies?: Maybe<MovieCreateNestedManyWithoutGenresInput>;
  name: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type GenreGroupBy = {
  __typename?: 'GenreGroupBy';
  _avg?: Maybe<GenreAvgAggregate>;
  _count?: Maybe<GenreCountAggregate>;
  _max?: Maybe<GenreMaxAggregate>;
  _min?: Maybe<GenreMinAggregate>;
  _sum?: Maybe<GenreSumAggregate>;
  createdAt: Scalars['DateTime'];
  id: Scalars['Int'];
  name: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};

export type GenreListRelationFilter = {
  every?: Maybe<GenreWhereInput>;
  none?: Maybe<GenreWhereInput>;
  some?: Maybe<GenreWhereInput>;
};

export type GenreMaxAggregate = {
  __typename?: 'GenreMaxAggregate';
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type GenreMaxOrderByAggregateInput = {
  createdAt?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  name?: Maybe<SortOrder>;
  updatedAt?: Maybe<SortOrder>;
};

export type GenreMinAggregate = {
  __typename?: 'GenreMinAggregate';
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type GenreMinOrderByAggregateInput = {
  createdAt?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  name?: Maybe<SortOrder>;
  updatedAt?: Maybe<SortOrder>;
};

export type GenreOrderByRelationAggregateInput = {
  _count?: Maybe<SortOrder>;
};

export enum GenreOrderByRelevanceFieldEnum {
  Name = 'name'
}

export type GenreOrderByRelevanceInput = {
  fields: Array<GenreOrderByRelevanceFieldEnum>;
  search: Scalars['String'];
  sort: SortOrder;
};

export type GenreOrderByWithAggregationInput = {
  _avg?: Maybe<GenreAvgOrderByAggregateInput>;
  _count?: Maybe<GenreCountOrderByAggregateInput>;
  _max?: Maybe<GenreMaxOrderByAggregateInput>;
  _min?: Maybe<GenreMinOrderByAggregateInput>;
  _sum?: Maybe<GenreSumOrderByAggregateInput>;
  createdAt?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  name?: Maybe<SortOrder>;
  updatedAt?: Maybe<SortOrder>;
};

export type GenreOrderByWithRelationAndSearchRelevanceInput = {
  _relevance?: Maybe<GenreOrderByRelevanceInput>;
  createdAt?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  movies?: Maybe<MovieOrderByRelationAggregateInput>;
  name?: Maybe<SortOrder>;
  series?: Maybe<SerieOrderByRelationAggregateInput>;
  updatedAt?: Maybe<SortOrder>;
};

export enum GenreScalarFieldEnum {
  CreatedAt = 'createdAt',
  Id = 'id',
  Name = 'name',
  UpdatedAt = 'updatedAt'
}

export type GenreScalarWhereInput = {
  AND?: Maybe<Array<GenreScalarWhereInput>>;
  NOT?: Maybe<Array<GenreScalarWhereInput>>;
  OR?: Maybe<Array<GenreScalarWhereInput>>;
  createdAt?: Maybe<DateTimeFilter>;
  id?: Maybe<IntFilter>;
  name?: Maybe<StringFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
};

export type GenreScalarWhereWithAggregatesInput = {
  AND?: Maybe<Array<GenreScalarWhereWithAggregatesInput>>;
  NOT?: Maybe<Array<GenreScalarWhereWithAggregatesInput>>;
  OR?: Maybe<Array<GenreScalarWhereWithAggregatesInput>>;
  createdAt?: Maybe<DateTimeWithAggregatesFilter>;
  id?: Maybe<IntWithAggregatesFilter>;
  name?: Maybe<StringWithAggregatesFilter>;
  updatedAt?: Maybe<DateTimeWithAggregatesFilter>;
};

export type GenreSumAggregate = {
  __typename?: 'GenreSumAggregate';
  id?: Maybe<Scalars['Int']>;
};

export type GenreSumOrderByAggregateInput = {
  id?: Maybe<SortOrder>;
};

export type GenreUpdateInput = {
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  movies?: Maybe<MovieUpdateManyWithoutGenresInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  series?: Maybe<SerieUpdateManyWithoutGenresInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type GenreUpdateManyMutationInput = {
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type GenreUpdateManyWithWhereWithoutMoviesInput = {
  data: GenreUpdateManyMutationInput;
  where: GenreScalarWhereInput;
};

export type GenreUpdateManyWithWhereWithoutSeriesInput = {
  data: GenreUpdateManyMutationInput;
  where: GenreScalarWhereInput;
};

export type GenreUpdateManyWithoutMoviesInput = {
  connect?: Maybe<Array<GenreWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<GenreCreateOrConnectWithoutMoviesInput>>;
  create?: Maybe<Array<GenreCreateWithoutMoviesInput>>;
  delete?: Maybe<Array<GenreWhereUniqueInput>>;
  deleteMany?: Maybe<Array<GenreScalarWhereInput>>;
  disconnect?: Maybe<Array<GenreWhereUniqueInput>>;
  set?: Maybe<Array<GenreWhereUniqueInput>>;
  update?: Maybe<Array<GenreUpdateWithWhereUniqueWithoutMoviesInput>>;
  updateMany?: Maybe<Array<GenreUpdateManyWithWhereWithoutMoviesInput>>;
  upsert?: Maybe<Array<GenreUpsertWithWhereUniqueWithoutMoviesInput>>;
};

export type GenreUpdateManyWithoutSeriesInput = {
  connect?: Maybe<Array<GenreWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<GenreCreateOrConnectWithoutSeriesInput>>;
  create?: Maybe<Array<GenreCreateWithoutSeriesInput>>;
  delete?: Maybe<Array<GenreWhereUniqueInput>>;
  deleteMany?: Maybe<Array<GenreScalarWhereInput>>;
  disconnect?: Maybe<Array<GenreWhereUniqueInput>>;
  set?: Maybe<Array<GenreWhereUniqueInput>>;
  update?: Maybe<Array<GenreUpdateWithWhereUniqueWithoutSeriesInput>>;
  updateMany?: Maybe<Array<GenreUpdateManyWithWhereWithoutSeriesInput>>;
  upsert?: Maybe<Array<GenreUpsertWithWhereUniqueWithoutSeriesInput>>;
};

export type GenreUpdateWithWhereUniqueWithoutMoviesInput = {
  data: GenreUpdateWithoutMoviesInput;
  where: GenreWhereUniqueInput;
};

export type GenreUpdateWithWhereUniqueWithoutSeriesInput = {
  data: GenreUpdateWithoutSeriesInput;
  where: GenreWhereUniqueInput;
};

export type GenreUpdateWithoutMoviesInput = {
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  series?: Maybe<SerieUpdateManyWithoutGenresInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type GenreUpdateWithoutSeriesInput = {
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  movies?: Maybe<MovieUpdateManyWithoutGenresInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type GenreUpsertWithWhereUniqueWithoutMoviesInput = {
  create: GenreCreateWithoutMoviesInput;
  update: GenreUpdateWithoutMoviesInput;
  where: GenreWhereUniqueInput;
};

export type GenreUpsertWithWhereUniqueWithoutSeriesInput = {
  create: GenreCreateWithoutSeriesInput;
  update: GenreUpdateWithoutSeriesInput;
  where: GenreWhereUniqueInput;
};

export type GenreWhereInput = {
  AND?: Maybe<Array<GenreWhereInput>>;
  NOT?: Maybe<Array<GenreWhereInput>>;
  OR?: Maybe<Array<GenreWhereInput>>;
  createdAt?: Maybe<DateTimeFilter>;
  id?: Maybe<IntFilter>;
  movies?: Maybe<MovieListRelationFilter>;
  name?: Maybe<StringFilter>;
  series?: Maybe<SerieListRelationFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
};

export type GenreWhereUniqueInput = {
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
};

export type IntFieldUpdateOperationsInput = {
  decrement?: Maybe<Scalars['Int']>;
  divide?: Maybe<Scalars['Int']>;
  increment?: Maybe<Scalars['Int']>;
  multiply?: Maybe<Scalars['Int']>;
  set?: Maybe<Scalars['Int']>;
};

export type IntFilter = {
  equals?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Scalars['Int']>>;
  lt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  not?: Maybe<NestedIntFilter>;
  notIn?: Maybe<Array<Scalars['Int']>>;
};

export type IntNullableFilter = {
  equals?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Scalars['Int']>>;
  lt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  not?: Maybe<NestedIntNullableFilter>;
  notIn?: Maybe<Array<Scalars['Int']>>;
};

export type IntNullableWithAggregatesFilter = {
  _avg?: Maybe<NestedFloatNullableFilter>;
  _count?: Maybe<NestedIntNullableFilter>;
  _max?: Maybe<NestedIntNullableFilter>;
  _min?: Maybe<NestedIntNullableFilter>;
  _sum?: Maybe<NestedIntNullableFilter>;
  equals?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Scalars['Int']>>;
  lt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  not?: Maybe<NestedIntNullableWithAggregatesFilter>;
  notIn?: Maybe<Array<Scalars['Int']>>;
};

export type IntWithAggregatesFilter = {
  _avg?: Maybe<NestedFloatFilter>;
  _count?: Maybe<NestedIntFilter>;
  _max?: Maybe<NestedIntFilter>;
  _min?: Maybe<NestedIntFilter>;
  _sum?: Maybe<NestedIntFilter>;
  equals?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Scalars['Int']>>;
  lt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  not?: Maybe<NestedIntWithAggregatesFilter>;
  notIn?: Maybe<Array<Scalars['Int']>>;
};

export type Language = {
  __typename?: 'Language';
  _count?: Maybe<LanguageCount>;
  createdAt: Scalars['DateTime'];
  id: Scalars['Int'];
  movies: Array<Movie>;
  name: Scalars['String'];
  series?: Maybe<Serie>;
  seriesId?: Maybe<Scalars['Int']>;
  updatedAt: Scalars['DateTime'];
};


export type LanguageMoviesArgs = {
  cursor?: Maybe<MovieWhereUniqueInput>;
  distinct?: Maybe<Array<MovieScalarFieldEnum>>;
  orderBy?: Maybe<Array<MovieOrderByWithRelationAndSearchRelevanceInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<MovieWhereInput>;
};

export type LanguageAvgAggregate = {
  __typename?: 'LanguageAvgAggregate';
  id?: Maybe<Scalars['Float']>;
  seriesId?: Maybe<Scalars['Float']>;
};

export type LanguageAvgOrderByAggregateInput = {
  id?: Maybe<SortOrder>;
  seriesId?: Maybe<SortOrder>;
};

export type LanguageCount = {
  __typename?: 'LanguageCount';
  movies: Scalars['Int'];
};

export type LanguageCountAggregate = {
  __typename?: 'LanguageCountAggregate';
  _all: Scalars['Int'];
  createdAt: Scalars['Int'];
  id: Scalars['Int'];
  name: Scalars['Int'];
  seriesId: Scalars['Int'];
  updatedAt: Scalars['Int'];
};

export type LanguageCountOrderByAggregateInput = {
  createdAt?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  name?: Maybe<SortOrder>;
  seriesId?: Maybe<SortOrder>;
  updatedAt?: Maybe<SortOrder>;
};

export type LanguageCreateInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  movies?: Maybe<MovieCreateNestedManyWithoutLanguagesInput>;
  name: Scalars['String'];
  series?: Maybe<SerieCreateNestedOneWithoutLanguagesInput>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type LanguageCreateManyInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['Int']>;
  name: Scalars['String'];
  seriesId?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type LanguageCreateManySeriesInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['Int']>;
  name: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type LanguageCreateManySeriesInputEnvelope = {
  data: Array<LanguageCreateManySeriesInput>;
  skipDuplicates?: Maybe<Scalars['Boolean']>;
};

export type LanguageCreateNestedManyWithoutMoviesInput = {
  connect?: Maybe<Array<LanguageWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<LanguageCreateOrConnectWithoutMoviesInput>>;
  create?: Maybe<Array<LanguageCreateWithoutMoviesInput>>;
};

export type LanguageCreateNestedManyWithoutSeriesInput = {
  connect?: Maybe<Array<LanguageWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<LanguageCreateOrConnectWithoutSeriesInput>>;
  create?: Maybe<Array<LanguageCreateWithoutSeriesInput>>;
  createMany?: Maybe<LanguageCreateManySeriesInputEnvelope>;
};

export type LanguageCreateOrConnectWithoutMoviesInput = {
  create: LanguageCreateWithoutMoviesInput;
  where: LanguageWhereUniqueInput;
};

export type LanguageCreateOrConnectWithoutSeriesInput = {
  create: LanguageCreateWithoutSeriesInput;
  where: LanguageWhereUniqueInput;
};

export type LanguageCreateWithoutMoviesInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  name: Scalars['String'];
  series?: Maybe<SerieCreateNestedOneWithoutLanguagesInput>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type LanguageCreateWithoutSeriesInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  movies?: Maybe<MovieCreateNestedManyWithoutLanguagesInput>;
  name: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type LanguageGroupBy = {
  __typename?: 'LanguageGroupBy';
  _avg?: Maybe<LanguageAvgAggregate>;
  _count?: Maybe<LanguageCountAggregate>;
  _max?: Maybe<LanguageMaxAggregate>;
  _min?: Maybe<LanguageMinAggregate>;
  _sum?: Maybe<LanguageSumAggregate>;
  createdAt: Scalars['DateTime'];
  id: Scalars['Int'];
  name: Scalars['String'];
  seriesId?: Maybe<Scalars['Int']>;
  updatedAt: Scalars['DateTime'];
};

export type LanguageListRelationFilter = {
  every?: Maybe<LanguageWhereInput>;
  none?: Maybe<LanguageWhereInput>;
  some?: Maybe<LanguageWhereInput>;
};

export type LanguageMaxAggregate = {
  __typename?: 'LanguageMaxAggregate';
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  seriesId?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type LanguageMaxOrderByAggregateInput = {
  createdAt?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  name?: Maybe<SortOrder>;
  seriesId?: Maybe<SortOrder>;
  updatedAt?: Maybe<SortOrder>;
};

export type LanguageMinAggregate = {
  __typename?: 'LanguageMinAggregate';
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  seriesId?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type LanguageMinOrderByAggregateInput = {
  createdAt?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  name?: Maybe<SortOrder>;
  seriesId?: Maybe<SortOrder>;
  updatedAt?: Maybe<SortOrder>;
};

export type LanguageOrderByRelationAggregateInput = {
  _count?: Maybe<SortOrder>;
};

export enum LanguageOrderByRelevanceFieldEnum {
  Name = 'name'
}

export type LanguageOrderByRelevanceInput = {
  fields: Array<LanguageOrderByRelevanceFieldEnum>;
  search: Scalars['String'];
  sort: SortOrder;
};

export type LanguageOrderByWithAggregationInput = {
  _avg?: Maybe<LanguageAvgOrderByAggregateInput>;
  _count?: Maybe<LanguageCountOrderByAggregateInput>;
  _max?: Maybe<LanguageMaxOrderByAggregateInput>;
  _min?: Maybe<LanguageMinOrderByAggregateInput>;
  _sum?: Maybe<LanguageSumOrderByAggregateInput>;
  createdAt?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  name?: Maybe<SortOrder>;
  seriesId?: Maybe<SortOrder>;
  updatedAt?: Maybe<SortOrder>;
};

export type LanguageOrderByWithRelationAndSearchRelevanceInput = {
  _relevance?: Maybe<LanguageOrderByRelevanceInput>;
  createdAt?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  movies?: Maybe<MovieOrderByRelationAggregateInput>;
  name?: Maybe<SortOrder>;
  series?: Maybe<SerieOrderByWithRelationAndSearchRelevanceInput>;
  seriesId?: Maybe<SortOrder>;
  updatedAt?: Maybe<SortOrder>;
};

export enum LanguageScalarFieldEnum {
  CreatedAt = 'createdAt',
  Id = 'id',
  Name = 'name',
  SeriesId = 'seriesId',
  UpdatedAt = 'updatedAt'
}

export type LanguageScalarWhereInput = {
  AND?: Maybe<Array<LanguageScalarWhereInput>>;
  NOT?: Maybe<Array<LanguageScalarWhereInput>>;
  OR?: Maybe<Array<LanguageScalarWhereInput>>;
  createdAt?: Maybe<DateTimeFilter>;
  id?: Maybe<IntFilter>;
  name?: Maybe<StringFilter>;
  seriesId?: Maybe<IntNullableFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
};

export type LanguageScalarWhereWithAggregatesInput = {
  AND?: Maybe<Array<LanguageScalarWhereWithAggregatesInput>>;
  NOT?: Maybe<Array<LanguageScalarWhereWithAggregatesInput>>;
  OR?: Maybe<Array<LanguageScalarWhereWithAggregatesInput>>;
  createdAt?: Maybe<DateTimeWithAggregatesFilter>;
  id?: Maybe<IntWithAggregatesFilter>;
  name?: Maybe<StringWithAggregatesFilter>;
  seriesId?: Maybe<IntNullableWithAggregatesFilter>;
  updatedAt?: Maybe<DateTimeWithAggregatesFilter>;
};

export type LanguageSumAggregate = {
  __typename?: 'LanguageSumAggregate';
  id?: Maybe<Scalars['Int']>;
  seriesId?: Maybe<Scalars['Int']>;
};

export type LanguageSumOrderByAggregateInput = {
  id?: Maybe<SortOrder>;
  seriesId?: Maybe<SortOrder>;
};

export type LanguageUpdateInput = {
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  movies?: Maybe<MovieUpdateManyWithoutLanguagesInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  series?: Maybe<SerieUpdateOneWithoutLanguagesInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type LanguageUpdateManyMutationInput = {
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type LanguageUpdateManyWithWhereWithoutMoviesInput = {
  data: LanguageUpdateManyMutationInput;
  where: LanguageScalarWhereInput;
};

export type LanguageUpdateManyWithWhereWithoutSeriesInput = {
  data: LanguageUpdateManyMutationInput;
  where: LanguageScalarWhereInput;
};

export type LanguageUpdateManyWithoutMoviesInput = {
  connect?: Maybe<Array<LanguageWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<LanguageCreateOrConnectWithoutMoviesInput>>;
  create?: Maybe<Array<LanguageCreateWithoutMoviesInput>>;
  delete?: Maybe<Array<LanguageWhereUniqueInput>>;
  deleteMany?: Maybe<Array<LanguageScalarWhereInput>>;
  disconnect?: Maybe<Array<LanguageWhereUniqueInput>>;
  set?: Maybe<Array<LanguageWhereUniqueInput>>;
  update?: Maybe<Array<LanguageUpdateWithWhereUniqueWithoutMoviesInput>>;
  updateMany?: Maybe<Array<LanguageUpdateManyWithWhereWithoutMoviesInput>>;
  upsert?: Maybe<Array<LanguageUpsertWithWhereUniqueWithoutMoviesInput>>;
};

export type LanguageUpdateManyWithoutSeriesInput = {
  connect?: Maybe<Array<LanguageWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<LanguageCreateOrConnectWithoutSeriesInput>>;
  create?: Maybe<Array<LanguageCreateWithoutSeriesInput>>;
  createMany?: Maybe<LanguageCreateManySeriesInputEnvelope>;
  delete?: Maybe<Array<LanguageWhereUniqueInput>>;
  deleteMany?: Maybe<Array<LanguageScalarWhereInput>>;
  disconnect?: Maybe<Array<LanguageWhereUniqueInput>>;
  set?: Maybe<Array<LanguageWhereUniqueInput>>;
  update?: Maybe<Array<LanguageUpdateWithWhereUniqueWithoutSeriesInput>>;
  updateMany?: Maybe<Array<LanguageUpdateManyWithWhereWithoutSeriesInput>>;
  upsert?: Maybe<Array<LanguageUpsertWithWhereUniqueWithoutSeriesInput>>;
};

export type LanguageUpdateWithWhereUniqueWithoutMoviesInput = {
  data: LanguageUpdateWithoutMoviesInput;
  where: LanguageWhereUniqueInput;
};

export type LanguageUpdateWithWhereUniqueWithoutSeriesInput = {
  data: LanguageUpdateWithoutSeriesInput;
  where: LanguageWhereUniqueInput;
};

export type LanguageUpdateWithoutMoviesInput = {
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  series?: Maybe<SerieUpdateOneWithoutLanguagesInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type LanguageUpdateWithoutSeriesInput = {
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  movies?: Maybe<MovieUpdateManyWithoutLanguagesInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type LanguageUpsertWithWhereUniqueWithoutMoviesInput = {
  create: LanguageCreateWithoutMoviesInput;
  update: LanguageUpdateWithoutMoviesInput;
  where: LanguageWhereUniqueInput;
};

export type LanguageUpsertWithWhereUniqueWithoutSeriesInput = {
  create: LanguageCreateWithoutSeriesInput;
  update: LanguageUpdateWithoutSeriesInput;
  where: LanguageWhereUniqueInput;
};

export type LanguageWhereInput = {
  AND?: Maybe<Array<LanguageWhereInput>>;
  NOT?: Maybe<Array<LanguageWhereInput>>;
  OR?: Maybe<Array<LanguageWhereInput>>;
  createdAt?: Maybe<DateTimeFilter>;
  id?: Maybe<IntFilter>;
  movies?: Maybe<MovieListRelationFilter>;
  name?: Maybe<StringFilter>;
  series?: Maybe<SerieRelationFilter>;
  seriesId?: Maybe<IntNullableFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
};

export type LanguageWhereUniqueInput = {
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
};

export type Movie = {
  __typename?: 'Movie';
  _count?: Maybe<MovieCount>;
  actors: Array<Actor>;
  createdAt: Scalars['DateTime'];
  directors: Array<Director>;
  genres: Array<Genre>;
  id: Scalars['Int'];
  imdbRating: Scalars['Float'];
  languages: Array<Language>;
  plot: Scalars['String'];
  poster: Scalars['String'];
  rating: Scalars['String'];
  release: Scalars['DateTime'];
  runtime: Scalars['Int'];
  title: Scalars['String'];
  updatedAt: Scalars['DateTime'];
  year: Scalars['Int'];
};


export type MovieActorsArgs = {
  cursor?: Maybe<ActorWhereUniqueInput>;
  distinct?: Maybe<Array<ActorScalarFieldEnum>>;
  orderBy?: Maybe<Array<ActorOrderByWithRelationAndSearchRelevanceInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<ActorWhereInput>;
};


export type MovieDirectorsArgs = {
  cursor?: Maybe<DirectorWhereUniqueInput>;
  distinct?: Maybe<Array<DirectorScalarFieldEnum>>;
  orderBy?: Maybe<Array<DirectorOrderByWithRelationAndSearchRelevanceInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<DirectorWhereInput>;
};


export type MovieGenresArgs = {
  cursor?: Maybe<GenreWhereUniqueInput>;
  distinct?: Maybe<Array<GenreScalarFieldEnum>>;
  orderBy?: Maybe<Array<GenreOrderByWithRelationAndSearchRelevanceInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<GenreWhereInput>;
};


export type MovieLanguagesArgs = {
  cursor?: Maybe<LanguageWhereUniqueInput>;
  distinct?: Maybe<Array<LanguageScalarFieldEnum>>;
  orderBy?: Maybe<Array<LanguageOrderByWithRelationAndSearchRelevanceInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<LanguageWhereInput>;
};

export type MovieAvgAggregate = {
  __typename?: 'MovieAvgAggregate';
  id?: Maybe<Scalars['Float']>;
  imdbRating?: Maybe<Scalars['Float']>;
  runtime?: Maybe<Scalars['Float']>;
  year?: Maybe<Scalars['Float']>;
};

export type MovieAvgOrderByAggregateInput = {
  id?: Maybe<SortOrder>;
  imdbRating?: Maybe<SortOrder>;
  runtime?: Maybe<SortOrder>;
  year?: Maybe<SortOrder>;
};

export type MovieCount = {
  __typename?: 'MovieCount';
  actors: Scalars['Int'];
  directors: Scalars['Int'];
  genres: Scalars['Int'];
  languages: Scalars['Int'];
};

export type MovieCountAggregate = {
  __typename?: 'MovieCountAggregate';
  _all: Scalars['Int'];
  createdAt: Scalars['Int'];
  id: Scalars['Int'];
  imdbRating: Scalars['Int'];
  plot: Scalars['Int'];
  poster: Scalars['Int'];
  rating: Scalars['Int'];
  release: Scalars['Int'];
  runtime: Scalars['Int'];
  title: Scalars['Int'];
  updatedAt: Scalars['Int'];
  year: Scalars['Int'];
};

export type MovieCountOrderByAggregateInput = {
  createdAt?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  imdbRating?: Maybe<SortOrder>;
  plot?: Maybe<SortOrder>;
  poster?: Maybe<SortOrder>;
  rating?: Maybe<SortOrder>;
  release?: Maybe<SortOrder>;
  runtime?: Maybe<SortOrder>;
  title?: Maybe<SortOrder>;
  updatedAt?: Maybe<SortOrder>;
  year?: Maybe<SortOrder>;
};

export type MovieCreateInput = {
  actors?: Maybe<ActorCreateNestedManyWithoutMoviesInput>;
  createdAt?: Maybe<Scalars['DateTime']>;
  directors?: Maybe<DirectorCreateNestedManyWithoutMoviesInput>;
  genres?: Maybe<GenreCreateNestedManyWithoutMoviesInput>;
  imdbRating: Scalars['Float'];
  languages?: Maybe<LanguageCreateNestedManyWithoutMoviesInput>;
  plot: Scalars['String'];
  poster: Scalars['String'];
  rating: Scalars['String'];
  release: Scalars['DateTime'];
  runtime: Scalars['Int'];
  title: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
  year: Scalars['Int'];
};

export type MovieCreateManyInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['Int']>;
  imdbRating: Scalars['Float'];
  plot: Scalars['String'];
  poster: Scalars['String'];
  rating: Scalars['String'];
  release: Scalars['DateTime'];
  runtime: Scalars['Int'];
  title: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
  year: Scalars['Int'];
};

export type MovieCreateNestedManyWithoutActorsInput = {
  connect?: Maybe<Array<MovieWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<MovieCreateOrConnectWithoutActorsInput>>;
  create?: Maybe<Array<MovieCreateWithoutActorsInput>>;
};

export type MovieCreateNestedManyWithoutDirectorsInput = {
  connect?: Maybe<Array<MovieWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<MovieCreateOrConnectWithoutDirectorsInput>>;
  create?: Maybe<Array<MovieCreateWithoutDirectorsInput>>;
};

export type MovieCreateNestedManyWithoutGenresInput = {
  connect?: Maybe<Array<MovieWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<MovieCreateOrConnectWithoutGenresInput>>;
  create?: Maybe<Array<MovieCreateWithoutGenresInput>>;
};

export type MovieCreateNestedManyWithoutLanguagesInput = {
  connect?: Maybe<Array<MovieWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<MovieCreateOrConnectWithoutLanguagesInput>>;
  create?: Maybe<Array<MovieCreateWithoutLanguagesInput>>;
};

export type MovieCreateOrConnectWithoutActorsInput = {
  create: MovieCreateWithoutActorsInput;
  where: MovieWhereUniqueInput;
};

export type MovieCreateOrConnectWithoutDirectorsInput = {
  create: MovieCreateWithoutDirectorsInput;
  where: MovieWhereUniqueInput;
};

export type MovieCreateOrConnectWithoutGenresInput = {
  create: MovieCreateWithoutGenresInput;
  where: MovieWhereUniqueInput;
};

export type MovieCreateOrConnectWithoutLanguagesInput = {
  create: MovieCreateWithoutLanguagesInput;
  where: MovieWhereUniqueInput;
};

export type MovieCreateWithoutActorsInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  directors?: Maybe<DirectorCreateNestedManyWithoutMoviesInput>;
  genres?: Maybe<GenreCreateNestedManyWithoutMoviesInput>;
  imdbRating: Scalars['Float'];
  languages?: Maybe<LanguageCreateNestedManyWithoutMoviesInput>;
  plot: Scalars['String'];
  poster: Scalars['String'];
  rating: Scalars['String'];
  release: Scalars['DateTime'];
  runtime: Scalars['Int'];
  title: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
  year: Scalars['Int'];
};

export type MovieCreateWithoutDirectorsInput = {
  actors?: Maybe<ActorCreateNestedManyWithoutMoviesInput>;
  createdAt?: Maybe<Scalars['DateTime']>;
  genres?: Maybe<GenreCreateNestedManyWithoutMoviesInput>;
  imdbRating: Scalars['Float'];
  languages?: Maybe<LanguageCreateNestedManyWithoutMoviesInput>;
  plot: Scalars['String'];
  poster: Scalars['String'];
  rating: Scalars['String'];
  release: Scalars['DateTime'];
  runtime: Scalars['Int'];
  title: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
  year: Scalars['Int'];
};

export type MovieCreateWithoutGenresInput = {
  actors?: Maybe<ActorCreateNestedManyWithoutMoviesInput>;
  createdAt?: Maybe<Scalars['DateTime']>;
  directors?: Maybe<DirectorCreateNestedManyWithoutMoviesInput>;
  imdbRating: Scalars['Float'];
  languages?: Maybe<LanguageCreateNestedManyWithoutMoviesInput>;
  plot: Scalars['String'];
  poster: Scalars['String'];
  rating: Scalars['String'];
  release: Scalars['DateTime'];
  runtime: Scalars['Int'];
  title: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
  year: Scalars['Int'];
};

export type MovieCreateWithoutLanguagesInput = {
  actors?: Maybe<ActorCreateNestedManyWithoutMoviesInput>;
  createdAt?: Maybe<Scalars['DateTime']>;
  directors?: Maybe<DirectorCreateNestedManyWithoutMoviesInput>;
  genres?: Maybe<GenreCreateNestedManyWithoutMoviesInput>;
  imdbRating: Scalars['Float'];
  plot: Scalars['String'];
  poster: Scalars['String'];
  rating: Scalars['String'];
  release: Scalars['DateTime'];
  runtime: Scalars['Int'];
  title: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
  year: Scalars['Int'];
};

export type MovieGroupBy = {
  __typename?: 'MovieGroupBy';
  _avg?: Maybe<MovieAvgAggregate>;
  _count?: Maybe<MovieCountAggregate>;
  _max?: Maybe<MovieMaxAggregate>;
  _min?: Maybe<MovieMinAggregate>;
  _sum?: Maybe<MovieSumAggregate>;
  createdAt: Scalars['DateTime'];
  id: Scalars['Int'];
  imdbRating: Scalars['Float'];
  plot: Scalars['String'];
  poster: Scalars['String'];
  rating: Scalars['String'];
  release: Scalars['DateTime'];
  runtime: Scalars['Int'];
  title: Scalars['String'];
  updatedAt: Scalars['DateTime'];
  year: Scalars['Int'];
};

export type MovieListRelationFilter = {
  every?: Maybe<MovieWhereInput>;
  none?: Maybe<MovieWhereInput>;
  some?: Maybe<MovieWhereInput>;
};

export type MovieMaxAggregate = {
  __typename?: 'MovieMaxAggregate';
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['Int']>;
  imdbRating?: Maybe<Scalars['Float']>;
  plot?: Maybe<Scalars['String']>;
  poster?: Maybe<Scalars['String']>;
  rating?: Maybe<Scalars['String']>;
  release?: Maybe<Scalars['DateTime']>;
  runtime?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  year?: Maybe<Scalars['Int']>;
};

export type MovieMaxOrderByAggregateInput = {
  createdAt?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  imdbRating?: Maybe<SortOrder>;
  plot?: Maybe<SortOrder>;
  poster?: Maybe<SortOrder>;
  rating?: Maybe<SortOrder>;
  release?: Maybe<SortOrder>;
  runtime?: Maybe<SortOrder>;
  title?: Maybe<SortOrder>;
  updatedAt?: Maybe<SortOrder>;
  year?: Maybe<SortOrder>;
};

export type MovieMinAggregate = {
  __typename?: 'MovieMinAggregate';
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['Int']>;
  imdbRating?: Maybe<Scalars['Float']>;
  plot?: Maybe<Scalars['String']>;
  poster?: Maybe<Scalars['String']>;
  rating?: Maybe<Scalars['String']>;
  release?: Maybe<Scalars['DateTime']>;
  runtime?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  year?: Maybe<Scalars['Int']>;
};

export type MovieMinOrderByAggregateInput = {
  createdAt?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  imdbRating?: Maybe<SortOrder>;
  plot?: Maybe<SortOrder>;
  poster?: Maybe<SortOrder>;
  rating?: Maybe<SortOrder>;
  release?: Maybe<SortOrder>;
  runtime?: Maybe<SortOrder>;
  title?: Maybe<SortOrder>;
  updatedAt?: Maybe<SortOrder>;
  year?: Maybe<SortOrder>;
};

export type MovieOrderByRelationAggregateInput = {
  _count?: Maybe<SortOrder>;
};

export enum MovieOrderByRelevanceFieldEnum {
  Plot = 'plot',
  Poster = 'poster',
  Rating = 'rating',
  Title = 'title'
}

export type MovieOrderByRelevanceInput = {
  fields: Array<MovieOrderByRelevanceFieldEnum>;
  search: Scalars['String'];
  sort: SortOrder;
};

export type MovieOrderByWithAggregationInput = {
  _avg?: Maybe<MovieAvgOrderByAggregateInput>;
  _count?: Maybe<MovieCountOrderByAggregateInput>;
  _max?: Maybe<MovieMaxOrderByAggregateInput>;
  _min?: Maybe<MovieMinOrderByAggregateInput>;
  _sum?: Maybe<MovieSumOrderByAggregateInput>;
  createdAt?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  imdbRating?: Maybe<SortOrder>;
  plot?: Maybe<SortOrder>;
  poster?: Maybe<SortOrder>;
  rating?: Maybe<SortOrder>;
  release?: Maybe<SortOrder>;
  runtime?: Maybe<SortOrder>;
  title?: Maybe<SortOrder>;
  updatedAt?: Maybe<SortOrder>;
  year?: Maybe<SortOrder>;
};

export type MovieOrderByWithRelationAndSearchRelevanceInput = {
  _relevance?: Maybe<MovieOrderByRelevanceInput>;
  actors?: Maybe<ActorOrderByRelationAggregateInput>;
  createdAt?: Maybe<SortOrder>;
  directors?: Maybe<DirectorOrderByRelationAggregateInput>;
  genres?: Maybe<GenreOrderByRelationAggregateInput>;
  id?: Maybe<SortOrder>;
  imdbRating?: Maybe<SortOrder>;
  languages?: Maybe<LanguageOrderByRelationAggregateInput>;
  plot?: Maybe<SortOrder>;
  poster?: Maybe<SortOrder>;
  rating?: Maybe<SortOrder>;
  release?: Maybe<SortOrder>;
  runtime?: Maybe<SortOrder>;
  title?: Maybe<SortOrder>;
  updatedAt?: Maybe<SortOrder>;
  year?: Maybe<SortOrder>;
};

export enum MovieScalarFieldEnum {
  CreatedAt = 'createdAt',
  Id = 'id',
  ImdbRating = 'imdbRating',
  Plot = 'plot',
  Poster = 'poster',
  Rating = 'rating',
  Release = 'release',
  Runtime = 'runtime',
  Title = 'title',
  UpdatedAt = 'updatedAt',
  Year = 'year'
}

export type MovieScalarWhereInput = {
  AND?: Maybe<Array<MovieScalarWhereInput>>;
  NOT?: Maybe<Array<MovieScalarWhereInput>>;
  OR?: Maybe<Array<MovieScalarWhereInput>>;
  createdAt?: Maybe<DateTimeFilter>;
  id?: Maybe<IntFilter>;
  imdbRating?: Maybe<FloatFilter>;
  plot?: Maybe<StringFilter>;
  poster?: Maybe<StringFilter>;
  rating?: Maybe<StringFilter>;
  release?: Maybe<DateTimeFilter>;
  runtime?: Maybe<IntFilter>;
  title?: Maybe<StringFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
  year?: Maybe<IntFilter>;
};

export type MovieScalarWhereWithAggregatesInput = {
  AND?: Maybe<Array<MovieScalarWhereWithAggregatesInput>>;
  NOT?: Maybe<Array<MovieScalarWhereWithAggregatesInput>>;
  OR?: Maybe<Array<MovieScalarWhereWithAggregatesInput>>;
  createdAt?: Maybe<DateTimeWithAggregatesFilter>;
  id?: Maybe<IntWithAggregatesFilter>;
  imdbRating?: Maybe<FloatWithAggregatesFilter>;
  plot?: Maybe<StringWithAggregatesFilter>;
  poster?: Maybe<StringWithAggregatesFilter>;
  rating?: Maybe<StringWithAggregatesFilter>;
  release?: Maybe<DateTimeWithAggregatesFilter>;
  runtime?: Maybe<IntWithAggregatesFilter>;
  title?: Maybe<StringWithAggregatesFilter>;
  updatedAt?: Maybe<DateTimeWithAggregatesFilter>;
  year?: Maybe<IntWithAggregatesFilter>;
};

export type MovieSumAggregate = {
  __typename?: 'MovieSumAggregate';
  id?: Maybe<Scalars['Int']>;
  imdbRating?: Maybe<Scalars['Float']>;
  runtime?: Maybe<Scalars['Int']>;
  year?: Maybe<Scalars['Int']>;
};

export type MovieSumOrderByAggregateInput = {
  id?: Maybe<SortOrder>;
  imdbRating?: Maybe<SortOrder>;
  runtime?: Maybe<SortOrder>;
  year?: Maybe<SortOrder>;
};

export type MovieUpdateInput = {
  actors?: Maybe<ActorUpdateManyWithoutMoviesInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  directors?: Maybe<DirectorUpdateManyWithoutMoviesInput>;
  genres?: Maybe<GenreUpdateManyWithoutMoviesInput>;
  imdbRating?: Maybe<FloatFieldUpdateOperationsInput>;
  languages?: Maybe<LanguageUpdateManyWithoutMoviesInput>;
  plot?: Maybe<StringFieldUpdateOperationsInput>;
  poster?: Maybe<StringFieldUpdateOperationsInput>;
  rating?: Maybe<StringFieldUpdateOperationsInput>;
  release?: Maybe<DateTimeFieldUpdateOperationsInput>;
  runtime?: Maybe<IntFieldUpdateOperationsInput>;
  title?: Maybe<StringFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  year?: Maybe<IntFieldUpdateOperationsInput>;
};

export type MovieUpdateManyMutationInput = {
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  imdbRating?: Maybe<FloatFieldUpdateOperationsInput>;
  plot?: Maybe<StringFieldUpdateOperationsInput>;
  poster?: Maybe<StringFieldUpdateOperationsInput>;
  rating?: Maybe<StringFieldUpdateOperationsInput>;
  release?: Maybe<DateTimeFieldUpdateOperationsInput>;
  runtime?: Maybe<IntFieldUpdateOperationsInput>;
  title?: Maybe<StringFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  year?: Maybe<IntFieldUpdateOperationsInput>;
};

export type MovieUpdateManyWithWhereWithoutActorsInput = {
  data: MovieUpdateManyMutationInput;
  where: MovieScalarWhereInput;
};

export type MovieUpdateManyWithWhereWithoutDirectorsInput = {
  data: MovieUpdateManyMutationInput;
  where: MovieScalarWhereInput;
};

export type MovieUpdateManyWithWhereWithoutGenresInput = {
  data: MovieUpdateManyMutationInput;
  where: MovieScalarWhereInput;
};

export type MovieUpdateManyWithWhereWithoutLanguagesInput = {
  data: MovieUpdateManyMutationInput;
  where: MovieScalarWhereInput;
};

export type MovieUpdateManyWithoutActorsInput = {
  connect?: Maybe<Array<MovieWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<MovieCreateOrConnectWithoutActorsInput>>;
  create?: Maybe<Array<MovieCreateWithoutActorsInput>>;
  delete?: Maybe<Array<MovieWhereUniqueInput>>;
  deleteMany?: Maybe<Array<MovieScalarWhereInput>>;
  disconnect?: Maybe<Array<MovieWhereUniqueInput>>;
  set?: Maybe<Array<MovieWhereUniqueInput>>;
  update?: Maybe<Array<MovieUpdateWithWhereUniqueWithoutActorsInput>>;
  updateMany?: Maybe<Array<MovieUpdateManyWithWhereWithoutActorsInput>>;
  upsert?: Maybe<Array<MovieUpsertWithWhereUniqueWithoutActorsInput>>;
};

export type MovieUpdateManyWithoutDirectorsInput = {
  connect?: Maybe<Array<MovieWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<MovieCreateOrConnectWithoutDirectorsInput>>;
  create?: Maybe<Array<MovieCreateWithoutDirectorsInput>>;
  delete?: Maybe<Array<MovieWhereUniqueInput>>;
  deleteMany?: Maybe<Array<MovieScalarWhereInput>>;
  disconnect?: Maybe<Array<MovieWhereUniqueInput>>;
  set?: Maybe<Array<MovieWhereUniqueInput>>;
  update?: Maybe<Array<MovieUpdateWithWhereUniqueWithoutDirectorsInput>>;
  updateMany?: Maybe<Array<MovieUpdateManyWithWhereWithoutDirectorsInput>>;
  upsert?: Maybe<Array<MovieUpsertWithWhereUniqueWithoutDirectorsInput>>;
};

export type MovieUpdateManyWithoutGenresInput = {
  connect?: Maybe<Array<MovieWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<MovieCreateOrConnectWithoutGenresInput>>;
  create?: Maybe<Array<MovieCreateWithoutGenresInput>>;
  delete?: Maybe<Array<MovieWhereUniqueInput>>;
  deleteMany?: Maybe<Array<MovieScalarWhereInput>>;
  disconnect?: Maybe<Array<MovieWhereUniqueInput>>;
  set?: Maybe<Array<MovieWhereUniqueInput>>;
  update?: Maybe<Array<MovieUpdateWithWhereUniqueWithoutGenresInput>>;
  updateMany?: Maybe<Array<MovieUpdateManyWithWhereWithoutGenresInput>>;
  upsert?: Maybe<Array<MovieUpsertWithWhereUniqueWithoutGenresInput>>;
};

export type MovieUpdateManyWithoutLanguagesInput = {
  connect?: Maybe<Array<MovieWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<MovieCreateOrConnectWithoutLanguagesInput>>;
  create?: Maybe<Array<MovieCreateWithoutLanguagesInput>>;
  delete?: Maybe<Array<MovieWhereUniqueInput>>;
  deleteMany?: Maybe<Array<MovieScalarWhereInput>>;
  disconnect?: Maybe<Array<MovieWhereUniqueInput>>;
  set?: Maybe<Array<MovieWhereUniqueInput>>;
  update?: Maybe<Array<MovieUpdateWithWhereUniqueWithoutLanguagesInput>>;
  updateMany?: Maybe<Array<MovieUpdateManyWithWhereWithoutLanguagesInput>>;
  upsert?: Maybe<Array<MovieUpsertWithWhereUniqueWithoutLanguagesInput>>;
};

export type MovieUpdateWithWhereUniqueWithoutActorsInput = {
  data: MovieUpdateWithoutActorsInput;
  where: MovieWhereUniqueInput;
};

export type MovieUpdateWithWhereUniqueWithoutDirectorsInput = {
  data: MovieUpdateWithoutDirectorsInput;
  where: MovieWhereUniqueInput;
};

export type MovieUpdateWithWhereUniqueWithoutGenresInput = {
  data: MovieUpdateWithoutGenresInput;
  where: MovieWhereUniqueInput;
};

export type MovieUpdateWithWhereUniqueWithoutLanguagesInput = {
  data: MovieUpdateWithoutLanguagesInput;
  where: MovieWhereUniqueInput;
};

export type MovieUpdateWithoutActorsInput = {
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  directors?: Maybe<DirectorUpdateManyWithoutMoviesInput>;
  genres?: Maybe<GenreUpdateManyWithoutMoviesInput>;
  imdbRating?: Maybe<FloatFieldUpdateOperationsInput>;
  languages?: Maybe<LanguageUpdateManyWithoutMoviesInput>;
  plot?: Maybe<StringFieldUpdateOperationsInput>;
  poster?: Maybe<StringFieldUpdateOperationsInput>;
  rating?: Maybe<StringFieldUpdateOperationsInput>;
  release?: Maybe<DateTimeFieldUpdateOperationsInput>;
  runtime?: Maybe<IntFieldUpdateOperationsInput>;
  title?: Maybe<StringFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  year?: Maybe<IntFieldUpdateOperationsInput>;
};

export type MovieUpdateWithoutDirectorsInput = {
  actors?: Maybe<ActorUpdateManyWithoutMoviesInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  genres?: Maybe<GenreUpdateManyWithoutMoviesInput>;
  imdbRating?: Maybe<FloatFieldUpdateOperationsInput>;
  languages?: Maybe<LanguageUpdateManyWithoutMoviesInput>;
  plot?: Maybe<StringFieldUpdateOperationsInput>;
  poster?: Maybe<StringFieldUpdateOperationsInput>;
  rating?: Maybe<StringFieldUpdateOperationsInput>;
  release?: Maybe<DateTimeFieldUpdateOperationsInput>;
  runtime?: Maybe<IntFieldUpdateOperationsInput>;
  title?: Maybe<StringFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  year?: Maybe<IntFieldUpdateOperationsInput>;
};

export type MovieUpdateWithoutGenresInput = {
  actors?: Maybe<ActorUpdateManyWithoutMoviesInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  directors?: Maybe<DirectorUpdateManyWithoutMoviesInput>;
  imdbRating?: Maybe<FloatFieldUpdateOperationsInput>;
  languages?: Maybe<LanguageUpdateManyWithoutMoviesInput>;
  plot?: Maybe<StringFieldUpdateOperationsInput>;
  poster?: Maybe<StringFieldUpdateOperationsInput>;
  rating?: Maybe<StringFieldUpdateOperationsInput>;
  release?: Maybe<DateTimeFieldUpdateOperationsInput>;
  runtime?: Maybe<IntFieldUpdateOperationsInput>;
  title?: Maybe<StringFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  year?: Maybe<IntFieldUpdateOperationsInput>;
};

export type MovieUpdateWithoutLanguagesInput = {
  actors?: Maybe<ActorUpdateManyWithoutMoviesInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  directors?: Maybe<DirectorUpdateManyWithoutMoviesInput>;
  genres?: Maybe<GenreUpdateManyWithoutMoviesInput>;
  imdbRating?: Maybe<FloatFieldUpdateOperationsInput>;
  plot?: Maybe<StringFieldUpdateOperationsInput>;
  poster?: Maybe<StringFieldUpdateOperationsInput>;
  rating?: Maybe<StringFieldUpdateOperationsInput>;
  release?: Maybe<DateTimeFieldUpdateOperationsInput>;
  runtime?: Maybe<IntFieldUpdateOperationsInput>;
  title?: Maybe<StringFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  year?: Maybe<IntFieldUpdateOperationsInput>;
};

export type MovieUpsertWithWhereUniqueWithoutActorsInput = {
  create: MovieCreateWithoutActorsInput;
  update: MovieUpdateWithoutActorsInput;
  where: MovieWhereUniqueInput;
};

export type MovieUpsertWithWhereUniqueWithoutDirectorsInput = {
  create: MovieCreateWithoutDirectorsInput;
  update: MovieUpdateWithoutDirectorsInput;
  where: MovieWhereUniqueInput;
};

export type MovieUpsertWithWhereUniqueWithoutGenresInput = {
  create: MovieCreateWithoutGenresInput;
  update: MovieUpdateWithoutGenresInput;
  where: MovieWhereUniqueInput;
};

export type MovieUpsertWithWhereUniqueWithoutLanguagesInput = {
  create: MovieCreateWithoutLanguagesInput;
  update: MovieUpdateWithoutLanguagesInput;
  where: MovieWhereUniqueInput;
};

export type MovieWhereInput = {
  AND?: Maybe<Array<MovieWhereInput>>;
  NOT?: Maybe<Array<MovieWhereInput>>;
  OR?: Maybe<Array<MovieWhereInput>>;
  actors?: Maybe<ActorListRelationFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  directors?: Maybe<DirectorListRelationFilter>;
  genres?: Maybe<GenreListRelationFilter>;
  id?: Maybe<IntFilter>;
  imdbRating?: Maybe<FloatFilter>;
  languages?: Maybe<LanguageListRelationFilter>;
  plot?: Maybe<StringFilter>;
  poster?: Maybe<StringFilter>;
  rating?: Maybe<StringFilter>;
  release?: Maybe<DateTimeFilter>;
  runtime?: Maybe<IntFilter>;
  title?: Maybe<StringFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
  year?: Maybe<IntFilter>;
};

export type MovieWhereUniqueInput = {
  id?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createAccount: Account;
  createActor: Actor;
  createDirector: Director;
  createEpisode: Episode;
  createGenre: Genre;
  createLanguage: Language;
  createManyAccount: AffectedRowsOutput;
  createManyActor: AffectedRowsOutput;
  createManyDirector: AffectedRowsOutput;
  createManyEpisode: AffectedRowsOutput;
  createManyGenre: AffectedRowsOutput;
  createManyLanguage: AffectedRowsOutput;
  createManyMovie: AffectedRowsOutput;
  createManySeason: AffectedRowsOutput;
  createManySerie: AffectedRowsOutput;
  createManySession: AffectedRowsOutput;
  createManyUser: AffectedRowsOutput;
  createManyVerificationRequest: AffectedRowsOutput;
  createMovie: Movie;
  createSeason: Season;
  createSerie: Serie;
  createSession: Session;
  createUser: User;
  createVerificationRequest: VerificationRequest;
  deleteAccount?: Maybe<Account>;
  deleteActor?: Maybe<Actor>;
  deleteDirector?: Maybe<Director>;
  deleteEpisode?: Maybe<Episode>;
  deleteGenre?: Maybe<Genre>;
  deleteLanguage?: Maybe<Language>;
  deleteManyAccount: AffectedRowsOutput;
  deleteManyActor: AffectedRowsOutput;
  deleteManyDirector: AffectedRowsOutput;
  deleteManyEpisode: AffectedRowsOutput;
  deleteManyGenre: AffectedRowsOutput;
  deleteManyLanguage: AffectedRowsOutput;
  deleteManyMovie: AffectedRowsOutput;
  deleteManySeason: AffectedRowsOutput;
  deleteManySerie: AffectedRowsOutput;
  deleteManySession: AffectedRowsOutput;
  deleteManyUser: AffectedRowsOutput;
  deleteManyVerificationRequest: AffectedRowsOutput;
  deleteMovie?: Maybe<Movie>;
  deleteSeason?: Maybe<Season>;
  deleteSerie?: Maybe<Serie>;
  deleteSession?: Maybe<Session>;
  deleteUser?: Maybe<User>;
  deleteVerificationRequest?: Maybe<VerificationRequest>;
  updateAccount?: Maybe<Account>;
  updateActor?: Maybe<Actor>;
  updateDirector?: Maybe<Director>;
  updateEpisode?: Maybe<Episode>;
  updateGenre?: Maybe<Genre>;
  updateLanguage?: Maybe<Language>;
  updateManyAccount: AffectedRowsOutput;
  updateManyActor: AffectedRowsOutput;
  updateManyDirector: AffectedRowsOutput;
  updateManyEpisode: AffectedRowsOutput;
  updateManyGenre: AffectedRowsOutput;
  updateManyLanguage: AffectedRowsOutput;
  updateManyMovie: AffectedRowsOutput;
  updateManySeason: AffectedRowsOutput;
  updateManySerie: AffectedRowsOutput;
  updateManySession: AffectedRowsOutput;
  updateManyUser: AffectedRowsOutput;
  updateManyVerificationRequest: AffectedRowsOutput;
  updateMovie?: Maybe<Movie>;
  updateSeason?: Maybe<Season>;
  updateSerie?: Maybe<Serie>;
  updateSession?: Maybe<Session>;
  updateUser?: Maybe<User>;
  updateVerificationRequest?: Maybe<VerificationRequest>;
  upsertAccount: Account;
  upsertActor: Actor;
  upsertDirector: Director;
  upsertEpisode: Episode;
  upsertGenre: Genre;
  upsertLanguage: Language;
  upsertMovie: Movie;
  upsertSeason: Season;
  upsertSerie: Serie;
  upsertSession: Session;
  upsertUser: User;
  upsertVerificationRequest: VerificationRequest;
};


export type MutationCreateAccountArgs = {
  data: AccountCreateInput;
};


export type MutationCreateActorArgs = {
  data: ActorCreateInput;
};


export type MutationCreateDirectorArgs = {
  data: DirectorCreateInput;
};


export type MutationCreateEpisodeArgs = {
  data: EpisodeCreateInput;
};


export type MutationCreateGenreArgs = {
  data: GenreCreateInput;
};


export type MutationCreateLanguageArgs = {
  data: LanguageCreateInput;
};


export type MutationCreateManyAccountArgs = {
  data: Array<AccountCreateManyInput>;
  skipDuplicates?: Maybe<Scalars['Boolean']>;
};


export type MutationCreateManyActorArgs = {
  data: Array<ActorCreateManyInput>;
  skipDuplicates?: Maybe<Scalars['Boolean']>;
};


export type MutationCreateManyDirectorArgs = {
  data: Array<DirectorCreateManyInput>;
  skipDuplicates?: Maybe<Scalars['Boolean']>;
};


export type MutationCreateManyEpisodeArgs = {
  data: Array<EpisodeCreateManyInput>;
  skipDuplicates?: Maybe<Scalars['Boolean']>;
};


export type MutationCreateManyGenreArgs = {
  data: Array<GenreCreateManyInput>;
  skipDuplicates?: Maybe<Scalars['Boolean']>;
};


export type MutationCreateManyLanguageArgs = {
  data: Array<LanguageCreateManyInput>;
  skipDuplicates?: Maybe<Scalars['Boolean']>;
};


export type MutationCreateManyMovieArgs = {
  data: Array<MovieCreateManyInput>;
  skipDuplicates?: Maybe<Scalars['Boolean']>;
};


export type MutationCreateManySeasonArgs = {
  data: Array<SeasonCreateManyInput>;
  skipDuplicates?: Maybe<Scalars['Boolean']>;
};


export type MutationCreateManySerieArgs = {
  data: Array<SerieCreateManyInput>;
  skipDuplicates?: Maybe<Scalars['Boolean']>;
};


export type MutationCreateManySessionArgs = {
  data: Array<SessionCreateManyInput>;
  skipDuplicates?: Maybe<Scalars['Boolean']>;
};


export type MutationCreateManyUserArgs = {
  data: Array<UserCreateManyInput>;
  skipDuplicates?: Maybe<Scalars['Boolean']>;
};


export type MutationCreateManyVerificationRequestArgs = {
  data: Array<VerificationRequestCreateManyInput>;
  skipDuplicates?: Maybe<Scalars['Boolean']>;
};


export type MutationCreateMovieArgs = {
  data: MovieCreateInput;
};


export type MutationCreateSeasonArgs = {
  data: SeasonCreateInput;
};


export type MutationCreateSerieArgs = {
  data: SerieCreateInput;
};


export type MutationCreateSessionArgs = {
  data: SessionCreateInput;
};


export type MutationCreateUserArgs = {
  data: UserCreateInput;
};


export type MutationCreateVerificationRequestArgs = {
  data: VerificationRequestCreateInput;
};


export type MutationDeleteAccountArgs = {
  where: AccountWhereUniqueInput;
};


export type MutationDeleteActorArgs = {
  where: ActorWhereUniqueInput;
};


export type MutationDeleteDirectorArgs = {
  where: DirectorWhereUniqueInput;
};


export type MutationDeleteEpisodeArgs = {
  where: EpisodeWhereUniqueInput;
};


export type MutationDeleteGenreArgs = {
  where: GenreWhereUniqueInput;
};


export type MutationDeleteLanguageArgs = {
  where: LanguageWhereUniqueInput;
};


export type MutationDeleteManyAccountArgs = {
  where?: Maybe<AccountWhereInput>;
};


export type MutationDeleteManyActorArgs = {
  where?: Maybe<ActorWhereInput>;
};


export type MutationDeleteManyDirectorArgs = {
  where?: Maybe<DirectorWhereInput>;
};


export type MutationDeleteManyEpisodeArgs = {
  where?: Maybe<EpisodeWhereInput>;
};


export type MutationDeleteManyGenreArgs = {
  where?: Maybe<GenreWhereInput>;
};


export type MutationDeleteManyLanguageArgs = {
  where?: Maybe<LanguageWhereInput>;
};


export type MutationDeleteManyMovieArgs = {
  where?: Maybe<MovieWhereInput>;
};


export type MutationDeleteManySeasonArgs = {
  where?: Maybe<SeasonWhereInput>;
};


export type MutationDeleteManySerieArgs = {
  where?: Maybe<SerieWhereInput>;
};


export type MutationDeleteManySessionArgs = {
  where?: Maybe<SessionWhereInput>;
};


export type MutationDeleteManyUserArgs = {
  where?: Maybe<UserWhereInput>;
};


export type MutationDeleteManyVerificationRequestArgs = {
  where?: Maybe<VerificationRequestWhereInput>;
};


export type MutationDeleteMovieArgs = {
  where: MovieWhereUniqueInput;
};


export type MutationDeleteSeasonArgs = {
  where: SeasonWhereUniqueInput;
};


export type MutationDeleteSerieArgs = {
  where: SerieWhereUniqueInput;
};


export type MutationDeleteSessionArgs = {
  where: SessionWhereUniqueInput;
};


export type MutationDeleteUserArgs = {
  where: UserWhereUniqueInput;
};


export type MutationDeleteVerificationRequestArgs = {
  where: VerificationRequestWhereUniqueInput;
};


export type MutationUpdateAccountArgs = {
  data: AccountUpdateInput;
  where: AccountWhereUniqueInput;
};


export type MutationUpdateActorArgs = {
  data: ActorUpdateInput;
  where: ActorWhereUniqueInput;
};


export type MutationUpdateDirectorArgs = {
  data: DirectorUpdateInput;
  where: DirectorWhereUniqueInput;
};


export type MutationUpdateEpisodeArgs = {
  data: EpisodeUpdateInput;
  where: EpisodeWhereUniqueInput;
};


export type MutationUpdateGenreArgs = {
  data: GenreUpdateInput;
  where: GenreWhereUniqueInput;
};


export type MutationUpdateLanguageArgs = {
  data: LanguageUpdateInput;
  where: LanguageWhereUniqueInput;
};


export type MutationUpdateManyAccountArgs = {
  data: AccountUpdateManyMutationInput;
  where?: Maybe<AccountWhereInput>;
};


export type MutationUpdateManyActorArgs = {
  data: ActorUpdateManyMutationInput;
  where?: Maybe<ActorWhereInput>;
};


export type MutationUpdateManyDirectorArgs = {
  data: DirectorUpdateManyMutationInput;
  where?: Maybe<DirectorWhereInput>;
};


export type MutationUpdateManyEpisodeArgs = {
  data: EpisodeUpdateManyMutationInput;
  where?: Maybe<EpisodeWhereInput>;
};


export type MutationUpdateManyGenreArgs = {
  data: GenreUpdateManyMutationInput;
  where?: Maybe<GenreWhereInput>;
};


export type MutationUpdateManyLanguageArgs = {
  data: LanguageUpdateManyMutationInput;
  where?: Maybe<LanguageWhereInput>;
};


export type MutationUpdateManyMovieArgs = {
  data: MovieUpdateManyMutationInput;
  where?: Maybe<MovieWhereInput>;
};


export type MutationUpdateManySeasonArgs = {
  data: SeasonUpdateManyMutationInput;
  where?: Maybe<SeasonWhereInput>;
};


export type MutationUpdateManySerieArgs = {
  data: SerieUpdateManyMutationInput;
  where?: Maybe<SerieWhereInput>;
};


export type MutationUpdateManySessionArgs = {
  data: SessionUpdateManyMutationInput;
  where?: Maybe<SessionWhereInput>;
};


export type MutationUpdateManyUserArgs = {
  data: UserUpdateManyMutationInput;
  where?: Maybe<UserWhereInput>;
};


export type MutationUpdateManyVerificationRequestArgs = {
  data: VerificationRequestUpdateManyMutationInput;
  where?: Maybe<VerificationRequestWhereInput>;
};


export type MutationUpdateMovieArgs = {
  data: MovieUpdateInput;
  where: MovieWhereUniqueInput;
};


export type MutationUpdateSeasonArgs = {
  data: SeasonUpdateInput;
  where: SeasonWhereUniqueInput;
};


export type MutationUpdateSerieArgs = {
  data: SerieUpdateInput;
  where: SerieWhereUniqueInput;
};


export type MutationUpdateSessionArgs = {
  data: SessionUpdateInput;
  where: SessionWhereUniqueInput;
};


export type MutationUpdateUserArgs = {
  data: UserUpdateInput;
  where: UserWhereUniqueInput;
};


export type MutationUpdateVerificationRequestArgs = {
  data: VerificationRequestUpdateInput;
  where: VerificationRequestWhereUniqueInput;
};


export type MutationUpsertAccountArgs = {
  create: AccountCreateInput;
  update: AccountUpdateInput;
  where: AccountWhereUniqueInput;
};


export type MutationUpsertActorArgs = {
  create: ActorCreateInput;
  update: ActorUpdateInput;
  where: ActorWhereUniqueInput;
};


export type MutationUpsertDirectorArgs = {
  create: DirectorCreateInput;
  update: DirectorUpdateInput;
  where: DirectorWhereUniqueInput;
};


export type MutationUpsertEpisodeArgs = {
  create: EpisodeCreateInput;
  update: EpisodeUpdateInput;
  where: EpisodeWhereUniqueInput;
};


export type MutationUpsertGenreArgs = {
  create: GenreCreateInput;
  update: GenreUpdateInput;
  where: GenreWhereUniqueInput;
};


export type MutationUpsertLanguageArgs = {
  create: LanguageCreateInput;
  update: LanguageUpdateInput;
  where: LanguageWhereUniqueInput;
};


export type MutationUpsertMovieArgs = {
  create: MovieCreateInput;
  update: MovieUpdateInput;
  where: MovieWhereUniqueInput;
};


export type MutationUpsertSeasonArgs = {
  create: SeasonCreateInput;
  update: SeasonUpdateInput;
  where: SeasonWhereUniqueInput;
};


export type MutationUpsertSerieArgs = {
  create: SerieCreateInput;
  update: SerieUpdateInput;
  where: SerieWhereUniqueInput;
};


export type MutationUpsertSessionArgs = {
  create: SessionCreateInput;
  update: SessionUpdateInput;
  where: SessionWhereUniqueInput;
};


export type MutationUpsertUserArgs = {
  create: UserCreateInput;
  update: UserUpdateInput;
  where: UserWhereUniqueInput;
};


export type MutationUpsertVerificationRequestArgs = {
  create: VerificationRequestCreateInput;
  update: VerificationRequestUpdateInput;
  where: VerificationRequestWhereUniqueInput;
};

export type NestedDateTimeFilter = {
  equals?: Maybe<Scalars['DateTime']>;
  gt?: Maybe<Scalars['DateTime']>;
  gte?: Maybe<Scalars['DateTime']>;
  in?: Maybe<Array<Scalars['DateTime']>>;
  lt?: Maybe<Scalars['DateTime']>;
  lte?: Maybe<Scalars['DateTime']>;
  not?: Maybe<NestedDateTimeFilter>;
  notIn?: Maybe<Array<Scalars['DateTime']>>;
};

export type NestedDateTimeNullableFilter = {
  equals?: Maybe<Scalars['DateTime']>;
  gt?: Maybe<Scalars['DateTime']>;
  gte?: Maybe<Scalars['DateTime']>;
  in?: Maybe<Array<Scalars['DateTime']>>;
  lt?: Maybe<Scalars['DateTime']>;
  lte?: Maybe<Scalars['DateTime']>;
  not?: Maybe<NestedDateTimeNullableFilter>;
  notIn?: Maybe<Array<Scalars['DateTime']>>;
};

export type NestedDateTimeNullableWithAggregatesFilter = {
  _count?: Maybe<NestedIntNullableFilter>;
  _max?: Maybe<NestedDateTimeNullableFilter>;
  _min?: Maybe<NestedDateTimeNullableFilter>;
  equals?: Maybe<Scalars['DateTime']>;
  gt?: Maybe<Scalars['DateTime']>;
  gte?: Maybe<Scalars['DateTime']>;
  in?: Maybe<Array<Scalars['DateTime']>>;
  lt?: Maybe<Scalars['DateTime']>;
  lte?: Maybe<Scalars['DateTime']>;
  not?: Maybe<NestedDateTimeNullableWithAggregatesFilter>;
  notIn?: Maybe<Array<Scalars['DateTime']>>;
};

export type NestedDateTimeWithAggregatesFilter = {
  _count?: Maybe<NestedIntFilter>;
  _max?: Maybe<NestedDateTimeFilter>;
  _min?: Maybe<NestedDateTimeFilter>;
  equals?: Maybe<Scalars['DateTime']>;
  gt?: Maybe<Scalars['DateTime']>;
  gte?: Maybe<Scalars['DateTime']>;
  in?: Maybe<Array<Scalars['DateTime']>>;
  lt?: Maybe<Scalars['DateTime']>;
  lte?: Maybe<Scalars['DateTime']>;
  not?: Maybe<NestedDateTimeWithAggregatesFilter>;
  notIn?: Maybe<Array<Scalars['DateTime']>>;
};

export type NestedEnumRoleFilter = {
  equals?: Maybe<Role>;
  in?: Maybe<Array<Role>>;
  not?: Maybe<NestedEnumRoleFilter>;
  notIn?: Maybe<Array<Role>>;
};

export type NestedEnumRoleWithAggregatesFilter = {
  _count?: Maybe<NestedIntFilter>;
  _max?: Maybe<NestedEnumRoleFilter>;
  _min?: Maybe<NestedEnumRoleFilter>;
  equals?: Maybe<Role>;
  in?: Maybe<Array<Role>>;
  not?: Maybe<NestedEnumRoleWithAggregatesFilter>;
  notIn?: Maybe<Array<Role>>;
};

export type NestedFloatFilter = {
  equals?: Maybe<Scalars['Float']>;
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Scalars['Float']>>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  not?: Maybe<NestedFloatFilter>;
  notIn?: Maybe<Array<Scalars['Float']>>;
};

export type NestedFloatNullableFilter = {
  equals?: Maybe<Scalars['Float']>;
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Scalars['Float']>>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  not?: Maybe<NestedFloatNullableFilter>;
  notIn?: Maybe<Array<Scalars['Float']>>;
};

export type NestedFloatWithAggregatesFilter = {
  _avg?: Maybe<NestedFloatFilter>;
  _count?: Maybe<NestedIntFilter>;
  _max?: Maybe<NestedFloatFilter>;
  _min?: Maybe<NestedFloatFilter>;
  _sum?: Maybe<NestedFloatFilter>;
  equals?: Maybe<Scalars['Float']>;
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Scalars['Float']>>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  not?: Maybe<NestedFloatWithAggregatesFilter>;
  notIn?: Maybe<Array<Scalars['Float']>>;
};

export type NestedIntFilter = {
  equals?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Scalars['Int']>>;
  lt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  not?: Maybe<NestedIntFilter>;
  notIn?: Maybe<Array<Scalars['Int']>>;
};

export type NestedIntNullableFilter = {
  equals?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Scalars['Int']>>;
  lt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  not?: Maybe<NestedIntNullableFilter>;
  notIn?: Maybe<Array<Scalars['Int']>>;
};

export type NestedIntNullableWithAggregatesFilter = {
  _avg?: Maybe<NestedFloatNullableFilter>;
  _count?: Maybe<NestedIntNullableFilter>;
  _max?: Maybe<NestedIntNullableFilter>;
  _min?: Maybe<NestedIntNullableFilter>;
  _sum?: Maybe<NestedIntNullableFilter>;
  equals?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Scalars['Int']>>;
  lt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  not?: Maybe<NestedIntNullableWithAggregatesFilter>;
  notIn?: Maybe<Array<Scalars['Int']>>;
};

export type NestedIntWithAggregatesFilter = {
  _avg?: Maybe<NestedFloatFilter>;
  _count?: Maybe<NestedIntFilter>;
  _max?: Maybe<NestedIntFilter>;
  _min?: Maybe<NestedIntFilter>;
  _sum?: Maybe<NestedIntFilter>;
  equals?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Scalars['Int']>>;
  lt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  not?: Maybe<NestedIntWithAggregatesFilter>;
  notIn?: Maybe<Array<Scalars['Int']>>;
};

export type NestedStringFilter = {
  contains?: Maybe<Scalars['String']>;
  endsWith?: Maybe<Scalars['String']>;
  equals?: Maybe<Scalars['String']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Scalars['String']>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  not?: Maybe<NestedStringFilter>;
  notIn?: Maybe<Array<Scalars['String']>>;
  search?: Maybe<Scalars['String']>;
  startsWith?: Maybe<Scalars['String']>;
};

export type NestedStringNullableFilter = {
  contains?: Maybe<Scalars['String']>;
  endsWith?: Maybe<Scalars['String']>;
  equals?: Maybe<Scalars['String']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Scalars['String']>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  not?: Maybe<NestedStringNullableFilter>;
  notIn?: Maybe<Array<Scalars['String']>>;
  search?: Maybe<Scalars['String']>;
  startsWith?: Maybe<Scalars['String']>;
};

export type NestedStringNullableWithAggregatesFilter = {
  _count?: Maybe<NestedIntNullableFilter>;
  _max?: Maybe<NestedStringNullableFilter>;
  _min?: Maybe<NestedStringNullableFilter>;
  contains?: Maybe<Scalars['String']>;
  endsWith?: Maybe<Scalars['String']>;
  equals?: Maybe<Scalars['String']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Scalars['String']>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  not?: Maybe<NestedStringNullableWithAggregatesFilter>;
  notIn?: Maybe<Array<Scalars['String']>>;
  search?: Maybe<Scalars['String']>;
  startsWith?: Maybe<Scalars['String']>;
};

export type NestedStringWithAggregatesFilter = {
  _count?: Maybe<NestedIntFilter>;
  _max?: Maybe<NestedStringFilter>;
  _min?: Maybe<NestedStringFilter>;
  contains?: Maybe<Scalars['String']>;
  endsWith?: Maybe<Scalars['String']>;
  equals?: Maybe<Scalars['String']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Scalars['String']>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  not?: Maybe<NestedStringWithAggregatesFilter>;
  notIn?: Maybe<Array<Scalars['String']>>;
  search?: Maybe<Scalars['String']>;
  startsWith?: Maybe<Scalars['String']>;
};

export type NullableDateTimeFieldUpdateOperationsInput = {
  set?: Maybe<Scalars['DateTime']>;
};

export type NullableIntFieldUpdateOperationsInput = {
  decrement?: Maybe<Scalars['Int']>;
  divide?: Maybe<Scalars['Int']>;
  increment?: Maybe<Scalars['Int']>;
  multiply?: Maybe<Scalars['Int']>;
  set?: Maybe<Scalars['Int']>;
};

export type NullableStringFieldUpdateOperationsInput = {
  set?: Maybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  account?: Maybe<Account>;
  accounts: Array<Account>;
  actor?: Maybe<Actor>;
  actors: Array<Actor>;
  aggregateAccount: AggregateAccount;
  aggregateActor: AggregateActor;
  aggregateDirector: AggregateDirector;
  aggregateEpisode: AggregateEpisode;
  aggregateGenre: AggregateGenre;
  aggregateLanguage: AggregateLanguage;
  aggregateMovie: AggregateMovie;
  aggregateSeason: AggregateSeason;
  aggregateSerie: AggregateSerie;
  aggregateSession: AggregateSession;
  aggregateUser: AggregateUser;
  aggregateVerificationRequest: AggregateVerificationRequest;
  director?: Maybe<Director>;
  directors: Array<Director>;
  episode?: Maybe<Episode>;
  episodes: Array<Episode>;
  findFirstAccount?: Maybe<Account>;
  findFirstActor?: Maybe<Actor>;
  findFirstDirector?: Maybe<Director>;
  findFirstEpisode?: Maybe<Episode>;
  findFirstGenre?: Maybe<Genre>;
  findFirstLanguage?: Maybe<Language>;
  findFirstMovie?: Maybe<Movie>;
  findFirstSeason?: Maybe<Season>;
  findFirstSerie?: Maybe<Serie>;
  findFirstSession?: Maybe<Session>;
  findFirstUser?: Maybe<User>;
  findFirstVerificationRequest?: Maybe<VerificationRequest>;
  genre?: Maybe<Genre>;
  genres: Array<Genre>;
  groupByAccount: Array<AccountGroupBy>;
  groupByActor: Array<ActorGroupBy>;
  groupByDirector: Array<DirectorGroupBy>;
  groupByEpisode: Array<EpisodeGroupBy>;
  groupByGenre: Array<GenreGroupBy>;
  groupByLanguage: Array<LanguageGroupBy>;
  groupByMovie: Array<MovieGroupBy>;
  groupBySeason: Array<SeasonGroupBy>;
  groupBySerie: Array<SerieGroupBy>;
  groupBySession: Array<SessionGroupBy>;
  groupByUser: Array<UserGroupBy>;
  groupByVerificationRequest: Array<VerificationRequestGroupBy>;
  language?: Maybe<Language>;
  languages: Array<Language>;
  movie?: Maybe<Movie>;
  movies: Array<Movie>;
  season?: Maybe<Season>;
  seasons: Array<Season>;
  serie?: Maybe<Serie>;
  series: Array<Serie>;
  session?: Maybe<Session>;
  sessions: Array<Session>;
  user?: Maybe<User>;
  users: Array<User>;
  verificationRequest?: Maybe<VerificationRequest>;
  verificationRequests: Array<VerificationRequest>;
};


export type QueryAccountArgs = {
  where: AccountWhereUniqueInput;
};


export type QueryAccountsArgs = {
  cursor?: Maybe<AccountWhereUniqueInput>;
  distinct?: Maybe<Array<AccountScalarFieldEnum>>;
  orderBy?: Maybe<Array<AccountOrderByWithRelationAndSearchRelevanceInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<AccountWhereInput>;
};


export type QueryActorArgs = {
  where: ActorWhereUniqueInput;
};


export type QueryActorsArgs = {
  cursor?: Maybe<ActorWhereUniqueInput>;
  distinct?: Maybe<Array<ActorScalarFieldEnum>>;
  orderBy?: Maybe<Array<ActorOrderByWithRelationAndSearchRelevanceInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<ActorWhereInput>;
};


export type QueryAggregateAccountArgs = {
  cursor?: Maybe<AccountWhereUniqueInput>;
  orderBy?: Maybe<Array<AccountOrderByWithRelationAndSearchRelevanceInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<AccountWhereInput>;
};


export type QueryAggregateActorArgs = {
  cursor?: Maybe<ActorWhereUniqueInput>;
  orderBy?: Maybe<Array<ActorOrderByWithRelationAndSearchRelevanceInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<ActorWhereInput>;
};


export type QueryAggregateDirectorArgs = {
  cursor?: Maybe<DirectorWhereUniqueInput>;
  orderBy?: Maybe<Array<DirectorOrderByWithRelationAndSearchRelevanceInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<DirectorWhereInput>;
};


export type QueryAggregateEpisodeArgs = {
  cursor?: Maybe<EpisodeWhereUniqueInput>;
  orderBy?: Maybe<Array<EpisodeOrderByWithRelationAndSearchRelevanceInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<EpisodeWhereInput>;
};


export type QueryAggregateGenreArgs = {
  cursor?: Maybe<GenreWhereUniqueInput>;
  orderBy?: Maybe<Array<GenreOrderByWithRelationAndSearchRelevanceInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<GenreWhereInput>;
};


export type QueryAggregateLanguageArgs = {
  cursor?: Maybe<LanguageWhereUniqueInput>;
  orderBy?: Maybe<Array<LanguageOrderByWithRelationAndSearchRelevanceInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<LanguageWhereInput>;
};


export type QueryAggregateMovieArgs = {
  cursor?: Maybe<MovieWhereUniqueInput>;
  orderBy?: Maybe<Array<MovieOrderByWithRelationAndSearchRelevanceInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<MovieWhereInput>;
};


export type QueryAggregateSeasonArgs = {
  cursor?: Maybe<SeasonWhereUniqueInput>;
  orderBy?: Maybe<Array<SeasonOrderByWithRelationAndSearchRelevanceInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<SeasonWhereInput>;
};


export type QueryAggregateSerieArgs = {
  cursor?: Maybe<SerieWhereUniqueInput>;
  orderBy?: Maybe<Array<SerieOrderByWithRelationAndSearchRelevanceInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<SerieWhereInput>;
};


export type QueryAggregateSessionArgs = {
  cursor?: Maybe<SessionWhereUniqueInput>;
  orderBy?: Maybe<Array<SessionOrderByWithRelationAndSearchRelevanceInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<SessionWhereInput>;
};


export type QueryAggregateUserArgs = {
  cursor?: Maybe<UserWhereUniqueInput>;
  orderBy?: Maybe<Array<UserOrderByWithRelationAndSearchRelevanceInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<UserWhereInput>;
};


export type QueryAggregateVerificationRequestArgs = {
  cursor?: Maybe<VerificationRequestWhereUniqueInput>;
  orderBy?: Maybe<Array<VerificationRequestOrderByWithRelationAndSearchRelevanceInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<VerificationRequestWhereInput>;
};


export type QueryDirectorArgs = {
  where: DirectorWhereUniqueInput;
};


export type QueryDirectorsArgs = {
  cursor?: Maybe<DirectorWhereUniqueInput>;
  distinct?: Maybe<Array<DirectorScalarFieldEnum>>;
  orderBy?: Maybe<Array<DirectorOrderByWithRelationAndSearchRelevanceInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<DirectorWhereInput>;
};


export type QueryEpisodeArgs = {
  where: EpisodeWhereUniqueInput;
};


export type QueryEpisodesArgs = {
  cursor?: Maybe<EpisodeWhereUniqueInput>;
  distinct?: Maybe<Array<EpisodeScalarFieldEnum>>;
  orderBy?: Maybe<Array<EpisodeOrderByWithRelationAndSearchRelevanceInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<EpisodeWhereInput>;
};


export type QueryFindFirstAccountArgs = {
  cursor?: Maybe<AccountWhereUniqueInput>;
  distinct?: Maybe<Array<AccountScalarFieldEnum>>;
  orderBy?: Maybe<Array<AccountOrderByWithRelationAndSearchRelevanceInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<AccountWhereInput>;
};


export type QueryFindFirstActorArgs = {
  cursor?: Maybe<ActorWhereUniqueInput>;
  distinct?: Maybe<Array<ActorScalarFieldEnum>>;
  orderBy?: Maybe<Array<ActorOrderByWithRelationAndSearchRelevanceInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<ActorWhereInput>;
};


export type QueryFindFirstDirectorArgs = {
  cursor?: Maybe<DirectorWhereUniqueInput>;
  distinct?: Maybe<Array<DirectorScalarFieldEnum>>;
  orderBy?: Maybe<Array<DirectorOrderByWithRelationAndSearchRelevanceInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<DirectorWhereInput>;
};


export type QueryFindFirstEpisodeArgs = {
  cursor?: Maybe<EpisodeWhereUniqueInput>;
  distinct?: Maybe<Array<EpisodeScalarFieldEnum>>;
  orderBy?: Maybe<Array<EpisodeOrderByWithRelationAndSearchRelevanceInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<EpisodeWhereInput>;
};


export type QueryFindFirstGenreArgs = {
  cursor?: Maybe<GenreWhereUniqueInput>;
  distinct?: Maybe<Array<GenreScalarFieldEnum>>;
  orderBy?: Maybe<Array<GenreOrderByWithRelationAndSearchRelevanceInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<GenreWhereInput>;
};


export type QueryFindFirstLanguageArgs = {
  cursor?: Maybe<LanguageWhereUniqueInput>;
  distinct?: Maybe<Array<LanguageScalarFieldEnum>>;
  orderBy?: Maybe<Array<LanguageOrderByWithRelationAndSearchRelevanceInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<LanguageWhereInput>;
};


export type QueryFindFirstMovieArgs = {
  cursor?: Maybe<MovieWhereUniqueInput>;
  distinct?: Maybe<Array<MovieScalarFieldEnum>>;
  orderBy?: Maybe<Array<MovieOrderByWithRelationAndSearchRelevanceInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<MovieWhereInput>;
};


export type QueryFindFirstSeasonArgs = {
  cursor?: Maybe<SeasonWhereUniqueInput>;
  distinct?: Maybe<Array<SeasonScalarFieldEnum>>;
  orderBy?: Maybe<Array<SeasonOrderByWithRelationAndSearchRelevanceInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<SeasonWhereInput>;
};


export type QueryFindFirstSerieArgs = {
  cursor?: Maybe<SerieWhereUniqueInput>;
  distinct?: Maybe<Array<SerieScalarFieldEnum>>;
  orderBy?: Maybe<Array<SerieOrderByWithRelationAndSearchRelevanceInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<SerieWhereInput>;
};


export type QueryFindFirstSessionArgs = {
  cursor?: Maybe<SessionWhereUniqueInput>;
  distinct?: Maybe<Array<SessionScalarFieldEnum>>;
  orderBy?: Maybe<Array<SessionOrderByWithRelationAndSearchRelevanceInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<SessionWhereInput>;
};


export type QueryFindFirstUserArgs = {
  cursor?: Maybe<UserWhereUniqueInput>;
  distinct?: Maybe<Array<UserScalarFieldEnum>>;
  orderBy?: Maybe<Array<UserOrderByWithRelationAndSearchRelevanceInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<UserWhereInput>;
};


export type QueryFindFirstVerificationRequestArgs = {
  cursor?: Maybe<VerificationRequestWhereUniqueInput>;
  distinct?: Maybe<Array<VerificationRequestScalarFieldEnum>>;
  orderBy?: Maybe<Array<VerificationRequestOrderByWithRelationAndSearchRelevanceInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<VerificationRequestWhereInput>;
};


export type QueryGenreArgs = {
  where: GenreWhereUniqueInput;
};


export type QueryGenresArgs = {
  cursor?: Maybe<GenreWhereUniqueInput>;
  distinct?: Maybe<Array<GenreScalarFieldEnum>>;
  orderBy?: Maybe<Array<GenreOrderByWithRelationAndSearchRelevanceInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<GenreWhereInput>;
};


export type QueryGroupByAccountArgs = {
  by: Array<AccountScalarFieldEnum>;
  having?: Maybe<AccountScalarWhereWithAggregatesInput>;
  orderBy?: Maybe<Array<AccountOrderByWithAggregationInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<AccountWhereInput>;
};


export type QueryGroupByActorArgs = {
  by: Array<ActorScalarFieldEnum>;
  having?: Maybe<ActorScalarWhereWithAggregatesInput>;
  orderBy?: Maybe<Array<ActorOrderByWithAggregationInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<ActorWhereInput>;
};


export type QueryGroupByDirectorArgs = {
  by: Array<DirectorScalarFieldEnum>;
  having?: Maybe<DirectorScalarWhereWithAggregatesInput>;
  orderBy?: Maybe<Array<DirectorOrderByWithAggregationInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<DirectorWhereInput>;
};


export type QueryGroupByEpisodeArgs = {
  by: Array<EpisodeScalarFieldEnum>;
  having?: Maybe<EpisodeScalarWhereWithAggregatesInput>;
  orderBy?: Maybe<Array<EpisodeOrderByWithAggregationInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<EpisodeWhereInput>;
};


export type QueryGroupByGenreArgs = {
  by: Array<GenreScalarFieldEnum>;
  having?: Maybe<GenreScalarWhereWithAggregatesInput>;
  orderBy?: Maybe<Array<GenreOrderByWithAggregationInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<GenreWhereInput>;
};


export type QueryGroupByLanguageArgs = {
  by: Array<LanguageScalarFieldEnum>;
  having?: Maybe<LanguageScalarWhereWithAggregatesInput>;
  orderBy?: Maybe<Array<LanguageOrderByWithAggregationInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<LanguageWhereInput>;
};


export type QueryGroupByMovieArgs = {
  by: Array<MovieScalarFieldEnum>;
  having?: Maybe<MovieScalarWhereWithAggregatesInput>;
  orderBy?: Maybe<Array<MovieOrderByWithAggregationInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<MovieWhereInput>;
};


export type QueryGroupBySeasonArgs = {
  by: Array<SeasonScalarFieldEnum>;
  having?: Maybe<SeasonScalarWhereWithAggregatesInput>;
  orderBy?: Maybe<Array<SeasonOrderByWithAggregationInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<SeasonWhereInput>;
};


export type QueryGroupBySerieArgs = {
  by: Array<SerieScalarFieldEnum>;
  having?: Maybe<SerieScalarWhereWithAggregatesInput>;
  orderBy?: Maybe<Array<SerieOrderByWithAggregationInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<SerieWhereInput>;
};


export type QueryGroupBySessionArgs = {
  by: Array<SessionScalarFieldEnum>;
  having?: Maybe<SessionScalarWhereWithAggregatesInput>;
  orderBy?: Maybe<Array<SessionOrderByWithAggregationInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<SessionWhereInput>;
};


export type QueryGroupByUserArgs = {
  by: Array<UserScalarFieldEnum>;
  having?: Maybe<UserScalarWhereWithAggregatesInput>;
  orderBy?: Maybe<Array<UserOrderByWithAggregationInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<UserWhereInput>;
};


export type QueryGroupByVerificationRequestArgs = {
  by: Array<VerificationRequestScalarFieldEnum>;
  having?: Maybe<VerificationRequestScalarWhereWithAggregatesInput>;
  orderBy?: Maybe<Array<VerificationRequestOrderByWithAggregationInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<VerificationRequestWhereInput>;
};


export type QueryLanguageArgs = {
  where: LanguageWhereUniqueInput;
};


export type QueryLanguagesArgs = {
  cursor?: Maybe<LanguageWhereUniqueInput>;
  distinct?: Maybe<Array<LanguageScalarFieldEnum>>;
  orderBy?: Maybe<Array<LanguageOrderByWithRelationAndSearchRelevanceInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<LanguageWhereInput>;
};


export type QueryMovieArgs = {
  where: MovieWhereUniqueInput;
};


export type QueryMoviesArgs = {
  cursor?: Maybe<MovieWhereUniqueInput>;
  distinct?: Maybe<Array<MovieScalarFieldEnum>>;
  orderBy?: Maybe<Array<MovieOrderByWithRelationAndSearchRelevanceInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<MovieWhereInput>;
};


export type QuerySeasonArgs = {
  where: SeasonWhereUniqueInput;
};


export type QuerySeasonsArgs = {
  cursor?: Maybe<SeasonWhereUniqueInput>;
  distinct?: Maybe<Array<SeasonScalarFieldEnum>>;
  orderBy?: Maybe<Array<SeasonOrderByWithRelationAndSearchRelevanceInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<SeasonWhereInput>;
};


export type QuerySerieArgs = {
  where: SerieWhereUniqueInput;
};


export type QuerySeriesArgs = {
  cursor?: Maybe<SerieWhereUniqueInput>;
  distinct?: Maybe<Array<SerieScalarFieldEnum>>;
  orderBy?: Maybe<Array<SerieOrderByWithRelationAndSearchRelevanceInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<SerieWhereInput>;
};


export type QuerySessionArgs = {
  where: SessionWhereUniqueInput;
};


export type QuerySessionsArgs = {
  cursor?: Maybe<SessionWhereUniqueInput>;
  distinct?: Maybe<Array<SessionScalarFieldEnum>>;
  orderBy?: Maybe<Array<SessionOrderByWithRelationAndSearchRelevanceInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<SessionWhereInput>;
};


export type QueryUserArgs = {
  where: UserWhereUniqueInput;
};


export type QueryUsersArgs = {
  cursor?: Maybe<UserWhereUniqueInput>;
  distinct?: Maybe<Array<UserScalarFieldEnum>>;
  orderBy?: Maybe<Array<UserOrderByWithRelationAndSearchRelevanceInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<UserWhereInput>;
};


export type QueryVerificationRequestArgs = {
  where: VerificationRequestWhereUniqueInput;
};


export type QueryVerificationRequestsArgs = {
  cursor?: Maybe<VerificationRequestWhereUniqueInput>;
  distinct?: Maybe<Array<VerificationRequestScalarFieldEnum>>;
  orderBy?: Maybe<Array<VerificationRequestOrderByWithRelationAndSearchRelevanceInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<VerificationRequestWhereInput>;
};

export enum QueryMode {
  Default = 'default',
  Insensitive = 'insensitive'
}

export enum Role {
  Admin = 'ADMIN',
  User = 'USER'
}

export type Season = {
  __typename?: 'Season';
  _count?: Maybe<SeasonCount>;
  createdAt: Scalars['DateTime'];
  episodeIds: Array<Episode>;
  episodes: Scalars['Int'];
  id: Scalars['Int'];
  index: Scalars['Int'];
  launchDate: Scalars['DateTime'];
  series: Serie;
  seriesId: Scalars['Int'];
  title: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};


export type SeasonEpisodeIdsArgs = {
  cursor?: Maybe<EpisodeWhereUniqueInput>;
  distinct?: Maybe<Array<EpisodeScalarFieldEnum>>;
  orderBy?: Maybe<Array<EpisodeOrderByWithRelationAndSearchRelevanceInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<EpisodeWhereInput>;
};

export type SeasonAvgAggregate = {
  __typename?: 'SeasonAvgAggregate';
  episodes?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  index?: Maybe<Scalars['Float']>;
  seriesId?: Maybe<Scalars['Float']>;
};

export type SeasonAvgOrderByAggregateInput = {
  episodes?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  index?: Maybe<SortOrder>;
  seriesId?: Maybe<SortOrder>;
};

export type SeasonCount = {
  __typename?: 'SeasonCount';
  episodeIds: Scalars['Int'];
};

export type SeasonCountAggregate = {
  __typename?: 'SeasonCountAggregate';
  _all: Scalars['Int'];
  createdAt: Scalars['Int'];
  episodes: Scalars['Int'];
  id: Scalars['Int'];
  index: Scalars['Int'];
  launchDate: Scalars['Int'];
  seriesId: Scalars['Int'];
  title: Scalars['Int'];
  updatedAt: Scalars['Int'];
};

export type SeasonCountOrderByAggregateInput = {
  createdAt?: Maybe<SortOrder>;
  episodes?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  index?: Maybe<SortOrder>;
  launchDate?: Maybe<SortOrder>;
  seriesId?: Maybe<SortOrder>;
  title?: Maybe<SortOrder>;
  updatedAt?: Maybe<SortOrder>;
};

export type SeasonCreateInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  episodeIds?: Maybe<EpisodeCreateNestedManyWithoutSeasonInput>;
  episodes: Scalars['Int'];
  index: Scalars['Int'];
  launchDate?: Maybe<Scalars['DateTime']>;
  series: SerieCreateNestedOneWithoutSeasonsInput;
  title: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type SeasonCreateManyInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  episodes: Scalars['Int'];
  id?: Maybe<Scalars['Int']>;
  index: Scalars['Int'];
  launchDate?: Maybe<Scalars['DateTime']>;
  seriesId: Scalars['Int'];
  title: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type SeasonCreateManySeriesInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  episodes: Scalars['Int'];
  id?: Maybe<Scalars['Int']>;
  index: Scalars['Int'];
  launchDate?: Maybe<Scalars['DateTime']>;
  title: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type SeasonCreateManySeriesInputEnvelope = {
  data: Array<SeasonCreateManySeriesInput>;
  skipDuplicates?: Maybe<Scalars['Boolean']>;
};

export type SeasonCreateNestedManyWithoutSeriesInput = {
  connect?: Maybe<Array<SeasonWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<SeasonCreateOrConnectWithoutSeriesInput>>;
  create?: Maybe<Array<SeasonCreateWithoutSeriesInput>>;
  createMany?: Maybe<SeasonCreateManySeriesInputEnvelope>;
};

export type SeasonCreateNestedOneWithoutEpisodeIdsInput = {
  connect?: Maybe<SeasonWhereUniqueInput>;
  connectOrCreate?: Maybe<SeasonCreateOrConnectWithoutEpisodeIdsInput>;
  create?: Maybe<SeasonCreateWithoutEpisodeIdsInput>;
};

export type SeasonCreateOrConnectWithoutEpisodeIdsInput = {
  create: SeasonCreateWithoutEpisodeIdsInput;
  where: SeasonWhereUniqueInput;
};

export type SeasonCreateOrConnectWithoutSeriesInput = {
  create: SeasonCreateWithoutSeriesInput;
  where: SeasonWhereUniqueInput;
};

export type SeasonCreateWithoutEpisodeIdsInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  episodes: Scalars['Int'];
  index: Scalars['Int'];
  launchDate?: Maybe<Scalars['DateTime']>;
  series: SerieCreateNestedOneWithoutSeasonsInput;
  title: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type SeasonCreateWithoutSeriesInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  episodeIds?: Maybe<EpisodeCreateNestedManyWithoutSeasonInput>;
  episodes: Scalars['Int'];
  index: Scalars['Int'];
  launchDate?: Maybe<Scalars['DateTime']>;
  title: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type SeasonGroupBy = {
  __typename?: 'SeasonGroupBy';
  _avg?: Maybe<SeasonAvgAggregate>;
  _count?: Maybe<SeasonCountAggregate>;
  _max?: Maybe<SeasonMaxAggregate>;
  _min?: Maybe<SeasonMinAggregate>;
  _sum?: Maybe<SeasonSumAggregate>;
  createdAt: Scalars['DateTime'];
  episodes: Scalars['Int'];
  id: Scalars['Int'];
  index: Scalars['Int'];
  launchDate: Scalars['DateTime'];
  seriesId: Scalars['Int'];
  title: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};

export type SeasonListRelationFilter = {
  every?: Maybe<SeasonWhereInput>;
  none?: Maybe<SeasonWhereInput>;
  some?: Maybe<SeasonWhereInput>;
};

export type SeasonMaxAggregate = {
  __typename?: 'SeasonMaxAggregate';
  createdAt?: Maybe<Scalars['DateTime']>;
  episodes?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  index?: Maybe<Scalars['Int']>;
  launchDate?: Maybe<Scalars['DateTime']>;
  seriesId?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type SeasonMaxOrderByAggregateInput = {
  createdAt?: Maybe<SortOrder>;
  episodes?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  index?: Maybe<SortOrder>;
  launchDate?: Maybe<SortOrder>;
  seriesId?: Maybe<SortOrder>;
  title?: Maybe<SortOrder>;
  updatedAt?: Maybe<SortOrder>;
};

export type SeasonMinAggregate = {
  __typename?: 'SeasonMinAggregate';
  createdAt?: Maybe<Scalars['DateTime']>;
  episodes?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  index?: Maybe<Scalars['Int']>;
  launchDate?: Maybe<Scalars['DateTime']>;
  seriesId?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type SeasonMinOrderByAggregateInput = {
  createdAt?: Maybe<SortOrder>;
  episodes?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  index?: Maybe<SortOrder>;
  launchDate?: Maybe<SortOrder>;
  seriesId?: Maybe<SortOrder>;
  title?: Maybe<SortOrder>;
  updatedAt?: Maybe<SortOrder>;
};

export type SeasonOrderByRelationAggregateInput = {
  _count?: Maybe<SortOrder>;
};

export enum SeasonOrderByRelevanceFieldEnum {
  Title = 'title'
}

export type SeasonOrderByRelevanceInput = {
  fields: Array<SeasonOrderByRelevanceFieldEnum>;
  search: Scalars['String'];
  sort: SortOrder;
};

export type SeasonOrderByWithAggregationInput = {
  _avg?: Maybe<SeasonAvgOrderByAggregateInput>;
  _count?: Maybe<SeasonCountOrderByAggregateInput>;
  _max?: Maybe<SeasonMaxOrderByAggregateInput>;
  _min?: Maybe<SeasonMinOrderByAggregateInput>;
  _sum?: Maybe<SeasonSumOrderByAggregateInput>;
  createdAt?: Maybe<SortOrder>;
  episodes?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  index?: Maybe<SortOrder>;
  launchDate?: Maybe<SortOrder>;
  seriesId?: Maybe<SortOrder>;
  title?: Maybe<SortOrder>;
  updatedAt?: Maybe<SortOrder>;
};

export type SeasonOrderByWithRelationAndSearchRelevanceInput = {
  _relevance?: Maybe<SeasonOrderByRelevanceInput>;
  createdAt?: Maybe<SortOrder>;
  episodeIds?: Maybe<EpisodeOrderByRelationAggregateInput>;
  episodes?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  index?: Maybe<SortOrder>;
  launchDate?: Maybe<SortOrder>;
  series?: Maybe<SerieOrderByWithRelationAndSearchRelevanceInput>;
  seriesId?: Maybe<SortOrder>;
  title?: Maybe<SortOrder>;
  updatedAt?: Maybe<SortOrder>;
};

export type SeasonRelationFilter = {
  is?: Maybe<SeasonWhereInput>;
  isNot?: Maybe<SeasonWhereInput>;
};

export enum SeasonScalarFieldEnum {
  CreatedAt = 'createdAt',
  Episodes = 'episodes',
  Id = 'id',
  Index = 'index',
  LaunchDate = 'launchDate',
  SeriesId = 'seriesId',
  Title = 'title',
  UpdatedAt = 'updatedAt'
}

export type SeasonScalarWhereInput = {
  AND?: Maybe<Array<SeasonScalarWhereInput>>;
  NOT?: Maybe<Array<SeasonScalarWhereInput>>;
  OR?: Maybe<Array<SeasonScalarWhereInput>>;
  createdAt?: Maybe<DateTimeFilter>;
  episodes?: Maybe<IntFilter>;
  id?: Maybe<IntFilter>;
  index?: Maybe<IntFilter>;
  launchDate?: Maybe<DateTimeFilter>;
  seriesId?: Maybe<IntFilter>;
  title?: Maybe<StringFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
};

export type SeasonScalarWhereWithAggregatesInput = {
  AND?: Maybe<Array<SeasonScalarWhereWithAggregatesInput>>;
  NOT?: Maybe<Array<SeasonScalarWhereWithAggregatesInput>>;
  OR?: Maybe<Array<SeasonScalarWhereWithAggregatesInput>>;
  createdAt?: Maybe<DateTimeWithAggregatesFilter>;
  episodes?: Maybe<IntWithAggregatesFilter>;
  id?: Maybe<IntWithAggregatesFilter>;
  index?: Maybe<IntWithAggregatesFilter>;
  launchDate?: Maybe<DateTimeWithAggregatesFilter>;
  seriesId?: Maybe<IntWithAggregatesFilter>;
  title?: Maybe<StringWithAggregatesFilter>;
  updatedAt?: Maybe<DateTimeWithAggregatesFilter>;
};

export type SeasonSumAggregate = {
  __typename?: 'SeasonSumAggregate';
  episodes?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  index?: Maybe<Scalars['Int']>;
  seriesId?: Maybe<Scalars['Int']>;
};

export type SeasonSumOrderByAggregateInput = {
  episodes?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  index?: Maybe<SortOrder>;
  seriesId?: Maybe<SortOrder>;
};

export type SeasonUpdateInput = {
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  episodeIds?: Maybe<EpisodeUpdateManyWithoutSeasonInput>;
  episodes?: Maybe<IntFieldUpdateOperationsInput>;
  index?: Maybe<IntFieldUpdateOperationsInput>;
  launchDate?: Maybe<DateTimeFieldUpdateOperationsInput>;
  series?: Maybe<SerieUpdateOneRequiredWithoutSeasonsInput>;
  title?: Maybe<StringFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type SeasonUpdateManyMutationInput = {
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  episodes?: Maybe<IntFieldUpdateOperationsInput>;
  index?: Maybe<IntFieldUpdateOperationsInput>;
  launchDate?: Maybe<DateTimeFieldUpdateOperationsInput>;
  title?: Maybe<StringFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type SeasonUpdateManyWithWhereWithoutSeriesInput = {
  data: SeasonUpdateManyMutationInput;
  where: SeasonScalarWhereInput;
};

export type SeasonUpdateManyWithoutSeriesInput = {
  connect?: Maybe<Array<SeasonWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<SeasonCreateOrConnectWithoutSeriesInput>>;
  create?: Maybe<Array<SeasonCreateWithoutSeriesInput>>;
  createMany?: Maybe<SeasonCreateManySeriesInputEnvelope>;
  delete?: Maybe<Array<SeasonWhereUniqueInput>>;
  deleteMany?: Maybe<Array<SeasonScalarWhereInput>>;
  disconnect?: Maybe<Array<SeasonWhereUniqueInput>>;
  set?: Maybe<Array<SeasonWhereUniqueInput>>;
  update?: Maybe<Array<SeasonUpdateWithWhereUniqueWithoutSeriesInput>>;
  updateMany?: Maybe<Array<SeasonUpdateManyWithWhereWithoutSeriesInput>>;
  upsert?: Maybe<Array<SeasonUpsertWithWhereUniqueWithoutSeriesInput>>;
};

export type SeasonUpdateOneRequiredWithoutEpisodeIdsInput = {
  connect?: Maybe<SeasonWhereUniqueInput>;
  connectOrCreate?: Maybe<SeasonCreateOrConnectWithoutEpisodeIdsInput>;
  create?: Maybe<SeasonCreateWithoutEpisodeIdsInput>;
  update?: Maybe<SeasonUpdateWithoutEpisodeIdsInput>;
  upsert?: Maybe<SeasonUpsertWithoutEpisodeIdsInput>;
};

export type SeasonUpdateWithWhereUniqueWithoutSeriesInput = {
  data: SeasonUpdateWithoutSeriesInput;
  where: SeasonWhereUniqueInput;
};

export type SeasonUpdateWithoutEpisodeIdsInput = {
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  episodes?: Maybe<IntFieldUpdateOperationsInput>;
  index?: Maybe<IntFieldUpdateOperationsInput>;
  launchDate?: Maybe<DateTimeFieldUpdateOperationsInput>;
  series?: Maybe<SerieUpdateOneRequiredWithoutSeasonsInput>;
  title?: Maybe<StringFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type SeasonUpdateWithoutSeriesInput = {
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  episodeIds?: Maybe<EpisodeUpdateManyWithoutSeasonInput>;
  episodes?: Maybe<IntFieldUpdateOperationsInput>;
  index?: Maybe<IntFieldUpdateOperationsInput>;
  launchDate?: Maybe<DateTimeFieldUpdateOperationsInput>;
  title?: Maybe<StringFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type SeasonUpsertWithWhereUniqueWithoutSeriesInput = {
  create: SeasonCreateWithoutSeriesInput;
  update: SeasonUpdateWithoutSeriesInput;
  where: SeasonWhereUniqueInput;
};

export type SeasonUpsertWithoutEpisodeIdsInput = {
  create: SeasonCreateWithoutEpisodeIdsInput;
  update: SeasonUpdateWithoutEpisodeIdsInput;
};

export type SeasonWhereInput = {
  AND?: Maybe<Array<SeasonWhereInput>>;
  NOT?: Maybe<Array<SeasonWhereInput>>;
  OR?: Maybe<Array<SeasonWhereInput>>;
  createdAt?: Maybe<DateTimeFilter>;
  episodeIds?: Maybe<EpisodeListRelationFilter>;
  episodes?: Maybe<IntFilter>;
  id?: Maybe<IntFilter>;
  index?: Maybe<IntFilter>;
  launchDate?: Maybe<DateTimeFilter>;
  series?: Maybe<SerieRelationFilter>;
  seriesId?: Maybe<IntFilter>;
  title?: Maybe<StringFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
};

export type SeasonWhereUniqueInput = {
  id?: Maybe<Scalars['Int']>;
};

export type Serie = {
  __typename?: 'Serie';
  _count?: Maybe<SerieCount>;
  actors: Array<Actor>;
  createdAt: Scalars['DateTime'];
  directors: Array<Director>;
  genres: Array<Genre>;
  id: Scalars['Int'];
  imdbRating: Scalars['Float'];
  languages: Array<Language>;
  plot: Scalars['String'];
  poster: Scalars['String'];
  rating: Scalars['String'];
  release: Scalars['DateTime'];
  runtime: Scalars['Int'];
  seasons: Array<Season>;
  title: Scalars['String'];
  totalSeasons: Scalars['Int'];
  updatedAt: Scalars['DateTime'];
  year: Scalars['Int'];
};


export type SerieActorsArgs = {
  cursor?: Maybe<ActorWhereUniqueInput>;
  distinct?: Maybe<Array<ActorScalarFieldEnum>>;
  orderBy?: Maybe<Array<ActorOrderByWithRelationAndSearchRelevanceInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<ActorWhereInput>;
};


export type SerieDirectorsArgs = {
  cursor?: Maybe<DirectorWhereUniqueInput>;
  distinct?: Maybe<Array<DirectorScalarFieldEnum>>;
  orderBy?: Maybe<Array<DirectorOrderByWithRelationAndSearchRelevanceInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<DirectorWhereInput>;
};


export type SerieGenresArgs = {
  cursor?: Maybe<GenreWhereUniqueInput>;
  distinct?: Maybe<Array<GenreScalarFieldEnum>>;
  orderBy?: Maybe<Array<GenreOrderByWithRelationAndSearchRelevanceInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<GenreWhereInput>;
};


export type SerieLanguagesArgs = {
  cursor?: Maybe<LanguageWhereUniqueInput>;
  distinct?: Maybe<Array<LanguageScalarFieldEnum>>;
  orderBy?: Maybe<Array<LanguageOrderByWithRelationAndSearchRelevanceInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<LanguageWhereInput>;
};


export type SerieSeasonsArgs = {
  cursor?: Maybe<SeasonWhereUniqueInput>;
  distinct?: Maybe<Array<SeasonScalarFieldEnum>>;
  orderBy?: Maybe<Array<SeasonOrderByWithRelationAndSearchRelevanceInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<SeasonWhereInput>;
};

export type SerieAvgAggregate = {
  __typename?: 'SerieAvgAggregate';
  id?: Maybe<Scalars['Float']>;
  imdbRating?: Maybe<Scalars['Float']>;
  runtime?: Maybe<Scalars['Float']>;
  totalSeasons?: Maybe<Scalars['Float']>;
  year?: Maybe<Scalars['Float']>;
};

export type SerieAvgOrderByAggregateInput = {
  id?: Maybe<SortOrder>;
  imdbRating?: Maybe<SortOrder>;
  runtime?: Maybe<SortOrder>;
  totalSeasons?: Maybe<SortOrder>;
  year?: Maybe<SortOrder>;
};

export type SerieCount = {
  __typename?: 'SerieCount';
  actors: Scalars['Int'];
  directors: Scalars['Int'];
  genres: Scalars['Int'];
  languages: Scalars['Int'];
  seasons: Scalars['Int'];
};

export type SerieCountAggregate = {
  __typename?: 'SerieCountAggregate';
  _all: Scalars['Int'];
  createdAt: Scalars['Int'];
  id: Scalars['Int'];
  imdbRating: Scalars['Int'];
  plot: Scalars['Int'];
  poster: Scalars['Int'];
  rating: Scalars['Int'];
  release: Scalars['Int'];
  runtime: Scalars['Int'];
  title: Scalars['Int'];
  totalSeasons: Scalars['Int'];
  updatedAt: Scalars['Int'];
  year: Scalars['Int'];
};

export type SerieCountOrderByAggregateInput = {
  createdAt?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  imdbRating?: Maybe<SortOrder>;
  plot?: Maybe<SortOrder>;
  poster?: Maybe<SortOrder>;
  rating?: Maybe<SortOrder>;
  release?: Maybe<SortOrder>;
  runtime?: Maybe<SortOrder>;
  title?: Maybe<SortOrder>;
  totalSeasons?: Maybe<SortOrder>;
  updatedAt?: Maybe<SortOrder>;
  year?: Maybe<SortOrder>;
};

export type SerieCreateInput = {
  actors?: Maybe<ActorCreateNestedManyWithoutSeriesInput>;
  createdAt?: Maybe<Scalars['DateTime']>;
  directors?: Maybe<DirectorCreateNestedManyWithoutSeriesInput>;
  genres?: Maybe<GenreCreateNestedManyWithoutSeriesInput>;
  imdbRating: Scalars['Float'];
  languages?: Maybe<LanguageCreateNestedManyWithoutSeriesInput>;
  plot: Scalars['String'];
  poster: Scalars['String'];
  rating: Scalars['String'];
  release: Scalars['DateTime'];
  runtime: Scalars['Int'];
  seasons?: Maybe<SeasonCreateNestedManyWithoutSeriesInput>;
  title: Scalars['String'];
  totalSeasons: Scalars['Int'];
  updatedAt?: Maybe<Scalars['DateTime']>;
  year: Scalars['Int'];
};

export type SerieCreateManyInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['Int']>;
  imdbRating: Scalars['Float'];
  plot: Scalars['String'];
  poster: Scalars['String'];
  rating: Scalars['String'];
  release: Scalars['DateTime'];
  runtime: Scalars['Int'];
  title: Scalars['String'];
  totalSeasons: Scalars['Int'];
  updatedAt?: Maybe<Scalars['DateTime']>;
  year: Scalars['Int'];
};

export type SerieCreateNestedManyWithoutGenresInput = {
  connect?: Maybe<Array<SerieWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<SerieCreateOrConnectWithoutGenresInput>>;
  create?: Maybe<Array<SerieCreateWithoutGenresInput>>;
};

export type SerieCreateNestedOneWithoutActorsInput = {
  connect?: Maybe<SerieWhereUniqueInput>;
  connectOrCreate?: Maybe<SerieCreateOrConnectWithoutActorsInput>;
  create?: Maybe<SerieCreateWithoutActorsInput>;
};

export type SerieCreateNestedOneWithoutDirectorsInput = {
  connect?: Maybe<SerieWhereUniqueInput>;
  connectOrCreate?: Maybe<SerieCreateOrConnectWithoutDirectorsInput>;
  create?: Maybe<SerieCreateWithoutDirectorsInput>;
};

export type SerieCreateNestedOneWithoutLanguagesInput = {
  connect?: Maybe<SerieWhereUniqueInput>;
  connectOrCreate?: Maybe<SerieCreateOrConnectWithoutLanguagesInput>;
  create?: Maybe<SerieCreateWithoutLanguagesInput>;
};

export type SerieCreateNestedOneWithoutSeasonsInput = {
  connect?: Maybe<SerieWhereUniqueInput>;
  connectOrCreate?: Maybe<SerieCreateOrConnectWithoutSeasonsInput>;
  create?: Maybe<SerieCreateWithoutSeasonsInput>;
};

export type SerieCreateOrConnectWithoutActorsInput = {
  create: SerieCreateWithoutActorsInput;
  where: SerieWhereUniqueInput;
};

export type SerieCreateOrConnectWithoutDirectorsInput = {
  create: SerieCreateWithoutDirectorsInput;
  where: SerieWhereUniqueInput;
};

export type SerieCreateOrConnectWithoutGenresInput = {
  create: SerieCreateWithoutGenresInput;
  where: SerieWhereUniqueInput;
};

export type SerieCreateOrConnectWithoutLanguagesInput = {
  create: SerieCreateWithoutLanguagesInput;
  where: SerieWhereUniqueInput;
};

export type SerieCreateOrConnectWithoutSeasonsInput = {
  create: SerieCreateWithoutSeasonsInput;
  where: SerieWhereUniqueInput;
};

export type SerieCreateWithoutActorsInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  directors?: Maybe<DirectorCreateNestedManyWithoutSeriesInput>;
  genres?: Maybe<GenreCreateNestedManyWithoutSeriesInput>;
  imdbRating: Scalars['Float'];
  languages?: Maybe<LanguageCreateNestedManyWithoutSeriesInput>;
  plot: Scalars['String'];
  poster: Scalars['String'];
  rating: Scalars['String'];
  release: Scalars['DateTime'];
  runtime: Scalars['Int'];
  seasons?: Maybe<SeasonCreateNestedManyWithoutSeriesInput>;
  title: Scalars['String'];
  totalSeasons: Scalars['Int'];
  updatedAt?: Maybe<Scalars['DateTime']>;
  year: Scalars['Int'];
};

export type SerieCreateWithoutDirectorsInput = {
  actors?: Maybe<ActorCreateNestedManyWithoutSeriesInput>;
  createdAt?: Maybe<Scalars['DateTime']>;
  genres?: Maybe<GenreCreateNestedManyWithoutSeriesInput>;
  imdbRating: Scalars['Float'];
  languages?: Maybe<LanguageCreateNestedManyWithoutSeriesInput>;
  plot: Scalars['String'];
  poster: Scalars['String'];
  rating: Scalars['String'];
  release: Scalars['DateTime'];
  runtime: Scalars['Int'];
  seasons?: Maybe<SeasonCreateNestedManyWithoutSeriesInput>;
  title: Scalars['String'];
  totalSeasons: Scalars['Int'];
  updatedAt?: Maybe<Scalars['DateTime']>;
  year: Scalars['Int'];
};

export type SerieCreateWithoutGenresInput = {
  actors?: Maybe<ActorCreateNestedManyWithoutSeriesInput>;
  createdAt?: Maybe<Scalars['DateTime']>;
  directors?: Maybe<DirectorCreateNestedManyWithoutSeriesInput>;
  imdbRating: Scalars['Float'];
  languages?: Maybe<LanguageCreateNestedManyWithoutSeriesInput>;
  plot: Scalars['String'];
  poster: Scalars['String'];
  rating: Scalars['String'];
  release: Scalars['DateTime'];
  runtime: Scalars['Int'];
  seasons?: Maybe<SeasonCreateNestedManyWithoutSeriesInput>;
  title: Scalars['String'];
  totalSeasons: Scalars['Int'];
  updatedAt?: Maybe<Scalars['DateTime']>;
  year: Scalars['Int'];
};

export type SerieCreateWithoutLanguagesInput = {
  actors?: Maybe<ActorCreateNestedManyWithoutSeriesInput>;
  createdAt?: Maybe<Scalars['DateTime']>;
  directors?: Maybe<DirectorCreateNestedManyWithoutSeriesInput>;
  genres?: Maybe<GenreCreateNestedManyWithoutSeriesInput>;
  imdbRating: Scalars['Float'];
  plot: Scalars['String'];
  poster: Scalars['String'];
  rating: Scalars['String'];
  release: Scalars['DateTime'];
  runtime: Scalars['Int'];
  seasons?: Maybe<SeasonCreateNestedManyWithoutSeriesInput>;
  title: Scalars['String'];
  totalSeasons: Scalars['Int'];
  updatedAt?: Maybe<Scalars['DateTime']>;
  year: Scalars['Int'];
};

export type SerieCreateWithoutSeasonsInput = {
  actors?: Maybe<ActorCreateNestedManyWithoutSeriesInput>;
  createdAt?: Maybe<Scalars['DateTime']>;
  directors?: Maybe<DirectorCreateNestedManyWithoutSeriesInput>;
  genres?: Maybe<GenreCreateNestedManyWithoutSeriesInput>;
  imdbRating: Scalars['Float'];
  languages?: Maybe<LanguageCreateNestedManyWithoutSeriesInput>;
  plot: Scalars['String'];
  poster: Scalars['String'];
  rating: Scalars['String'];
  release: Scalars['DateTime'];
  runtime: Scalars['Int'];
  title: Scalars['String'];
  totalSeasons: Scalars['Int'];
  updatedAt?: Maybe<Scalars['DateTime']>;
  year: Scalars['Int'];
};

export type SerieGroupBy = {
  __typename?: 'SerieGroupBy';
  _avg?: Maybe<SerieAvgAggregate>;
  _count?: Maybe<SerieCountAggregate>;
  _max?: Maybe<SerieMaxAggregate>;
  _min?: Maybe<SerieMinAggregate>;
  _sum?: Maybe<SerieSumAggregate>;
  createdAt: Scalars['DateTime'];
  id: Scalars['Int'];
  imdbRating: Scalars['Float'];
  plot: Scalars['String'];
  poster: Scalars['String'];
  rating: Scalars['String'];
  release: Scalars['DateTime'];
  runtime: Scalars['Int'];
  title: Scalars['String'];
  totalSeasons: Scalars['Int'];
  updatedAt: Scalars['DateTime'];
  year: Scalars['Int'];
};

export type SerieListRelationFilter = {
  every?: Maybe<SerieWhereInput>;
  none?: Maybe<SerieWhereInput>;
  some?: Maybe<SerieWhereInput>;
};

export type SerieMaxAggregate = {
  __typename?: 'SerieMaxAggregate';
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['Int']>;
  imdbRating?: Maybe<Scalars['Float']>;
  plot?: Maybe<Scalars['String']>;
  poster?: Maybe<Scalars['String']>;
  rating?: Maybe<Scalars['String']>;
  release?: Maybe<Scalars['DateTime']>;
  runtime?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
  totalSeasons?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  year?: Maybe<Scalars['Int']>;
};

export type SerieMaxOrderByAggregateInput = {
  createdAt?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  imdbRating?: Maybe<SortOrder>;
  plot?: Maybe<SortOrder>;
  poster?: Maybe<SortOrder>;
  rating?: Maybe<SortOrder>;
  release?: Maybe<SortOrder>;
  runtime?: Maybe<SortOrder>;
  title?: Maybe<SortOrder>;
  totalSeasons?: Maybe<SortOrder>;
  updatedAt?: Maybe<SortOrder>;
  year?: Maybe<SortOrder>;
};

export type SerieMinAggregate = {
  __typename?: 'SerieMinAggregate';
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['Int']>;
  imdbRating?: Maybe<Scalars['Float']>;
  plot?: Maybe<Scalars['String']>;
  poster?: Maybe<Scalars['String']>;
  rating?: Maybe<Scalars['String']>;
  release?: Maybe<Scalars['DateTime']>;
  runtime?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
  totalSeasons?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  year?: Maybe<Scalars['Int']>;
};

export type SerieMinOrderByAggregateInput = {
  createdAt?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  imdbRating?: Maybe<SortOrder>;
  plot?: Maybe<SortOrder>;
  poster?: Maybe<SortOrder>;
  rating?: Maybe<SortOrder>;
  release?: Maybe<SortOrder>;
  runtime?: Maybe<SortOrder>;
  title?: Maybe<SortOrder>;
  totalSeasons?: Maybe<SortOrder>;
  updatedAt?: Maybe<SortOrder>;
  year?: Maybe<SortOrder>;
};

export type SerieOrderByRelationAggregateInput = {
  _count?: Maybe<SortOrder>;
};

export enum SerieOrderByRelevanceFieldEnum {
  Plot = 'plot',
  Poster = 'poster',
  Rating = 'rating',
  Title = 'title'
}

export type SerieOrderByRelevanceInput = {
  fields: Array<SerieOrderByRelevanceFieldEnum>;
  search: Scalars['String'];
  sort: SortOrder;
};

export type SerieOrderByWithAggregationInput = {
  _avg?: Maybe<SerieAvgOrderByAggregateInput>;
  _count?: Maybe<SerieCountOrderByAggregateInput>;
  _max?: Maybe<SerieMaxOrderByAggregateInput>;
  _min?: Maybe<SerieMinOrderByAggregateInput>;
  _sum?: Maybe<SerieSumOrderByAggregateInput>;
  createdAt?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  imdbRating?: Maybe<SortOrder>;
  plot?: Maybe<SortOrder>;
  poster?: Maybe<SortOrder>;
  rating?: Maybe<SortOrder>;
  release?: Maybe<SortOrder>;
  runtime?: Maybe<SortOrder>;
  title?: Maybe<SortOrder>;
  totalSeasons?: Maybe<SortOrder>;
  updatedAt?: Maybe<SortOrder>;
  year?: Maybe<SortOrder>;
};

export type SerieOrderByWithRelationAndSearchRelevanceInput = {
  _relevance?: Maybe<SerieOrderByRelevanceInput>;
  actors?: Maybe<ActorOrderByRelationAggregateInput>;
  createdAt?: Maybe<SortOrder>;
  directors?: Maybe<DirectorOrderByRelationAggregateInput>;
  genres?: Maybe<GenreOrderByRelationAggregateInput>;
  id?: Maybe<SortOrder>;
  imdbRating?: Maybe<SortOrder>;
  languages?: Maybe<LanguageOrderByRelationAggregateInput>;
  plot?: Maybe<SortOrder>;
  poster?: Maybe<SortOrder>;
  rating?: Maybe<SortOrder>;
  release?: Maybe<SortOrder>;
  runtime?: Maybe<SortOrder>;
  seasons?: Maybe<SeasonOrderByRelationAggregateInput>;
  title?: Maybe<SortOrder>;
  totalSeasons?: Maybe<SortOrder>;
  updatedAt?: Maybe<SortOrder>;
  year?: Maybe<SortOrder>;
};

export type SerieRelationFilter = {
  is?: Maybe<SerieWhereInput>;
  isNot?: Maybe<SerieWhereInput>;
};

export enum SerieScalarFieldEnum {
  CreatedAt = 'createdAt',
  Id = 'id',
  ImdbRating = 'imdbRating',
  Plot = 'plot',
  Poster = 'poster',
  Rating = 'rating',
  Release = 'release',
  Runtime = 'runtime',
  Title = 'title',
  TotalSeasons = 'totalSeasons',
  UpdatedAt = 'updatedAt',
  Year = 'year'
}

export type SerieScalarWhereInput = {
  AND?: Maybe<Array<SerieScalarWhereInput>>;
  NOT?: Maybe<Array<SerieScalarWhereInput>>;
  OR?: Maybe<Array<SerieScalarWhereInput>>;
  createdAt?: Maybe<DateTimeFilter>;
  id?: Maybe<IntFilter>;
  imdbRating?: Maybe<FloatFilter>;
  plot?: Maybe<StringFilter>;
  poster?: Maybe<StringFilter>;
  rating?: Maybe<StringFilter>;
  release?: Maybe<DateTimeFilter>;
  runtime?: Maybe<IntFilter>;
  title?: Maybe<StringFilter>;
  totalSeasons?: Maybe<IntFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
  year?: Maybe<IntFilter>;
};

export type SerieScalarWhereWithAggregatesInput = {
  AND?: Maybe<Array<SerieScalarWhereWithAggregatesInput>>;
  NOT?: Maybe<Array<SerieScalarWhereWithAggregatesInput>>;
  OR?: Maybe<Array<SerieScalarWhereWithAggregatesInput>>;
  createdAt?: Maybe<DateTimeWithAggregatesFilter>;
  id?: Maybe<IntWithAggregatesFilter>;
  imdbRating?: Maybe<FloatWithAggregatesFilter>;
  plot?: Maybe<StringWithAggregatesFilter>;
  poster?: Maybe<StringWithAggregatesFilter>;
  rating?: Maybe<StringWithAggregatesFilter>;
  release?: Maybe<DateTimeWithAggregatesFilter>;
  runtime?: Maybe<IntWithAggregatesFilter>;
  title?: Maybe<StringWithAggregatesFilter>;
  totalSeasons?: Maybe<IntWithAggregatesFilter>;
  updatedAt?: Maybe<DateTimeWithAggregatesFilter>;
  year?: Maybe<IntWithAggregatesFilter>;
};

export type SerieSumAggregate = {
  __typename?: 'SerieSumAggregate';
  id?: Maybe<Scalars['Int']>;
  imdbRating?: Maybe<Scalars['Float']>;
  runtime?: Maybe<Scalars['Int']>;
  totalSeasons?: Maybe<Scalars['Int']>;
  year?: Maybe<Scalars['Int']>;
};

export type SerieSumOrderByAggregateInput = {
  id?: Maybe<SortOrder>;
  imdbRating?: Maybe<SortOrder>;
  runtime?: Maybe<SortOrder>;
  totalSeasons?: Maybe<SortOrder>;
  year?: Maybe<SortOrder>;
};

export type SerieUpdateInput = {
  actors?: Maybe<ActorUpdateManyWithoutSeriesInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  directors?: Maybe<DirectorUpdateManyWithoutSeriesInput>;
  genres?: Maybe<GenreUpdateManyWithoutSeriesInput>;
  imdbRating?: Maybe<FloatFieldUpdateOperationsInput>;
  languages?: Maybe<LanguageUpdateManyWithoutSeriesInput>;
  plot?: Maybe<StringFieldUpdateOperationsInput>;
  poster?: Maybe<StringFieldUpdateOperationsInput>;
  rating?: Maybe<StringFieldUpdateOperationsInput>;
  release?: Maybe<DateTimeFieldUpdateOperationsInput>;
  runtime?: Maybe<IntFieldUpdateOperationsInput>;
  seasons?: Maybe<SeasonUpdateManyWithoutSeriesInput>;
  title?: Maybe<StringFieldUpdateOperationsInput>;
  totalSeasons?: Maybe<IntFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  year?: Maybe<IntFieldUpdateOperationsInput>;
};

export type SerieUpdateManyMutationInput = {
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  imdbRating?: Maybe<FloatFieldUpdateOperationsInput>;
  plot?: Maybe<StringFieldUpdateOperationsInput>;
  poster?: Maybe<StringFieldUpdateOperationsInput>;
  rating?: Maybe<StringFieldUpdateOperationsInput>;
  release?: Maybe<DateTimeFieldUpdateOperationsInput>;
  runtime?: Maybe<IntFieldUpdateOperationsInput>;
  title?: Maybe<StringFieldUpdateOperationsInput>;
  totalSeasons?: Maybe<IntFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  year?: Maybe<IntFieldUpdateOperationsInput>;
};

export type SerieUpdateManyWithWhereWithoutGenresInput = {
  data: SerieUpdateManyMutationInput;
  where: SerieScalarWhereInput;
};

export type SerieUpdateManyWithoutGenresInput = {
  connect?: Maybe<Array<SerieWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<SerieCreateOrConnectWithoutGenresInput>>;
  create?: Maybe<Array<SerieCreateWithoutGenresInput>>;
  delete?: Maybe<Array<SerieWhereUniqueInput>>;
  deleteMany?: Maybe<Array<SerieScalarWhereInput>>;
  disconnect?: Maybe<Array<SerieWhereUniqueInput>>;
  set?: Maybe<Array<SerieWhereUniqueInput>>;
  update?: Maybe<Array<SerieUpdateWithWhereUniqueWithoutGenresInput>>;
  updateMany?: Maybe<Array<SerieUpdateManyWithWhereWithoutGenresInput>>;
  upsert?: Maybe<Array<SerieUpsertWithWhereUniqueWithoutGenresInput>>;
};

export type SerieUpdateOneRequiredWithoutSeasonsInput = {
  connect?: Maybe<SerieWhereUniqueInput>;
  connectOrCreate?: Maybe<SerieCreateOrConnectWithoutSeasonsInput>;
  create?: Maybe<SerieCreateWithoutSeasonsInput>;
  update?: Maybe<SerieUpdateWithoutSeasonsInput>;
  upsert?: Maybe<SerieUpsertWithoutSeasonsInput>;
};

export type SerieUpdateOneWithoutActorsInput = {
  connect?: Maybe<SerieWhereUniqueInput>;
  connectOrCreate?: Maybe<SerieCreateOrConnectWithoutActorsInput>;
  create?: Maybe<SerieCreateWithoutActorsInput>;
  delete?: Maybe<Scalars['Boolean']>;
  disconnect?: Maybe<Scalars['Boolean']>;
  update?: Maybe<SerieUpdateWithoutActorsInput>;
  upsert?: Maybe<SerieUpsertWithoutActorsInput>;
};

export type SerieUpdateOneWithoutDirectorsInput = {
  connect?: Maybe<SerieWhereUniqueInput>;
  connectOrCreate?: Maybe<SerieCreateOrConnectWithoutDirectorsInput>;
  create?: Maybe<SerieCreateWithoutDirectorsInput>;
  delete?: Maybe<Scalars['Boolean']>;
  disconnect?: Maybe<Scalars['Boolean']>;
  update?: Maybe<SerieUpdateWithoutDirectorsInput>;
  upsert?: Maybe<SerieUpsertWithoutDirectorsInput>;
};

export type SerieUpdateOneWithoutLanguagesInput = {
  connect?: Maybe<SerieWhereUniqueInput>;
  connectOrCreate?: Maybe<SerieCreateOrConnectWithoutLanguagesInput>;
  create?: Maybe<SerieCreateWithoutLanguagesInput>;
  delete?: Maybe<Scalars['Boolean']>;
  disconnect?: Maybe<Scalars['Boolean']>;
  update?: Maybe<SerieUpdateWithoutLanguagesInput>;
  upsert?: Maybe<SerieUpsertWithoutLanguagesInput>;
};

export type SerieUpdateWithWhereUniqueWithoutGenresInput = {
  data: SerieUpdateWithoutGenresInput;
  where: SerieWhereUniqueInput;
};

export type SerieUpdateWithoutActorsInput = {
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  directors?: Maybe<DirectorUpdateManyWithoutSeriesInput>;
  genres?: Maybe<GenreUpdateManyWithoutSeriesInput>;
  imdbRating?: Maybe<FloatFieldUpdateOperationsInput>;
  languages?: Maybe<LanguageUpdateManyWithoutSeriesInput>;
  plot?: Maybe<StringFieldUpdateOperationsInput>;
  poster?: Maybe<StringFieldUpdateOperationsInput>;
  rating?: Maybe<StringFieldUpdateOperationsInput>;
  release?: Maybe<DateTimeFieldUpdateOperationsInput>;
  runtime?: Maybe<IntFieldUpdateOperationsInput>;
  seasons?: Maybe<SeasonUpdateManyWithoutSeriesInput>;
  title?: Maybe<StringFieldUpdateOperationsInput>;
  totalSeasons?: Maybe<IntFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  year?: Maybe<IntFieldUpdateOperationsInput>;
};

export type SerieUpdateWithoutDirectorsInput = {
  actors?: Maybe<ActorUpdateManyWithoutSeriesInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  genres?: Maybe<GenreUpdateManyWithoutSeriesInput>;
  imdbRating?: Maybe<FloatFieldUpdateOperationsInput>;
  languages?: Maybe<LanguageUpdateManyWithoutSeriesInput>;
  plot?: Maybe<StringFieldUpdateOperationsInput>;
  poster?: Maybe<StringFieldUpdateOperationsInput>;
  rating?: Maybe<StringFieldUpdateOperationsInput>;
  release?: Maybe<DateTimeFieldUpdateOperationsInput>;
  runtime?: Maybe<IntFieldUpdateOperationsInput>;
  seasons?: Maybe<SeasonUpdateManyWithoutSeriesInput>;
  title?: Maybe<StringFieldUpdateOperationsInput>;
  totalSeasons?: Maybe<IntFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  year?: Maybe<IntFieldUpdateOperationsInput>;
};

export type SerieUpdateWithoutGenresInput = {
  actors?: Maybe<ActorUpdateManyWithoutSeriesInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  directors?: Maybe<DirectorUpdateManyWithoutSeriesInput>;
  imdbRating?: Maybe<FloatFieldUpdateOperationsInput>;
  languages?: Maybe<LanguageUpdateManyWithoutSeriesInput>;
  plot?: Maybe<StringFieldUpdateOperationsInput>;
  poster?: Maybe<StringFieldUpdateOperationsInput>;
  rating?: Maybe<StringFieldUpdateOperationsInput>;
  release?: Maybe<DateTimeFieldUpdateOperationsInput>;
  runtime?: Maybe<IntFieldUpdateOperationsInput>;
  seasons?: Maybe<SeasonUpdateManyWithoutSeriesInput>;
  title?: Maybe<StringFieldUpdateOperationsInput>;
  totalSeasons?: Maybe<IntFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  year?: Maybe<IntFieldUpdateOperationsInput>;
};

export type SerieUpdateWithoutLanguagesInput = {
  actors?: Maybe<ActorUpdateManyWithoutSeriesInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  directors?: Maybe<DirectorUpdateManyWithoutSeriesInput>;
  genres?: Maybe<GenreUpdateManyWithoutSeriesInput>;
  imdbRating?: Maybe<FloatFieldUpdateOperationsInput>;
  plot?: Maybe<StringFieldUpdateOperationsInput>;
  poster?: Maybe<StringFieldUpdateOperationsInput>;
  rating?: Maybe<StringFieldUpdateOperationsInput>;
  release?: Maybe<DateTimeFieldUpdateOperationsInput>;
  runtime?: Maybe<IntFieldUpdateOperationsInput>;
  seasons?: Maybe<SeasonUpdateManyWithoutSeriesInput>;
  title?: Maybe<StringFieldUpdateOperationsInput>;
  totalSeasons?: Maybe<IntFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  year?: Maybe<IntFieldUpdateOperationsInput>;
};

export type SerieUpdateWithoutSeasonsInput = {
  actors?: Maybe<ActorUpdateManyWithoutSeriesInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  directors?: Maybe<DirectorUpdateManyWithoutSeriesInput>;
  genres?: Maybe<GenreUpdateManyWithoutSeriesInput>;
  imdbRating?: Maybe<FloatFieldUpdateOperationsInput>;
  languages?: Maybe<LanguageUpdateManyWithoutSeriesInput>;
  plot?: Maybe<StringFieldUpdateOperationsInput>;
  poster?: Maybe<StringFieldUpdateOperationsInput>;
  rating?: Maybe<StringFieldUpdateOperationsInput>;
  release?: Maybe<DateTimeFieldUpdateOperationsInput>;
  runtime?: Maybe<IntFieldUpdateOperationsInput>;
  title?: Maybe<StringFieldUpdateOperationsInput>;
  totalSeasons?: Maybe<IntFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  year?: Maybe<IntFieldUpdateOperationsInput>;
};

export type SerieUpsertWithWhereUniqueWithoutGenresInput = {
  create: SerieCreateWithoutGenresInput;
  update: SerieUpdateWithoutGenresInput;
  where: SerieWhereUniqueInput;
};

export type SerieUpsertWithoutActorsInput = {
  create: SerieCreateWithoutActorsInput;
  update: SerieUpdateWithoutActorsInput;
};

export type SerieUpsertWithoutDirectorsInput = {
  create: SerieCreateWithoutDirectorsInput;
  update: SerieUpdateWithoutDirectorsInput;
};

export type SerieUpsertWithoutLanguagesInput = {
  create: SerieCreateWithoutLanguagesInput;
  update: SerieUpdateWithoutLanguagesInput;
};

export type SerieUpsertWithoutSeasonsInput = {
  create: SerieCreateWithoutSeasonsInput;
  update: SerieUpdateWithoutSeasonsInput;
};

export type SerieWhereInput = {
  AND?: Maybe<Array<SerieWhereInput>>;
  NOT?: Maybe<Array<SerieWhereInput>>;
  OR?: Maybe<Array<SerieWhereInput>>;
  actors?: Maybe<ActorListRelationFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  directors?: Maybe<DirectorListRelationFilter>;
  genres?: Maybe<GenreListRelationFilter>;
  id?: Maybe<IntFilter>;
  imdbRating?: Maybe<FloatFilter>;
  languages?: Maybe<LanguageListRelationFilter>;
  plot?: Maybe<StringFilter>;
  poster?: Maybe<StringFilter>;
  rating?: Maybe<StringFilter>;
  release?: Maybe<DateTimeFilter>;
  runtime?: Maybe<IntFilter>;
  seasons?: Maybe<SeasonListRelationFilter>;
  title?: Maybe<StringFilter>;
  totalSeasons?: Maybe<IntFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
  year?: Maybe<IntFilter>;
};

export type SerieWhereUniqueInput = {
  id?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
};

export type Session = {
  __typename?: 'Session';
  expires: Scalars['DateTime'];
  id: Scalars['String'];
  sessionToken: Scalars['String'];
  user: User;
  userId: Scalars['String'];
};

export type SessionCountAggregate = {
  __typename?: 'SessionCountAggregate';
  _all: Scalars['Int'];
  expires: Scalars['Int'];
  id: Scalars['Int'];
  sessionToken: Scalars['Int'];
  userId: Scalars['Int'];
};

export type SessionCountOrderByAggregateInput = {
  expires?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  sessionToken?: Maybe<SortOrder>;
  userId?: Maybe<SortOrder>;
};

export type SessionCreateInput = {
  expires: Scalars['DateTime'];
  id?: Maybe<Scalars['String']>;
  sessionToken: Scalars['String'];
  user: UserCreateNestedOneWithoutSessionsInput;
};

export type SessionCreateManyInput = {
  expires: Scalars['DateTime'];
  id?: Maybe<Scalars['String']>;
  sessionToken: Scalars['String'];
  userId: Scalars['String'];
};

export type SessionCreateManyUserInput = {
  expires: Scalars['DateTime'];
  id?: Maybe<Scalars['String']>;
  sessionToken: Scalars['String'];
};

export type SessionCreateManyUserInputEnvelope = {
  data: Array<SessionCreateManyUserInput>;
  skipDuplicates?: Maybe<Scalars['Boolean']>;
};

export type SessionCreateNestedManyWithoutUserInput = {
  connect?: Maybe<Array<SessionWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<SessionCreateOrConnectWithoutUserInput>>;
  create?: Maybe<Array<SessionCreateWithoutUserInput>>;
  createMany?: Maybe<SessionCreateManyUserInputEnvelope>;
};

export type SessionCreateOrConnectWithoutUserInput = {
  create: SessionCreateWithoutUserInput;
  where: SessionWhereUniqueInput;
};

export type SessionCreateWithoutUserInput = {
  expires: Scalars['DateTime'];
  id?: Maybe<Scalars['String']>;
  sessionToken: Scalars['String'];
};

export type SessionGroupBy = {
  __typename?: 'SessionGroupBy';
  _count?: Maybe<SessionCountAggregate>;
  _max?: Maybe<SessionMaxAggregate>;
  _min?: Maybe<SessionMinAggregate>;
  expires: Scalars['DateTime'];
  id: Scalars['String'];
  sessionToken: Scalars['String'];
  userId: Scalars['String'];
};

export type SessionListRelationFilter = {
  every?: Maybe<SessionWhereInput>;
  none?: Maybe<SessionWhereInput>;
  some?: Maybe<SessionWhereInput>;
};

export type SessionMaxAggregate = {
  __typename?: 'SessionMaxAggregate';
  expires?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  sessionToken?: Maybe<Scalars['String']>;
  userId?: Maybe<Scalars['String']>;
};

export type SessionMaxOrderByAggregateInput = {
  expires?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  sessionToken?: Maybe<SortOrder>;
  userId?: Maybe<SortOrder>;
};

export type SessionMinAggregate = {
  __typename?: 'SessionMinAggregate';
  expires?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  sessionToken?: Maybe<Scalars['String']>;
  userId?: Maybe<Scalars['String']>;
};

export type SessionMinOrderByAggregateInput = {
  expires?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  sessionToken?: Maybe<SortOrder>;
  userId?: Maybe<SortOrder>;
};

export type SessionOrderByRelationAggregateInput = {
  _count?: Maybe<SortOrder>;
};

export enum SessionOrderByRelevanceFieldEnum {
  Id = 'id',
  SessionToken = 'sessionToken',
  UserId = 'userId'
}

export type SessionOrderByRelevanceInput = {
  fields: Array<SessionOrderByRelevanceFieldEnum>;
  search: Scalars['String'];
  sort: SortOrder;
};

export type SessionOrderByWithAggregationInput = {
  _count?: Maybe<SessionCountOrderByAggregateInput>;
  _max?: Maybe<SessionMaxOrderByAggregateInput>;
  _min?: Maybe<SessionMinOrderByAggregateInput>;
  expires?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  sessionToken?: Maybe<SortOrder>;
  userId?: Maybe<SortOrder>;
};

export type SessionOrderByWithRelationAndSearchRelevanceInput = {
  _relevance?: Maybe<SessionOrderByRelevanceInput>;
  expires?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  sessionToken?: Maybe<SortOrder>;
  user?: Maybe<UserOrderByWithRelationAndSearchRelevanceInput>;
  userId?: Maybe<SortOrder>;
};

export enum SessionScalarFieldEnum {
  Expires = 'expires',
  Id = 'id',
  SessionToken = 'sessionToken',
  UserId = 'userId'
}

export type SessionScalarWhereInput = {
  AND?: Maybe<Array<SessionScalarWhereInput>>;
  NOT?: Maybe<Array<SessionScalarWhereInput>>;
  OR?: Maybe<Array<SessionScalarWhereInput>>;
  expires?: Maybe<DateTimeFilter>;
  id?: Maybe<StringFilter>;
  sessionToken?: Maybe<StringFilter>;
  userId?: Maybe<StringFilter>;
};

export type SessionScalarWhereWithAggregatesInput = {
  AND?: Maybe<Array<SessionScalarWhereWithAggregatesInput>>;
  NOT?: Maybe<Array<SessionScalarWhereWithAggregatesInput>>;
  OR?: Maybe<Array<SessionScalarWhereWithAggregatesInput>>;
  expires?: Maybe<DateTimeWithAggregatesFilter>;
  id?: Maybe<StringWithAggregatesFilter>;
  sessionToken?: Maybe<StringWithAggregatesFilter>;
  userId?: Maybe<StringWithAggregatesFilter>;
};

export type SessionUpdateInput = {
  expires?: Maybe<DateTimeFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  sessionToken?: Maybe<StringFieldUpdateOperationsInput>;
  user?: Maybe<UserUpdateOneRequiredWithoutSessionsInput>;
};

export type SessionUpdateManyMutationInput = {
  expires?: Maybe<DateTimeFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  sessionToken?: Maybe<StringFieldUpdateOperationsInput>;
};

export type SessionUpdateManyWithWhereWithoutUserInput = {
  data: SessionUpdateManyMutationInput;
  where: SessionScalarWhereInput;
};

export type SessionUpdateManyWithoutUserInput = {
  connect?: Maybe<Array<SessionWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<SessionCreateOrConnectWithoutUserInput>>;
  create?: Maybe<Array<SessionCreateWithoutUserInput>>;
  createMany?: Maybe<SessionCreateManyUserInputEnvelope>;
  delete?: Maybe<Array<SessionWhereUniqueInput>>;
  deleteMany?: Maybe<Array<SessionScalarWhereInput>>;
  disconnect?: Maybe<Array<SessionWhereUniqueInput>>;
  set?: Maybe<Array<SessionWhereUniqueInput>>;
  update?: Maybe<Array<SessionUpdateWithWhereUniqueWithoutUserInput>>;
  updateMany?: Maybe<Array<SessionUpdateManyWithWhereWithoutUserInput>>;
  upsert?: Maybe<Array<SessionUpsertWithWhereUniqueWithoutUserInput>>;
};

export type SessionUpdateWithWhereUniqueWithoutUserInput = {
  data: SessionUpdateWithoutUserInput;
  where: SessionWhereUniqueInput;
};

export type SessionUpdateWithoutUserInput = {
  expires?: Maybe<DateTimeFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  sessionToken?: Maybe<StringFieldUpdateOperationsInput>;
};

export type SessionUpsertWithWhereUniqueWithoutUserInput = {
  create: SessionCreateWithoutUserInput;
  update: SessionUpdateWithoutUserInput;
  where: SessionWhereUniqueInput;
};

export type SessionWhereInput = {
  AND?: Maybe<Array<SessionWhereInput>>;
  NOT?: Maybe<Array<SessionWhereInput>>;
  OR?: Maybe<Array<SessionWhereInput>>;
  expires?: Maybe<DateTimeFilter>;
  id?: Maybe<StringFilter>;
  sessionToken?: Maybe<StringFilter>;
  user?: Maybe<UserRelationFilter>;
  userId?: Maybe<StringFilter>;
};

export type SessionWhereUniqueInput = {
  id?: Maybe<Scalars['String']>;
  sessionToken?: Maybe<Scalars['String']>;
};

export enum SortOrder {
  Asc = 'asc',
  Desc = 'desc'
}

export type StringFieldUpdateOperationsInput = {
  set?: Maybe<Scalars['String']>;
};

export type StringFilter = {
  contains?: Maybe<Scalars['String']>;
  endsWith?: Maybe<Scalars['String']>;
  equals?: Maybe<Scalars['String']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Scalars['String']>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  mode?: Maybe<QueryMode>;
  not?: Maybe<NestedStringFilter>;
  notIn?: Maybe<Array<Scalars['String']>>;
  search?: Maybe<Scalars['String']>;
  startsWith?: Maybe<Scalars['String']>;
};

export type StringNullableFilter = {
  contains?: Maybe<Scalars['String']>;
  endsWith?: Maybe<Scalars['String']>;
  equals?: Maybe<Scalars['String']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Scalars['String']>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  mode?: Maybe<QueryMode>;
  not?: Maybe<NestedStringNullableFilter>;
  notIn?: Maybe<Array<Scalars['String']>>;
  search?: Maybe<Scalars['String']>;
  startsWith?: Maybe<Scalars['String']>;
};

export type StringNullableWithAggregatesFilter = {
  _count?: Maybe<NestedIntNullableFilter>;
  _max?: Maybe<NestedStringNullableFilter>;
  _min?: Maybe<NestedStringNullableFilter>;
  contains?: Maybe<Scalars['String']>;
  endsWith?: Maybe<Scalars['String']>;
  equals?: Maybe<Scalars['String']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Scalars['String']>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  mode?: Maybe<QueryMode>;
  not?: Maybe<NestedStringNullableWithAggregatesFilter>;
  notIn?: Maybe<Array<Scalars['String']>>;
  search?: Maybe<Scalars['String']>;
  startsWith?: Maybe<Scalars['String']>;
};

export type StringWithAggregatesFilter = {
  _count?: Maybe<NestedIntFilter>;
  _max?: Maybe<NestedStringFilter>;
  _min?: Maybe<NestedStringFilter>;
  contains?: Maybe<Scalars['String']>;
  endsWith?: Maybe<Scalars['String']>;
  equals?: Maybe<Scalars['String']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Scalars['String']>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  mode?: Maybe<QueryMode>;
  not?: Maybe<NestedStringWithAggregatesFilter>;
  notIn?: Maybe<Array<Scalars['String']>>;
  search?: Maybe<Scalars['String']>;
  startsWith?: Maybe<Scalars['String']>;
};

export type User = {
  __typename?: 'User';
  _count?: Maybe<UserCount>;
  accounts: Array<Account>;
  createdAt: Scalars['DateTime'];
  email: Scalars['String'];
  emailVerified?: Maybe<Scalars['DateTime']>;
  firstName?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  image?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  role: Role;
  sessions: Array<Session>;
  updatedAt: Scalars['DateTime'];
  username?: Maybe<Scalars['String']>;
};


export type UserAccountsArgs = {
  cursor?: Maybe<AccountWhereUniqueInput>;
  distinct?: Maybe<Array<AccountScalarFieldEnum>>;
  orderBy?: Maybe<Array<AccountOrderByWithRelationAndSearchRelevanceInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<AccountWhereInput>;
};


export type UserSessionsArgs = {
  cursor?: Maybe<SessionWhereUniqueInput>;
  distinct?: Maybe<Array<SessionScalarFieldEnum>>;
  orderBy?: Maybe<Array<SessionOrderByWithRelationAndSearchRelevanceInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<SessionWhereInput>;
};

export type UserCount = {
  __typename?: 'UserCount';
  accounts: Scalars['Int'];
  sessions: Scalars['Int'];
};

export type UserCountAggregate = {
  __typename?: 'UserCountAggregate';
  _all: Scalars['Int'];
  createdAt: Scalars['Int'];
  email: Scalars['Int'];
  emailVerified: Scalars['Int'];
  firstName: Scalars['Int'];
  id: Scalars['Int'];
  image: Scalars['Int'];
  lastName: Scalars['Int'];
  role: Scalars['Int'];
  updatedAt: Scalars['Int'];
  username: Scalars['Int'];
};

export type UserCountOrderByAggregateInput = {
  createdAt?: Maybe<SortOrder>;
  email?: Maybe<SortOrder>;
  emailVerified?: Maybe<SortOrder>;
  firstName?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  image?: Maybe<SortOrder>;
  lastName?: Maybe<SortOrder>;
  role?: Maybe<SortOrder>;
  updatedAt?: Maybe<SortOrder>;
  username?: Maybe<SortOrder>;
};

export type UserCreateInput = {
  accounts?: Maybe<AccountCreateNestedManyWithoutUserInput>;
  createdAt?: Maybe<Scalars['DateTime']>;
  email: Scalars['String'];
  emailVerified?: Maybe<Scalars['DateTime']>;
  firstName?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  role?: Maybe<Role>;
  sessions?: Maybe<SessionCreateNestedManyWithoutUserInput>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  username?: Maybe<Scalars['String']>;
};

export type UserCreateManyInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  email: Scalars['String'];
  emailVerified?: Maybe<Scalars['DateTime']>;
  firstName?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  role?: Maybe<Role>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  username?: Maybe<Scalars['String']>;
};

export type UserCreateNestedOneWithoutAccountsInput = {
  connect?: Maybe<UserWhereUniqueInput>;
  connectOrCreate?: Maybe<UserCreateOrConnectWithoutAccountsInput>;
  create?: Maybe<UserCreateWithoutAccountsInput>;
};

export type UserCreateNestedOneWithoutSessionsInput = {
  connect?: Maybe<UserWhereUniqueInput>;
  connectOrCreate?: Maybe<UserCreateOrConnectWithoutSessionsInput>;
  create?: Maybe<UserCreateWithoutSessionsInput>;
};

export type UserCreateOrConnectWithoutAccountsInput = {
  create: UserCreateWithoutAccountsInput;
  where: UserWhereUniqueInput;
};

export type UserCreateOrConnectWithoutSessionsInput = {
  create: UserCreateWithoutSessionsInput;
  where: UserWhereUniqueInput;
};

export type UserCreateWithoutAccountsInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  email: Scalars['String'];
  emailVerified?: Maybe<Scalars['DateTime']>;
  firstName?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  role?: Maybe<Role>;
  sessions?: Maybe<SessionCreateNestedManyWithoutUserInput>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  username?: Maybe<Scalars['String']>;
};

export type UserCreateWithoutSessionsInput = {
  accounts?: Maybe<AccountCreateNestedManyWithoutUserInput>;
  createdAt?: Maybe<Scalars['DateTime']>;
  email: Scalars['String'];
  emailVerified?: Maybe<Scalars['DateTime']>;
  firstName?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  role?: Maybe<Role>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  username?: Maybe<Scalars['String']>;
};

export type UserGroupBy = {
  __typename?: 'UserGroupBy';
  _count?: Maybe<UserCountAggregate>;
  _max?: Maybe<UserMaxAggregate>;
  _min?: Maybe<UserMinAggregate>;
  createdAt: Scalars['DateTime'];
  email: Scalars['String'];
  emailVerified?: Maybe<Scalars['DateTime']>;
  firstName?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  image?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  role: Role;
  updatedAt: Scalars['DateTime'];
  username?: Maybe<Scalars['String']>;
};

export type UserMaxAggregate = {
  __typename?: 'UserMaxAggregate';
  createdAt?: Maybe<Scalars['DateTime']>;
  email?: Maybe<Scalars['String']>;
  emailVerified?: Maybe<Scalars['DateTime']>;
  firstName?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  role?: Maybe<Role>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  username?: Maybe<Scalars['String']>;
};

export type UserMaxOrderByAggregateInput = {
  createdAt?: Maybe<SortOrder>;
  email?: Maybe<SortOrder>;
  emailVerified?: Maybe<SortOrder>;
  firstName?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  image?: Maybe<SortOrder>;
  lastName?: Maybe<SortOrder>;
  role?: Maybe<SortOrder>;
  updatedAt?: Maybe<SortOrder>;
  username?: Maybe<SortOrder>;
};

export type UserMinAggregate = {
  __typename?: 'UserMinAggregate';
  createdAt?: Maybe<Scalars['DateTime']>;
  email?: Maybe<Scalars['String']>;
  emailVerified?: Maybe<Scalars['DateTime']>;
  firstName?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  role?: Maybe<Role>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  username?: Maybe<Scalars['String']>;
};

export type UserMinOrderByAggregateInput = {
  createdAt?: Maybe<SortOrder>;
  email?: Maybe<SortOrder>;
  emailVerified?: Maybe<SortOrder>;
  firstName?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  image?: Maybe<SortOrder>;
  lastName?: Maybe<SortOrder>;
  role?: Maybe<SortOrder>;
  updatedAt?: Maybe<SortOrder>;
  username?: Maybe<SortOrder>;
};

export enum UserOrderByRelevanceFieldEnum {
  Email = 'email',
  FirstName = 'firstName',
  Id = 'id',
  Image = 'image',
  LastName = 'lastName',
  Username = 'username'
}

export type UserOrderByRelevanceInput = {
  fields: Array<UserOrderByRelevanceFieldEnum>;
  search: Scalars['String'];
  sort: SortOrder;
};

export type UserOrderByWithAggregationInput = {
  _count?: Maybe<UserCountOrderByAggregateInput>;
  _max?: Maybe<UserMaxOrderByAggregateInput>;
  _min?: Maybe<UserMinOrderByAggregateInput>;
  createdAt?: Maybe<SortOrder>;
  email?: Maybe<SortOrder>;
  emailVerified?: Maybe<SortOrder>;
  firstName?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  image?: Maybe<SortOrder>;
  lastName?: Maybe<SortOrder>;
  role?: Maybe<SortOrder>;
  updatedAt?: Maybe<SortOrder>;
  username?: Maybe<SortOrder>;
};

export type UserOrderByWithRelationAndSearchRelevanceInput = {
  _relevance?: Maybe<UserOrderByRelevanceInput>;
  accounts?: Maybe<AccountOrderByRelationAggregateInput>;
  createdAt?: Maybe<SortOrder>;
  email?: Maybe<SortOrder>;
  emailVerified?: Maybe<SortOrder>;
  firstName?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  image?: Maybe<SortOrder>;
  lastName?: Maybe<SortOrder>;
  role?: Maybe<SortOrder>;
  sessions?: Maybe<SessionOrderByRelationAggregateInput>;
  updatedAt?: Maybe<SortOrder>;
  username?: Maybe<SortOrder>;
};

export type UserRelationFilter = {
  is?: Maybe<UserWhereInput>;
  isNot?: Maybe<UserWhereInput>;
};

export enum UserScalarFieldEnum {
  CreatedAt = 'createdAt',
  Email = 'email',
  EmailVerified = 'emailVerified',
  FirstName = 'firstName',
  Id = 'id',
  Image = 'image',
  LastName = 'lastName',
  Role = 'role',
  UpdatedAt = 'updatedAt',
  Username = 'username'
}

export type UserScalarWhereWithAggregatesInput = {
  AND?: Maybe<Array<UserScalarWhereWithAggregatesInput>>;
  NOT?: Maybe<Array<UserScalarWhereWithAggregatesInput>>;
  OR?: Maybe<Array<UserScalarWhereWithAggregatesInput>>;
  createdAt?: Maybe<DateTimeWithAggregatesFilter>;
  email?: Maybe<StringWithAggregatesFilter>;
  emailVerified?: Maybe<DateTimeNullableWithAggregatesFilter>;
  firstName?: Maybe<StringNullableWithAggregatesFilter>;
  id?: Maybe<StringWithAggregatesFilter>;
  image?: Maybe<StringNullableWithAggregatesFilter>;
  lastName?: Maybe<StringNullableWithAggregatesFilter>;
  role?: Maybe<EnumRoleWithAggregatesFilter>;
  updatedAt?: Maybe<DateTimeWithAggregatesFilter>;
  username?: Maybe<StringNullableWithAggregatesFilter>;
};

export type UserUpdateInput = {
  accounts?: Maybe<AccountUpdateManyWithoutUserInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  email?: Maybe<StringFieldUpdateOperationsInput>;
  emailVerified?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  firstName?: Maybe<NullableStringFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  image?: Maybe<NullableStringFieldUpdateOperationsInput>;
  lastName?: Maybe<NullableStringFieldUpdateOperationsInput>;
  role?: Maybe<EnumRoleFieldUpdateOperationsInput>;
  sessions?: Maybe<SessionUpdateManyWithoutUserInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  username?: Maybe<NullableStringFieldUpdateOperationsInput>;
};

export type UserUpdateManyMutationInput = {
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  email?: Maybe<StringFieldUpdateOperationsInput>;
  emailVerified?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  firstName?: Maybe<NullableStringFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  image?: Maybe<NullableStringFieldUpdateOperationsInput>;
  lastName?: Maybe<NullableStringFieldUpdateOperationsInput>;
  role?: Maybe<EnumRoleFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  username?: Maybe<NullableStringFieldUpdateOperationsInput>;
};

export type UserUpdateOneRequiredWithoutAccountsInput = {
  connect?: Maybe<UserWhereUniqueInput>;
  connectOrCreate?: Maybe<UserCreateOrConnectWithoutAccountsInput>;
  create?: Maybe<UserCreateWithoutAccountsInput>;
  update?: Maybe<UserUpdateWithoutAccountsInput>;
  upsert?: Maybe<UserUpsertWithoutAccountsInput>;
};

export type UserUpdateOneRequiredWithoutSessionsInput = {
  connect?: Maybe<UserWhereUniqueInput>;
  connectOrCreate?: Maybe<UserCreateOrConnectWithoutSessionsInput>;
  create?: Maybe<UserCreateWithoutSessionsInput>;
  update?: Maybe<UserUpdateWithoutSessionsInput>;
  upsert?: Maybe<UserUpsertWithoutSessionsInput>;
};

export type UserUpdateWithoutAccountsInput = {
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  email?: Maybe<StringFieldUpdateOperationsInput>;
  emailVerified?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  firstName?: Maybe<NullableStringFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  image?: Maybe<NullableStringFieldUpdateOperationsInput>;
  lastName?: Maybe<NullableStringFieldUpdateOperationsInput>;
  role?: Maybe<EnumRoleFieldUpdateOperationsInput>;
  sessions?: Maybe<SessionUpdateManyWithoutUserInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  username?: Maybe<NullableStringFieldUpdateOperationsInput>;
};

export type UserUpdateWithoutSessionsInput = {
  accounts?: Maybe<AccountUpdateManyWithoutUserInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  email?: Maybe<StringFieldUpdateOperationsInput>;
  emailVerified?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  firstName?: Maybe<NullableStringFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  image?: Maybe<NullableStringFieldUpdateOperationsInput>;
  lastName?: Maybe<NullableStringFieldUpdateOperationsInput>;
  role?: Maybe<EnumRoleFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  username?: Maybe<NullableStringFieldUpdateOperationsInput>;
};

export type UserUpsertWithoutAccountsInput = {
  create: UserCreateWithoutAccountsInput;
  update: UserUpdateWithoutAccountsInput;
};

export type UserUpsertWithoutSessionsInput = {
  create: UserCreateWithoutSessionsInput;
  update: UserUpdateWithoutSessionsInput;
};

export type UserWhereInput = {
  AND?: Maybe<Array<UserWhereInput>>;
  NOT?: Maybe<Array<UserWhereInput>>;
  OR?: Maybe<Array<UserWhereInput>>;
  accounts?: Maybe<AccountListRelationFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  email?: Maybe<StringFilter>;
  emailVerified?: Maybe<DateTimeNullableFilter>;
  firstName?: Maybe<StringNullableFilter>;
  id?: Maybe<StringFilter>;
  image?: Maybe<StringNullableFilter>;
  lastName?: Maybe<StringNullableFilter>;
  role?: Maybe<EnumRoleFilter>;
  sessions?: Maybe<SessionListRelationFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
  username?: Maybe<StringNullableFilter>;
};

export type UserWhereUniqueInput = {
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  username?: Maybe<Scalars['String']>;
};

export type VerificationRequest = {
  __typename?: 'VerificationRequest';
  expires: Scalars['DateTime'];
  identifier: Scalars['String'];
  token: Scalars['String'];
};

export type VerificationRequestCountAggregate = {
  __typename?: 'VerificationRequestCountAggregate';
  _all: Scalars['Int'];
  expires: Scalars['Int'];
  identifier: Scalars['Int'];
  token: Scalars['Int'];
};

export type VerificationRequestCountOrderByAggregateInput = {
  expires?: Maybe<SortOrder>;
  identifier?: Maybe<SortOrder>;
  token?: Maybe<SortOrder>;
};

export type VerificationRequestCreateInput = {
  expires: Scalars['DateTime'];
  identifier: Scalars['String'];
  token: Scalars['String'];
};

export type VerificationRequestCreateManyInput = {
  expires: Scalars['DateTime'];
  identifier: Scalars['String'];
  token: Scalars['String'];
};

export type VerificationRequestGroupBy = {
  __typename?: 'VerificationRequestGroupBy';
  _count?: Maybe<VerificationRequestCountAggregate>;
  _max?: Maybe<VerificationRequestMaxAggregate>;
  _min?: Maybe<VerificationRequestMinAggregate>;
  expires: Scalars['DateTime'];
  identifier: Scalars['String'];
  token: Scalars['String'];
};

export type VerificationRequestIdentifierTokenCompoundUniqueInput = {
  identifier: Scalars['String'];
  token: Scalars['String'];
};

export type VerificationRequestMaxAggregate = {
  __typename?: 'VerificationRequestMaxAggregate';
  expires?: Maybe<Scalars['DateTime']>;
  identifier?: Maybe<Scalars['String']>;
  token?: Maybe<Scalars['String']>;
};

export type VerificationRequestMaxOrderByAggregateInput = {
  expires?: Maybe<SortOrder>;
  identifier?: Maybe<SortOrder>;
  token?: Maybe<SortOrder>;
};

export type VerificationRequestMinAggregate = {
  __typename?: 'VerificationRequestMinAggregate';
  expires?: Maybe<Scalars['DateTime']>;
  identifier?: Maybe<Scalars['String']>;
  token?: Maybe<Scalars['String']>;
};

export type VerificationRequestMinOrderByAggregateInput = {
  expires?: Maybe<SortOrder>;
  identifier?: Maybe<SortOrder>;
  token?: Maybe<SortOrder>;
};

export enum VerificationRequestOrderByRelevanceFieldEnum {
  Identifier = 'identifier',
  Token = 'token'
}

export type VerificationRequestOrderByRelevanceInput = {
  fields: Array<VerificationRequestOrderByRelevanceFieldEnum>;
  search: Scalars['String'];
  sort: SortOrder;
};

export type VerificationRequestOrderByWithAggregationInput = {
  _count?: Maybe<VerificationRequestCountOrderByAggregateInput>;
  _max?: Maybe<VerificationRequestMaxOrderByAggregateInput>;
  _min?: Maybe<VerificationRequestMinOrderByAggregateInput>;
  expires?: Maybe<SortOrder>;
  identifier?: Maybe<SortOrder>;
  token?: Maybe<SortOrder>;
};

export type VerificationRequestOrderByWithRelationAndSearchRelevanceInput = {
  _relevance?: Maybe<VerificationRequestOrderByRelevanceInput>;
  expires?: Maybe<SortOrder>;
  identifier?: Maybe<SortOrder>;
  token?: Maybe<SortOrder>;
};

export enum VerificationRequestScalarFieldEnum {
  Expires = 'expires',
  Identifier = 'identifier',
  Token = 'token'
}

export type VerificationRequestScalarWhereWithAggregatesInput = {
  AND?: Maybe<Array<VerificationRequestScalarWhereWithAggregatesInput>>;
  NOT?: Maybe<Array<VerificationRequestScalarWhereWithAggregatesInput>>;
  OR?: Maybe<Array<VerificationRequestScalarWhereWithAggregatesInput>>;
  expires?: Maybe<DateTimeWithAggregatesFilter>;
  identifier?: Maybe<StringWithAggregatesFilter>;
  token?: Maybe<StringWithAggregatesFilter>;
};

export type VerificationRequestUpdateInput = {
  expires?: Maybe<DateTimeFieldUpdateOperationsInput>;
  identifier?: Maybe<StringFieldUpdateOperationsInput>;
  token?: Maybe<StringFieldUpdateOperationsInput>;
};

export type VerificationRequestUpdateManyMutationInput = {
  expires?: Maybe<DateTimeFieldUpdateOperationsInput>;
  identifier?: Maybe<StringFieldUpdateOperationsInput>;
  token?: Maybe<StringFieldUpdateOperationsInput>;
};

export type VerificationRequestWhereInput = {
  AND?: Maybe<Array<VerificationRequestWhereInput>>;
  NOT?: Maybe<Array<VerificationRequestWhereInput>>;
  OR?: Maybe<Array<VerificationRequestWhereInput>>;
  expires?: Maybe<DateTimeFilter>;
  identifier?: Maybe<StringFilter>;
  token?: Maybe<StringFilter>;
};

export type VerificationRequestWhereUniqueInput = {
  identifier_token?: Maybe<VerificationRequestIdentifierTokenCompoundUniqueInput>;
  token?: Maybe<Scalars['String']>;
};

export type CreateSerieMutationVariables = Exact<{
  title: Scalars['String'];
  genres?: Maybe<GenreCreateNestedManyWithoutSeriesInput>;
  plot: Scalars['String'];
  poster: Scalars['String'];
  imdbRating: Scalars['Float'];
  rating: Scalars['String'];
  release: Scalars['DateTime'];
  runtime: Scalars['Int'];
  year: Scalars['Int'];
  totalSeasons: Scalars['Int'];
}>;


export type CreateSerieMutation = { __typename?: 'Mutation', createSerie: { __typename?: 'Serie', id: number, title: string, imdbRating: number, plot: string, poster: string, rating: string, release: any, runtime: number, year: number, totalSeasons: number, genres: Array<{ __typename?: 'Genre', name: string }>, seasons: Array<{ __typename?: 'Season', id: number, title: string }> } };

export type CreateSerieSearchMutationVariables = Exact<{
  title: Scalars['String'];
  genres?: Maybe<GenreCreateNestedManyWithoutSeriesInput>;
  plot: Scalars['String'];
  poster: Scalars['String'];
  imdbRating: Scalars['Float'];
  rating: Scalars['String'];
  release: Scalars['DateTime'];
  runtime: Scalars['Int'];
  year: Scalars['Int'];
  totalSeasons: Scalars['Int'];
}>;


export type CreateSerieSearchMutation = { __typename?: 'Mutation', createSerie: { __typename?: 'Serie', id: number, title: string, poster: string, createdAt: any, updatedAt: any } };

export type AllMoviesQueryVariables = Exact<{
  genre?: Maybe<Scalars['String']>;
  take?: Maybe<Scalars['Int']>;
}>;


export type AllMoviesQuery = { __typename?: 'Query', movies: Array<{ __typename?: 'Movie', id: number, title: string, poster: string, genres: Array<{ __typename?: 'Genre', name: string }> }> };

export type AllMoviesDetailsQueryVariables = Exact<{ [key: string]: never; }>;


export type AllMoviesDetailsQuery = { __typename?: 'Query', movies: Array<{ __typename?: 'Movie', id: number, title: string, year: number, rating: string, release: any, runtime: number, plot: string, poster: string, imdbRating: number, createdAt: any, updatedAt: any, genres: Array<{ __typename?: 'Genre', name: string }> }> };

export type MovieQueryVariables = Exact<{
  id: Scalars['Int'];
}>;


export type MovieQuery = { __typename?: 'Query', movie?: { __typename?: 'Movie', id: number, title: string, year: number, rating: string, release: any, runtime: number, plot: string, poster: string, imdbRating: number, createdAt: any, updatedAt: any, genres: Array<{ __typename?: 'Genre', name: string }> } | null | undefined };

export type SearchMovieByTitleQueryVariables = Exact<{
  title: Scalars['String'];
}>;


export type SearchMovieByTitleQuery = { __typename?: 'Query', movies: Array<{ __typename?: 'Movie', id: number, title: string, year: number, rating: string, release: any, runtime: number, plot: string, poster: string, imdbRating: number, createdAt: any, updatedAt: any }> };

export type GenresQueryVariables = Exact<{ [key: string]: never; }>;


export type GenresQuery = { __typename?: 'Query', genres: Array<{ __typename?: 'Genre', id: number, name: string }> };

export type AllSeasonsQueryVariables = Exact<{ [key: string]: never; }>;


export type AllSeasonsQuery = { __typename?: 'Query', seasons: Array<{ __typename?: 'Season', id: number, title: string }> };

export type AllSeriesQueryVariables = Exact<{
  genre?: Maybe<Scalars['String']>;
  take?: Maybe<Scalars['Int']>;
}>;


export type AllSeriesQuery = { __typename?: 'Query', series: Array<{ __typename?: 'Serie', id: number, title: string, poster: string, genres: Array<{ __typename?: 'Genre', name: string }> }> };

export type AllSeriesDetailsQueryVariables = Exact<{ [key: string]: never; }>;


export type AllSeriesDetailsQuery = { __typename?: 'Query', series: Array<{ __typename?: 'Serie', id: number, title: string, imdbRating: number, plot: string, poster: string, rating: string, release: any, runtime: number, year: number, totalSeasons: number, genres: Array<{ __typename?: 'Genre', name: string }>, seasons: Array<{ __typename?: 'Season', id: number, title: string }> }> };

export type SerieByIdQueryVariables = Exact<{
  id: Scalars['Int'];
}>;


export type SerieByIdQuery = { __typename?: 'Query', serie?: { __typename?: 'Serie', id: number, title: string, year: number, rating: string, release: any, runtime: number, plot: string, poster: string, imdbRating: number, createdAt: any, updatedAt: any, totalSeasons: number, genres: Array<{ __typename?: 'Genre', name: string }>, seasons: Array<{ __typename?: 'Season', id: number, title: string }> } | null | undefined };

export type SearchSeriesByTitleQueryVariables = Exact<{
  title: Scalars['String'];
}>;


export type SearchSeriesByTitleQuery = { __typename?: 'Query', series: Array<{ __typename?: 'Serie', id: number, title: string, poster: string, createdAt: any, updatedAt: any }> };

export type SeriesQueryVariables = Exact<{
  id: Scalars['Int'];
  genre?: Maybe<Array<Scalars['String']> | Scalars['String']>;
}>;


export type SeriesQuery = { __typename?: 'Query', series: Array<{ __typename?: 'Serie', id: number, title: string, poster: string }> };

export type MoviesQueryVariables = Exact<{
  id: Scalars['Int'];
  genre?: Maybe<Array<Scalars['String']> | Scalars['String']>;
}>;


export type MoviesQuery = { __typename?: 'Query', movies: Array<{ __typename?: 'Movie', id: number, title: string, poster: string }> };


export const CreateSerieDocument = gql`
    mutation createSerie($title: String!, $genres: GenreCreateNestedManyWithoutSeriesInput, $plot: String!, $poster: String!, $imdbRating: Float!, $rating: String!, $release: DateTime!, $runtime: Int!, $year: Int!, $totalSeasons: Int!) {
  createSerie(
    data: {title: $title, genres: $genres, plot: $plot, poster: $poster, imdbRating: $imdbRating, rating: $rating, release: $release, runtime: $runtime, year: $year, totalSeasons: $totalSeasons}
  ) {
    id
    title
    genres {
      name
    }
    imdbRating
    plot
    poster
    rating
    release
    runtime
    year
    totalSeasons
    seasons {
      id
      title
    }
  }
}
    `;
export type CreateSerieMutationFn = Apollo.MutationFunction<CreateSerieMutation, CreateSerieMutationVariables>;

/**
 * __useCreateSerieMutation__
 *
 * To run a mutation, you first call `useCreateSerieMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateSerieMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createSerieMutation, { data, loading, error }] = useCreateSerieMutation({
 *   variables: {
 *      title: // value for 'title'
 *      genres: // value for 'genres'
 *      plot: // value for 'plot'
 *      poster: // value for 'poster'
 *      imdbRating: // value for 'imdbRating'
 *      rating: // value for 'rating'
 *      release: // value for 'release'
 *      runtime: // value for 'runtime'
 *      year: // value for 'year'
 *      totalSeasons: // value for 'totalSeasons'
 *   },
 * });
 */
export function useCreateSerieMutation(baseOptions?: Apollo.MutationHookOptions<CreateSerieMutation, CreateSerieMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateSerieMutation, CreateSerieMutationVariables>(CreateSerieDocument, options);
      }
export type CreateSerieMutationHookResult = ReturnType<typeof useCreateSerieMutation>;
export type CreateSerieMutationResult = Apollo.MutationResult<CreateSerieMutation>;
export type CreateSerieMutationOptions = Apollo.BaseMutationOptions<CreateSerieMutation, CreateSerieMutationVariables>;
export const CreateSerieSearchDocument = gql`
    mutation createSerieSearch($title: String!, $genres: GenreCreateNestedManyWithoutSeriesInput, $plot: String!, $poster: String!, $imdbRating: Float!, $rating: String!, $release: DateTime!, $runtime: Int!, $year: Int!, $totalSeasons: Int!) {
  createSerie(
    data: {title: $title, genres: $genres, plot: $plot, poster: $poster, imdbRating: $imdbRating, rating: $rating, release: $release, runtime: $runtime, year: $year, totalSeasons: $totalSeasons}
  ) {
    id
    title
    poster
    createdAt
    updatedAt
  }
}
    `;
export type CreateSerieSearchMutationFn = Apollo.MutationFunction<CreateSerieSearchMutation, CreateSerieSearchMutationVariables>;

/**
 * __useCreateSerieSearchMutation__
 *
 * To run a mutation, you first call `useCreateSerieSearchMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateSerieSearchMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createSerieSearchMutation, { data, loading, error }] = useCreateSerieSearchMutation({
 *   variables: {
 *      title: // value for 'title'
 *      genres: // value for 'genres'
 *      plot: // value for 'plot'
 *      poster: // value for 'poster'
 *      imdbRating: // value for 'imdbRating'
 *      rating: // value for 'rating'
 *      release: // value for 'release'
 *      runtime: // value for 'runtime'
 *      year: // value for 'year'
 *      totalSeasons: // value for 'totalSeasons'
 *   },
 * });
 */
export function useCreateSerieSearchMutation(baseOptions?: Apollo.MutationHookOptions<CreateSerieSearchMutation, CreateSerieSearchMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateSerieSearchMutation, CreateSerieSearchMutationVariables>(CreateSerieSearchDocument, options);
      }
export type CreateSerieSearchMutationHookResult = ReturnType<typeof useCreateSerieSearchMutation>;
export type CreateSerieSearchMutationResult = Apollo.MutationResult<CreateSerieSearchMutation>;
export type CreateSerieSearchMutationOptions = Apollo.BaseMutationOptions<CreateSerieSearchMutation, CreateSerieSearchMutationVariables>;
export const AllMoviesDocument = gql`
    query allMovies($genre: String, $take: Int) {
  movies(where: {genres: {some: {name: {contains: $genre}}}}, take: $take) {
    id
    title
    poster
    genres {
      name
    }
  }
}
    `;

/**
 * __useAllMoviesQuery__
 *
 * To run a query within a React component, call `useAllMoviesQuery` and pass it any options that fit your needs.
 * When your component renders, `useAllMoviesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAllMoviesQuery({
 *   variables: {
 *      genre: // value for 'genre'
 *      take: // value for 'take'
 *   },
 * });
 */
export function useAllMoviesQuery(baseOptions?: Apollo.QueryHookOptions<AllMoviesQuery, AllMoviesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<AllMoviesQuery, AllMoviesQueryVariables>(AllMoviesDocument, options);
      }
export function useAllMoviesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AllMoviesQuery, AllMoviesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<AllMoviesQuery, AllMoviesQueryVariables>(AllMoviesDocument, options);
        }
export type AllMoviesQueryHookResult = ReturnType<typeof useAllMoviesQuery>;
export type AllMoviesLazyQueryHookResult = ReturnType<typeof useAllMoviesLazyQuery>;
export type AllMoviesQueryResult = Apollo.QueryResult<AllMoviesQuery, AllMoviesQueryVariables>;
export const AllMoviesDetailsDocument = gql`
    query AllMoviesDetails {
  movies {
    id
    title
    year
    rating
    release
    runtime
    genres {
      name
    }
    plot
    poster
    imdbRating
    createdAt
    updatedAt
  }
}
    `;

/**
 * __useAllMoviesDetailsQuery__
 *
 * To run a query within a React component, call `useAllMoviesDetailsQuery` and pass it any options that fit your needs.
 * When your component renders, `useAllMoviesDetailsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAllMoviesDetailsQuery({
 *   variables: {
 *   },
 * });
 */
export function useAllMoviesDetailsQuery(baseOptions?: Apollo.QueryHookOptions<AllMoviesDetailsQuery, AllMoviesDetailsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<AllMoviesDetailsQuery, AllMoviesDetailsQueryVariables>(AllMoviesDetailsDocument, options);
      }
export function useAllMoviesDetailsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AllMoviesDetailsQuery, AllMoviesDetailsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<AllMoviesDetailsQuery, AllMoviesDetailsQueryVariables>(AllMoviesDetailsDocument, options);
        }
export type AllMoviesDetailsQueryHookResult = ReturnType<typeof useAllMoviesDetailsQuery>;
export type AllMoviesDetailsLazyQueryHookResult = ReturnType<typeof useAllMoviesDetailsLazyQuery>;
export type AllMoviesDetailsQueryResult = Apollo.QueryResult<AllMoviesDetailsQuery, AllMoviesDetailsQueryVariables>;
export const MovieDocument = gql`
    query movie($id: Int!) {
  movie(where: {id: $id}) {
    id
    title
    year
    rating
    release
    runtime
    genres {
      name
    }
    plot
    poster
    imdbRating
    createdAt
    updatedAt
  }
}
    `;

/**
 * __useMovieQuery__
 *
 * To run a query within a React component, call `useMovieQuery` and pass it any options that fit your needs.
 * When your component renders, `useMovieQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMovieQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useMovieQuery(baseOptions: Apollo.QueryHookOptions<MovieQuery, MovieQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<MovieQuery, MovieQueryVariables>(MovieDocument, options);
      }
export function useMovieLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MovieQuery, MovieQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<MovieQuery, MovieQueryVariables>(MovieDocument, options);
        }
export type MovieQueryHookResult = ReturnType<typeof useMovieQuery>;
export type MovieLazyQueryHookResult = ReturnType<typeof useMovieLazyQuery>;
export type MovieQueryResult = Apollo.QueryResult<MovieQuery, MovieQueryVariables>;
export const SearchMovieByTitleDocument = gql`
    query searchMovieByTitle($title: String!) {
  movies(where: {title: {contains: $title, mode: insensitive}}) {
    id
    title
    year
    rating
    release
    runtime
    plot
    poster
    imdbRating
    createdAt
    updatedAt
  }
}
    `;

/**
 * __useSearchMovieByTitleQuery__
 *
 * To run a query within a React component, call `useSearchMovieByTitleQuery` and pass it any options that fit your needs.
 * When your component renders, `useSearchMovieByTitleQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSearchMovieByTitleQuery({
 *   variables: {
 *      title: // value for 'title'
 *   },
 * });
 */
export function useSearchMovieByTitleQuery(baseOptions: Apollo.QueryHookOptions<SearchMovieByTitleQuery, SearchMovieByTitleQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<SearchMovieByTitleQuery, SearchMovieByTitleQueryVariables>(SearchMovieByTitleDocument, options);
      }
export function useSearchMovieByTitleLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<SearchMovieByTitleQuery, SearchMovieByTitleQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<SearchMovieByTitleQuery, SearchMovieByTitleQueryVariables>(SearchMovieByTitleDocument, options);
        }
export type SearchMovieByTitleQueryHookResult = ReturnType<typeof useSearchMovieByTitleQuery>;
export type SearchMovieByTitleLazyQueryHookResult = ReturnType<typeof useSearchMovieByTitleLazyQuery>;
export type SearchMovieByTitleQueryResult = Apollo.QueryResult<SearchMovieByTitleQuery, SearchMovieByTitleQueryVariables>;
export const GenresDocument = gql`
    query genres {
  genres {
    id
    name
  }
}
    `;

/**
 * __useGenresQuery__
 *
 * To run a query within a React component, call `useGenresQuery` and pass it any options that fit your needs.
 * When your component renders, `useGenresQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGenresQuery({
 *   variables: {
 *   },
 * });
 */
export function useGenresQuery(baseOptions?: Apollo.QueryHookOptions<GenresQuery, GenresQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GenresQuery, GenresQueryVariables>(GenresDocument, options);
      }
export function useGenresLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GenresQuery, GenresQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GenresQuery, GenresQueryVariables>(GenresDocument, options);
        }
export type GenresQueryHookResult = ReturnType<typeof useGenresQuery>;
export type GenresLazyQueryHookResult = ReturnType<typeof useGenresLazyQuery>;
export type GenresQueryResult = Apollo.QueryResult<GenresQuery, GenresQueryVariables>;
export const AllSeasonsDocument = gql`
    query allSeasons {
  seasons {
    id
    title
  }
}
    `;

/**
 * __useAllSeasonsQuery__
 *
 * To run a query within a React component, call `useAllSeasonsQuery` and pass it any options that fit your needs.
 * When your component renders, `useAllSeasonsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAllSeasonsQuery({
 *   variables: {
 *   },
 * });
 */
export function useAllSeasonsQuery(baseOptions?: Apollo.QueryHookOptions<AllSeasonsQuery, AllSeasonsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<AllSeasonsQuery, AllSeasonsQueryVariables>(AllSeasonsDocument, options);
      }
export function useAllSeasonsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AllSeasonsQuery, AllSeasonsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<AllSeasonsQuery, AllSeasonsQueryVariables>(AllSeasonsDocument, options);
        }
export type AllSeasonsQueryHookResult = ReturnType<typeof useAllSeasonsQuery>;
export type AllSeasonsLazyQueryHookResult = ReturnType<typeof useAllSeasonsLazyQuery>;
export type AllSeasonsQueryResult = Apollo.QueryResult<AllSeasonsQuery, AllSeasonsQueryVariables>;
export const AllSeriesDocument = gql`
    query allSeries($genre: String, $take: Int) {
  series(where: {genres: {some: {name: {contains: $genre}}}}, take: $take) {
    id
    title
    poster
    genres {
      name
    }
  }
}
    `;

/**
 * __useAllSeriesQuery__
 *
 * To run a query within a React component, call `useAllSeriesQuery` and pass it any options that fit your needs.
 * When your component renders, `useAllSeriesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAllSeriesQuery({
 *   variables: {
 *      genre: // value for 'genre'
 *      take: // value for 'take'
 *   },
 * });
 */
export function useAllSeriesQuery(baseOptions?: Apollo.QueryHookOptions<AllSeriesQuery, AllSeriesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<AllSeriesQuery, AllSeriesQueryVariables>(AllSeriesDocument, options);
      }
export function useAllSeriesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AllSeriesQuery, AllSeriesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<AllSeriesQuery, AllSeriesQueryVariables>(AllSeriesDocument, options);
        }
export type AllSeriesQueryHookResult = ReturnType<typeof useAllSeriesQuery>;
export type AllSeriesLazyQueryHookResult = ReturnType<typeof useAllSeriesLazyQuery>;
export type AllSeriesQueryResult = Apollo.QueryResult<AllSeriesQuery, AllSeriesQueryVariables>;
export const AllSeriesDetailsDocument = gql`
    query AllSeriesDetails {
  series {
    id
    title
    genres {
      name
    }
    imdbRating
    plot
    poster
    rating
    release
    runtime
    year
    totalSeasons
    seasons {
      id
      title
    }
  }
}
    `;

/**
 * __useAllSeriesDetailsQuery__
 *
 * To run a query within a React component, call `useAllSeriesDetailsQuery` and pass it any options that fit your needs.
 * When your component renders, `useAllSeriesDetailsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAllSeriesDetailsQuery({
 *   variables: {
 *   },
 * });
 */
export function useAllSeriesDetailsQuery(baseOptions?: Apollo.QueryHookOptions<AllSeriesDetailsQuery, AllSeriesDetailsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<AllSeriesDetailsQuery, AllSeriesDetailsQueryVariables>(AllSeriesDetailsDocument, options);
      }
export function useAllSeriesDetailsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AllSeriesDetailsQuery, AllSeriesDetailsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<AllSeriesDetailsQuery, AllSeriesDetailsQueryVariables>(AllSeriesDetailsDocument, options);
        }
export type AllSeriesDetailsQueryHookResult = ReturnType<typeof useAllSeriesDetailsQuery>;
export type AllSeriesDetailsLazyQueryHookResult = ReturnType<typeof useAllSeriesDetailsLazyQuery>;
export type AllSeriesDetailsQueryResult = Apollo.QueryResult<AllSeriesDetailsQuery, AllSeriesDetailsQueryVariables>;
export const SerieByIdDocument = gql`
    query serieById($id: Int!) {
  serie(where: {id: $id}) {
    id
    title
    year
    rating
    release
    runtime
    genres {
      name
    }
    plot
    poster
    imdbRating
    createdAt
    updatedAt
    totalSeasons
    seasons {
      id
      title
    }
  }
}
    `;

/**
 * __useSerieByIdQuery__
 *
 * To run a query within a React component, call `useSerieByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useSerieByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSerieByIdQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useSerieByIdQuery(baseOptions: Apollo.QueryHookOptions<SerieByIdQuery, SerieByIdQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<SerieByIdQuery, SerieByIdQueryVariables>(SerieByIdDocument, options);
      }
export function useSerieByIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<SerieByIdQuery, SerieByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<SerieByIdQuery, SerieByIdQueryVariables>(SerieByIdDocument, options);
        }
export type SerieByIdQueryHookResult = ReturnType<typeof useSerieByIdQuery>;
export type SerieByIdLazyQueryHookResult = ReturnType<typeof useSerieByIdLazyQuery>;
export type SerieByIdQueryResult = Apollo.QueryResult<SerieByIdQuery, SerieByIdQueryVariables>;
export const SearchSeriesByTitleDocument = gql`
    query searchSeriesByTitle($title: String!) {
  series(where: {title: {contains: $title, mode: insensitive}}) {
    id
    title
    poster
    createdAt
    updatedAt
  }
}
    `;

/**
 * __useSearchSeriesByTitleQuery__
 *
 * To run a query within a React component, call `useSearchSeriesByTitleQuery` and pass it any options that fit your needs.
 * When your component renders, `useSearchSeriesByTitleQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSearchSeriesByTitleQuery({
 *   variables: {
 *      title: // value for 'title'
 *   },
 * });
 */
export function useSearchSeriesByTitleQuery(baseOptions: Apollo.QueryHookOptions<SearchSeriesByTitleQuery, SearchSeriesByTitleQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<SearchSeriesByTitleQuery, SearchSeriesByTitleQueryVariables>(SearchSeriesByTitleDocument, options);
      }
export function useSearchSeriesByTitleLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<SearchSeriesByTitleQuery, SearchSeriesByTitleQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<SearchSeriesByTitleQuery, SearchSeriesByTitleQueryVariables>(SearchSeriesByTitleDocument, options);
        }
export type SearchSeriesByTitleQueryHookResult = ReturnType<typeof useSearchSeriesByTitleQuery>;
export type SearchSeriesByTitleLazyQueryHookResult = ReturnType<typeof useSearchSeriesByTitleLazyQuery>;
export type SearchSeriesByTitleQueryResult = Apollo.QueryResult<SearchSeriesByTitleQuery, SearchSeriesByTitleQueryVariables>;
export const SeriesDocument = gql`
    query series($id: Int!, $genre: [String!]) {
  series(
    where: {id: {not: {equals: $id}}, genres: {some: {name: {in: $genre, mode: insensitive}}}}
    take: 6
  ) {
    id
    title
    poster
  }
}
    `;

/**
 * __useSeriesQuery__
 *
 * To run a query within a React component, call `useSeriesQuery` and pass it any options that fit your needs.
 * When your component renders, `useSeriesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSeriesQuery({
 *   variables: {
 *      id: // value for 'id'
 *      genre: // value for 'genre'
 *   },
 * });
 */
export function useSeriesQuery(baseOptions: Apollo.QueryHookOptions<SeriesQuery, SeriesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<SeriesQuery, SeriesQueryVariables>(SeriesDocument, options);
      }
export function useSeriesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<SeriesQuery, SeriesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<SeriesQuery, SeriesQueryVariables>(SeriesDocument, options);
        }
export type SeriesQueryHookResult = ReturnType<typeof useSeriesQuery>;
export type SeriesLazyQueryHookResult = ReturnType<typeof useSeriesLazyQuery>;
export type SeriesQueryResult = Apollo.QueryResult<SeriesQuery, SeriesQueryVariables>;
export const MoviesDocument = gql`
    query movies($id: Int!, $genre: [String!]) {
  movies(
    where: {id: {not: {equals: $id}}, genres: {some: {name: {in: $genre, mode: insensitive}}}}
    take: 6
  ) {
    id
    title
    poster
  }
}
    `;

/**
 * __useMoviesQuery__
 *
 * To run a query within a React component, call `useMoviesQuery` and pass it any options that fit your needs.
 * When your component renders, `useMoviesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMoviesQuery({
 *   variables: {
 *      id: // value for 'id'
 *      genre: // value for 'genre'
 *   },
 * });
 */
export function useMoviesQuery(baseOptions: Apollo.QueryHookOptions<MoviesQuery, MoviesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<MoviesQuery, MoviesQueryVariables>(MoviesDocument, options);
      }
export function useMoviesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MoviesQuery, MoviesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<MoviesQuery, MoviesQueryVariables>(MoviesDocument, options);
        }
export type MoviesQueryHookResult = ReturnType<typeof useMoviesQuery>;
export type MoviesLazyQueryHookResult = ReturnType<typeof useMoviesLazyQuery>;
export type MoviesQueryResult = Apollo.QueryResult<MoviesQuery, MoviesQueryVariables>;