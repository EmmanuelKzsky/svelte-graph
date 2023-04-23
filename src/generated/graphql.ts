import gql from 'graphql-tag';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Mutation = {
  __typename?: 'Mutation';
  addReport?: Maybe<Rate>;
};


export type MutationAddReportArgs = {
  rate?: InputMaybe<RateInput>;
};

export type Query = {
  __typename?: 'Query';
  getReport: ReportData;
  reportRatesCount: Scalars['Int'];
  searchReportByDate?: Maybe<Rate>;
};


export type QuerySearchReportByDateArgs = {
  date: Scalars['String'];
};

export type Rate = {
  __typename?: 'Rate';
  ANG?: Maybe<Scalars['Float']>;
  CAD?: Maybe<Scalars['Float']>;
  USD?: Maybe<Scalars['Float']>;
  date?: Maybe<Scalars['String']>;
};

export type RateInput = {
  ANG: Scalars['Float'];
  CAD: Scalars['Float'];
  USD: Scalars['Float'];
  date: Scalars['String'];
};

export type ReportData = {
  __typename?: 'ReportData';
  base?: Maybe<Scalars['String']>;
  rates?: Maybe<Array<Maybe<Rate>>>;
  success?: Maybe<Scalars['Boolean']>;
  timeseries?: Maybe<Scalars['Boolean']>;
};

export type AddReportMutationVariables = Exact<{
  rate: RateInput;
}>;


export type AddReportMutation = { __typename?: 'Mutation', addReport?: { __typename?: 'Rate', ANG?: number | null, USD?: number | null, CAD?: number | null, date?: string | null } | null };

export type GetReportQueryVariables = Exact<{ [key: string]: never; }>;


export type GetReportQuery = { __typename?: 'Query', getReport: { __typename?: 'ReportData', rates?: Array<{ __typename?: 'Rate', ANG?: number | null, USD?: number | null, CAD?: number | null, date?: string | null } | null> | null } };

export type SearchReportByDateQueryVariables = Exact<{
  date: Scalars['String'];
}>;


export type SearchReportByDateQuery = { __typename?: 'Query', searchReportByDate?: { __typename?: 'Rate', date?: string | null, ANG?: number | null, USD?: number | null, CAD?: number | null } | null };


export const AddReportDocument = gql`
    mutation addReport($rate: RateInput!) {
  addReport(rate: $rate) {
    ANG
    USD
    CAD
    date
  }
}
    `;
export const GetReportDocument = gql`
    query getReport {
  getReport {
    rates {
      ANG
      USD
      CAD
      date
    }
  }
}
    `;
export const SearchReportByDateDocument = gql`
    query searchReportByDate($date: String!) {
  searchReportByDate(date: $date) {
    date
    ANG
    USD
    CAD
  }
}
    `;