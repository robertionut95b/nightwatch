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
Object.defineProperty(exports, "__esModule", { value: true });
exports.SerieOrderByWithRelationAndSearchRelevanceInput = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
const ActorOrderByRelationAggregateInput_1 = require("../inputs/ActorOrderByRelationAggregateInput");
const DirectorOrderByRelationAggregateInput_1 = require("../inputs/DirectorOrderByRelationAggregateInput");
const GenreOrderByRelationAggregateInput_1 = require("../inputs/GenreOrderByRelationAggregateInput");
const LanguageOrderByRelationAggregateInput_1 = require("../inputs/LanguageOrderByRelationAggregateInput");
const SeasonOrderByRelationAggregateInput_1 = require("../inputs/SeasonOrderByRelationAggregateInput");
const SerieOrderByRelevanceInput_1 = require("../inputs/SerieOrderByRelevanceInput");
const SortOrder_1 = require("../../enums/SortOrder");
let SerieOrderByWithRelationAndSearchRelevanceInput = class SerieOrderByWithRelationAndSearchRelevanceInput {
};
__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    __metadata("design:type", String)
], SerieOrderByWithRelationAndSearchRelevanceInput.prototype, "id", void 0);
__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    __metadata("design:type", String)
], SerieOrderByWithRelationAndSearchRelevanceInput.prototype, "title", void 0);
__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    __metadata("design:type", String)
], SerieOrderByWithRelationAndSearchRelevanceInput.prototype, "year", void 0);
__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    __metadata("design:type", String)
], SerieOrderByWithRelationAndSearchRelevanceInput.prototype, "rating", void 0);
__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    __metadata("design:type", String)
], SerieOrderByWithRelationAndSearchRelevanceInput.prototype, "release", void 0);
__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    __metadata("design:type", String)
], SerieOrderByWithRelationAndSearchRelevanceInput.prototype, "runtime", void 0);
__decorate([
    TypeGraphQL.Field(_type => GenreOrderByRelationAggregateInput_1.GenreOrderByRelationAggregateInput, {
        nullable: true
    }),
    __metadata("design:type", GenreOrderByRelationAggregateInput_1.GenreOrderByRelationAggregateInput)
], SerieOrderByWithRelationAndSearchRelevanceInput.prototype, "genres", void 0);
__decorate([
    TypeGraphQL.Field(_type => DirectorOrderByRelationAggregateInput_1.DirectorOrderByRelationAggregateInput, {
        nullable: true
    }),
    __metadata("design:type", DirectorOrderByRelationAggregateInput_1.DirectorOrderByRelationAggregateInput)
], SerieOrderByWithRelationAndSearchRelevanceInput.prototype, "directors", void 0);
__decorate([
    TypeGraphQL.Field(_type => ActorOrderByRelationAggregateInput_1.ActorOrderByRelationAggregateInput, {
        nullable: true
    }),
    __metadata("design:type", ActorOrderByRelationAggregateInput_1.ActorOrderByRelationAggregateInput)
], SerieOrderByWithRelationAndSearchRelevanceInput.prototype, "actors", void 0);
__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    __metadata("design:type", String)
], SerieOrderByWithRelationAndSearchRelevanceInput.prototype, "plot", void 0);
__decorate([
    TypeGraphQL.Field(_type => LanguageOrderByRelationAggregateInput_1.LanguageOrderByRelationAggregateInput, {
        nullable: true
    }),
    __metadata("design:type", LanguageOrderByRelationAggregateInput_1.LanguageOrderByRelationAggregateInput)
], SerieOrderByWithRelationAndSearchRelevanceInput.prototype, "languages", void 0);
__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    __metadata("design:type", String)
], SerieOrderByWithRelationAndSearchRelevanceInput.prototype, "poster", void 0);
__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    __metadata("design:type", String)
], SerieOrderByWithRelationAndSearchRelevanceInput.prototype, "imdbRating", void 0);
__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    __metadata("design:type", String)
], SerieOrderByWithRelationAndSearchRelevanceInput.prototype, "totalSeasons", void 0);
__decorate([
    TypeGraphQL.Field(_type => SeasonOrderByRelationAggregateInput_1.SeasonOrderByRelationAggregateInput, {
        nullable: true
    }),
    __metadata("design:type", SeasonOrderByRelationAggregateInput_1.SeasonOrderByRelationAggregateInput)
], SerieOrderByWithRelationAndSearchRelevanceInput.prototype, "seasons", void 0);
__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    __metadata("design:type", String)
], SerieOrderByWithRelationAndSearchRelevanceInput.prototype, "createdAt", void 0);
__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    __metadata("design:type", String)
], SerieOrderByWithRelationAndSearchRelevanceInput.prototype, "updatedAt", void 0);
__decorate([
    TypeGraphQL.Field(_type => SerieOrderByRelevanceInput_1.SerieOrderByRelevanceInput, {
        nullable: true
    }),
    __metadata("design:type", SerieOrderByRelevanceInput_1.SerieOrderByRelevanceInput)
], SerieOrderByWithRelationAndSearchRelevanceInput.prototype, "_relevance", void 0);
SerieOrderByWithRelationAndSearchRelevanceInput = __decorate([
    TypeGraphQL.InputType("SerieOrderByWithRelationAndSearchRelevanceInput", {
        isAbstract: true
    })
], SerieOrderByWithRelationAndSearchRelevanceInput);
exports.SerieOrderByWithRelationAndSearchRelevanceInput = SerieOrderByWithRelationAndSearchRelevanceInput;
