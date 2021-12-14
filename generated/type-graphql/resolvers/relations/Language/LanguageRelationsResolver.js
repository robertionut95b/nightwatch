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
exports.LanguageRelationsResolver = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
const Language_1 = require("../../../models/Language");
const Movie_1 = require("../../../models/Movie");
const Serie_1 = require("../../../models/Serie");
const LanguageMoviesArgs_1 = require("./args/LanguageMoviesArgs");
const LanguageSeriesArgs_1 = require("./args/LanguageSeriesArgs");
const helpers_1 = require("../../../helpers");
let LanguageRelationsResolver = class LanguageRelationsResolver {
    async movies(language, ctx, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).language.findUnique({
            where: {
                id: language.id,
            },
        }).movies(args);
    }
    async series(language, ctx, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).language.findUnique({
            where: {
                id: language.id,
            },
        }).series(args);
    }
};
__decorate([
    TypeGraphQL.FieldResolver(_type => [Movie_1.Movie], {
        nullable: false
    }),
    __param(0, TypeGraphQL.Root()),
    __param(1, TypeGraphQL.Ctx()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Language_1.Language, Object, LanguageMoviesArgs_1.LanguageMoviesArgs]),
    __metadata("design:returntype", Promise)
], LanguageRelationsResolver.prototype, "movies", null);
__decorate([
    TypeGraphQL.FieldResolver(_type => [Serie_1.Serie], {
        nullable: false
    }),
    __param(0, TypeGraphQL.Root()),
    __param(1, TypeGraphQL.Ctx()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Language_1.Language, Object, LanguageSeriesArgs_1.LanguageSeriesArgs]),
    __metadata("design:returntype", Promise)
], LanguageRelationsResolver.prototype, "series", null);
LanguageRelationsResolver = __decorate([
    TypeGraphQL.Resolver(_of => Language_1.Language)
], LanguageRelationsResolver);
exports.LanguageRelationsResolver = LanguageRelationsResolver;
