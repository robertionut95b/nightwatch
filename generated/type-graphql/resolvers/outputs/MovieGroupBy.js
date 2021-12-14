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
exports.MovieGroupBy = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
const MovieAvgAggregate_1 = require("../outputs/MovieAvgAggregate");
const MovieCountAggregate_1 = require("../outputs/MovieCountAggregate");
const MovieMaxAggregate_1 = require("../outputs/MovieMaxAggregate");
const MovieMinAggregate_1 = require("../outputs/MovieMinAggregate");
const MovieSumAggregate_1 = require("../outputs/MovieSumAggregate");
let MovieGroupBy = class MovieGroupBy {
};
__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    __metadata("design:type", Number)
], MovieGroupBy.prototype, "id", void 0);
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    __metadata("design:type", String)
], MovieGroupBy.prototype, "title", void 0);
__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    __metadata("design:type", Number)
], MovieGroupBy.prototype, "year", void 0);
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    __metadata("design:type", String)
], MovieGroupBy.prototype, "rating", void 0);
__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    __metadata("design:type", Date)
], MovieGroupBy.prototype, "release", void 0);
__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    __metadata("design:type", Number)
], MovieGroupBy.prototype, "runtime", void 0);
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    __metadata("design:type", String)
], MovieGroupBy.prototype, "plot", void 0);
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    __metadata("design:type", String)
], MovieGroupBy.prototype, "poster", void 0);
__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: false
    }),
    __metadata("design:type", Number)
], MovieGroupBy.prototype, "imdbRating", void 0);
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    __metadata("design:type", String)
], MovieGroupBy.prototype, "imdbID", void 0);
__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    __metadata("design:type", Date)
], MovieGroupBy.prototype, "createdAt", void 0);
__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    __metadata("design:type", Date)
], MovieGroupBy.prototype, "updatedAt", void 0);
__decorate([
    TypeGraphQL.Field(_type => MovieCountAggregate_1.MovieCountAggregate, {
        nullable: true
    }),
    __metadata("design:type", MovieCountAggregate_1.MovieCountAggregate)
], MovieGroupBy.prototype, "_count", void 0);
__decorate([
    TypeGraphQL.Field(_type => MovieAvgAggregate_1.MovieAvgAggregate, {
        nullable: true
    }),
    __metadata("design:type", MovieAvgAggregate_1.MovieAvgAggregate)
], MovieGroupBy.prototype, "_avg", void 0);
__decorate([
    TypeGraphQL.Field(_type => MovieSumAggregate_1.MovieSumAggregate, {
        nullable: true
    }),
    __metadata("design:type", MovieSumAggregate_1.MovieSumAggregate)
], MovieGroupBy.prototype, "_sum", void 0);
__decorate([
    TypeGraphQL.Field(_type => MovieMinAggregate_1.MovieMinAggregate, {
        nullable: true
    }),
    __metadata("design:type", MovieMinAggregate_1.MovieMinAggregate)
], MovieGroupBy.prototype, "_min", void 0);
__decorate([
    TypeGraphQL.Field(_type => MovieMaxAggregate_1.MovieMaxAggregate, {
        nullable: true
    }),
    __metadata("design:type", MovieMaxAggregate_1.MovieMaxAggregate)
], MovieGroupBy.prototype, "_max", void 0);
MovieGroupBy = __decorate([
    TypeGraphQL.ObjectType("MovieGroupBy", {
        isAbstract: true
    })
], MovieGroupBy);
exports.MovieGroupBy = MovieGroupBy;
