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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LanguageCrudResolver = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
const graphql_fields_1 = __importDefault(require("graphql-fields"));
const AggregateLanguageArgs_1 = require("./args/AggregateLanguageArgs");
const CreateLanguageArgs_1 = require("./args/CreateLanguageArgs");
const CreateManyLanguageArgs_1 = require("./args/CreateManyLanguageArgs");
const DeleteLanguageArgs_1 = require("./args/DeleteLanguageArgs");
const DeleteManyLanguageArgs_1 = require("./args/DeleteManyLanguageArgs");
const FindFirstLanguageArgs_1 = require("./args/FindFirstLanguageArgs");
const FindManyLanguageArgs_1 = require("./args/FindManyLanguageArgs");
const FindUniqueLanguageArgs_1 = require("./args/FindUniqueLanguageArgs");
const GroupByLanguageArgs_1 = require("./args/GroupByLanguageArgs");
const UpdateLanguageArgs_1 = require("./args/UpdateLanguageArgs");
const UpdateManyLanguageArgs_1 = require("./args/UpdateManyLanguageArgs");
const UpsertLanguageArgs_1 = require("./args/UpsertLanguageArgs");
const helpers_1 = require("../../../helpers");
const Language_1 = require("../../../models/Language");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const AggregateLanguage_1 = require("../../outputs/AggregateLanguage");
const LanguageGroupBy_1 = require("../../outputs/LanguageGroupBy");
let LanguageCrudResolver = class LanguageCrudResolver {
    async language(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).language.findUnique({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findFirstLanguage(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).language.findFirst({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async languages(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).language.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createLanguage(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).language.create({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createManyLanguage(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).language.createMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteLanguage(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).language.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateLanguage(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).language.update({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteManyLanguage(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).language.deleteMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateManyLanguage(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).language.updateMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async upsertLanguage(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).language.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async aggregateLanguage(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).language.aggregate({
            ...args,
            ...(0, helpers_1.transformFields)((0, graphql_fields_1.default)(info)),
        });
    }
    async groupByLanguage(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).language.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
};
__decorate([
    TypeGraphQL.Query(_returns => Language_1.Language, {
        nullable: true
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, FindUniqueLanguageArgs_1.FindUniqueLanguageArgs]),
    __metadata("design:returntype", Promise)
], LanguageCrudResolver.prototype, "language", null);
__decorate([
    TypeGraphQL.Query(_returns => Language_1.Language, {
        nullable: true
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, FindFirstLanguageArgs_1.FindFirstLanguageArgs]),
    __metadata("design:returntype", Promise)
], LanguageCrudResolver.prototype, "findFirstLanguage", null);
__decorate([
    TypeGraphQL.Query(_returns => [Language_1.Language], {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, FindManyLanguageArgs_1.FindManyLanguageArgs]),
    __metadata("design:returntype", Promise)
], LanguageCrudResolver.prototype, "languages", null);
__decorate([
    TypeGraphQL.Mutation(_returns => Language_1.Language, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, CreateLanguageArgs_1.CreateLanguageArgs]),
    __metadata("design:returntype", Promise)
], LanguageCrudResolver.prototype, "createLanguage", null);
__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, CreateManyLanguageArgs_1.CreateManyLanguageArgs]),
    __metadata("design:returntype", Promise)
], LanguageCrudResolver.prototype, "createManyLanguage", null);
__decorate([
    TypeGraphQL.Mutation(_returns => Language_1.Language, {
        nullable: true
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, DeleteLanguageArgs_1.DeleteLanguageArgs]),
    __metadata("design:returntype", Promise)
], LanguageCrudResolver.prototype, "deleteLanguage", null);
__decorate([
    TypeGraphQL.Mutation(_returns => Language_1.Language, {
        nullable: true
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, UpdateLanguageArgs_1.UpdateLanguageArgs]),
    __metadata("design:returntype", Promise)
], LanguageCrudResolver.prototype, "updateLanguage", null);
__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, DeleteManyLanguageArgs_1.DeleteManyLanguageArgs]),
    __metadata("design:returntype", Promise)
], LanguageCrudResolver.prototype, "deleteManyLanguage", null);
__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, UpdateManyLanguageArgs_1.UpdateManyLanguageArgs]),
    __metadata("design:returntype", Promise)
], LanguageCrudResolver.prototype, "updateManyLanguage", null);
__decorate([
    TypeGraphQL.Mutation(_returns => Language_1.Language, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, UpsertLanguageArgs_1.UpsertLanguageArgs]),
    __metadata("design:returntype", Promise)
], LanguageCrudResolver.prototype, "upsertLanguage", null);
__decorate([
    TypeGraphQL.Query(_returns => AggregateLanguage_1.AggregateLanguage, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, AggregateLanguageArgs_1.AggregateLanguageArgs]),
    __metadata("design:returntype", Promise)
], LanguageCrudResolver.prototype, "aggregateLanguage", null);
__decorate([
    TypeGraphQL.Query(_returns => [LanguageGroupBy_1.LanguageGroupBy], {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, GroupByLanguageArgs_1.GroupByLanguageArgs]),
    __metadata("design:returntype", Promise)
], LanguageCrudResolver.prototype, "groupByLanguage", null);
LanguageCrudResolver = __decorate([
    TypeGraphQL.Resolver(_of => Language_1.Language)
], LanguageCrudResolver);
exports.LanguageCrudResolver = LanguageCrudResolver;
