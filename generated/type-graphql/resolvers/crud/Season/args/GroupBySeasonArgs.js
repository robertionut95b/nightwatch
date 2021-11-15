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
exports.GroupBySeasonArgs = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
const SeasonOrderByWithAggregationInput_1 = require("../../../inputs/SeasonOrderByWithAggregationInput");
const SeasonScalarWhereWithAggregatesInput_1 = require("../../../inputs/SeasonScalarWhereWithAggregatesInput");
const SeasonWhereInput_1 = require("../../../inputs/SeasonWhereInput");
const SeasonScalarFieldEnum_1 = require("../../../../enums/SeasonScalarFieldEnum");
let GroupBySeasonArgs = class GroupBySeasonArgs {
};
__decorate([
    TypeGraphQL.Field(_type => SeasonWhereInput_1.SeasonWhereInput, {
        nullable: true
    }),
    __metadata("design:type", SeasonWhereInput_1.SeasonWhereInput)
], GroupBySeasonArgs.prototype, "where", void 0);
__decorate([
    TypeGraphQL.Field(_type => [SeasonOrderByWithAggregationInput_1.SeasonOrderByWithAggregationInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], GroupBySeasonArgs.prototype, "orderBy", void 0);
__decorate([
    TypeGraphQL.Field(_type => [SeasonScalarFieldEnum_1.SeasonScalarFieldEnum], {
        nullable: false
    }),
    __metadata("design:type", Array)
], GroupBySeasonArgs.prototype, "by", void 0);
__decorate([
    TypeGraphQL.Field(_type => SeasonScalarWhereWithAggregatesInput_1.SeasonScalarWhereWithAggregatesInput, {
        nullable: true
    }),
    __metadata("design:type", SeasonScalarWhereWithAggregatesInput_1.SeasonScalarWhereWithAggregatesInput)
], GroupBySeasonArgs.prototype, "having", void 0);
__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    __metadata("design:type", Number)
], GroupBySeasonArgs.prototype, "take", void 0);
__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    __metadata("design:type", Number)
], GroupBySeasonArgs.prototype, "skip", void 0);
GroupBySeasonArgs = __decorate([
    TypeGraphQL.ArgsType()
], GroupBySeasonArgs);
exports.GroupBySeasonArgs = GroupBySeasonArgs;
