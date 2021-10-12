import { DateResolver } from 'graphql-scalars'
import { asNexusMethod } from 'nexus'

export const Date = asNexusMethod(DateResolver, 'Date')