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
exports.SerieDirectorsArgs = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
const DirectorOrderByWithRelationAndSearchRelevanceInput_1 = require("../../../inputs/DirectorOrderByWithRelationAndSearchRelevanceInput");
const DirectorWhereInput_1 = require("../../../inputs/DirectorWhereInput");
const DirectorWhereUniqueInput_1 = require("../../../inputs/DirectorWhereUniqueInput");
const DirectorScalarFieldEnum_1 = require("../../../../enums/DirectorScalarFieldEnum");
let SerieDirectorsArgs = class SerieDirectorsArgs {
};
__decorate([
    TypeGraphQL.Field(_type => DirectorWhereInput_1.DirectorWhereInput, {
        nullable: true
    }),
    __metadata("design:type", DirectorWhereInput_1.DirectorWhereInput)
], SerieDirectorsArgs.prototype, "where", void 0);
__decorate([
    TypeGraphQL.Field(_type => [DirectorOrderByWithRelationAndSearchRelevanceInput_1.DirectorOrderByWithRelationAndSearchRelevanceInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], SerieDirectorsArgs.prototype, "orderBy", void 0);
__decorate([
    TypeGraphQL.Field(_type => DirectorWhereUniqueInput_1.DirectorWhereUniqueInput, {
        nullable: true
    }),
    __metadata("design:type", DirectorWhereUniqueInput_1.DirectorWhereUniqueInput)
], SerieDirectorsArgs.prototype, "cursor", void 0);
__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    __metadata("design:type", Number)
], SerieDirectorsArgs.prototype, "take", void 0);
__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    __metadata("design:type", Number)
], SerieDirectorsArgs.prototype, "skip", void 0);
__decorate([
    TypeGraphQL.Field(_type => [DirectorScalarFieldEnum_1.DirectorScalarFieldEnum], {
        nullable: true
    }),
    __metadata("design:type", Array)
], SerieDirectorsArgs.prototype, "distinct", void 0);
SerieDirectorsArgs = __decorate([
    TypeGraphQL.ArgsType()
], SerieDirectorsArgs);
exports.SerieDirectorsArgs = SerieDirectorsArgs;
