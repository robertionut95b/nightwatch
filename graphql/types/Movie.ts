import { objectType, extendType, nonNull, intArg, stringArg, nullable, list } from 'nexus';

export const Movie = objectType({
    name: "Movie",
    definition(t) {
        t.nonNull.int('id')
        t.nonNull.string('title')
        t.nonNull.int('year')
        t.nonNull.string('rating')
        t.nonNull.DateTime('release')
        t.nonNull.int('runtime')
        t.nonNull.list.nonNull.field('genres', {
            type: 'Genre',
            description: "A list of genres associated to this movie",
            resolve: (_parent, _, ctx) => {
                return ctx.prisma.movie.findUnique({ where: { id: _parent.id } }).genres();
            },
        })
        t.nonNull.list.nonNull.field('related', {
            type: 'Movie',
            description: "A list of related movies to this",
            resolve: async (_parent, _, ctx) => {
                const parent = await ctx.prisma.movie.findUnique({ where: { id: _parent.id } }).genres()
                const genres = parent.map(genre => {
                    return {
                        genres: {
                            every: {
                                name: {
                                    contains: genre.name
                                }
                            }
                        }
                    }
                })
                return ctx.prisma.movie.findMany({
                    where: {
                        OR: genres,
                        AND: {
                            id: {
                                not: _parent.id
                            }
                        },
                    }
                })
            }
        })
        t.nonNull.string('plot')
        t.nonNull.string('poster')
        t.nonNull.float('imdbRating')
        t.nonNull.DateTime('createdAt')
        t.nonNull.DateTime('updatedAt')
    }
});

export const MovieQueries = extendType({
    type: 'Query',
    definition(t) {
        t.list.field('movies', {
            type: "Movie",
            args: {
                genre: nullable(list(stringArg()))
            },
            resolve(_parent, _args, ctx) {
                return ctx.prisma.movie.findMany({
                    where: {
                        genres: {
                            some: {
                                name: {
                                    contains: _args?.genre?.[0] || "", mode: "insensitive"
                                }
                            }
                        }
                    }
                })
            }
        })
        t.nullable.field('movie', {
            type: "Movie",
            args: {
                id: nonNull(intArg()),
            },
            resolve(_parent, _args, ctx) {
                return ctx.prisma.movie.findUnique({
                    where: {
                        id: _args.id
                    }
                })
            }
        })
        t.list.field('searchMovieByTitle', {
            type: "Movie",
            args: {
                title: nonNull(stringArg()),
            },
            resolve(_parent, _args, ctx) {
                return ctx.prisma.movie.findMany({
                    where: {
                        title: {
                            contains: _args.title,
                            mode: 'insensitive'
                        }
                    }
                })
            }
        })
    }
})