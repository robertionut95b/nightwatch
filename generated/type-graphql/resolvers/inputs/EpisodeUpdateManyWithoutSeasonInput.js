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
exports.EpisodeUpdateManyWithoutSeasonInput = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
const EpisodeCreateManySeasonInputEnvelope_1 = require("../inputs/EpisodeCreateManySeasonInputEnvelope");
const EpisodeCreateOrConnectWithoutSeasonInput_1 = require("../inputs/EpisodeCreateOrConnectWithoutSeasonInput");
const EpisodeCreateWithoutSeasonInput_1 = require("../inputs/EpisodeCreateWithoutSeasonInput");
const EpisodeScalarWhereInput_1 = require("../inputs/EpisodeScalarWhereInput");
const EpisodeUpdateManyWithWhereWithoutSeasonInput_1 = require("../inputs/EpisodeUpdateManyWithWhereWithoutSeasonInput");
const EpisodeUpdateWithWhereUniqueWithoutSeasonInput_1 = require("../inputs/EpisodeUpdateWithWhereUniqueWithoutSeasonInput");
const EpisodeUpsertWithWhereUniqueWithoutSeasonInput_1 = require("../inputs/EpisodeUpsertWithWhereUniqueWithoutSeasonInput");
const EpisodeWhereUniqueInput_1 = require("../inputs/EpisodeWhereUniqueInput");
let EpisodeUpdateManyWithoutSeasonInput = class EpisodeUpdateManyWithoutSeasonInput {
};
__decorate([
    TypeGraphQL.Field(_type => [EpisodeCreateWithoutSeasonInput_1.EpisodeCreateWithoutSeasonInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], EpisodeUpdateManyWithoutSeasonInput.prototype, "create", void 0);
__decorate([
    TypeGraphQL.Field(_type => [EpisodeCreateOrConnectWithoutSeasonInput_1.EpisodeCreateOrConnectWithoutSeasonInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], EpisodeUpdateManyWithoutSeasonInput.prototype, "connectOrCreate", void 0);
__decorate([
    TypeGraphQL.Field(_type => [EpisodeUpsertWithWhereUniqueWithoutSeasonInput_1.EpisodeUpsertWithWhereUniqueWithoutSeasonInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], EpisodeUpdateManyWithoutSeasonInput.prototype, "upsert", void 0);
__decorate([
    TypeGraphQL.Field(_type => EpisodeCreateManySeasonInputEnvelope_1.EpisodeCreateManySeasonInputEnvelope, {
        nullable: true
    }),
    __metadata("design:type", EpisodeCreateManySeasonInputEnvelope_1.EpisodeCreateManySeasonInputEnvelope)
], EpisodeUpdateManyWithoutSeasonInput.prototype, "createMany", void 0);
__decorate([
    TypeGraphQL.Field(_type => [EpisodeWhereUniqueInput_1.EpisodeWhereUniqueInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], EpisodeUpdateManyWithoutSeasonInput.prototype, "connect", void 0);
__decorate([
    TypeGraphQL.Field(_type => [EpisodeWhereUniqueInput_1.EpisodeWhereUniqueInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], EpisodeUpdateManyWithoutSeasonInput.prototype, "set", void 0);
__decorate([
    TypeGraphQL.Field(_type => [EpisodeWhereUniqueInput_1.EpisodeWhereUniqueInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], EpisodeUpdateManyWithoutSeasonInput.prototype, "disconnect", void 0);
__decorate([
    TypeGraphQL.Field(_type => [EpisodeWhereUniqueInput_1.EpisodeWhereUniqueInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], EpisodeUpdateManyWithoutSeasonInput.prototype, "delete", void 0);
__decorate([
    TypeGraphQL.Field(_type => [EpisodeUpdateWithWhereUniqueWithoutSeasonInput_1.EpisodeUpdateWithWhereUniqueWithoutSeasonInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], EpisodeUpdateManyWithoutSeasonInput.prototype, "update", void 0);
__decorate([
    TypeGraphQL.Field(_type => [EpisodeUpdateManyWithWhereWithoutSeasonInput_1.EpisodeUpdateManyWithWhereWithoutSeasonInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], EpisodeUpdateManyWithoutSeasonInput.prototype, "updateMany", void 0);
__decorate([
    TypeGraphQL.Field(_type => [EpisodeScalarWhereInput_1.EpisodeScalarWhereInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], EpisodeUpdateManyWithoutSeasonInput.prototype, "deleteMany", void 0);
EpisodeUpdateManyWithoutSeasonInput = __decorate([
    TypeGraphQL.InputType("EpisodeUpdateManyWithoutSeasonInput", {
        isAbstract: true
    })
], EpisodeUpdateManyWithoutSeasonInput);
exports.EpisodeUpdateManyWithoutSeasonInput = EpisodeUpdateManyWithoutSeasonInput;
