import { Actor } from "../../../models/Actor";
import { Director } from "../../../models/Director";
import { Genre } from "../../../models/Genre";
import { Language } from "../../../models/Language";
import { Season } from "../../../models/Season";
import { Serie } from "../../../models/Serie";
import { SerieActorsArgs } from "./args/SerieActorsArgs";
import { SerieDirectorsArgs } from "./args/SerieDirectorsArgs";
import { SerieGenresArgs } from "./args/SerieGenresArgs";
import { SerieLanguagesArgs } from "./args/SerieLanguagesArgs";
import { SerieSeasonsArgs } from "./args/SerieSeasonsArgs";
export declare class SerieRelationsResolver {
    genres(serie: Serie, ctx: any, args: SerieGenresArgs): Promise<Genre[]>;
    directors(serie: Serie, ctx: any, args: SerieDirectorsArgs): Promise<Director[]>;
    actors(serie: Serie, ctx: any, args: SerieActorsArgs): Promise<Actor[]>;
    languages(serie: Serie, ctx: any, args: SerieLanguagesArgs): Promise<Language[]>;
    seasons(serie: Serie, ctx: any, args: SerieSeasonsArgs): Promise<Season[]>;
}
