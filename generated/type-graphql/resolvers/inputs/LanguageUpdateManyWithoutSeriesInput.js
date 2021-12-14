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
exports.LanguageUpdateManyWithoutSeriesInput = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
const LanguageCreateOrConnectWithoutSeriesInput_1 = require("../inputs/LanguageCreateOrConnectWithoutSeriesInput");
const LanguageCreateWithoutSeriesInput_1 = require("../inputs/LanguageCreateWithoutSeriesInput");
const LanguageScalarWhereInput_1 = require("../inputs/LanguageScalarWhereInput");
const LanguageUpdateManyWithWhereWithoutSeriesInput_1 = require("../inputs/LanguageUpdateManyWithWhereWithoutSeriesInput");
const LanguageUpdateWithWhereUniqueWithoutSeriesInput_1 = require("../inputs/LanguageUpdateWithWhereUniqueWithoutSeriesInput");
const LanguageUpsertWithWhereUniqueWithoutSeriesInput_1 = require("../inputs/LanguageUpsertWithWhereUniqueWithoutSeriesInput");
const LanguageWhereUniqueInput_1 = require("../inputs/LanguageWhereUniqueInput");
let LanguageUpdateManyWithoutSeriesInput = class LanguageUpdateManyWithoutSeriesInput {
};
__decorate([
    TypeGraphQL.Field(_type => [LanguageCreateWithoutSeriesInput_1.LanguageCreateWithoutSeriesInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], LanguageUpdateManyWithoutSeriesInput.prototype, "create", void 0);
__decorate([
    TypeGraphQL.Field(_type => [LanguageCreateOrConnectWithoutSeriesInput_1.LanguageCreateOrConnectWithoutSeriesInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], LanguageUpdateManyWithoutSeriesInput.prototype, "connectOrCreate", void 0);
__decorate([
    TypeGraphQL.Field(_type => [LanguageUpsertWithWhereUniqueWithoutSeriesInput_1.LanguageUpsertWithWhereUniqueWithoutSeriesInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], LanguageUpdateManyWithoutSeriesInput.prototype, "upsert", void 0);
__decorate([
    TypeGraphQL.Field(_type => [LanguageWhereUniqueInput_1.LanguageWhereUniqueInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], LanguageUpdateManyWithoutSeriesInput.prototype, "connect", void 0);
__decorate([
    TypeGraphQL.Field(_type => [LanguageWhereUniqueInput_1.LanguageWhereUniqueInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], LanguageUpdateManyWithoutSeriesInput.prototype, "set", void 0);
__decorate([
    TypeGraphQL.Field(_type => [LanguageWhereUniqueInput_1.LanguageWhereUniqueInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], LanguageUpdateManyWithoutSeriesInput.prototype, "disconnect", void 0);
__decorate([
    TypeGraphQL.Field(_type => [LanguageWhereUniqueInput_1.LanguageWhereUniqueInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], LanguageUpdateManyWithoutSeriesInput.prototype, "delete", void 0);
__decorate([
    TypeGraphQL.Field(_type => [LanguageUpdateWithWhereUniqueWithoutSeriesInput_1.LanguageUpdateWithWhereUniqueWithoutSeriesInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], LanguageUpdateManyWithoutSeriesInput.prototype, "update", void 0);
__decorate([
    TypeGraphQL.Field(_type => [LanguageUpdateManyWithWhereWithoutSeriesInput_1.LanguageUpdateManyWithWhereWithoutSeriesInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], LanguageUpdateManyWithoutSeriesInput.prototype, "updateMany", void 0);
__decorate([
    TypeGraphQL.Field(_type => [LanguageScalarWhereInput_1.LanguageScalarWhereInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], LanguageUpdateManyWithoutSeriesInput.prototype, "deleteMany", void 0);
LanguageUpdateManyWithoutSeriesInput = __decorate([
    TypeGraphQL.InputType("LanguageUpdateManyWithoutSeriesInput", {
        isAbstract: true
    })
], LanguageUpdateManyWithoutSeriesInput);
exports.LanguageUpdateManyWithoutSeriesInput = LanguageUpdateManyWithoutSeriesInput;
