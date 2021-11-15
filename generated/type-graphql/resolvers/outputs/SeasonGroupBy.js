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
exports.SeasonGroupBy = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
const SeasonAvgAggregate_1 = require("../outputs/SeasonAvgAggregate");
const SeasonCountAggregate_1 = require("../outputs/SeasonCountAggregate");
const SeasonMaxAggregate_1 = require("../outputs/SeasonMaxAggregate");
const SeasonMinAggregate_1 = require("../outputs/SeasonMinAggregate");
const SeasonSumAggregate_1 = require("../outputs/SeasonSumAggregate");
let SeasonGroupBy = class SeasonGroupBy {
};
__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    __metadata("design:type", Number)
], SeasonGroupBy.prototype, "id", void 0);
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    __metadata("design:type", String)
], SeasonGroupBy.prototype, "title", void 0);
__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    __metadata("design:type", Number)
], SeasonGroupBy.prototype, "index", void 0);
__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    __metadata("design:type", Number)
], SeasonGroupBy.prototype, "episodes", void 0);
__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    __metadata("design:type", Number)
], SeasonGroupBy.prototype, "seriesId", void 0);
__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    __metadata("design:type", Date)
], SeasonGroupBy.prototype, "launchDate", void 0);
__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    __metadata("design:type", Date)
], SeasonGroupBy.prototype, "createdAt", void 0);
__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    __metadata("design:type", Date)
], SeasonGroupBy.prototype, "updatedAt", void 0);
__decorate([
    TypeGraphQL.Field(_type => SeasonCountAggregate_1.SeasonCountAggregate, {
        nullable: true
    }),
    __metadata("design:type", SeasonCountAggregate_1.SeasonCountAggregate)
], SeasonGroupBy.prototype, "_count", void 0);
__decorate([
    TypeGraphQL.Field(_type => SeasonAvgAggregate_1.SeasonAvgAggregate, {
        nullable: true
    }),
    __metadata("design:type", SeasonAvgAggregate_1.SeasonAvgAggregate)
], SeasonGroupBy.prototype, "_avg", void 0);
__decorate([
    TypeGraphQL.Field(_type => SeasonSumAggregate_1.SeasonSumAggregate, {
        nullable: true
    }),
    __metadata("design:type", SeasonSumAggregate_1.SeasonSumAggregate)
], SeasonGroupBy.prototype, "_sum", void 0);
__decorate([
    TypeGraphQL.Field(_type => SeasonMinAggregate_1.SeasonMinAggregate, {
        nullable: true
    }),
    __metadata("design:type", SeasonMinAggregate_1.SeasonMinAggregate)
], SeasonGroupBy.prototype, "_min", void 0);
__decorate([
    TypeGraphQL.Field(_type => SeasonMaxAggregate_1.SeasonMaxAggregate, {
        nullable: true
    }),
    __metadata("design:type", SeasonMaxAggregate_1.SeasonMaxAggregate)
], SeasonGroupBy.prototype, "_max", void 0);
SeasonGroupBy = __decorate([
    TypeGraphQL.ObjectType("SeasonGroupBy", {
        isAbstract: true
    })
], SeasonGroupBy);
exports.SeasonGroupBy = SeasonGroupBy;
