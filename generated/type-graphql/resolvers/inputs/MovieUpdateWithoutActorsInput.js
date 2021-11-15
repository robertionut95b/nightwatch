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
exports.MovieUpdateWithoutActorsInput = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
const DateTimeFieldUpdateOperationsInput_1 = require("../inputs/DateTimeFieldUpdateOperationsInput");
const DirectorUpdateManyWithoutMoviesInput_1 = require("../inputs/DirectorUpdateManyWithoutMoviesInput");
const FloatFieldUpdateOperationsInput_1 = require("../inputs/FloatFieldUpdateOperationsInput");
const GenreUpdateManyWithoutMoviesInput_1 = require("../inputs/GenreUpdateManyWithoutMoviesInput");
const IntFieldUpdateOperationsInput_1 = require("../inputs/IntFieldUpdateOperationsInput");
const LanguageUpdateManyWithoutMoviesInput_1 = require("../inputs/LanguageUpdateManyWithoutMoviesInput");
const StringFieldUpdateOperationsInput_1 = require("../inputs/StringFieldUpdateOperationsInput");
let MovieUpdateWithoutActorsInput = class MovieUpdateWithoutActorsInput {
};
__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    __metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], MovieUpdateWithoutActorsInput.prototype, "title", void 0);
__decorate([
    TypeGraphQL.Field(_type => IntFieldUpdateOperationsInput_1.IntFieldUpdateOperationsInput, {
        nullable: true
    }),
    __metadata("design:type", IntFieldUpdateOperationsInput_1.IntFieldUpdateOperationsInput)
], MovieUpdateWithoutActorsInput.prototype, "year", void 0);
__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    __metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], MovieUpdateWithoutActorsInput.prototype, "rating", void 0);
__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    __metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], MovieUpdateWithoutActorsInput.prototype, "release", void 0);
__decorate([
    TypeGraphQL.Field(_type => IntFieldUpdateOperationsInput_1.IntFieldUpdateOperationsInput, {
        nullable: true
    }),
    __metadata("design:type", IntFieldUpdateOperationsInput_1.IntFieldUpdateOperationsInput)
], MovieUpdateWithoutActorsInput.prototype, "runtime", void 0);
__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    __metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], MovieUpdateWithoutActorsInput.prototype, "plot", void 0);
__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    __metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], MovieUpdateWithoutActorsInput.prototype, "poster", void 0);
__decorate([
    TypeGraphQL.Field(_type => FloatFieldUpdateOperationsInput_1.FloatFieldUpdateOperationsInput, {
        nullable: true
    }),
    __metadata("design:type", FloatFieldUpdateOperationsInput_1.FloatFieldUpdateOperationsInput)
], MovieUpdateWithoutActorsInput.prototype, "imdbRating", void 0);
__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    __metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], MovieUpdateWithoutActorsInput.prototype, "createdAt", void 0);
__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    __metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], MovieUpdateWithoutActorsInput.prototype, "updatedAt", void 0);
__decorate([
    TypeGraphQL.Field(_type => GenreUpdateManyWithoutMoviesInput_1.GenreUpdateManyWithoutMoviesInput, {
        nullable: true
    }),
    __metadata("design:type", GenreUpdateManyWithoutMoviesInput_1.GenreUpdateManyWithoutMoviesInput)
], MovieUpdateWithoutActorsInput.prototype, "genres", void 0);
__decorate([
    TypeGraphQL.Field(_type => DirectorUpdateManyWithoutMoviesInput_1.DirectorUpdateManyWithoutMoviesInput, {
        nullable: true
    }),
    __metadata("design:type", DirectorUpdateManyWithoutMoviesInput_1.DirectorUpdateManyWithoutMoviesInput)
], MovieUpdateWithoutActorsInput.prototype, "directors", void 0);
__decorate([
    TypeGraphQL.Field(_type => LanguageUpdateManyWithoutMoviesInput_1.LanguageUpdateManyWithoutMoviesInput, {
        nullable: true
    }),
    __metadata("design:type", LanguageUpdateManyWithoutMoviesInput_1.LanguageUpdateManyWithoutMoviesInput)
], MovieUpdateWithoutActorsInput.prototype, "languages", void 0);
MovieUpdateWithoutActorsInput = __decorate([
    TypeGraphQL.InputType("MovieUpdateWithoutActorsInput", {
        isAbstract: true
    })
], MovieUpdateWithoutActorsInput);
exports.MovieUpdateWithoutActorsInput = MovieUpdateWithoutActorsInput;
