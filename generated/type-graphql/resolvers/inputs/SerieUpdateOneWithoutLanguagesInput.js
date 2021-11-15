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
exports.SerieUpdateOneWithoutLanguagesInput = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
const SerieCreateOrConnectWithoutLanguagesInput_1 = require("../inputs/SerieCreateOrConnectWithoutLanguagesInput");
const SerieCreateWithoutLanguagesInput_1 = require("../inputs/SerieCreateWithoutLanguagesInput");
const SerieUpdateWithoutLanguagesInput_1 = require("../inputs/SerieUpdateWithoutLanguagesInput");
const SerieUpsertWithoutLanguagesInput_1 = require("../inputs/SerieUpsertWithoutLanguagesInput");
const SerieWhereUniqueInput_1 = require("../inputs/SerieWhereUniqueInput");
let SerieUpdateOneWithoutLanguagesInput = class SerieUpdateOneWithoutLanguagesInput {
};
__decorate([
    TypeGraphQL.Field(_type => SerieCreateWithoutLanguagesInput_1.SerieCreateWithoutLanguagesInput, {
        nullable: true
    }),
    __metadata("design:type", SerieCreateWithoutLanguagesInput_1.SerieCreateWithoutLanguagesInput)
], SerieUpdateOneWithoutLanguagesInput.prototype, "create", void 0);
__decorate([
    TypeGraphQL.Field(_type => SerieCreateOrConnectWithoutLanguagesInput_1.SerieCreateOrConnectWithoutLanguagesInput, {
        nullable: true
    }),
    __metadata("design:type", SerieCreateOrConnectWithoutLanguagesInput_1.SerieCreateOrConnectWithoutLanguagesInput)
], SerieUpdateOneWithoutLanguagesInput.prototype, "connectOrCreate", void 0);
__decorate([
    TypeGraphQL.Field(_type => SerieUpsertWithoutLanguagesInput_1.SerieUpsertWithoutLanguagesInput, {
        nullable: true
    }),
    __metadata("design:type", SerieUpsertWithoutLanguagesInput_1.SerieUpsertWithoutLanguagesInput)
], SerieUpdateOneWithoutLanguagesInput.prototype, "upsert", void 0);
__decorate([
    TypeGraphQL.Field(_type => SerieWhereUniqueInput_1.SerieWhereUniqueInput, {
        nullable: true
    }),
    __metadata("design:type", SerieWhereUniqueInput_1.SerieWhereUniqueInput)
], SerieUpdateOneWithoutLanguagesInput.prototype, "connect", void 0);
__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    __metadata("design:type", Boolean)
], SerieUpdateOneWithoutLanguagesInput.prototype, "disconnect", void 0);
__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    __metadata("design:type", Boolean)
], SerieUpdateOneWithoutLanguagesInput.prototype, "delete", void 0);
__decorate([
    TypeGraphQL.Field(_type => SerieUpdateWithoutLanguagesInput_1.SerieUpdateWithoutLanguagesInput, {
        nullable: true
    }),
    __metadata("design:type", SerieUpdateWithoutLanguagesInput_1.SerieUpdateWithoutLanguagesInput)
], SerieUpdateOneWithoutLanguagesInput.prototype, "update", void 0);
SerieUpdateOneWithoutLanguagesInput = __decorate([
    TypeGraphQL.InputType("SerieUpdateOneWithoutLanguagesInput", {
        isAbstract: true
    })
], SerieUpdateOneWithoutLanguagesInput);
exports.SerieUpdateOneWithoutLanguagesInput = SerieUpdateOneWithoutLanguagesInput;
