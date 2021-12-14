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
exports.SerieGroupBy = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
const SerieAvgAggregate_1 = require("../outputs/SerieAvgAggregate");
const SerieCountAggregate_1 = require("../outputs/SerieCountAggregate");
const SerieMaxAggregate_1 = require("../outputs/SerieMaxAggregate");
const SerieMinAggregate_1 = require("../outputs/SerieMinAggregate");
const SerieSumAggregate_1 = require("../outputs/SerieSumAggregate");
let SerieGroupBy = class SerieGroupBy {
};
__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    __metadata("design:type", Number)
], SerieGroupBy.prototype, "id", void 0);
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    __metadata("design:type", String)
], SerieGroupBy.prototype, "title", void 0);
__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    __metadata("design:type", Number)
], SerieGroupBy.prototype, "year", void 0);
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    __metadata("design:type", String)
], SerieGroupBy.prototype, "rating", void 0);
__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    __metadata("design:type", Date)
], SerieGroupBy.prototype, "release", void 0);
__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    __metadata("design:type", Number)
], SerieGroupBy.prototype, "runtime", void 0);
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    __metadata("design:type", String)
], SerieGroupBy.prototype, "plot", void 0);
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    __metadata("design:type", String)
], SerieGroupBy.prototype, "poster", void 0);
__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: false
    }),
    __metadata("design:type", Number)
], SerieGroupBy.prototype, "imdbRating", void 0);
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    __metadata("design:type", String)
], SerieGroupBy.prototype, "imdbID", void 0);
__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    __metadata("design:type", Number)
], SerieGroupBy.prototype, "totalSeasons", void 0);
__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    __metadata("design:type", Date)
], SerieGroupBy.prototype, "createdAt", void 0);
__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    __metadata("design:type", Date)
], SerieGroupBy.prototype, "updatedAt", void 0);
__decorate([
    TypeGraphQL.Field(_type => SerieCountAggregate_1.SerieCountAggregate, {
        nullable: true
    }),
    __metadata("design:type", SerieCountAggregate_1.SerieCountAggregate)
], SerieGroupBy.prototype, "_count", void 0);
__decorate([
    TypeGraphQL.Field(_type => SerieAvgAggregate_1.SerieAvgAggregate, {
        nullable: true
    }),
    __metadata("design:type", SerieAvgAggregate_1.SerieAvgAggregate)
], SerieGroupBy.prototype, "_avg", void 0);
__decorate([
    TypeGraphQL.Field(_type => SerieSumAggregate_1.SerieSumAggregate, {
        nullable: true
    }),
    __metadata("design:type", SerieSumAggregate_1.SerieSumAggregate)
], SerieGroupBy.prototype, "_sum", void 0);
__decorate([
    TypeGraphQL.Field(_type => SerieMinAggregate_1.SerieMinAggregate, {
        nullable: true
    }),
    __metadata("design:type", SerieMinAggregate_1.SerieMinAggregate)
], SerieGroupBy.prototype, "_min", void 0);
__decorate([
    TypeGraphQL.Field(_type => SerieMaxAggregate_1.SerieMaxAggregate, {
        nullable: true
    }),
    __metadata("design:type", SerieMaxAggregate_1.SerieMaxAggregate)
], SerieGroupBy.prototype, "_max", void 0);
SerieGroupBy = __decorate([
    TypeGraphQL.ObjectType("SerieGroupBy", {
        isAbstract: true
    })
], SerieGroupBy);
exports.SerieGroupBy = SerieGroupBy;
