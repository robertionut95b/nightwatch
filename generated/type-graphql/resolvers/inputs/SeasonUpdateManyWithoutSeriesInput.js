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
exports.SeasonUpdateManyWithoutSeriesInput = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
const SeasonCreateManySeriesInputEnvelope_1 = require("../inputs/SeasonCreateManySeriesInputEnvelope");
const SeasonCreateOrConnectWithoutSeriesInput_1 = require("../inputs/SeasonCreateOrConnectWithoutSeriesInput");
const SeasonCreateWithoutSeriesInput_1 = require("../inputs/SeasonCreateWithoutSeriesInput");
const SeasonScalarWhereInput_1 = require("../inputs/SeasonScalarWhereInput");
const SeasonUpdateManyWithWhereWithoutSeriesInput_1 = require("../inputs/SeasonUpdateManyWithWhereWithoutSeriesInput");
const SeasonUpdateWithWhereUniqueWithoutSeriesInput_1 = require("../inputs/SeasonUpdateWithWhereUniqueWithoutSeriesInput");
const SeasonUpsertWithWhereUniqueWithoutSeriesInput_1 = require("../inputs/SeasonUpsertWithWhereUniqueWithoutSeriesInput");
const SeasonWhereUniqueInput_1 = require("../inputs/SeasonWhereUniqueInput");
let SeasonUpdateManyWithoutSeriesInput = class SeasonUpdateManyWithoutSeriesInput {
};
__decorate([
    TypeGraphQL.Field(_type => [SeasonCreateWithoutSeriesInput_1.SeasonCreateWithoutSeriesInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], SeasonUpdateManyWithoutSeriesInput.prototype, "create", void 0);
__decorate([
    TypeGraphQL.Field(_type => [SeasonCreateOrConnectWithoutSeriesInput_1.SeasonCreateOrConnectWithoutSeriesInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], SeasonUpdateManyWithoutSeriesInput.prototype, "connectOrCreate", void 0);
__decorate([
    TypeGraphQL.Field(_type => [SeasonUpsertWithWhereUniqueWithoutSeriesInput_1.SeasonUpsertWithWhereUniqueWithoutSeriesInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], SeasonUpdateManyWithoutSeriesInput.prototype, "upsert", void 0);
__decorate([
    TypeGraphQL.Field(_type => SeasonCreateManySeriesInputEnvelope_1.SeasonCreateManySeriesInputEnvelope, {
        nullable: true
    }),
    __metadata("design:type", SeasonCreateManySeriesInputEnvelope_1.SeasonCreateManySeriesInputEnvelope)
], SeasonUpdateManyWithoutSeriesInput.prototype, "createMany", void 0);
__decorate([
    TypeGraphQL.Field(_type => [SeasonWhereUniqueInput_1.SeasonWhereUniqueInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], SeasonUpdateManyWithoutSeriesInput.prototype, "connect", void 0);
__decorate([
    TypeGraphQL.Field(_type => [SeasonWhereUniqueInput_1.SeasonWhereUniqueInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], SeasonUpdateManyWithoutSeriesInput.prototype, "set", void 0);
__decorate([
    TypeGraphQL.Field(_type => [SeasonWhereUniqueInput_1.SeasonWhereUniqueInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], SeasonUpdateManyWithoutSeriesInput.prototype, "disconnect", void 0);
__decorate([
    TypeGraphQL.Field(_type => [SeasonWhereUniqueInput_1.SeasonWhereUniqueInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], SeasonUpdateManyWithoutSeriesInput.prototype, "delete", void 0);
__decorate([
    TypeGraphQL.Field(_type => [SeasonUpdateWithWhereUniqueWithoutSeriesInput_1.SeasonUpdateWithWhereUniqueWithoutSeriesInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], SeasonUpdateManyWithoutSeriesInput.prototype, "update", void 0);
__decorate([
    TypeGraphQL.Field(_type => [SeasonUpdateManyWithWhereWithoutSeriesInput_1.SeasonUpdateManyWithWhereWithoutSeriesInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], SeasonUpdateManyWithoutSeriesInput.prototype, "updateMany", void 0);
__decorate([
    TypeGraphQL.Field(_type => [SeasonScalarWhereInput_1.SeasonScalarWhereInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], SeasonUpdateManyWithoutSeriesInput.prototype, "deleteMany", void 0);
SeasonUpdateManyWithoutSeriesInput = __decorate([
    TypeGraphQL.InputType("SeasonUpdateManyWithoutSeriesInput", {
        isAbstract: true
    })
], SeasonUpdateManyWithoutSeriesInput);
exports.SeasonUpdateManyWithoutSeriesInput = SeasonUpdateManyWithoutSeriesInput;
