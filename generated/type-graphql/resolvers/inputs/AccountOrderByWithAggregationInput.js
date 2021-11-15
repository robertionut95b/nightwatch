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
exports.AccountOrderByWithAggregationInput = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
const AccountAvgOrderByAggregateInput_1 = require("../inputs/AccountAvgOrderByAggregateInput");
const AccountCountOrderByAggregateInput_1 = require("../inputs/AccountCountOrderByAggregateInput");
const AccountMaxOrderByAggregateInput_1 = require("../inputs/AccountMaxOrderByAggregateInput");
const AccountMinOrderByAggregateInput_1 = require("../inputs/AccountMinOrderByAggregateInput");
const AccountSumOrderByAggregateInput_1 = require("../inputs/AccountSumOrderByAggregateInput");
const SortOrder_1 = require("../../enums/SortOrder");
let AccountOrderByWithAggregationInput = class AccountOrderByWithAggregationInput {
};
__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    __metadata("design:type", String)
], AccountOrderByWithAggregationInput.prototype, "id", void 0);
__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    __metadata("design:type", String)
], AccountOrderByWithAggregationInput.prototype, "userId", void 0);
__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    __metadata("design:type", String)
], AccountOrderByWithAggregationInput.prototype, "type", void 0);
__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    __metadata("design:type", String)
], AccountOrderByWithAggregationInput.prototype, "provider", void 0);
__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    __metadata("design:type", String)
], AccountOrderByWithAggregationInput.prototype, "providerAccountId", void 0);
__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    __metadata("design:type", String)
], AccountOrderByWithAggregationInput.prototype, "refresh_token", void 0);
__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    __metadata("design:type", String)
], AccountOrderByWithAggregationInput.prototype, "access_token", void 0);
__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    __metadata("design:type", String)
], AccountOrderByWithAggregationInput.prototype, "expires_at", void 0);
__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    __metadata("design:type", String)
], AccountOrderByWithAggregationInput.prototype, "token_type", void 0);
__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    __metadata("design:type", String)
], AccountOrderByWithAggregationInput.prototype, "scope", void 0);
__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    __metadata("design:type", String)
], AccountOrderByWithAggregationInput.prototype, "id_token", void 0);
__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    __metadata("design:type", String)
], AccountOrderByWithAggregationInput.prototype, "session_state", void 0);
__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    __metadata("design:type", String)
], AccountOrderByWithAggregationInput.prototype, "oauth_token_secret", void 0);
__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    __metadata("design:type", String)
], AccountOrderByWithAggregationInput.prototype, "oauth_token", void 0);
__decorate([
    TypeGraphQL.Field(_type => AccountCountOrderByAggregateInput_1.AccountCountOrderByAggregateInput, {
        nullable: true
    }),
    __metadata("design:type", AccountCountOrderByAggregateInput_1.AccountCountOrderByAggregateInput)
], AccountOrderByWithAggregationInput.prototype, "_count", void 0);
__decorate([
    TypeGraphQL.Field(_type => AccountAvgOrderByAggregateInput_1.AccountAvgOrderByAggregateInput, {
        nullable: true
    }),
    __metadata("design:type", AccountAvgOrderByAggregateInput_1.AccountAvgOrderByAggregateInput)
], AccountOrderByWithAggregationInput.prototype, "_avg", void 0);
__decorate([
    TypeGraphQL.Field(_type => AccountMaxOrderByAggregateInput_1.AccountMaxOrderByAggregateInput, {
        nullable: true
    }),
    __metadata("design:type", AccountMaxOrderByAggregateInput_1.AccountMaxOrderByAggregateInput)
], AccountOrderByWithAggregationInput.prototype, "_max", void 0);
__decorate([
    TypeGraphQL.Field(_type => AccountMinOrderByAggregateInput_1.AccountMinOrderByAggregateInput, {
        nullable: true
    }),
    __metadata("design:type", AccountMinOrderByAggregateInput_1.AccountMinOrderByAggregateInput)
], AccountOrderByWithAggregationInput.prototype, "_min", void 0);
__decorate([
    TypeGraphQL.Field(_type => AccountSumOrderByAggregateInput_1.AccountSumOrderByAggregateInput, {
        nullable: true
    }),
    __metadata("design:type", AccountSumOrderByAggregateInput_1.AccountSumOrderByAggregateInput)
], AccountOrderByWithAggregationInput.prototype, "_sum", void 0);
AccountOrderByWithAggregationInput = __decorate([
    TypeGraphQL.InputType("AccountOrderByWithAggregationInput", {
        isAbstract: true
    })
], AccountOrderByWithAggregationInput);
exports.AccountOrderByWithAggregationInput = AccountOrderByWithAggregationInput;
