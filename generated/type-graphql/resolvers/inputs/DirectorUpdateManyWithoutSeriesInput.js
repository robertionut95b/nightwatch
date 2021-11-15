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
exports.DirectorUpdateManyWithoutSeriesInput = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
const DirectorCreateManySeriesInputEnvelope_1 = require("../inputs/DirectorCreateManySeriesInputEnvelope");
const DirectorCreateOrConnectWithoutSeriesInput_1 = require("../inputs/DirectorCreateOrConnectWithoutSeriesInput");
const DirectorCreateWithoutSeriesInput_1 = require("../inputs/DirectorCreateWithoutSeriesInput");
const DirectorScalarWhereInput_1 = require("../inputs/DirectorScalarWhereInput");
const DirectorUpdateManyWithWhereWithoutSeriesInput_1 = require("../inputs/DirectorUpdateManyWithWhereWithoutSeriesInput");
const DirectorUpdateWithWhereUniqueWithoutSeriesInput_1 = require("../inputs/DirectorUpdateWithWhereUniqueWithoutSeriesInput");
const DirectorUpsertWithWhereUniqueWithoutSeriesInput_1 = require("../inputs/DirectorUpsertWithWhereUniqueWithoutSeriesInput");
const DirectorWhereUniqueInput_1 = require("../inputs/DirectorWhereUniqueInput");
let DirectorUpdateManyWithoutSeriesInput = class DirectorUpdateManyWithoutSeriesInput {
};
__decorate([
    TypeGraphQL.Field(_type => [DirectorCreateWithoutSeriesInput_1.DirectorCreateWithoutSeriesInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], DirectorUpdateManyWithoutSeriesInput.prototype, "create", void 0);
__decorate([
    TypeGraphQL.Field(_type => [DirectorCreateOrConnectWithoutSeriesInput_1.DirectorCreateOrConnectWithoutSeriesInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], DirectorUpdateManyWithoutSeriesInput.prototype, "connectOrCreate", void 0);
__decorate([
    TypeGraphQL.Field(_type => [DirectorUpsertWithWhereUniqueWithoutSeriesInput_1.DirectorUpsertWithWhereUniqueWithoutSeriesInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], DirectorUpdateManyWithoutSeriesInput.prototype, "upsert", void 0);
__decorate([
    TypeGraphQL.Field(_type => DirectorCreateManySeriesInputEnvelope_1.DirectorCreateManySeriesInputEnvelope, {
        nullable: true
    }),
    __metadata("design:type", DirectorCreateManySeriesInputEnvelope_1.DirectorCreateManySeriesInputEnvelope)
], DirectorUpdateManyWithoutSeriesInput.prototype, "createMany", void 0);
__decorate([
    TypeGraphQL.Field(_type => [DirectorWhereUniqueInput_1.DirectorWhereUniqueInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], DirectorUpdateManyWithoutSeriesInput.prototype, "connect", void 0);
__decorate([
    TypeGraphQL.Field(_type => [DirectorWhereUniqueInput_1.DirectorWhereUniqueInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], DirectorUpdateManyWithoutSeriesInput.prototype, "set", void 0);
__decorate([
    TypeGraphQL.Field(_type => [DirectorWhereUniqueInput_1.DirectorWhereUniqueInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], DirectorUpdateManyWithoutSeriesInput.prototype, "disconnect", void 0);
__decorate([
    TypeGraphQL.Field(_type => [DirectorWhereUniqueInput_1.DirectorWhereUniqueInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], DirectorUpdateManyWithoutSeriesInput.prototype, "delete", void 0);
__decorate([
    TypeGraphQL.Field(_type => [DirectorUpdateWithWhereUniqueWithoutSeriesInput_1.DirectorUpdateWithWhereUniqueWithoutSeriesInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], DirectorUpdateManyWithoutSeriesInput.prototype, "update", void 0);
__decorate([
    TypeGraphQL.Field(_type => [DirectorUpdateManyWithWhereWithoutSeriesInput_1.DirectorUpdateManyWithWhereWithoutSeriesInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], DirectorUpdateManyWithoutSeriesInput.prototype, "updateMany", void 0);
__decorate([
    TypeGraphQL.Field(_type => [DirectorScalarWhereInput_1.DirectorScalarWhereInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], DirectorUpdateManyWithoutSeriesInput.prototype, "deleteMany", void 0);
DirectorUpdateManyWithoutSeriesInput = __decorate([
    TypeGraphQL.InputType("DirectorUpdateManyWithoutSeriesInput", {
        isAbstract: true
    })
], DirectorUpdateManyWithoutSeriesInput);
exports.DirectorUpdateManyWithoutSeriesInput = DirectorUpdateManyWithoutSeriesInput;
