import { objectType, nonNull, intArg, extendType } from 'nexus';

export const Season = objectType({
    name: "Season",
    definition(t) {
        t.nonNull.int('id')
        t.nonNull.string('title')
        t.nonNull.int('index')
        t.nonNull.int('episodes')
        t.nonNull.field('series', {
            type: "Series",
            description: "A series title associated to this season",
            resolve: (_parent, _, ctx) => {
                return ctx.prisma.season.findUnique({ where: { id: _parent.id } }).series();
            },
        })
        t.nonNull.DateTime('launchDate')
        t.nonNull.DateTime('createdAt')
        t.nonNull.DateTime('updatedAt')
    }
});

export const SeasonQueries = extendType({
    type: "Query",
    definition(t) {
        t.list.field('seasons', {
            type: "Season",
            resolve(_parent, _args, ctx) {
                return ctx.prisma.season.findMany()
            }
        })
        t.nullable.field('season', {
            type: "Season",
            args: {
                id: nonNull(intArg()),
            },
            resolve(_parent, _args, ctx) {
                return ctx.prisma.season.findUnique({ where: { id: _args.id } })
            }
        })
    }
})