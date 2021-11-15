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
exports.MovieUpdateManyWithoutDirectorsInput = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
const MovieCreateOrConnectWithoutDirectorsInput_1 = require("../inputs/MovieCreateOrConnectWithoutDirectorsInput");
const MovieCreateWithoutDirectorsInput_1 = require("../inputs/MovieCreateWithoutDirectorsInput");
const MovieScalarWhereInput_1 = require("../inputs/MovieScalarWhereInput");
const MovieUpdateManyWithWhereWithoutDirectorsInput_1 = require("../inputs/MovieUpdateManyWithWhereWithoutDirectorsInput");
const MovieUpdateWithWhereUniqueWithoutDirectorsInput_1 = require("../inputs/MovieUpdateWithWhereUniqueWithoutDirectorsInput");
const MovieUpsertWithWhereUniqueWithoutDirectorsInput_1 = require("../inputs/MovieUpsertWithWhereUniqueWithoutDirectorsInput");
const MovieWhereUniqueInput_1 = require("../inputs/MovieWhereUniqueInput");
let MovieUpdateManyWithoutDirectorsInput = class MovieUpdateManyWithoutDirectorsInput {
};
__decorate([
    TypeGraphQL.Field(_type => [MovieCreateWithoutDirectorsInput_1.MovieCreateWithoutDirectorsInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], MovieUpdateManyWithoutDirectorsInput.prototype, "create", void 0);
__decorate([
    TypeGraphQL.Field(_type => [MovieCreateOrConnectWithoutDirectorsInput_1.MovieCreateOrConnectWithoutDirectorsInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], MovieUpdateManyWithoutDirectorsInput.prototype, "connectOrCreate", void 0);
__decorate([
    TypeGraphQL.Field(_type => [MovieUpsertWithWhereUniqueWithoutDirectorsInput_1.MovieUpsertWithWhereUniqueWithoutDirectorsInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], MovieUpdateManyWithoutDirectorsInput.prototype, "upsert", void 0);
__decorate([
    TypeGraphQL.Field(_type => [MovieWhereUniqueInput_1.MovieWhereUniqueInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], MovieUpdateManyWithoutDirectorsInput.prototype, "connect", void 0);
__decorate([
    TypeGraphQL.Field(_type => [MovieWhereUniqueInput_1.MovieWhereUniqueInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], MovieUpdateManyWithoutDirectorsInput.prototype, "set", void 0);
__decorate([
    TypeGraphQL.Field(_type => [MovieWhereUniqueInput_1.MovieWhereUniqueInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], MovieUpdateManyWithoutDirectorsInput.prototype, "disconnect", void 0);
__decorate([
    TypeGraphQL.Field(_type => [MovieWhereUniqueInput_1.MovieWhereUniqueInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], MovieUpdateManyWithoutDirectorsInput.prototype, "delete", void 0);
__decorate([
    TypeGraphQL.Field(_type => [MovieUpdateWithWhereUniqueWithoutDirectorsInput_1.MovieUpdateWithWhereUniqueWithoutDirectorsInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], MovieUpdateManyWithoutDirectorsInput.prototype, "update", void 0);
__decorate([
    TypeGraphQL.Field(_type => [MovieUpdateManyWithWhereWithoutDirectorsInput_1.MovieUpdateManyWithWhereWithoutDirectorsInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], MovieUpdateManyWithoutDirectorsInput.prototype, "updateMany", void 0);
__decorate([
    TypeGraphQL.Field(_type => [MovieScalarWhereInput_1.MovieScalarWhereInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], MovieUpdateManyWithoutDirectorsInput.prototype, "deleteMany", void 0);
MovieUpdateManyWithoutDirectorsInput = __decorate([
    TypeGraphQL.InputType("MovieUpdateManyWithoutDirectorsInput", {
        isAbstract: true
    })
], MovieUpdateManyWithoutDirectorsInput);
exports.MovieUpdateManyWithoutDirectorsInput = MovieUpdateManyWithoutDirectorsInput;
