"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MovieRelationsResolver = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
const Actor_1 = require("../../../models/Actor");
const Director_1 = require("../../../models/Director");
const Genre_1 = require("../../../models/Genre");
const Language_1 = require("../../../models/Language");
const Movie_1 = require("../../../models/Movie");
const MovieActorsArgs_1 = require("./args/MovieActorsArgs");
const MovieDirectorsArgs_1 = require("./args/MovieDirectorsArgs");
const MovieGenresArgs_1 = require("./args/MovieGenresArgs");
const MovieLanguagesArgs_1 = require("./args/MovieLanguagesArgs");
const helpers_1 = require("../../../helpers");
let MovieRelationsResolver = class MovieRelationsResolver {
    async genres(movie, ctx, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).movie.findUnique({
            where: {
                id: movie.id,
            },
        }).genres(args);
    }
    async directors(movie, ctx, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).movie.findUnique({
            where: {
                id: movie.id,
            },
        }).directors(args);
    }
    async actors(movie, ctx, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).movie.findUnique({
            where: {
                id: movie.id,
            },
        }).actors(args);
    }
    async languages(movie, ctx, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).movie.findUnique({
            where: {
                id: movie.id,
            },
        }).languages(args);
    }
};
__decorate([
    TypeGraphQL.FieldResolver(_type => [Genre_1.Genre], {
        nullable: false
    }),
    __param(0, TypeGraphQL.Root()),
    __param(1, TypeGraphQL.Ctx()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Movie_1.Movie, Object, MovieGenresArgs_1.MovieGenresArgs]),
    __metadata("design:returntype", Promise)
], MovieRelationsResolver.prototype, "genres", null);
__decorate([
    TypeGraphQL.FieldResolver(_type => [Director_1.Director], {
        nullable: false
    }),
    __param(0, TypeGraphQL.Root()),
    __param(1, TypeGraphQL.Ctx()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Movie_1.Movie, Object, MovieDirectorsArgs_1.MovieDirectorsArgs]),
    __metadata("design:returntype", Promise)
], MovieRelationsResolver.prototype, "directors", null);
__decorate([
    TypeGraphQL.FieldResolver(_type => [Actor_1.Actor], {
        nullable: false
    }),
    __param(0, TypeGraphQL.Root()),
    __param(1, TypeGraphQL.Ctx()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Movie_1.Movie, Object, MovieActorsArgs_1.MovieActorsArgs]),
    __metadata("design:returntype", Promise)
], MovieRelationsResolver.prototype, "actors", null);
__decorate([
    TypeGraphQL.FieldResolver(_type => [Language_1.Language], {
        nullable: false
    }),
    __param(0, TypeGraphQL.Root()),
    __param(1, TypeGraphQL.Ctx()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Movie_1.Movie, Object, MovieLanguagesArgs_1.MovieLanguagesArgs]),
    __metadata("design:returntype", Promise)
], MovieRelationsResolver.prototype, "languages", null);
MovieRelationsResolver = __decorate([
    TypeGraphQL.Resolver(_of => Movie_1.Movie)
], MovieRelationsResolver);
exports.MovieRelationsResolver = MovieRelationsResolver;
