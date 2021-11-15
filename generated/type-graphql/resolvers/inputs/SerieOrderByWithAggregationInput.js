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
exports.SerieOrderByWithAggregationInput = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
const SerieAvgOrderByAggregateInput_1 = require("../inputs/SerieAvgOrderByAggregateInput");
const SerieCountOrderByAggregateInput_1 = require("../inputs/SerieCountOrderByAggregateInput");
const SerieMaxOrderByAggregateInput_1 = require("../inputs/SerieMaxOrderByAggregateInput");
const SerieMinOrderByAggregateInput_1 = require("../inputs/SerieMinOrderByAggregateInput");
const SerieSumOrderByAggregateInput_1 = require("../inputs/SerieSumOrderByAggregateInput");
const SortOrder_1 = require("../../enums/SortOrder");
let SerieOrderByWithAggregationInput = class SerieOrderByWithAggregationInput {
};
__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    __metadata("design:type", String)
], SerieOrderByWithAggregationInput.prototype, "id", void 0);
__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    __metadata("design:type", String)
], SerieOrderByWithAggregationInput.prototype, "title", void 0);
__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    __metadata("design:type", String)
], SerieOrderByWithAggregationInput.prototype, "year", void 0);
__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    __metadata("design:type", String)
], SerieOrderByWithAggregationInput.prototype, "rating", void 0);
__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    __metadata("design:type", String)
], SerieOrderByWithAggregationInput.prototype, "release", void 0);
__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    __metadata("design:type", String)
], SerieOrderByWithAggregationInput.prototype, "runtime", void 0);
__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    __metadata("design:type", String)
], SerieOrderByWithAggregationInput.prototype, "plot", void 0);
__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    __metadata("design:type", String)
], SerieOrderByWithAggregationInput.prototype, "poster", void 0);
__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    __metadata("design:type", String)
], SerieOrderByWithAggregationInput.prototype, "imdbRating", void 0);
__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    __metadata("design:type", String)
], SerieOrderByWithAggregationInput.prototype, "totalSeasons", void 0);
__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    __metadata("design:type", String)
], SerieOrderByWithAggregationInput.prototype, "createdAt", void 0);
__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    __metadata("design:type", String)
], SerieOrderByWithAggregationInput.prototype, "updatedAt", void 0);
__decorate([
    TypeGraphQL.Field(_type => SerieCountOrderByAggregateInput_1.SerieCountOrderByAggregateInput, {
        nullable: true
    }),
    __metadata("design:type", SerieCountOrderByAggregateInput_1.SerieCountOrderByAggregateInput)
], SerieOrderByWithAggregationInput.prototype, "_count", void 0);
__decorate([
    TypeGraphQL.Field(_type => SerieAvgOrderByAggregateInput_1.SerieAvgOrderByAggregateInput, {
        nullable: true
    }),
    __metadata("design:type", SerieAvgOrderByAggregateInput_1.SerieAvgOrderByAggregateInput)
], SerieOrderByWithAggregationInput.prototype, "_avg", void 0);
__decorate([
    TypeGraphQL.Field(_type => SerieMaxOrderByAggregateInput_1.SerieMaxOrderByAggregateInput, {
        nullable: true
    }),
    __metadata("design:type", SerieMaxOrderByAggregateInput_1.SerieMaxOrderByAggregateInput)
], SerieOrderByWithAggregationInput.prototype, "_max", void 0);
__decorate([
    TypeGraphQL.Field(_type => SerieMinOrderByAggregateInput_1.SerieMinOrderByAggregateInput, {
        nullable: true
    }),
    __metadata("design:type", SerieMinOrderByAggregateInput_1.SerieMinOrderByAggregateInput)
], SerieOrderByWithAggregationInput.prototype, "_min", void 0);
__decorate([
    TypeGraphQL.Field(_type => SerieSumOrderByAggregateInput_1.SerieSumOrderByAggregateInput, {
        nullable: true
    }),
    __metadata("design:type", SerieSumOrderByAggregateInput_1.SerieSumOrderByAggregateInput)
], SerieOrderByWithAggregationInput.prototype, "_sum", void 0);
SerieOrderByWithAggregationInput = __decorate([
    TypeGraphQL.InputType("SerieOrderByWithAggregationInput", {
        isAbstract: true
    })
], SerieOrderByWithAggregationInput);
exports.SerieOrderByWithAggregationInput = SerieOrderByWithAggregationInput;
