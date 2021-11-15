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
var ActorWhereInput_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ActorWhereInput = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
const DateTimeFilter_1 = require("../inputs/DateTimeFilter");
const IntFilter_1 = require("../inputs/IntFilter");
const IntNullableFilter_1 = require("../inputs/IntNullableFilter");
const MovieListRelationFilter_1 = require("../inputs/MovieListRelationFilter");
const SerieRelationFilter_1 = require("../inputs/SerieRelationFilter");
const StringFilter_1 = require("../inputs/StringFilter");
let ActorWhereInput = ActorWhereInput_1 = class ActorWhereInput {
};
__decorate([
    TypeGraphQL.Field(_type => [ActorWhereInput_1], {
        nullable: true
    }),
    __metadata("design:type", Array)
], ActorWhereInput.prototype, "AND", void 0);
__decorate([
    TypeGraphQL.Field(_type => [ActorWhereInput_1], {
        nullable: true
    }),
    __metadata("design:type", Array)
], ActorWhereInput.prototype, "OR", void 0);
__decorate([
    TypeGraphQL.Field(_type => [ActorWhereInput_1], {
        nullable: true
    }),
    __metadata("design:type", Array)
], ActorWhereInput.prototype, "NOT", void 0);
__decorate([
    TypeGraphQL.Field(_type => IntFilter_1.IntFilter, {
        nullable: true
    }),
    __metadata("design:type", IntFilter_1.IntFilter)
], ActorWhereInput.prototype, "id", void 0);
__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    __metadata("design:type", StringFilter_1.StringFilter)
], ActorWhereInput.prototype, "name", void 0);
__decorate([
    TypeGraphQL.Field(_type => MovieListRelationFilter_1.MovieListRelationFilter, {
        nullable: true
    }),
    __metadata("design:type", MovieListRelationFilter_1.MovieListRelationFilter)
], ActorWhereInput.prototype, "movies", void 0);
__decorate([
    TypeGraphQL.Field(_type => DateTimeFilter_1.DateTimeFilter, {
        nullable: true
    }),
    __metadata("design:type", DateTimeFilter_1.DateTimeFilter)
], ActorWhereInput.prototype, "createdAt", void 0);
__decorate([
    TypeGraphQL.Field(_type => DateTimeFilter_1.DateTimeFilter, {
        nullable: true
    }),
    __metadata("design:type", DateTimeFilter_1.DateTimeFilter)
], ActorWhereInput.prototype, "updatedAt", void 0);
__decorate([
    TypeGraphQL.Field(_type => SerieRelationFilter_1.SerieRelationFilter, {
        nullable: true
    }),
    __metadata("design:type", SerieRelationFilter_1.SerieRelationFilter)
], ActorWhereInput.prototype, "series", void 0);
__decorate([
    TypeGraphQL.Field(_type => IntNullableFilter_1.IntNullableFilter, {
        nullable: true
    }),
    __metadata("design:type", IntNullableFilter_1.IntNullableFilter)
], ActorWhereInput.prototype, "seriesId", void 0);
ActorWhereInput = ActorWhereInput_1 = __decorate([
    TypeGraphQL.InputType("ActorWhereInput", {
        isAbstract: true
    })
], ActorWhereInput);
exports.ActorWhereInput = ActorWhereInput;
