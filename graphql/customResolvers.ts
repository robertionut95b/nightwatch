import { Ctx, FieldResolver, Resolver, Root } from "type-graphql";
import { Movie } from "../generated/type-graphql/models/Movie";
import { Context } from "../lib/PrismaClient/prisma";

@Resolver(of => Movie)
export class CustomMovieResolver {
    @FieldResolver(type => [Movie])
    async relatedMovies(@Root() movie: Movie, @Ctx() { prisma }: Context): Promise<Movie[] | undefined> {
        return prisma.movie.findMany({
            where: {
                id: {
                    not: movie.id,
                },
                genres: {
                    some: {
                        name: {
                            in: movie.genres?.map(genre => genre.name),
                            mode: "insensitive"
                        }
                    },
                }
            },
        })
    }
}