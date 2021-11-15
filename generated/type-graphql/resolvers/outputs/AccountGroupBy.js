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
exports.AccountGroupBy = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
const AccountAvgAggregate_1 = require("../outputs/AccountAvgAggregate");
const AccountCountAggregate_1 = require("../outputs/AccountCountAggregate");
const AccountMaxAggregate_1 = require("../outputs/AccountMaxAggregate");
const AccountMinAggregate_1 = require("../outputs/AccountMinAggregate");
const AccountSumAggregate_1 = require("../outputs/AccountSumAggregate");
let AccountGroupBy = class AccountGroupBy {
};
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    __metadata("design:type", String)
], AccountGroupBy.prototype, "id", void 0);
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    __metadata("design:type", String)
], AccountGroupBy.prototype, "userId", void 0);
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    __metadata("design:type", String)
], AccountGroupBy.prototype, "type", void 0);
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    __metadata("design:type", String)
], AccountGroupBy.prototype, "provider", void 0);
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    __metadata("design:type", String)
], AccountGroupBy.prototype, "providerAccountId", void 0);
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    __metadata("design:type", String)
], AccountGroupBy.prototype, "refresh_token", void 0);
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    __metadata("design:type", String)
], AccountGroupBy.prototype, "access_token", void 0);
__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    __metadata("design:type", Number)
], AccountGroupBy.prototype, "expires_at", void 0);
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    __metadata("design:type", String)
], AccountGroupBy.prototype, "token_type", void 0);
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    __metadata("design:type", String)
], AccountGroupBy.prototype, "scope", void 0);
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    __metadata("design:type", String)
], AccountGroupBy.prototype, "id_token", void 0);
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    __metadata("design:type", String)
], AccountGroupBy.prototype, "session_state", void 0);
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    __metadata("design:type", String)
], AccountGroupBy.prototype, "oauth_token_secret", void 0);
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    __metadata("design:type", String)
], AccountGroupBy.prototype, "oauth_token", void 0);
__decorate([
    TypeGraphQL.Field(_type => AccountCountAggregate_1.AccountCountAggregate, {
        nullable: true
    }),
    __metadata("design:type", AccountCountAggregate_1.AccountCountAggregate)
], AccountGroupBy.prototype, "_count", void 0);
__decorate([
    TypeGraphQL.Field(_type => AccountAvgAggregate_1.AccountAvgAggregate, {
        nullable: true
    }),
    __metadata("design:type", AccountAvgAggregate_1.AccountAvgAggregate)
], AccountGroupBy.prototype, "_avg", void 0);
__decorate([
    TypeGraphQL.Field(_type => AccountSumAggregate_1.AccountSumAggregate, {
        nullable: true
    }),
    __metadata("design:type", AccountSumAggregate_1.AccountSumAggregate)
], AccountGroupBy.prototype, "_sum", void 0);
__decorate([
    TypeGraphQL.Field(_type => AccountMinAggregate_1.AccountMinAggregate, {
        nullable: true
    }),
    __metadata("design:type", AccountMinAggregate_1.AccountMinAggregate)
], AccountGroupBy.prototype, "_min", void 0);
__decorate([
    TypeGraphQL.Field(_type => AccountMaxAggregate_1.AccountMaxAggregate, {
        nullable: true
    }),
    __metadata("design:type", AccountMaxAggregate_1.AccountMaxAggregate)
], AccountGroupBy.prototype, "_max", void 0);
AccountGroupBy = __decorate([
    TypeGraphQL.ObjectType("AccountGroupBy", {
        isAbstract: true
    })
], AccountGroupBy);
exports.AccountGroupBy = AccountGroupBy;
