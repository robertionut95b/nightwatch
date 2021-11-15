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
exports.DirectorGroupBy = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
const DirectorAvgAggregate_1 = require("../outputs/DirectorAvgAggregate");
const DirectorCountAggregate_1 = require("../outputs/DirectorCountAggregate");
const DirectorMaxAggregate_1 = require("../outputs/DirectorMaxAggregate");
const DirectorMinAggregate_1 = require("../outputs/DirectorMinAggregate");
const DirectorSumAggregate_1 = require("../outputs/DirectorSumAggregate");
let DirectorGroupBy = class DirectorGroupBy {
};
__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    __metadata("design:type", Number)
], DirectorGroupBy.prototype, "id", void 0);
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    __metadata("design:type", String)
], DirectorGroupBy.prototype, "name", void 0);
__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    __metadata("design:type", Date)
], DirectorGroupBy.prototype, "createdAt", void 0);
__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    __metadata("design:type", Date)
], DirectorGroupBy.prototype, "updatedAt", void 0);
__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    __metadata("design:type", Number)
], DirectorGroupBy.prototype, "seriesId", void 0);
__decorate([
    TypeGraphQL.Field(_type => DirectorCountAggregate_1.DirectorCountAggregate, {
        nullable: true
    }),
    __metadata("design:type", DirectorCountAggregate_1.DirectorCountAggregate)
], DirectorGroupBy.prototype, "_count", void 0);
__decorate([
    TypeGraphQL.Field(_type => DirectorAvgAggregate_1.DirectorAvgAggregate, {
        nullable: true
    }),
    __metadata("design:type", DirectorAvgAggregate_1.DirectorAvgAggregate)
], DirectorGroupBy.prototype, "_avg", void 0);
__decorate([
    TypeGraphQL.Field(_type => DirectorSumAggregate_1.DirectorSumAggregate, {
        nullable: true
    }),
    __metadata("design:type", DirectorSumAggregate_1.DirectorSumAggregate)
], DirectorGroupBy.prototype, "_sum", void 0);
__decorate([
    TypeGraphQL.Field(_type => DirectorMinAggregate_1.DirectorMinAggregate, {
        nullable: true
    }),
    __metadata("design:type", DirectorMinAggregate_1.DirectorMinAggregate)
], DirectorGroupBy.prototype, "_min", void 0);
__decorate([
    TypeGraphQL.Field(_type => DirectorMaxAggregate_1.DirectorMaxAggregate, {
        nullable: true
    }),
    __metadata("design:type", DirectorMaxAggregate_1.DirectorMaxAggregate)
], DirectorGroupBy.prototype, "_max", void 0);
DirectorGroupBy = __decorate([
    TypeGraphQL.ObjectType("DirectorGroupBy", {
        isAbstract: true
    })
], DirectorGroupBy);
exports.DirectorGroupBy = DirectorGroupBy;
