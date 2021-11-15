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
exports.ActorUpdateManyWithoutSeriesInput = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
const ActorCreateManySeriesInputEnvelope_1 = require("../inputs/ActorCreateManySeriesInputEnvelope");
const ActorCreateOrConnectWithoutSeriesInput_1 = require("../inputs/ActorCreateOrConnectWithoutSeriesInput");
const ActorCreateWithoutSeriesInput_1 = require("../inputs/ActorCreateWithoutSeriesInput");
const ActorScalarWhereInput_1 = require("../inputs/ActorScalarWhereInput");
const ActorUpdateManyWithWhereWithoutSeriesInput_1 = require("../inputs/ActorUpdateManyWithWhereWithoutSeriesInput");
const ActorUpdateWithWhereUniqueWithoutSeriesInput_1 = require("../inputs/ActorUpdateWithWhereUniqueWithoutSeriesInput");
const ActorUpsertWithWhereUniqueWithoutSeriesInput_1 = require("../inputs/ActorUpsertWithWhereUniqueWithoutSeriesInput");
const ActorWhereUniqueInput_1 = require("../inputs/ActorWhereUniqueInput");
let ActorUpdateManyWithoutSeriesInput = class ActorUpdateManyWithoutSeriesInput {
};
__decorate([
    TypeGraphQL.Field(_type => [ActorCreateWithoutSeriesInput_1.ActorCreateWithoutSeriesInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], ActorUpdateManyWithoutSeriesInput.prototype, "create", void 0);
__decorate([
    TypeGraphQL.Field(_type => [ActorCreateOrConnectWithoutSeriesInput_1.ActorCreateOrConnectWithoutSeriesInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], ActorUpdateManyWithoutSeriesInput.prototype, "connectOrCreate", void 0);
__decorate([
    TypeGraphQL.Field(_type => [ActorUpsertWithWhereUniqueWithoutSeriesInput_1.ActorUpsertWithWhereUniqueWithoutSeriesInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], ActorUpdateManyWithoutSeriesInput.prototype, "upsert", void 0);
__decorate([
    TypeGraphQL.Field(_type => ActorCreateManySeriesInputEnvelope_1.ActorCreateManySeriesInputEnvelope, {
        nullable: true
    }),
    __metadata("design:type", ActorCreateManySeriesInputEnvelope_1.ActorCreateManySeriesInputEnvelope)
], ActorUpdateManyWithoutSeriesInput.prototype, "createMany", void 0);
__decorate([
    TypeGraphQL.Field(_type => [ActorWhereUniqueInput_1.ActorWhereUniqueInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], ActorUpdateManyWithoutSeriesInput.prototype, "connect", void 0);
__decorate([
    TypeGraphQL.Field(_type => [ActorWhereUniqueInput_1.ActorWhereUniqueInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], ActorUpdateManyWithoutSeriesInput.prototype, "set", void 0);
__decorate([
    TypeGraphQL.Field(_type => [ActorWhereUniqueInput_1.ActorWhereUniqueInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], ActorUpdateManyWithoutSeriesInput.prototype, "disconnect", void 0);
__decorate([
    TypeGraphQL.Field(_type => [ActorWhereUniqueInput_1.ActorWhereUniqueInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], ActorUpdateManyWithoutSeriesInput.prototype, "delete", void 0);
__decorate([
    TypeGraphQL.Field(_type => [ActorUpdateWithWhereUniqueWithoutSeriesInput_1.ActorUpdateWithWhereUniqueWithoutSeriesInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], ActorUpdateManyWithoutSeriesInput.prototype, "update", void 0);
__decorate([
    TypeGraphQL.Field(_type => [ActorUpdateManyWithWhereWithoutSeriesInput_1.ActorUpdateManyWithWhereWithoutSeriesInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], ActorUpdateManyWithoutSeriesInput.prototype, "updateMany", void 0);
__decorate([
    TypeGraphQL.Field(_type => [ActorScalarWhereInput_1.ActorScalarWhereInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], ActorUpdateManyWithoutSeriesInput.prototype, "deleteMany", void 0);
ActorUpdateManyWithoutSeriesInput = __decorate([
    TypeGraphQL.InputType("ActorUpdateManyWithoutSeriesInput", {
        isAbstract: true
    })
], ActorUpdateManyWithoutSeriesInput);
exports.ActorUpdateManyWithoutSeriesInput = ActorUpdateManyWithoutSeriesInput;
