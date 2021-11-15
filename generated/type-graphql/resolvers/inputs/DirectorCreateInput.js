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
exports.DirectorCreateInput = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
const MovieCreateNestedManyWithoutDirectorsInput_1 = require("../inputs/MovieCreateNestedManyWithoutDirectorsInput");
const SerieCreateNestedOneWithoutDirectorsInput_1 = require("../inputs/SerieCreateNestedOneWithoutDirectorsInput");
let DirectorCreateInput = class DirectorCreateInput {
};
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    __metadata("design:type", String)
], DirectorCreateInput.prototype, "name", void 0);
__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    __metadata("design:type", Date)
], DirectorCreateInput.prototype, "createdAt", void 0);
__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    __metadata("design:type", Date)
], DirectorCreateInput.prototype, "updatedAt", void 0);
__decorate([
    TypeGraphQL.Field(_type => MovieCreateNestedManyWithoutDirectorsInput_1.MovieCreateNestedManyWithoutDirectorsInput, {
        nullable: true
    }),
    __metadata("design:type", MovieCreateNestedManyWithoutDirectorsInput_1.MovieCreateNestedManyWithoutDirectorsInput)
], DirectorCreateInput.prototype, "movies", void 0);
__decorate([
    TypeGraphQL.Field(_type => SerieCreateNestedOneWithoutDirectorsInput_1.SerieCreateNestedOneWithoutDirectorsInput, {
        nullable: true
    }),
    __metadata("design:type", SerieCreateNestedOneWithoutDirectorsInput_1.SerieCreateNestedOneWithoutDirectorsInput)
], DirectorCreateInput.prototype, "series", void 0);
DirectorCreateInput = __decorate([
    TypeGraphQL.InputType("DirectorCreateInput", {
        isAbstract: true
    })
], DirectorCreateInput);
exports.DirectorCreateInput = DirectorCreateInput;
