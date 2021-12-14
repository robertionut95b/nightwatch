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
var EpisodeWhereInput_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.EpisodeWhereInput = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
const FloatFilter_1 = require("../inputs/FloatFilter");
const IntFilter_1 = require("../inputs/IntFilter");
const SeasonRelationFilter_1 = require("../inputs/SeasonRelationFilter");
const StringFilter_1 = require("../inputs/StringFilter");
let EpisodeWhereInput = EpisodeWhereInput_1 = class EpisodeWhereInput {
};
__decorate([
    TypeGraphQL.Field(_type => [EpisodeWhereInput_1], {
        nullable: true
    }),
    __metadata("design:type", Array)
], EpisodeWhereInput.prototype, "AND", void 0);
__decorate([
    TypeGraphQL.Field(_type => [EpisodeWhereInput_1], {
        nullable: true
    }),
    __metadata("design:type", Array)
], EpisodeWhereInput.prototype, "OR", void 0);
__decorate([
    TypeGraphQL.Field(_type => [EpisodeWhereInput_1], {
        nullable: true
    }),
    __metadata("design:type", Array)
], EpisodeWhereInput.prototype, "NOT", void 0);
__decorate([
    TypeGraphQL.Field(_type => IntFilter_1.IntFilter, {
        nullable: true
    }),
    __metadata("design:type", IntFilter_1.IntFilter)
], EpisodeWhereInput.prototype, "id", void 0);
__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    __metadata("design:type", StringFilter_1.StringFilter)
], EpisodeWhereInput.prototype, "title", void 0);
__decorate([
    TypeGraphQL.Field(_type => IntFilter_1.IntFilter, {
        nullable: true
    }),
    __metadata("design:type", IntFilter_1.IntFilter)
], EpisodeWhereInput.prototype, "runtime", void 0);
__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    __metadata("design:type", StringFilter_1.StringFilter)
], EpisodeWhereInput.prototype, "plot", void 0);
__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    __metadata("design:type", StringFilter_1.StringFilter)
], EpisodeWhereInput.prototype, "poster", void 0);
__decorate([
    TypeGraphQL.Field(_type => FloatFilter_1.FloatFilter, {
        nullable: true
    }),
    __metadata("design:type", FloatFilter_1.FloatFilter)
], EpisodeWhereInput.prototype, "imdbRating", void 0);
__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    __metadata("design:type", StringFilter_1.StringFilter)
], EpisodeWhereInput.prototype, "imdbID", void 0);
__decorate([
    TypeGraphQL.Field(_type => SeasonRelationFilter_1.SeasonRelationFilter, {
        nullable: true
    }),
    __metadata("design:type", SeasonRelationFilter_1.SeasonRelationFilter)
], EpisodeWhereInput.prototype, "season", void 0);
__decorate([
    TypeGraphQL.Field(_type => IntFilter_1.IntFilter, {
        nullable: true
    }),
    __metadata("design:type", IntFilter_1.IntFilter)
], EpisodeWhereInput.prototype, "seasonId", void 0);
EpisodeWhereInput = EpisodeWhereInput_1 = __decorate([
    TypeGraphQL.InputType("EpisodeWhereInput", {
        isAbstract: true
    })
], EpisodeWhereInput);
exports.EpisodeWhereInput = EpisodeWhereInput;
