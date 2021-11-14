import { objectType, extendType, nonNull, intArg } from 'nexus';

export const Language = objectType({
    name: "Language",
    definition(t) {
        t.int('id')
        t.string('name')
        t.nonNull.list.nonNull.field('movies', {
            type: "Movie",
            description: "A list of movies associated to this language",
            resolve: (_parent, _args, ctx) => {
                return ctx.prisma.language.findUnique({ where: { id: _parent.id } }).languages();
            }
        })
        t.DateTime('createdAt')
        t.DateTime('updatedAt')
    }
})

export const LanguageQueries = extendType({
    type: "Query",
    definition(t) {
        t.list.field('languages', {
            type: "Language",
            resolve: (_parent, _args, ctx) => {
                return ctx.prisma.language.findMany();
            }
        })
        t.nullable.field('language', {
            type: "Language",
            args: {
                id: nonNull(intArg()),
            },
            resolve(_parent, _args, ctx) {
                return ctx.prisma.language.findUnique({ where: { id: _args.id } })
            }
        })
    }
})