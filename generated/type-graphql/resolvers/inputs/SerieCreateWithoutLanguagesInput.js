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
exports.SerieCreateWithoutLanguagesInput = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
const ActorCreateNestedManyWithoutSeriesInput_1 = require("../inputs/ActorCreateNestedManyWithoutSeriesInput");
const DirectorCreateNestedManyWithoutSeriesInput_1 = require("../inputs/DirectorCreateNestedManyWithoutSeriesInput");
const GenreCreateNestedManyWithoutSeriesInput_1 = require("../inputs/GenreCreateNestedManyWithoutSeriesInput");
const SeasonCreateNestedManyWithoutSeriesInput_1 = require("../inputs/SeasonCreateNestedManyWithoutSeriesInput");
let SerieCreateWithoutLanguagesInput = class SerieCreateWithoutLanguagesInput {
};
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    __metadata("design:type", String)
], SerieCreateWithoutLanguagesInput.prototype, "title", void 0);
__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    __metadata("design:type", Number)
], SerieCreateWithoutLanguagesInput.prototype, "year", void 0);
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    __metadata("design:type", String)
], SerieCreateWithoutLanguagesInput.prototype, "rating", void 0);
__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    __metadata("design:type", Date)
], SerieCreateWithoutLanguagesInput.prototype, "release", void 0);
__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    __metadata("design:type", Number)
], SerieCreateWithoutLanguagesInput.prototype, "runtime", void 0);
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    __metadata("design:type", String)
], SerieCreateWithoutLanguagesInput.prototype, "plot", void 0);
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    __metadata("design:type", String)
], SerieCreateWithoutLanguagesInput.prototype, "poster", void 0);
__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: false
    }),
    __metadata("design:type", Number)
], SerieCreateWithoutLanguagesInput.prototype, "imdbRating", void 0);
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    __metadata("design:type", String)
], SerieCreateWithoutLanguagesInput.prototype, "imdbID", void 0);
__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    __metadata("design:type", Number)
], SerieCreateWithoutLanguagesInput.prototype, "totalSeasons", void 0);
__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    __metadata("design:type", Date)
], SerieCreateWithoutLanguagesInput.prototype, "createdAt", void 0);
__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    __metadata("design:type", Date)
], SerieCreateWithoutLanguagesInput.prototype, "updatedAt", void 0);
__decorate([
    TypeGraphQL.Field(_type => GenreCreateNestedManyWithoutSeriesInput_1.GenreCreateNestedManyWithoutSeriesInput, {
        nullable: true
    }),
    __metadata("design:type", GenreCreateNestedManyWithoutSeriesInput_1.GenreCreateNestedManyWithoutSeriesInput)
], SerieCreateWithoutLanguagesInput.prototype, "genres", void 0);
__decorate([
    TypeGraphQL.Field(_type => DirectorCreateNestedManyWithoutSeriesInput_1.DirectorCreateNestedManyWithoutSeriesInput, {
        nullable: true
    }),
    __metadata("design:type", DirectorCreateNestedManyWithoutSeriesInput_1.DirectorCreateNestedManyWithoutSeriesInput)
], SerieCreateWithoutLanguagesInput.prototype, "directors", void 0);
__decorate([
    TypeGraphQL.Field(_type => ActorCreateNestedManyWithoutSeriesInput_1.ActorCreateNestedManyWithoutSeriesInput, {
        nullable: true
    }),
    __metadata("design:type", ActorCreateNestedManyWithoutSeriesInput_1.ActorCreateNestedManyWithoutSeriesInput)
], SerieCreateWithoutLanguagesInput.prototype, "actors", void 0);
__decorate([
    TypeGraphQL.Field(_type => SeasonCreateNestedManyWithoutSeriesInput_1.SeasonCreateNestedManyWithoutSeriesInput, {
        nullable: true
    }),
    __metadata("design:type", SeasonCreateNestedManyWithoutSeriesInput_1.SeasonCreateNestedManyWithoutSeriesInput)
], SerieCreateWithoutLanguagesInput.prototype, "seasons", void 0);
SerieCreateWithoutLanguagesInput = __decorate([
    TypeGraphQL.InputType("SerieCreateWithoutLanguagesInput", {
        isAbstract: true
    })
], SerieCreateWithoutLanguagesInput);
exports.SerieCreateWithoutLanguagesInput = SerieCreateWithoutLanguagesInput;
