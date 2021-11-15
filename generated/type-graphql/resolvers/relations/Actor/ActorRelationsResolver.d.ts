import { Actor } from "../../../models/Actor";
import { Movie } from "../../../models/Movie";
import { Serie } from "../../../models/Serie";
import { ActorMoviesArgs } from "./args/ActorMoviesArgs";
export declare class ActorRelationsResolver {
    movies(actor: Actor, ctx: any, args: ActorMoviesArgs): Promise<Movie[]>;
    series(actor: Actor, ctx: any): Promise<Serie | null>;
}
