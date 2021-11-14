import { PositiveFloatResolver } from 'graphql-scalars'
import { asNexusMethod } from 'nexus'

export const Float = asNexusMethod(PositiveFloatResolver, 'Float')