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
exports.DirectorUpdateManyWithoutMoviesInput = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
const DirectorCreateOrConnectWithoutMoviesInput_1 = require("../inputs/DirectorCreateOrConnectWithoutMoviesInput");
const DirectorCreateWithoutMoviesInput_1 = require("../inputs/DirectorCreateWithoutMoviesInput");
const DirectorScalarWhereInput_1 = require("../inputs/DirectorScalarWhereInput");
const DirectorUpdateManyWithWhereWithoutMoviesInput_1 = require("../inputs/DirectorUpdateManyWithWhereWithoutMoviesInput");
const DirectorUpdateWithWhereUniqueWithoutMoviesInput_1 = require("../inputs/DirectorUpdateWithWhereUniqueWithoutMoviesInput");
const DirectorUpsertWithWhereUniqueWithoutMoviesInput_1 = require("../inputs/DirectorUpsertWithWhereUniqueWithoutMoviesInput");
const DirectorWhereUniqueInput_1 = require("../inputs/DirectorWhereUniqueInput");
let DirectorUpdateManyWithoutMoviesInput = class DirectorUpdateManyWithoutMoviesInput {
};
__decorate([
    TypeGraphQL.Field(_type => [DirectorCreateWithoutMoviesInput_1.DirectorCreateWithoutMoviesInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], DirectorUpdateManyWithoutMoviesInput.prototype, "create", void 0);
__decorate([
    TypeGraphQL.Field(_type => [DirectorCreateOrConnectWithoutMoviesInput_1.DirectorCreateOrConnectWithoutMoviesInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], DirectorUpdateManyWithoutMoviesInput.prototype, "connectOrCreate", void 0);
__decorate([
    TypeGraphQL.Field(_type => [DirectorUpsertWithWhereUniqueWithoutMoviesInput_1.DirectorUpsertWithWhereUniqueWithoutMoviesInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], DirectorUpdateManyWithoutMoviesInput.prototype, "upsert", void 0);
__decorate([
    TypeGraphQL.Field(_type => [DirectorWhereUniqueInput_1.DirectorWhereUniqueInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], DirectorUpdateManyWithoutMoviesInput.prototype, "connect", void 0);
__decorate([
    TypeGraphQL.Field(_type => [DirectorWhereUniqueInput_1.DirectorWhereUniqueInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], DirectorUpdateManyWithoutMoviesInput.prototype, "set", void 0);
__decorate([
    TypeGraphQL.Field(_type => [DirectorWhereUniqueInput_1.DirectorWhereUniqueInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], DirectorUpdateManyWithoutMoviesInput.prototype, "disconnect", void 0);
__decorate([
    TypeGraphQL.Field(_type => [DirectorWhereUniqueInput_1.DirectorWhereUniqueInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], DirectorUpdateManyWithoutMoviesInput.prototype, "delete", void 0);
__decorate([
    TypeGraphQL.Field(_type => [DirectorUpdateWithWhereUniqueWithoutMoviesInput_1.DirectorUpdateWithWhereUniqueWithoutMoviesInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], DirectorUpdateManyWithoutMoviesInput.prototype, "update", void 0);
__decorate([
    TypeGraphQL.Field(_type => [DirectorUpdateManyWithWhereWithoutMoviesInput_1.DirectorUpdateManyWithWhereWithoutMoviesInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], DirectorUpdateManyWithoutMoviesInput.prototype, "updateMany", void 0);
__decorate([
    TypeGraphQL.Field(_type => [DirectorScalarWhereInput_1.DirectorScalarWhereInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], DirectorUpdateManyWithoutMoviesInput.prototype, "deleteMany", void 0);
DirectorUpdateManyWithoutMoviesInput = __decorate([
    TypeGraphQL.InputType("DirectorUpdateManyWithoutMoviesInput", {
        isAbstract: true
    })
], DirectorUpdateManyWithoutMoviesInput);
exports.DirectorUpdateManyWithoutMoviesInput = DirectorUpdateManyWithoutMoviesInput;
