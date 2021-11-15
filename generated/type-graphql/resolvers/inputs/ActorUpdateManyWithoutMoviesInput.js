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
exports.ActorUpdateManyWithoutMoviesInput = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
const ActorCreateOrConnectWithoutMoviesInput_1 = require("../inputs/ActorCreateOrConnectWithoutMoviesInput");
const ActorCreateWithoutMoviesInput_1 = require("../inputs/ActorCreateWithoutMoviesInput");
const ActorScalarWhereInput_1 = require("../inputs/ActorScalarWhereInput");
const ActorUpdateManyWithWhereWithoutMoviesInput_1 = require("../inputs/ActorUpdateManyWithWhereWithoutMoviesInput");
const ActorUpdateWithWhereUniqueWithoutMoviesInput_1 = require("../inputs/ActorUpdateWithWhereUniqueWithoutMoviesInput");
const ActorUpsertWithWhereUniqueWithoutMoviesInput_1 = require("../inputs/ActorUpsertWithWhereUniqueWithoutMoviesInput");
const ActorWhereUniqueInput_1 = require("../inputs/ActorWhereUniqueInput");
let ActorUpdateManyWithoutMoviesInput = class ActorUpdateManyWithoutMoviesInput {
};
__decorate([
    TypeGraphQL.Field(_type => [ActorCreateWithoutMoviesInput_1.ActorCreateWithoutMoviesInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], ActorUpdateManyWithoutMoviesInput.prototype, "create", void 0);
__decorate([
    TypeGraphQL.Field(_type => [ActorCreateOrConnectWithoutMoviesInput_1.ActorCreateOrConnectWithoutMoviesInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], ActorUpdateManyWithoutMoviesInput.prototype, "connectOrCreate", void 0);
__decorate([
    TypeGraphQL.Field(_type => [ActorUpsertWithWhereUniqueWithoutMoviesInput_1.ActorUpsertWithWhereUniqueWithoutMoviesInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], ActorUpdateManyWithoutMoviesInput.prototype, "upsert", void 0);
__decorate([
    TypeGraphQL.Field(_type => [ActorWhereUniqueInput_1.ActorWhereUniqueInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], ActorUpdateManyWithoutMoviesInput.prototype, "connect", void 0);
__decorate([
    TypeGraphQL.Field(_type => [ActorWhereUniqueInput_1.ActorWhereUniqueInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], ActorUpdateManyWithoutMoviesInput.prototype, "set", void 0);
__decorate([
    TypeGraphQL.Field(_type => [ActorWhereUniqueInput_1.ActorWhereUniqueInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], ActorUpdateManyWithoutMoviesInput.prototype, "disconnect", void 0);
__decorate([
    TypeGraphQL.Field(_type => [ActorWhereUniqueInput_1.ActorWhereUniqueInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], ActorUpdateManyWithoutMoviesInput.prototype, "delete", void 0);
__decorate([
    TypeGraphQL.Field(_type => [ActorUpdateWithWhereUniqueWithoutMoviesInput_1.ActorUpdateWithWhereUniqueWithoutMoviesInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], ActorUpdateManyWithoutMoviesInput.prototype, "update", void 0);
__decorate([
    TypeGraphQL.Field(_type => [ActorUpdateManyWithWhereWithoutMoviesInput_1.ActorUpdateManyWithWhereWithoutMoviesInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], ActorUpdateManyWithoutMoviesInput.prototype, "updateMany", void 0);
__decorate([
    TypeGraphQL.Field(_type => [ActorScalarWhereInput_1.ActorScalarWhereInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], ActorUpdateManyWithoutMoviesInput.prototype, "deleteMany", void 0);
ActorUpdateManyWithoutMoviesInput = __decorate([
    TypeGraphQL.InputType("ActorUpdateManyWithoutMoviesInput", {
        isAbstract: true
    })
], ActorUpdateManyWithoutMoviesInput);
exports.ActorUpdateManyWithoutMoviesInput = ActorUpdateManyWithoutMoviesInput;
