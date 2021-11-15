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
exports.AggregateLanguage = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
const LanguageAvgAggregate_1 = require("../outputs/LanguageAvgAggregate");
const LanguageCountAggregate_1 = require("../outputs/LanguageCountAggregate");
const LanguageMaxAggregate_1 = require("../outputs/LanguageMaxAggregate");
const LanguageMinAggregate_1 = require("../outputs/LanguageMinAggregate");
const LanguageSumAggregate_1 = require("../outputs/LanguageSumAggregate");
let AggregateLanguage = class AggregateLanguage {
};
__decorate([
    TypeGraphQL.Field(_type => LanguageCountAggregate_1.LanguageCountAggregate, {
        nullable: true
    }),
    __metadata("design:type", LanguageCountAggregate_1.LanguageCountAggregate)
], AggregateLanguage.prototype, "_count", void 0);
__decorate([
    TypeGraphQL.Field(_type => LanguageAvgAggregate_1.LanguageAvgAggregate, {
        nullable: true
    }),
    __metadata("design:type", LanguageAvgAggregate_1.LanguageAvgAggregate)
], AggregateLanguage.prototype, "_avg", void 0);
__decorate([
    TypeGraphQL.Field(_type => LanguageSumAggregate_1.LanguageSumAggregate, {
        nullable: true
    }),
    __metadata("design:type", LanguageSumAggregate_1.LanguageSumAggregate)
], AggregateLanguage.prototype, "_sum", void 0);
__decorate([
    TypeGraphQL.Field(_type => LanguageMinAggregate_1.LanguageMinAggregate, {
        nullable: true
    }),
    __metadata("design:type", LanguageMinAggregate_1.LanguageMinAggregate)
], AggregateLanguage.prototype, "_min", void 0);
__decorate([
    TypeGraphQL.Field(_type => LanguageMaxAggregate_1.LanguageMaxAggregate, {
        nullable: true
    }),
    __metadata("design:type", LanguageMaxAggregate_1.LanguageMaxAggregate)
], AggregateLanguage.prototype, "_max", void 0);
AggregateLanguage = __decorate([
    TypeGraphQL.ObjectType("AggregateLanguage", {
        isAbstract: true
    })
], AggregateLanguage);
exports.AggregateLanguage = AggregateLanguage;
