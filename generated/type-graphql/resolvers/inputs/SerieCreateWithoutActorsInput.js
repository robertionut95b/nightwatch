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
exports.SerieCreateWithoutActorsInput = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
const DirectorCreateNestedManyWithoutSeriesInput_1 = require("../inputs/DirectorCreateNestedManyWithoutSeriesInput");
const GenreCreateNestedManyWithoutSeriesInput_1 = require("../inputs/GenreCreateNestedManyWithoutSeriesInput");
const LanguageCreateNestedManyWithoutSeriesInput_1 = require("../inputs/LanguageCreateNestedManyWithoutSeriesInput");
const SeasonCreateNestedManyWithoutSeriesInput_1 = require("../inputs/SeasonCreateNestedManyWithoutSeriesInput");
let SerieCreateWithoutActorsInput = class SerieCreateWithoutActorsInput {
};
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    __metadata("design:type", String)
], SerieCreateWithoutActorsInput.prototype, "title", void 0);
__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    __metadata("design:type", Number)
], SerieCreateWithoutActorsInput.prototype, "year", void 0);
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    __metadata("design:type", String)
], SerieCreateWithoutActorsInput.prototype, "rating", void 0);
__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    __metadata("design:type", Date)
], SerieCreateWithoutActorsInput.prototype, "release", void 0);
__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    __metadata("design:type", Number)
], SerieCreateWithoutActorsInput.prototype, "runtime", void 0);
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    __metadata("design:type", String)
], SerieCreateWithoutActorsInput.prototype, "plot", void 0);
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    __metadata("design:type", String)
], SerieCreateWithoutActorsInput.prototype, "poster", void 0);
__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: false
    }),
    __metadata("design:type", Number)
], SerieCreateWithoutActorsInput.prototype, "imdbRating", void 0);
__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    __metadata("design:type", Number)
], SerieCreateWithoutActorsInput.prototype, "totalSeasons", void 0);
__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    __metadata("design:type", Date)
], SerieCreateWithoutActorsInput.prototype, "createdAt", void 0);
__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    __metadata("design:type", Date)
], SerieCreateWithoutActorsInput.prototype, "updatedAt", void 0);
__decorate([
    TypeGraphQL.Field(_type => GenreCreateNestedManyWithoutSeriesInput_1.GenreCreateNestedManyWithoutSeriesInput, {
        nullable: true
    }),
    __metadata("design:type", GenreCreateNestedManyWithoutSeriesInput_1.GenreCreateNestedManyWithoutSeriesInput)
], SerieCreateWithoutActorsInput.prototype, "genres", void 0);
__decorate([
    TypeGraphQL.Field(_type => DirectorCreateNestedManyWithoutSeriesInput_1.DirectorCreateNestedManyWithoutSeriesInput, {
        nullable: true
    }),
    __metadata("design:type", DirectorCreateNestedManyWithoutSeriesInput_1.DirectorCreateNestedManyWithoutSeriesInput)
], SerieCreateWithoutActorsInput.prototype, "directors", void 0);
__decorate([
    TypeGraphQL.Field(_type => LanguageCreateNestedManyWithoutSeriesInput_1.LanguageCreateNestedManyWithoutSeriesInput, {
        nullable: true
    }),
    __metadata("design:type", LanguageCreateNestedManyWithoutSeriesInput_1.LanguageCreateNestedManyWithoutSeriesInput)
], SerieCreateWithoutActorsInput.prototype, "languages", void 0);
__decorate([
    TypeGraphQL.Field(_type => SeasonCreateNestedManyWithoutSeriesInput_1.SeasonCreateNestedManyWithoutSeriesInput, {
        nullable: true
    }),
    __metadata("design:type", SeasonCreateNestedManyWithoutSeriesInput_1.SeasonCreateNestedManyWithoutSeriesInput)
], SerieCreateWithoutActorsInput.prototype, "seasons", void 0);
SerieCreateWithoutActorsInput = __decorate([
    TypeGraphQL.InputType("SerieCreateWithoutActorsInput", {
        isAbstract: true
    })
], SerieCreateWithoutActorsInput);
exports.SerieCreateWithoutActorsInput = SerieCreateWithoutActorsInput;
