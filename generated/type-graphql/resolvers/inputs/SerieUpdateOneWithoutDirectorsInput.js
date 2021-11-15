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
exports.SerieUpdateOneWithoutDirectorsInput = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
const SerieCreateOrConnectWithoutDirectorsInput_1 = require("../inputs/SerieCreateOrConnectWithoutDirectorsInput");
const SerieCreateWithoutDirectorsInput_1 = require("../inputs/SerieCreateWithoutDirectorsInput");
const SerieUpdateWithoutDirectorsInput_1 = require("../inputs/SerieUpdateWithoutDirectorsInput");
const SerieUpsertWithoutDirectorsInput_1 = require("../inputs/SerieUpsertWithoutDirectorsInput");
const SerieWhereUniqueInput_1 = require("../inputs/SerieWhereUniqueInput");
let SerieUpdateOneWithoutDirectorsInput = class SerieUpdateOneWithoutDirectorsInput {
};
__decorate([
    TypeGraphQL.Field(_type => SerieCreateWithoutDirectorsInput_1.SerieCreateWithoutDirectorsInput, {
        nullable: true
    }),
    __metadata("design:type", SerieCreateWithoutDirectorsInput_1.SerieCreateWithoutDirectorsInput)
], SerieUpdateOneWithoutDirectorsInput.prototype, "create", void 0);
__decorate([
    TypeGraphQL.Field(_type => SerieCreateOrConnectWithoutDirectorsInput_1.SerieCreateOrConnectWithoutDirectorsInput, {
        nullable: true
    }),
    __metadata("design:type", SerieCreateOrConnectWithoutDirectorsInput_1.SerieCreateOrConnectWithoutDirectorsInput)
], SerieUpdateOneWithoutDirectorsInput.prototype, "connectOrCreate", void 0);
__decorate([
    TypeGraphQL.Field(_type => SerieUpsertWithoutDirectorsInput_1.SerieUpsertWithoutDirectorsInput, {
        nullable: true
    }),
    __metadata("design:type", SerieUpsertWithoutDirectorsInput_1.SerieUpsertWithoutDirectorsInput)
], SerieUpdateOneWithoutDirectorsInput.prototype, "upsert", void 0);
__decorate([
    TypeGraphQL.Field(_type => SerieWhereUniqueInput_1.SerieWhereUniqueInput, {
        nullable: true
    }),
    __metadata("design:type", SerieWhereUniqueInput_1.SerieWhereUniqueInput)
], SerieUpdateOneWithoutDirectorsInput.prototype, "connect", void 0);
__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    __metadata("design:type", Boolean)
], SerieUpdateOneWithoutDirectorsInput.prototype, "disconnect", void 0);
__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    __metadata("design:type", Boolean)
], SerieUpdateOneWithoutDirectorsInput.prototype, "delete", void 0);
__decorate([
    TypeGraphQL.Field(_type => SerieUpdateWithoutDirectorsInput_1.SerieUpdateWithoutDirectorsInput, {
        nullable: true
    }),
    __metadata("design:type", SerieUpdateWithoutDirectorsInput_1.SerieUpdateWithoutDirectorsInput)
], SerieUpdateOneWithoutDirectorsInput.prototype, "update", void 0);
SerieUpdateOneWithoutDirectorsInput = __decorate([
    TypeGraphQL.InputType("SerieUpdateOneWithoutDirectorsInput", {
        isAbstract: true
    })
], SerieUpdateOneWithoutDirectorsInput);
exports.SerieUpdateOneWithoutDirectorsInput = SerieUpdateOneWithoutDirectorsInput;
