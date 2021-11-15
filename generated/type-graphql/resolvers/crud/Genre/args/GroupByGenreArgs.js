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
exports.GroupByGenreArgs = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
const GenreOrderByWithAggregationInput_1 = require("../../../inputs/GenreOrderByWithAggregationInput");
const GenreScalarWhereWithAggregatesInput_1 = require("../../../inputs/GenreScalarWhereWithAggregatesInput");
const GenreWhereInput_1 = require("../../../inputs/GenreWhereInput");
const GenreScalarFieldEnum_1 = require("../../../../enums/GenreScalarFieldEnum");
let GroupByGenreArgs = class GroupByGenreArgs {
};
__decorate([
    TypeGraphQL.Field(_type => GenreWhereInput_1.GenreWhereInput, {
        nullable: true
    }),
    __metadata("design:type", GenreWhereInput_1.GenreWhereInput)
], GroupByGenreArgs.prototype, "where", void 0);
__decorate([
    TypeGraphQL.Field(_type => [GenreOrderByWithAggregationInput_1.GenreOrderByWithAggregationInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], GroupByGenreArgs.prototype, "orderBy", void 0);
__decorate([
    TypeGraphQL.Field(_type => [GenreScalarFieldEnum_1.GenreScalarFieldEnum], {
        nullable: false
    }),
    __metadata("design:type", Array)
], GroupByGenreArgs.prototype, "by", void 0);
__decorate([
    TypeGraphQL.Field(_type => GenreScalarWhereWithAggregatesInput_1.GenreScalarWhereWithAggregatesInput, {
        nullable: true
    }),
    __metadata("design:type", GenreScalarWhereWithAggregatesInput_1.GenreScalarWhereWithAggregatesInput)
], GroupByGenreArgs.prototype, "having", void 0);
__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    __metadata("design:type", Number)
], GroupByGenreArgs.prototype, "take", void 0);
__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    __metadata("design:type", Number)
], GroupByGenreArgs.prototype, "skip", void 0);
GroupByGenreArgs = __decorate([
    TypeGraphQL.ArgsType()
], GroupByGenreArgs);
exports.GroupByGenreArgs = GroupByGenreArgs;
