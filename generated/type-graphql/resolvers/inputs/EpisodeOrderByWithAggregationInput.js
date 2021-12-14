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
exports.EpisodeOrderByWithAggregationInput = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
const EpisodeAvgOrderByAggregateInput_1 = require("../inputs/EpisodeAvgOrderByAggregateInput");
const EpisodeCountOrderByAggregateInput_1 = require("../inputs/EpisodeCountOrderByAggregateInput");
const EpisodeMaxOrderByAggregateInput_1 = require("../inputs/EpisodeMaxOrderByAggregateInput");
const EpisodeMinOrderByAggregateInput_1 = require("../inputs/EpisodeMinOrderByAggregateInput");
const EpisodeSumOrderByAggregateInput_1 = require("../inputs/EpisodeSumOrderByAggregateInput");
const SortOrder_1 = require("../../enums/SortOrder");
let EpisodeOrderByWithAggregationInput = class EpisodeOrderByWithAggregationInput {
};
__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    __metadata("design:type", String)
], EpisodeOrderByWithAggregationInput.prototype, "id", void 0);
__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    __metadata("design:type", String)
], EpisodeOrderByWithAggregationInput.prototype, "title", void 0);
__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    __metadata("design:type", String)
], EpisodeOrderByWithAggregationInput.prototype, "runtime", void 0);
__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    __metadata("design:type", String)
], EpisodeOrderByWithAggregationInput.prototype, "plot", void 0);
__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    __metadata("design:type", String)
], EpisodeOrderByWithAggregationInput.prototype, "poster", void 0);
__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    __metadata("design:type", String)
], EpisodeOrderByWithAggregationInput.prototype, "imdbRating", void 0);
__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    __metadata("design:type", String)
], EpisodeOrderByWithAggregationInput.prototype, "imdbID", void 0);
__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    __metadata("design:type", String)
], EpisodeOrderByWithAggregationInput.prototype, "seasonId", void 0);
__decorate([
    TypeGraphQL.Field(_type => EpisodeCountOrderByAggregateInput_1.EpisodeCountOrderByAggregateInput, {
        nullable: true
    }),
    __metadata("design:type", EpisodeCountOrderByAggregateInput_1.EpisodeCountOrderByAggregateInput)
], EpisodeOrderByWithAggregationInput.prototype, "_count", void 0);
__decorate([
    TypeGraphQL.Field(_type => EpisodeAvgOrderByAggregateInput_1.EpisodeAvgOrderByAggregateInput, {
        nullable: true
    }),
    __metadata("design:type", EpisodeAvgOrderByAggregateInput_1.EpisodeAvgOrderByAggregateInput)
], EpisodeOrderByWithAggregationInput.prototype, "_avg", void 0);
__decorate([
    TypeGraphQL.Field(_type => EpisodeMaxOrderByAggregateInput_1.EpisodeMaxOrderByAggregateInput, {
        nullable: true
    }),
    __metadata("design:type", EpisodeMaxOrderByAggregateInput_1.EpisodeMaxOrderByAggregateInput)
], EpisodeOrderByWithAggregationInput.prototype, "_max", void 0);
__decorate([
    TypeGraphQL.Field(_type => EpisodeMinOrderByAggregateInput_1.EpisodeMinOrderByAggregateInput, {
        nullable: true
    }),
    __metadata("design:type", EpisodeMinOrderByAggregateInput_1.EpisodeMinOrderByAggregateInput)
], EpisodeOrderByWithAggregationInput.prototype, "_min", void 0);
__decorate([
    TypeGraphQL.Field(_type => EpisodeSumOrderByAggregateInput_1.EpisodeSumOrderByAggregateInput, {
        nullable: true
    }),
    __metadata("design:type", EpisodeSumOrderByAggregateInput_1.EpisodeSumOrderByAggregateInput)
], EpisodeOrderByWithAggregationInput.prototype, "_sum", void 0);
EpisodeOrderByWithAggregationInput = __decorate([
    TypeGraphQL.InputType("EpisodeOrderByWithAggregationInput", {
        isAbstract: true
    })
], EpisodeOrderByWithAggregationInput);
exports.EpisodeOrderByWithAggregationInput = EpisodeOrderByWithAggregationInput;
