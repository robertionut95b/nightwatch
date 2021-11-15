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
exports.SeasonUpdateOneRequiredWithoutEpisodeIdsInput = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
const SeasonCreateOrConnectWithoutEpisodeIdsInput_1 = require("../inputs/SeasonCreateOrConnectWithoutEpisodeIdsInput");
const SeasonCreateWithoutEpisodeIdsInput_1 = require("../inputs/SeasonCreateWithoutEpisodeIdsInput");
const SeasonUpdateWithoutEpisodeIdsInput_1 = require("../inputs/SeasonUpdateWithoutEpisodeIdsInput");
const SeasonUpsertWithoutEpisodeIdsInput_1 = require("../inputs/SeasonUpsertWithoutEpisodeIdsInput");
const SeasonWhereUniqueInput_1 = require("../inputs/SeasonWhereUniqueInput");
let SeasonUpdateOneRequiredWithoutEpisodeIdsInput = class SeasonUpdateOneRequiredWithoutEpisodeIdsInput {
};
__decorate([
    TypeGraphQL.Field(_type => SeasonCreateWithoutEpisodeIdsInput_1.SeasonCreateWithoutEpisodeIdsInput, {
        nullable: true
    }),
    __metadata("design:type", SeasonCreateWithoutEpisodeIdsInput_1.SeasonCreateWithoutEpisodeIdsInput)
], SeasonUpdateOneRequiredWithoutEpisodeIdsInput.prototype, "create", void 0);
__decorate([
    TypeGraphQL.Field(_type => SeasonCreateOrConnectWithoutEpisodeIdsInput_1.SeasonCreateOrConnectWithoutEpisodeIdsInput, {
        nullable: true
    }),
    __metadata("design:type", SeasonCreateOrConnectWithoutEpisodeIdsInput_1.SeasonCreateOrConnectWithoutEpisodeIdsInput)
], SeasonUpdateOneRequiredWithoutEpisodeIdsInput.prototype, "connectOrCreate", void 0);
__decorate([
    TypeGraphQL.Field(_type => SeasonUpsertWithoutEpisodeIdsInput_1.SeasonUpsertWithoutEpisodeIdsInput, {
        nullable: true
    }),
    __metadata("design:type", SeasonUpsertWithoutEpisodeIdsInput_1.SeasonUpsertWithoutEpisodeIdsInput)
], SeasonUpdateOneRequiredWithoutEpisodeIdsInput.prototype, "upsert", void 0);
__decorate([
    TypeGraphQL.Field(_type => SeasonWhereUniqueInput_1.SeasonWhereUniqueInput, {
        nullable: true
    }),
    __metadata("design:type", SeasonWhereUniqueInput_1.SeasonWhereUniqueInput)
], SeasonUpdateOneRequiredWithoutEpisodeIdsInput.prototype, "connect", void 0);
__decorate([
    TypeGraphQL.Field(_type => SeasonUpdateWithoutEpisodeIdsInput_1.SeasonUpdateWithoutEpisodeIdsInput, {
        nullable: true
    }),
    __metadata("design:type", SeasonUpdateWithoutEpisodeIdsInput_1.SeasonUpdateWithoutEpisodeIdsInput)
], SeasonUpdateOneRequiredWithoutEpisodeIdsInput.prototype, "update", void 0);
SeasonUpdateOneRequiredWithoutEpisodeIdsInput = __decorate([
    TypeGraphQL.InputType("SeasonUpdateOneRequiredWithoutEpisodeIdsInput", {
        isAbstract: true
    })
], SeasonUpdateOneRequiredWithoutEpisodeIdsInput);
exports.SeasonUpdateOneRequiredWithoutEpisodeIdsInput = SeasonUpdateOneRequiredWithoutEpisodeIdsInput;
