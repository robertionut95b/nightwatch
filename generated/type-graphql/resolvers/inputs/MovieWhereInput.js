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
var MovieWhereInput_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.MovieWhereInput = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
const ActorListRelationFilter_1 = require("../inputs/ActorListRelationFilter");
const DateTimeFilter_1 = require("../inputs/DateTimeFilter");
const DirectorListRelationFilter_1 = require("../inputs/DirectorListRelationFilter");
const FloatFilter_1 = require("../inputs/FloatFilter");
const GenreListRelationFilter_1 = require("../inputs/GenreListRelationFilter");
const IntFilter_1 = require("../inputs/IntFilter");
const LanguageListRelationFilter_1 = require("../inputs/LanguageListRelationFilter");
const StringFilter_1 = require("../inputs/StringFilter");
let MovieWhereInput = MovieWhereInput_1 = class MovieWhereInput {
};
__decorate([
    TypeGraphQL.Field(_type => [MovieWhereInput_1], {
        nullable: true
    }),
    __metadata("design:type", Array)
], MovieWhereInput.prototype, "AND", void 0);
__decorate([
    TypeGraphQL.Field(_type => [MovieWhereInput_1], {
        nullable: true
    }),
    __metadata("design:type", Array)
], MovieWhereInput.prototype, "OR", void 0);
__decorate([
    TypeGraphQL.Field(_type => [MovieWhereInput_1], {
        nullable: true
    }),
    __metadata("design:type", Array)
], MovieWhereInput.prototype, "NOT", void 0);
__decorate([
    TypeGraphQL.Field(_type => IntFilter_1.IntFilter, {
        nullable: true
    }),
    __metadata("design:type", IntFilter_1.IntFilter)
], MovieWhereInput.prototype, "id", void 0);
__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    __metadata("design:type", StringFilter_1.StringFilter)
], MovieWhereInput.prototype, "title", void 0);
__decorate([
    TypeGraphQL.Field(_type => IntFilter_1.IntFilter, {
        nullable: true
    }),
    __metadata("design:type", IntFilter_1.IntFilter)
], MovieWhereInput.prototype, "year", void 0);
__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    __metadata("design:type", StringFilter_1.StringFilter)
], MovieWhereInput.prototype, "rating", void 0);
__decorate([
    TypeGraphQL.Field(_type => DateTimeFilter_1.DateTimeFilter, {
        nullable: true
    }),
    __metadata("design:type", DateTimeFilter_1.DateTimeFilter)
], MovieWhereInput.prototype, "release", void 0);
__decorate([
    TypeGraphQL.Field(_type => IntFilter_1.IntFilter, {
        nullable: true
    }),
    __metadata("design:type", IntFilter_1.IntFilter)
], MovieWhereInput.prototype, "runtime", void 0);
__decorate([
    TypeGraphQL.Field(_type => GenreListRelationFilter_1.GenreListRelationFilter, {
        nullable: true
    }),
    __metadata("design:type", GenreListRelationFilter_1.GenreListRelationFilter)
], MovieWhereInput.prototype, "genres", void 0);
__decorate([
    TypeGraphQL.Field(_type => DirectorListRelationFilter_1.DirectorListRelationFilter, {
        nullable: true
    }),
    __metadata("design:type", DirectorListRelationFilter_1.DirectorListRelationFilter)
], MovieWhereInput.prototype, "directors", void 0);
__decorate([
    TypeGraphQL.Field(_type => ActorListRelationFilter_1.ActorListRelationFilter, {
        nullable: true
    }),
    __metadata("design:type", ActorListRelationFilter_1.ActorListRelationFilter)
], MovieWhereInput.prototype, "actors", void 0);
__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    __metadata("design:type", StringFilter_1.StringFilter)
], MovieWhereInput.prototype, "plot", void 0);
__decorate([
    TypeGraphQL.Field(_type => LanguageListRelationFilter_1.LanguageListRelationFilter, {
        nullable: true
    }),
    __metadata("design:type", LanguageListRelationFilter_1.LanguageListRelationFilter)
], MovieWhereInput.prototype, "languages", void 0);
__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    __metadata("design:type", StringFilter_1.StringFilter)
], MovieWhereInput.prototype, "poster", void 0);
__decorate([
    TypeGraphQL.Field(_type => FloatFilter_1.FloatFilter, {
        nullable: true
    }),
    __metadata("design:type", FloatFilter_1.FloatFilter)
], MovieWhereInput.prototype, "imdbRating", void 0);
__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    __metadata("design:type", StringFilter_1.StringFilter)
], MovieWhereInput.prototype, "imdbID", void 0);
__decorate([
    TypeGraphQL.Field(_type => DateTimeFilter_1.DateTimeFilter, {
        nullable: true
    }),
    __metadata("design:type", DateTimeFilter_1.DateTimeFilter)
], MovieWhereInput.prototype, "createdAt", void 0);
__decorate([
    TypeGraphQL.Field(_type => DateTimeFilter_1.DateTimeFilter, {
        nullable: true
    }),
    __metadata("design:type", DateTimeFilter_1.DateTimeFilter)
], MovieWhereInput.prototype, "updatedAt", void 0);
MovieWhereInput = MovieWhereInput_1 = __decorate([
    TypeGraphQL.InputType("MovieWhereInput", {
        isAbstract: true
    })
], MovieWhereInput);
exports.MovieWhereInput = MovieWhereInput;
