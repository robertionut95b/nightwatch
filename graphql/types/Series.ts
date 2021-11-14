import { objectType, extendType, nonNull, intArg, stringArg, nullable, list, floatArg } from 'nexus';

export const Series = objectType({
    name: "Series",
    definition(t) {
        t.nonNull.int('id')
        t.nonNull.string('title')
        t.nonNull.int('year')
        t.nonNull.string('rating')
        t.nonNull.DateTime('release')
        t.nonNull.int('runtime')
        t.nonNull.list.nonNull.field('genres', {
            type: 'Genre',
            description: "A list of genres associated to this series",
            resolve: (_parent, _, ctx) => {
                return ctx.prisma.series.findUnique({ where: { id: _parent.id } }).genres();
            },
        })
        t.nonNull.list.nonNull.field('related', {
            type: 'Series',
            description: "A list of related series to this",
            resolve: async (_parent, _, ctx) => {
                const parent = await ctx.prisma.series.findUnique({ where: { id: _parent.id } }).genres()
                const genres = parent.map(genre => {
                    return {
                        genres: {
                            every: {
                                name: {
                                    contains: genre.name,
                                    mode: "insensitive"
                                }
                            }
                        }
                    }
                })
                return ctx.prisma.series.findMany({
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
        t.nonNull.int('totalSeasons')
        t.nonNull.list.nonNull.field('seasons', {
            type: "Season",
            description: "Seasons related to this series",
            resolve: (_parent, _args, ctx) => {
                return ctx.prisma.series.findUnique({ where: { id: _parent.id } }).seasons();
            }
        })
        t.nonNull.DateTime('createdAt')
        t.nonNull.DateTime('updatedAt')
    }
});

export const SeriesQueries = extendType({
    type: 'Query',
    definition(t) {
        t.list.field('series', {
            type: "Series",
            args: {
                genre: nullable(list(stringArg()))
            },
            resolve(_parent, _args, ctx) {
                return ctx.prisma.series.findMany({
                    where: {
                        genres: {
                            some: {
                                name: {
                                    contains: _args?.genre?.[0] || "",
                                    mode: "insensitive"
                                }
                            }
                        }
                    }
                })
            }
        })
        t.nullable.field('serie', {
            type: "Series",
            args: {
                id: nonNull(intArg()),
            },
            resolve(_parent, _args, ctx) {
                return ctx.prisma.series.findUnique({
                    where: {
                        id: _args.id
                    }
                })
            }
        })
        t.list.field('searchSeriesByTitle', {
            type: "Series",
            args: {
                title: nonNull(stringArg()),
            },
            resolve(_parent, _args, ctx) {
                return ctx.prisma.series.findMany({
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

export const SeriesMutations = extendType({
    type: 'Mutation',
    definition(t) {
        t.field('createSeries', {
            type: "Series",
            description: "Create a new series",
            args: {
                title: nonNull(stringArg()),
                year: nonNull(intArg()),
                rating: nonNull(stringArg()),
                release: nonNull(stringArg()),
                runtime: nonNull(intArg()),
                genres: nonNull(list(stringArg())),
                plot: nonNull(stringArg()),
                poster: nonNull(stringArg()),
                imdbRating: nonNull(floatArg()),
                totalSeasons: nonNull(intArg()),
            },
            resolve(_parent, _args, ctx) {
                return ctx.prisma.series.create({
                    data: {
                        title: _args.title,
                        year: _args.year,
                        rating: _args.rating,
                        release: _args.release,
                        runtime: _args.runtime,
                        genres: {
                            connect: _args.genres.map((genre: string) => ({
                                name: genre
                            }))
                        },
                        plot: _args.plot,
                        poster: _args.poster,
                        imdbRating: _args.imdbRating,
                        totalSeasons: _args.totalSeasons,
                    }
                })
            }
        })
        t.field('updateSeries', {
            type: "Series",
            description: "Update a series",
            args: {
                id: nonNull(intArg()),
                title: nonNull(stringArg()),
                year: nonNull(intArg()),
                rating: nonNull(stringArg()),
                release: nonNull(stringArg()),
                runtime: nonNull(intArg()),
                genres: nonNull(list(stringArg())),
                plot: nonNull(stringArg()),
                poster: nonNull(stringArg()),
                imdbRating: nonNull(floatArg()),
                totalSeasons: nonNull(intArg()),
            },
            resolve(_parent, _args, ctx) {
                return ctx.prisma.series.update({
                    where: {
                        id: _args.id
                    },
                    data: {
                        title: _args.title,
                        year: _args.year,
                        rating: _args.rating,
                        release: _args.release,
                        runtime: _args.runtime,
                        genres: {
                            connect: _args.genres.map((genre: string) => ({
                                name: genre
                            }))
                        },
                        plot: _args.plot,
                        poster: _args.poster,
                        imdbRating: _args.imdbRating,
                        totalSeasons: _args.totalSeasons,
                    }
                })
            }
        })
        // delete series
        t.field('deleteSeries', {
            type: "Series",
            description: "Delete a series",
            args: {
                id: nonNull(intArg()),
            },
            resolve(_parent, _args, ctx) {
                return ctx.prisma.series.delete({
                    where: {
                        id: _args.id
                    }
                })
            }
        }
    }
})