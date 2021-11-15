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
exports.GenreCrudResolver = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
const graphql_fields_1 = __importDefault(require("graphql-fields"));
const AggregateGenreArgs_1 = require("./args/AggregateGenreArgs");
const CreateGenreArgs_1 = require("./args/CreateGenreArgs");
const CreateManyGenreArgs_1 = require("./args/CreateManyGenreArgs");
const DeleteGenreArgs_1 = require("./args/DeleteGenreArgs");
const DeleteManyGenreArgs_1 = require("./args/DeleteManyGenreArgs");
const FindFirstGenreArgs_1 = require("./args/FindFirstGenreArgs");
const FindManyGenreArgs_1 = require("./args/FindManyGenreArgs");
const FindUniqueGenreArgs_1 = require("./args/FindUniqueGenreArgs");
const GroupByGenreArgs_1 = require("./args/GroupByGenreArgs");
const UpdateGenreArgs_1 = require("./args/UpdateGenreArgs");
const UpdateManyGenreArgs_1 = require("./args/UpdateManyGenreArgs");
const UpsertGenreArgs_1 = require("./args/UpsertGenreArgs");
const helpers_1 = require("../../../helpers");
const Genre_1 = require("../../../models/Genre");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const AggregateGenre_1 = require("../../outputs/AggregateGenre");
const GenreGroupBy_1 = require("../../outputs/GenreGroupBy");
let GenreCrudResolver = class GenreCrudResolver {
    async genre(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).genre.findUnique({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findFirstGenre(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).genre.findFirst({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async genres(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).genre.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createGenre(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).genre.create({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createManyGenre(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).genre.createMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteGenre(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).genre.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateGenre(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).genre.update({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteManyGenre(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).genre.deleteMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateManyGenre(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).genre.updateMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async upsertGenre(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).genre.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async aggregateGenre(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).genre.aggregate({
            ...args,
            ...(0, helpers_1.transformFields)((0, graphql_fields_1.default)(info)),
        });
    }
    async groupByGenre(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).genre.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
};
__decorate([
    TypeGraphQL.Query(_returns => Genre_1.Genre, {
        nullable: true
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, FindUniqueGenreArgs_1.FindUniqueGenreArgs]),
    __metadata("design:returntype", Promise)
], GenreCrudResolver.prototype, "genre", null);
__decorate([
    TypeGraphQL.Query(_returns => Genre_1.Genre, {
        nullable: true
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, FindFirstGenreArgs_1.FindFirstGenreArgs]),
    __metadata("design:returntype", Promise)
], GenreCrudResolver.prototype, "findFirstGenre", null);
__decorate([
    TypeGraphQL.Query(_returns => [Genre_1.Genre], {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, FindManyGenreArgs_1.FindManyGenreArgs]),
    __metadata("design:returntype", Promise)
], GenreCrudResolver.prototype, "genres", null);
__decorate([
    TypeGraphQL.Mutation(_returns => Genre_1.Genre, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, CreateGenreArgs_1.CreateGenreArgs]),
    __metadata("design:returntype", Promise)
], GenreCrudResolver.prototype, "createGenre", null);
__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, CreateManyGenreArgs_1.CreateManyGenreArgs]),
    __metadata("design:returntype", Promise)
], GenreCrudResolver.prototype, "createManyGenre", null);
__decorate([
    TypeGraphQL.Mutation(_returns => Genre_1.Genre, {
        nullable: true
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, DeleteGenreArgs_1.DeleteGenreArgs]),
    __metadata("design:returntype", Promise)
], GenreCrudResolver.prototype, "deleteGenre", null);
__decorate([
    TypeGraphQL.Mutation(_returns => Genre_1.Genre, {
        nullable: true
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, UpdateGenreArgs_1.UpdateGenreArgs]),
    __metadata("design:returntype", Promise)
], GenreCrudResolver.prototype, "updateGenre", null);
__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, DeleteManyGenreArgs_1.DeleteManyGenreArgs]),
    __metadata("design:returntype", Promise)
], GenreCrudResolver.prototype, "deleteManyGenre", null);
__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, UpdateManyGenreArgs_1.UpdateManyGenreArgs]),
    __metadata("design:returntype", Promise)
], GenreCrudResolver.prototype, "updateManyGenre", null);
__decorate([
    TypeGraphQL.Mutation(_returns => Genre_1.Genre, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, UpsertGenreArgs_1.UpsertGenreArgs]),
    __metadata("design:returntype", Promise)
], GenreCrudResolver.prototype, "upsertGenre", null);
__decorate([
    TypeGraphQL.Query(_returns => AggregateGenre_1.AggregateGenre, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, AggregateGenreArgs_1.AggregateGenreArgs]),
    __metadata("design:returntype", Promise)
], GenreCrudResolver.prototype, "aggregateGenre", null);
__decorate([
    TypeGraphQL.Query(_returns => [GenreGroupBy_1.GenreGroupBy], {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, GroupByGenreArgs_1.GroupByGenreArgs]),
    __metadata("design:returntype", Promise)
], GenreCrudResolver.prototype, "groupByGenre", null);
GenreCrudResolver = __decorate([
    TypeGraphQL.Resolver(_of => Genre_1.Genre)
], GenreCrudResolver);
exports.GenreCrudResolver = GenreCrudResolver;
