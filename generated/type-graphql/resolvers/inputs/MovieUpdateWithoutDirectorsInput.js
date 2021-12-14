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
exports.MovieUpdateWithoutDirectorsInput = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
const ActorUpdateManyWithoutMoviesInput_1 = require("../inputs/ActorUpdateManyWithoutMoviesInput");
const DateTimeFieldUpdateOperationsInput_1 = require("../inputs/DateTimeFieldUpdateOperationsInput");
const FloatFieldUpdateOperationsInput_1 = require("../inputs/FloatFieldUpdateOperationsInput");
const GenreUpdateManyWithoutMoviesInput_1 = require("../inputs/GenreUpdateManyWithoutMoviesInput");
const IntFieldUpdateOperationsInput_1 = require("../inputs/IntFieldUpdateOperationsInput");
const LanguageUpdateManyWithoutMoviesInput_1 = require("../inputs/LanguageUpdateManyWithoutMoviesInput");
const StringFieldUpdateOperationsInput_1 = require("../inputs/StringFieldUpdateOperationsInput");
let MovieUpdateWithoutDirectorsInput = class MovieUpdateWithoutDirectorsInput {
};
__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    __metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], MovieUpdateWithoutDirectorsInput.prototype, "title", void 0);
__decorate([
    TypeGraphQL.Field(_type => IntFieldUpdateOperationsInput_1.IntFieldUpdateOperationsInput, {
        nullable: true
    }),
    __metadata("design:type", IntFieldUpdateOperationsInput_1.IntFieldUpdateOperationsInput)
], MovieUpdateWithoutDirectorsInput.prototype, "year", void 0);
__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    __metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], MovieUpdateWithoutDirectorsInput.prototype, "rating", void 0);
__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    __metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], MovieUpdateWithoutDirectorsInput.prototype, "release", void 0);
__decorate([
    TypeGraphQL.Field(_type => IntFieldUpdateOperationsInput_1.IntFieldUpdateOperationsInput, {
        nullable: true
    }),
    __metadata("design:type", IntFieldUpdateOperationsInput_1.IntFieldUpdateOperationsInput)
], MovieUpdateWithoutDirectorsInput.prototype, "runtime", void 0);
__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    __metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], MovieUpdateWithoutDirectorsInput.prototype, "plot", void 0);
__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    __metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], MovieUpdateWithoutDirectorsInput.prototype, "poster", void 0);
__decorate([
    TypeGraphQL.Field(_type => FloatFieldUpdateOperationsInput_1.FloatFieldUpdateOperationsInput, {
        nullable: true
    }),
    __metadata("design:type", FloatFieldUpdateOperationsInput_1.FloatFieldUpdateOperationsInput)
], MovieUpdateWithoutDirectorsInput.prototype, "imdbRating", void 0);
__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    __metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], MovieUpdateWithoutDirectorsInput.prototype, "imdbID", void 0);
__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    __metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], MovieUpdateWithoutDirectorsInput.prototype, "createdAt", void 0);
__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    __metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], MovieUpdateWithoutDirectorsInput.prototype, "updatedAt", void 0);
__decorate([
    TypeGraphQL.Field(_type => GenreUpdateManyWithoutMoviesInput_1.GenreUpdateManyWithoutMoviesInput, {
        nullable: true
    }),
    __metadata("design:type", GenreUpdateManyWithoutMoviesInput_1.GenreUpdateManyWithoutMoviesInput)
], MovieUpdateWithoutDirectorsInput.prototype, "genres", void 0);
__decorate([
    TypeGraphQL.Field(_type => ActorUpdateManyWithoutMoviesInput_1.ActorUpdateManyWithoutMoviesInput, {
        nullable: true
    }),
    __metadata("design:type", ActorUpdateManyWithoutMoviesInput_1.ActorUpdateManyWithoutMoviesInput)
], MovieUpdateWithoutDirectorsInput.prototype, "actors", void 0);
__decorate([
    TypeGraphQL.Field(_type => LanguageUpdateManyWithoutMoviesInput_1.LanguageUpdateManyWithoutMoviesInput, {
        nullable: true
    }),
    __metadata("design:type", LanguageUpdateManyWithoutMoviesInput_1.LanguageUpdateManyWithoutMoviesInput)
], MovieUpdateWithoutDirectorsInput.prototype, "languages", void 0);
MovieUpdateWithoutDirectorsInput = __decorate([
    TypeGraphQL.InputType("MovieUpdateWithoutDirectorsInput", {
        isAbstract: true
    })
], MovieUpdateWithoutDirectorsInput);
exports.MovieUpdateWithoutDirectorsInput = MovieUpdateWithoutDirectorsInput;
