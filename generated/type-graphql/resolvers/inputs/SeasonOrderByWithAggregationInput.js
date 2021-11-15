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
exports.SeasonOrderByWithAggregationInput = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
const SeasonAvgOrderByAggregateInput_1 = require("../inputs/SeasonAvgOrderByAggregateInput");
const SeasonCountOrderByAggregateInput_1 = require("../inputs/SeasonCountOrderByAggregateInput");
const SeasonMaxOrderByAggregateInput_1 = require("../inputs/SeasonMaxOrderByAggregateInput");
const SeasonMinOrderByAggregateInput_1 = require("../inputs/SeasonMinOrderByAggregateInput");
const SeasonSumOrderByAggregateInput_1 = require("../inputs/SeasonSumOrderByAggregateInput");
const SortOrder_1 = require("../../enums/SortOrder");
let SeasonOrderByWithAggregationInput = class SeasonOrderByWithAggregationInput {
};
__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    __metadata("design:type", String)
], SeasonOrderByWithAggregationInput.prototype, "id", void 0);
__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    __metadata("design:type", String)
], SeasonOrderByWithAggregationInput.prototype, "title", void 0);
__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    __metadata("design:type", String)
], SeasonOrderByWithAggregationInput.prototype, "index", void 0);
__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    __metadata("design:type", String)
], SeasonOrderByWithAggregationInput.prototype, "episodes", void 0);
__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    __metadata("design:type", String)
], SeasonOrderByWithAggregationInput.prototype, "seriesId", void 0);
__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    __metadata("design:type", String)
], SeasonOrderByWithAggregationInput.prototype, "launchDate", void 0);
__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    __metadata("design:type", String)
], SeasonOrderByWithAggregationInput.prototype, "createdAt", void 0);
__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    __metadata("design:type", String)
], SeasonOrderByWithAggregationInput.prototype, "updatedAt", void 0);
__decorate([
    TypeGraphQL.Field(_type => SeasonCountOrderByAggregateInput_1.SeasonCountOrderByAggregateInput, {
        nullable: true
    }),
    __metadata("design:type", SeasonCountOrderByAggregateInput_1.SeasonCountOrderByAggregateInput)
], SeasonOrderByWithAggregationInput.prototype, "_count", void 0);
__decorate([
    TypeGraphQL.Field(_type => SeasonAvgOrderByAggregateInput_1.SeasonAvgOrderByAggregateInput, {
        nullable: true
    }),
    __metadata("design:type", SeasonAvgOrderByAggregateInput_1.SeasonAvgOrderByAggregateInput)
], SeasonOrderByWithAggregationInput.prototype, "_avg", void 0);
__decorate([
    TypeGraphQL.Field(_type => SeasonMaxOrderByAggregateInput_1.SeasonMaxOrderByAggregateInput, {
        nullable: true
    }),
    __metadata("design:type", SeasonMaxOrderByAggregateInput_1.SeasonMaxOrderByAggregateInput)
], SeasonOrderByWithAggregationInput.prototype, "_max", void 0);
__decorate([
    TypeGraphQL.Field(_type => SeasonMinOrderByAggregateInput_1.SeasonMinOrderByAggregateInput, {
        nullable: true
    }),
    __metadata("design:type", SeasonMinOrderByAggregateInput_1.SeasonMinOrderByAggregateInput)
], SeasonOrderByWithAggregationInput.prototype, "_min", void 0);
__decorate([
    TypeGraphQL.Field(_type => SeasonSumOrderByAggregateInput_1.SeasonSumOrderByAggregateInput, {
        nullable: true
    }),
    __metadata("design:type", SeasonSumOrderByAggregateInput_1.SeasonSumOrderByAggregateInput)
], SeasonOrderByWithAggregationInput.prototype, "_sum", void 0);
SeasonOrderByWithAggregationInput = __decorate([
    TypeGraphQL.InputType("SeasonOrderByWithAggregationInput", {
        isAbstract: true
    })
], SeasonOrderByWithAggregationInput);
exports.SeasonOrderByWithAggregationInput = SeasonOrderByWithAggregationInput;
