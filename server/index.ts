import { ApolloServer, UserInputError, gql } from "apollo-server";
import {Report} from "../src/interfaces";
import { v4 as uuidv4 } from 'uuid';

const defaultReports = {
    "base": "EUR",
    "success": true,
    "timeseries": true,
    "rates": [
      {
        "ANG": 2.021479,
        "USD": 9.964469,
        "CAD": 1.535436,
        "date": "2019-01-16",
        "id": "f550c637-6d1a-40d7-a597-9422788ccf08"
      },
      {
        "ANG": 2.009764,
        "USD": 9.907593,
        "CAD": 1.542879,
        "date": "2019-01-17",
        "id": "f550c637-6d1a-40d7-a597-9422788ccf08"

      },
      {
        "ANG": 2.019129,
        "USD": 9.953775,
        "CAD": 1.507594,
        "date": "2019-01-18",
        "id": "f550c637-6d1a-40d7-a597-9422788ccf08"
      },
      {
        "ANG": 2.019129,
        "USD": 9.953775,
        "CAD": 1.507594,
        "date": "2019-01-19",
        "id": "f550c637-6d1a-40d7-a597-9422788ccf08"
      },
    ]
  }

const typeDefs = gql`
    input RateInput {
        ANG: Float!
        USD: Float!
        CAD: Float!
        date: String!
    }
    type ReportData {
        base: String
        success: Boolean
        timeseries: Boolean
        rates: [Rate]
    }
    type Rate {
      ANG: Float
      USD: Float
      CAD: Float
      date: String
    }
    type Query {
        reportRatesCount: Int!
        getReport: ReportData!
        searchReportByDate(date: String!): Rate
    }
    type Mutation {
      addReport(
        rate: RateInput
      ): Rate
    }
`
const resolvers = {
  Query: {
    reportRatesCount: () => defaultReports.rates.length,
    getReport: () => defaultReports,
    searchReportByDate: (_: unknown, { date }: { date: string}) => {
      return defaultReports.rates.find(rate => rate.date === date)
    }
  },
  Mutation: {
    addReport:(_: unknown, {rate}: { rate: Report}) => {
      if(defaultReports.rates.find(rateElem => rateElem.date === rate.date)){
        throw new UserInputError('Report already added, Please add a different date.', {
          invalidArgs: rate.date
        })
      }
      const report = { ...rate}
      report.id = uuidv4();
      defaultReports.rates.push(report)
      return report
    }
  }
}
const server = new ApolloServer({typeDefs, resolvers});
server.listen().then(({url}) => {
    console.log(`Server up at: ${url}`)
})