import { objectType, queryType, nonNull, intArg } from 'nexus';

export const Genre = objectType({
    name: "Genre",
    definition(t) {
        t.int('id')
        t.string('name')
        t.DateTime('createdAt')
        t.DateTime('updatedAt')
    }
});

export const GenreQueries = queryType({
    definition(t) {
        t.list.field('genres', {
            type: "Genre",
            resolve(_parent, _args, ctx) {
                return ctx.prisma.genre.findMany()
            }
        })
        t.nullable.field('genre', {
            type: "Genre",
            args: {
                id: nonNull(intArg()),
            },
            resolve(_parent, _args, ctx) {
                return ctx.prisma.genre.findUnique({ where: { id: _args.id } })
            }
        })
    }
})