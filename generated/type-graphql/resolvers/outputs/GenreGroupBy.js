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
exports.GenreGroupBy = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
const GenreAvgAggregate_1 = require("../outputs/GenreAvgAggregate");
const GenreCountAggregate_1 = require("../outputs/GenreCountAggregate");
const GenreMaxAggregate_1 = require("../outputs/GenreMaxAggregate");
const GenreMinAggregate_1 = require("../outputs/GenreMinAggregate");
const GenreSumAggregate_1 = require("../outputs/GenreSumAggregate");
let GenreGroupBy = class GenreGroupBy {
};
__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    __metadata("design:type", Number)
], GenreGroupBy.prototype, "id", void 0);
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    __metadata("design:type", String)
], GenreGroupBy.prototype, "name", void 0);
__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    __metadata("design:type", Date)
], GenreGroupBy.prototype, "createdAt", void 0);
__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    __metadata("design:type", Date)
], GenreGroupBy.prototype, "updatedAt", void 0);
__decorate([
    TypeGraphQL.Field(_type => GenreCountAggregate_1.GenreCountAggregate, {
        nullable: true
    }),
    __metadata("design:type", GenreCountAggregate_1.GenreCountAggregate)
], GenreGroupBy.prototype, "_count", void 0);
__decorate([
    TypeGraphQL.Field(_type => GenreAvgAggregate_1.GenreAvgAggregate, {
        nullable: true
    }),
    __metadata("design:type", GenreAvgAggregate_1.GenreAvgAggregate)
], GenreGroupBy.prototype, "_avg", void 0);
__decorate([
    TypeGraphQL.Field(_type => GenreSumAggregate_1.GenreSumAggregate, {
        nullable: true
    }),
    __metadata("design:type", GenreSumAggregate_1.GenreSumAggregate)
], GenreGroupBy.prototype, "_sum", void 0);
__decorate([
    TypeGraphQL.Field(_type => GenreMinAggregate_1.GenreMinAggregate, {
        nullable: true
    }),
    __metadata("design:type", GenreMinAggregate_1.GenreMinAggregate)
], GenreGroupBy.prototype, "_min", void 0);
__decorate([
    TypeGraphQL.Field(_type => GenreMaxAggregate_1.GenreMaxAggregate, {
        nullable: true
    }),
    __metadata("design:type", GenreMaxAggregate_1.GenreMaxAggregate)
], GenreGroupBy.prototype, "_max", void 0);
GenreGroupBy = __decorate([
    TypeGraphQL.ObjectType("GenreGroupBy", {
        isAbstract: true
    })
], GenreGroupBy);
exports.GenreGroupBy = GenreGroupBy;
