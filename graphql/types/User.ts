import { extendType, objectType } from 'nexus';

export const User = objectType({
    name: "User",
    definition(t) {
        t.string('id')
        t.string('name')
        t.string('email')
        t.field('createdAt', { type: 'DateTime' })
        t.field('updatedAt', { type: 'DateTime' })
    },
})

export const UserQuery = extendType({
    type: "Query",
    definition(t) {
        t.list.field('users', {
            type: "User",
            description: "Collection of users in the database",
            resolve(_parent, _args, ctx) {
                return ctx.prisma.user.findMany()
            }
        })
    }
})