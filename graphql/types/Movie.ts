import { objectType, extendType } from 'nexus';

export const Movie = objectType({
    name: "Movie",
    definition(t) {
        t.int('id')
        t.string('title')
        t.int('year')
    }
});

export const MovieQuery = extendType({
    type: "Query",
    definition(t) {
        t.list.field('movies', {
            type: "Movie",
            resolve(_parent, _args, ctx) {
                return ctx.prisma.screening.findMany({
                    where: {
                        type: {
                            name: 'movie'
                        }
                    },
                    include: {
                        type: true
                    }
                })
            }
        })
    }
})