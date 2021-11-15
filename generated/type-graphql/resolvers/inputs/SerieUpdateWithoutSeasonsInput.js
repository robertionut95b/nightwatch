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
exports.SerieUpdateWithoutSeasonsInput = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
const ActorUpdateManyWithoutSeriesInput_1 = require("../inputs/ActorUpdateManyWithoutSeriesInput");
const DateTimeFieldUpdateOperationsInput_1 = require("../inputs/DateTimeFieldUpdateOperationsInput");
const DirectorUpdateManyWithoutSeriesInput_1 = require("../inputs/DirectorUpdateManyWithoutSeriesInput");
const FloatFieldUpdateOperationsInput_1 = require("../inputs/FloatFieldUpdateOperationsInput");
const GenreUpdateManyWithoutSeriesInput_1 = require("../inputs/GenreUpdateManyWithoutSeriesInput");
const IntFieldUpdateOperationsInput_1 = require("../inputs/IntFieldUpdateOperationsInput");
const LanguageUpdateManyWithoutSeriesInput_1 = require("../inputs/LanguageUpdateManyWithoutSeriesInput");
const StringFieldUpdateOperationsInput_1 = require("../inputs/StringFieldUpdateOperationsInput");
let SerieUpdateWithoutSeasonsInput = class SerieUpdateWithoutSeasonsInput {
};
__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    __metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], SerieUpdateWithoutSeasonsInput.prototype, "title", void 0);
__decorate([
    TypeGraphQL.Field(_type => IntFieldUpdateOperationsInput_1.IntFieldUpdateOperationsInput, {
        nullable: true
    }),
    __metadata("design:type", IntFieldUpdateOperationsInput_1.IntFieldUpdateOperationsInput)
], SerieUpdateWithoutSeasonsInput.prototype, "year", void 0);
__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    __metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], SerieUpdateWithoutSeasonsInput.prototype, "rating", void 0);
__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    __metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], SerieUpdateWithoutSeasonsInput.prototype, "release", void 0);
__decorate([
    TypeGraphQL.Field(_type => IntFieldUpdateOperationsInput_1.IntFieldUpdateOperationsInput, {
        nullable: true
    }),
    __metadata("design:type", IntFieldUpdateOperationsInput_1.IntFieldUpdateOperationsInput)
], SerieUpdateWithoutSeasonsInput.prototype, "runtime", void 0);
__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    __metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], SerieUpdateWithoutSeasonsInput.prototype, "plot", void 0);
__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    __metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], SerieUpdateWithoutSeasonsInput.prototype, "poster", void 0);
__decorate([
    TypeGraphQL.Field(_type => FloatFieldUpdateOperationsInput_1.FloatFieldUpdateOperationsInput, {
        nullable: true
    }),
    __metadata("design:type", FloatFieldUpdateOperationsInput_1.FloatFieldUpdateOperationsInput)
], SerieUpdateWithoutSeasonsInput.prototype, "imdbRating", void 0);
__decorate([
    TypeGraphQL.Field(_type => IntFieldUpdateOperationsInput_1.IntFieldUpdateOperationsInput, {
        nullable: true
    }),
    __metadata("design:type", IntFieldUpdateOperationsInput_1.IntFieldUpdateOperationsInput)
], SerieUpdateWithoutSeasonsInput.prototype, "totalSeasons", void 0);
__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    __metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], SerieUpdateWithoutSeasonsInput.prototype, "createdAt", void 0);
__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    __metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], SerieUpdateWithoutSeasonsInput.prototype, "updatedAt", void 0);
__decorate([
    TypeGraphQL.Field(_type => GenreUpdateManyWithoutSeriesInput_1.GenreUpdateManyWithoutSeriesInput, {
        nullable: true
    }),
    __metadata("design:type", GenreUpdateManyWithoutSeriesInput_1.GenreUpdateManyWithoutSeriesInput)
], SerieUpdateWithoutSeasonsInput.prototype, "genres", void 0);
__decorate([
    TypeGraphQL.Field(_type => DirectorUpdateManyWithoutSeriesInput_1.DirectorUpdateManyWithoutSeriesInput, {
        nullable: true
    }),
    __metadata("design:type", DirectorUpdateManyWithoutSeriesInput_1.DirectorUpdateManyWithoutSeriesInput)
], SerieUpdateWithoutSeasonsInput.prototype, "directors", void 0);
__decorate([
    TypeGraphQL.Field(_type => ActorUpdateManyWithoutSeriesInput_1.ActorUpdateManyWithoutSeriesInput, {
        nullable: true
    }),
    __metadata("design:type", ActorUpdateManyWithoutSeriesInput_1.ActorUpdateManyWithoutSeriesInput)
], SerieUpdateWithoutSeasonsInput.prototype, "actors", void 0);
__decorate([
    TypeGraphQL.Field(_type => LanguageUpdateManyWithoutSeriesInput_1.LanguageUpdateManyWithoutSeriesInput, {
        nullable: true
    }),
    __metadata("design:type", LanguageUpdateManyWithoutSeriesInput_1.LanguageUpdateManyWithoutSeriesInput)
], SerieUpdateWithoutSeasonsInput.prototype, "languages", void 0);
SerieUpdateWithoutSeasonsInput = __decorate([
    TypeGraphQL.InputType("SerieUpdateWithoutSeasonsInput", {
        isAbstract: true
    })
], SerieUpdateWithoutSeasonsInput);
exports.SerieUpdateWithoutSeasonsInput = SerieUpdateWithoutSeasonsInput;
