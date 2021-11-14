import { declarativeWrappingPlugin, makeSchema } from 'nexus'
import { join } from 'path'
import * as types from './types'
import * as scalars from './scalars'

export const schema = makeSchema({
    types: [types, scalars],
    outputs: {
        typegen: join(process.cwd(), 'node_modules', 'generated', 'nexus-typegen.gen.ts'),
        schema: join(process.cwd(), 'generated', 'schema.graphql'),
    },
    contextType: {
        export: 'Context',
        module: join(process.cwd(), 'graphql', 'context.ts'),
    },
    shouldExitAfterGenerateArtifacts: process.argv.includes('--nexusTypegen'),
    plugins: [
        declarativeWrappingPlugin(),
    ],
    sourceTypes: {
        modules: [
            {
                module: join(process.cwd(), 'lib', 'PrismaClient', 'prisma.ts'),
                alias: 'prisma'
            }
        ]
    }
})