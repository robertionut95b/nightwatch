import { gql } from '@apollo/client'

export const CurrentUserQuery = gql`
    users {
    id,
    name
    email
  }
`