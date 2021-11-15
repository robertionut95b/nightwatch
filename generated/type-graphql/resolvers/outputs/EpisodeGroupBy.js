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
exports.EpisodeGroupBy = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
const EpisodeAvgAggregate_1 = require("../outputs/EpisodeAvgAggregate");
const EpisodeCountAggregate_1 = require("../outputs/EpisodeCountAggregate");
const EpisodeMaxAggregate_1 = require("../outputs/EpisodeMaxAggregate");
const EpisodeMinAggregate_1 = require("../outputs/EpisodeMinAggregate");
const EpisodeSumAggregate_1 = require("../outputs/EpisodeSumAggregate");
let EpisodeGroupBy = class EpisodeGroupBy {
};
__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    __metadata("design:type", Number)
], EpisodeGroupBy.prototype, "id", void 0);
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    __metadata("design:type", String)
], EpisodeGroupBy.prototype, "title", void 0);
__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    __metadata("design:type", Number)
], EpisodeGroupBy.prototype, "runtime", void 0);
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    __metadata("design:type", String)
], EpisodeGroupBy.prototype, "plot", void 0);
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    __metadata("design:type", String)
], EpisodeGroupBy.prototype, "poster", void 0);
__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: false
    }),
    __metadata("design:type", Number)
], EpisodeGroupBy.prototype, "imdbRating", void 0);
__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    __metadata("design:type", Number)
], EpisodeGroupBy.prototype, "seasonId", void 0);
__decorate([
    TypeGraphQL.Field(_type => EpisodeCountAggregate_1.EpisodeCountAggregate, {
        nullable: true
    }),
    __metadata("design:type", EpisodeCountAggregate_1.EpisodeCountAggregate)
], EpisodeGroupBy.prototype, "_count", void 0);
__decorate([
    TypeGraphQL.Field(_type => EpisodeAvgAggregate_1.EpisodeAvgAggregate, {
        nullable: true
    }),
    __metadata("design:type", EpisodeAvgAggregate_1.EpisodeAvgAggregate)
], EpisodeGroupBy.prototype, "_avg", void 0);
__decorate([
    TypeGraphQL.Field(_type => EpisodeSumAggregate_1.EpisodeSumAggregate, {
        nullable: true
    }),
    __metadata("design:type", EpisodeSumAggregate_1.EpisodeSumAggregate)
], EpisodeGroupBy.prototype, "_sum", void 0);
__decorate([
    TypeGraphQL.Field(_type => EpisodeMinAggregate_1.EpisodeMinAggregate, {
        nullable: true
    }),
    __metadata("design:type", EpisodeMinAggregate_1.EpisodeMinAggregate)
], EpisodeGroupBy.prototype, "_min", void 0);
__decorate([
    TypeGraphQL.Field(_type => EpisodeMaxAggregate_1.EpisodeMaxAggregate, {
        nullable: true
    }),
    __metadata("design:type", EpisodeMaxAggregate_1.EpisodeMaxAggregate)
], EpisodeGroupBy.prototype, "_max", void 0);
EpisodeGroupBy = __decorate([
    TypeGraphQL.ObjectType("EpisodeGroupBy", {
        isAbstract: true
    })
], EpisodeGroupBy);
exports.EpisodeGroupBy = EpisodeGroupBy;
