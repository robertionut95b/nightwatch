import { objectType, nonNull, intArg, extendType } from 'nexus';

export const Episode = objectType({
    name: "Episode",
    definition(t) {
        t.nonNull.int('id')
        t.nonNull.string('title')
        t.nonNull.int('runtime')
        t.nonNull.field('season', {
            type: "Season",
            description: "A season associated to this episode",
            resolve: (_parent, _, ctx) => {
                return ctx.prisma.episode.findUnique({ where: { id: _parent.id } }).season();
            },
        })
        t.nonNull.string('plot')
        t.nonNull.string('poster')
        t.nonNull.float('imdbRating')
        t.nonNull.DateTime('createdAt')
        t.nonNull.DateTime('updatedAt')
    }
});

export const EpisodeQueries = extendType({
    type: "Query",
    definition(t) {
        t.list.field('episodes', {
            type: "Episode",
            resolve(_parent, _args, ctx) {
                return ctx.prisma.episode.findMany()
            }
        })
        t.nullable.field('episode', {
            type: "Episode",
            args: {
                id: nonNull(intArg()),
            },
            resolve(_parent, _args, ctx) {
                return ctx.prisma.episode.findUnique({ where: { id: _args.id } })
            }
        })
    }
})