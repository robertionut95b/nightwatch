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
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccountOrderByRelevanceFieldEnum = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
var AccountOrderByRelevanceFieldEnum;
(function (AccountOrderByRelevanceFieldEnum) {
    AccountOrderByRelevanceFieldEnum["id"] = "id";
    AccountOrderByRelevanceFieldEnum["userId"] = "userId";
    AccountOrderByRelevanceFieldEnum["type"] = "type";
    AccountOrderByRelevanceFieldEnum["provider"] = "provider";
    AccountOrderByRelevanceFieldEnum["providerAccountId"] = "providerAccountId";
    AccountOrderByRelevanceFieldEnum["refresh_token"] = "refresh_token";
    AccountOrderByRelevanceFieldEnum["access_token"] = "access_token";
    AccountOrderByRelevanceFieldEnum["token_type"] = "token_type";
    AccountOrderByRelevanceFieldEnum["scope"] = "scope";
    AccountOrderByRelevanceFieldEnum["id_token"] = "id_token";
    AccountOrderByRelevanceFieldEnum["session_state"] = "session_state";
    AccountOrderByRelevanceFieldEnum["oauth_token_secret"] = "oauth_token_secret";
    AccountOrderByRelevanceFieldEnum["oauth_token"] = "oauth_token";
})(AccountOrderByRelevanceFieldEnum = exports.AccountOrderByRelevanceFieldEnum || (exports.AccountOrderByRelevanceFieldEnum = {}));
TypeGraphQL.registerEnumType(AccountOrderByRelevanceFieldEnum, {
    name: "AccountOrderByRelevanceFieldEnum",
    description: undefined,
});
