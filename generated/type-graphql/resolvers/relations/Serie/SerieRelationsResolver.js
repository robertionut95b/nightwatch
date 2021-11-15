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
exports.SerieRelationsResolver = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
const Actor_1 = require("../../../models/Actor");
const Director_1 = require("../../../models/Director");
const Genre_1 = require("../../../models/Genre");
const Language_1 = require("../../../models/Language");
const Season_1 = require("../../../models/Season");
const Serie_1 = require("../../../models/Serie");
const SerieActorsArgs_1 = require("./args/SerieActorsArgs");
const SerieDirectorsArgs_1 = require("./args/SerieDirectorsArgs");
const SerieGenresArgs_1 = require("./args/SerieGenresArgs");
const SerieLanguagesArgs_1 = require("./args/SerieLanguagesArgs");
const SerieSeasonsArgs_1 = require("./args/SerieSeasonsArgs");
const helpers_1 = require("../../../helpers");
let SerieRelationsResolver = class SerieRelationsResolver {
    async genres(serie, ctx, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).serie.findUnique({
            where: {
                id: serie.id,
            },
        }).genres(args);
    }
    async directors(serie, ctx, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).serie.findUnique({
            where: {
                id: serie.id,
            },
        }).directors(args);
    }
    async actors(serie, ctx, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).serie.findUnique({
            where: {
                id: serie.id,
            },
        }).actors(args);
    }
    async languages(serie, ctx, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).serie.findUnique({
            where: {
                id: serie.id,
            },
        }).languages(args);
    }
    async seasons(serie, ctx, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).serie.findUnique({
            where: {
                id: serie.id,
            },
        }).seasons(args);
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
    __metadata("design:paramtypes", [Serie_1.Serie, Object, SerieGenresArgs_1.SerieGenresArgs]),
    __metadata("design:returntype", Promise)
], SerieRelationsResolver.prototype, "genres", null);
__decorate([
    TypeGraphQL.FieldResolver(_type => [Director_1.Director], {
        nullable: false
    }),
    __param(0, TypeGraphQL.Root()),
    __param(1, TypeGraphQL.Ctx()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Serie_1.Serie, Object, SerieDirectorsArgs_1.SerieDirectorsArgs]),
    __metadata("design:returntype", Promise)
], SerieRelationsResolver.prototype, "directors", null);
__decorate([
    TypeGraphQL.FieldResolver(_type => [Actor_1.Actor], {
        nullable: false
    }),
    __param(0, TypeGraphQL.Root()),
    __param(1, TypeGraphQL.Ctx()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Serie_1.Serie, Object, SerieActorsArgs_1.SerieActorsArgs]),
    __metadata("design:returntype", Promise)
], SerieRelationsResolver.prototype, "actors", null);
__decorate([
    TypeGraphQL.FieldResolver(_type => [Language_1.Language], {
        nullable: false
    }),
    __param(0, TypeGraphQL.Root()),
    __param(1, TypeGraphQL.Ctx()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Serie_1.Serie, Object, SerieLanguagesArgs_1.SerieLanguagesArgs]),
    __metadata("design:returntype", Promise)
], SerieRelationsResolver.prototype, "languages", null);
__decorate([
    TypeGraphQL.FieldResolver(_type => [Season_1.Season], {
        nullable: false
    }),
    __param(0, TypeGraphQL.Root()),
    __param(1, TypeGraphQL.Ctx()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Serie_1.Serie, Object, SerieSeasonsArgs_1.SerieSeasonsArgs]),
    __metadata("design:returntype", Promise)
], SerieRelationsResolver.prototype, "seasons", null);
SerieRelationsResolver = __decorate([
    TypeGraphQL.Resolver(_of => Serie_1.Serie)
], SerieRelationsResolver);
exports.SerieRelationsResolver = SerieRelationsResolver;
