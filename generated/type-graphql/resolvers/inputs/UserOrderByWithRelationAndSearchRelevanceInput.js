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
exports.UserOrderByWithRelationAndSearchRelevanceInput = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
const AccountOrderByRelationAggregateInput_1 = require("../inputs/AccountOrderByRelationAggregateInput");
const SessionOrderByRelationAggregateInput_1 = require("../inputs/SessionOrderByRelationAggregateInput");
const UserOrderByRelevanceInput_1 = require("../inputs/UserOrderByRelevanceInput");
const SortOrder_1 = require("../../enums/SortOrder");
let UserOrderByWithRelationAndSearchRelevanceInput = class UserOrderByWithRelationAndSearchRelevanceInput {
};
__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    __metadata("design:type", String)
], UserOrderByWithRelationAndSearchRelevanceInput.prototype, "id", void 0);
__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    __metadata("design:type", String)
], UserOrderByWithRelationAndSearchRelevanceInput.prototype, "lastName", void 0);
__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    __metadata("design:type", String)
], UserOrderByWithRelationAndSearchRelevanceInput.prototype, "firstName", void 0);
__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    __metadata("design:type", String)
], UserOrderByWithRelationAndSearchRelevanceInput.prototype, "username", void 0);
__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    __metadata("design:type", String)
], UserOrderByWithRelationAndSearchRelevanceInput.prototype, "email", void 0);
__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    __metadata("design:type", String)
], UserOrderByWithRelationAndSearchRelevanceInput.prototype, "emailVerified", void 0);
__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    __metadata("design:type", String)
], UserOrderByWithRelationAndSearchRelevanceInput.prototype, "image", void 0);
__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    __metadata("design:type", String)
], UserOrderByWithRelationAndSearchRelevanceInput.prototype, "role", void 0);
__decorate([
    TypeGraphQL.Field(_type => AccountOrderByRelationAggregateInput_1.AccountOrderByRelationAggregateInput, {
        nullable: true
    }),
    __metadata("design:type", AccountOrderByRelationAggregateInput_1.AccountOrderByRelationAggregateInput)
], UserOrderByWithRelationAndSearchRelevanceInput.prototype, "accounts", void 0);
__decorate([
    TypeGraphQL.Field(_type => SessionOrderByRelationAggregateInput_1.SessionOrderByRelationAggregateInput, {
        nullable: true
    }),
    __metadata("design:type", SessionOrderByRelationAggregateInput_1.SessionOrderByRelationAggregateInput)
], UserOrderByWithRelationAndSearchRelevanceInput.prototype, "sessions", void 0);
__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    __metadata("design:type", String)
], UserOrderByWithRelationAndSearchRelevanceInput.prototype, "createdAt", void 0);
__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    __metadata("design:type", String)
], UserOrderByWithRelationAndSearchRelevanceInput.prototype, "updatedAt", void 0);
__decorate([
    TypeGraphQL.Field(_type => UserOrderByRelevanceInput_1.UserOrderByRelevanceInput, {
        nullable: true
    }),
    __metadata("design:type", UserOrderByRelevanceInput_1.UserOrderByRelevanceInput)
], UserOrderByWithRelationAndSearchRelevanceInput.prototype, "_relevance", void 0);
UserOrderByWithRelationAndSearchRelevanceInput = __decorate([
    TypeGraphQL.InputType("UserOrderByWithRelationAndSearchRelevanceInput", {
        isAbstract: true
    })
], UserOrderByWithRelationAndSearchRelevanceInput);
exports.UserOrderByWithRelationAndSearchRelevanceInput = UserOrderByWithRelationAndSearchRelevanceInput;
