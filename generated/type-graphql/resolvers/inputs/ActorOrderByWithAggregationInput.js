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
exports.ActorOrderByWithAggregationInput = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
const ActorAvgOrderByAggregateInput_1 = require("../inputs/ActorAvgOrderByAggregateInput");
const ActorCountOrderByAggregateInput_1 = require("../inputs/ActorCountOrderByAggregateInput");
const ActorMaxOrderByAggregateInput_1 = require("../inputs/ActorMaxOrderByAggregateInput");
const ActorMinOrderByAggregateInput_1 = require("../inputs/ActorMinOrderByAggregateInput");
const ActorSumOrderByAggregateInput_1 = require("../inputs/ActorSumOrderByAggregateInput");
const SortOrder_1 = require("../../enums/SortOrder");
let ActorOrderByWithAggregationInput = class ActorOrderByWithAggregationInput {
};
__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    __metadata("design:type", String)
], ActorOrderByWithAggregationInput.prototype, "id", void 0);
__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    __metadata("design:type", String)
], ActorOrderByWithAggregationInput.prototype, "name", void 0);
__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    __metadata("design:type", String)
], ActorOrderByWithAggregationInput.prototype, "createdAt", void 0);
__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    __metadata("design:type", String)
], ActorOrderByWithAggregationInput.prototype, "updatedAt", void 0);
__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    __metadata("design:type", String)
], ActorOrderByWithAggregationInput.prototype, "seriesId", void 0);
__decorate([
    TypeGraphQL.Field(_type => ActorCountOrderByAggregateInput_1.ActorCountOrderByAggregateInput, {
        nullable: true
    }),
    __metadata("design:type", ActorCountOrderByAggregateInput_1.ActorCountOrderByAggregateInput)
], ActorOrderByWithAggregationInput.prototype, "_count", void 0);
__decorate([
    TypeGraphQL.Field(_type => ActorAvgOrderByAggregateInput_1.ActorAvgOrderByAggregateInput, {
        nullable: true
    }),
    __metadata("design:type", ActorAvgOrderByAggregateInput_1.ActorAvgOrderByAggregateInput)
], ActorOrderByWithAggregationInput.prototype, "_avg", void 0);
__decorate([
    TypeGraphQL.Field(_type => ActorMaxOrderByAggregateInput_1.ActorMaxOrderByAggregateInput, {
        nullable: true
    }),
    __metadata("design:type", ActorMaxOrderByAggregateInput_1.ActorMaxOrderByAggregateInput)
], ActorOrderByWithAggregationInput.prototype, "_max", void 0);
__decorate([
    TypeGraphQL.Field(_type => ActorMinOrderByAggregateInput_1.ActorMinOrderByAggregateInput, {
        nullable: true
    }),
    __metadata("design:type", ActorMinOrderByAggregateInput_1.ActorMinOrderByAggregateInput)
], ActorOrderByWithAggregationInput.prototype, "_min", void 0);
__decorate([
    TypeGraphQL.Field(_type => ActorSumOrderByAggregateInput_1.ActorSumOrderByAggregateInput, {
        nullable: true
    }),
    __metadata("design:type", ActorSumOrderByAggregateInput_1.ActorSumOrderByAggregateInput)
], ActorOrderByWithAggregationInput.prototype, "_sum", void 0);
ActorOrderByWithAggregationInput = __decorate([
    TypeGraphQL.InputType("ActorOrderByWithAggregationInput", {
        isAbstract: true
    })
], ActorOrderByWithAggregationInput);
exports.ActorOrderByWithAggregationInput = ActorOrderByWithAggregationInput;
