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
exports.DirectorCrudResolver = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
const graphql_fields_1 = __importDefault(require("graphql-fields"));
const AggregateDirectorArgs_1 = require("./args/AggregateDirectorArgs");
const CreateDirectorArgs_1 = require("./args/CreateDirectorArgs");
const CreateManyDirectorArgs_1 = require("./args/CreateManyDirectorArgs");
const DeleteDirectorArgs_1 = require("./args/DeleteDirectorArgs");
const DeleteManyDirectorArgs_1 = require("./args/DeleteManyDirectorArgs");
const FindFirstDirectorArgs_1 = require("./args/FindFirstDirectorArgs");
const FindManyDirectorArgs_1 = require("./args/FindManyDirectorArgs");
const FindUniqueDirectorArgs_1 = require("./args/FindUniqueDirectorArgs");
const GroupByDirectorArgs_1 = require("./args/GroupByDirectorArgs");
const UpdateDirectorArgs_1 = require("./args/UpdateDirectorArgs");
const UpdateManyDirectorArgs_1 = require("./args/UpdateManyDirectorArgs");
const UpsertDirectorArgs_1 = require("./args/UpsertDirectorArgs");
const helpers_1 = require("../../../helpers");
const Director_1 = require("../../../models/Director");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const AggregateDirector_1 = require("../../outputs/AggregateDirector");
const DirectorGroupBy_1 = require("../../outputs/DirectorGroupBy");
let DirectorCrudResolver = class DirectorCrudResolver {
    async director(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).director.findUnique({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findFirstDirector(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).director.findFirst({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async directors(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).director.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createDirector(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).director.create({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createManyDirector(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).director.createMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteDirector(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).director.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateDirector(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).director.update({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteManyDirector(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).director.deleteMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateManyDirector(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).director.updateMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async upsertDirector(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).director.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async aggregateDirector(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).director.aggregate({
            ...args,
            ...(0, helpers_1.transformFields)((0, graphql_fields_1.default)(info)),
        });
    }
    async groupByDirector(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).director.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
};
__decorate([
    TypeGraphQL.Query(_returns => Director_1.Director, {
        nullable: true
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, FindUniqueDirectorArgs_1.FindUniqueDirectorArgs]),
    __metadata("design:returntype", Promise)
], DirectorCrudResolver.prototype, "director", null);
__decorate([
    TypeGraphQL.Query(_returns => Director_1.Director, {
        nullable: true
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, FindFirstDirectorArgs_1.FindFirstDirectorArgs]),
    __metadata("design:returntype", Promise)
], DirectorCrudResolver.prototype, "findFirstDirector", null);
__decorate([
    TypeGraphQL.Query(_returns => [Director_1.Director], {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, FindManyDirectorArgs_1.FindManyDirectorArgs]),
    __metadata("design:returntype", Promise)
], DirectorCrudResolver.prototype, "directors", null);
__decorate([
    TypeGraphQL.Mutation(_returns => Director_1.Director, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, CreateDirectorArgs_1.CreateDirectorArgs]),
    __metadata("design:returntype", Promise)
], DirectorCrudResolver.prototype, "createDirector", null);
__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, CreateManyDirectorArgs_1.CreateManyDirectorArgs]),
    __metadata("design:returntype", Promise)
], DirectorCrudResolver.prototype, "createManyDirector", null);
__decorate([
    TypeGraphQL.Mutation(_returns => Director_1.Director, {
        nullable: true
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, DeleteDirectorArgs_1.DeleteDirectorArgs]),
    __metadata("design:returntype", Promise)
], DirectorCrudResolver.prototype, "deleteDirector", null);
__decorate([
    TypeGraphQL.Mutation(_returns => Director_1.Director, {
        nullable: true
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, UpdateDirectorArgs_1.UpdateDirectorArgs]),
    __metadata("design:returntype", Promise)
], DirectorCrudResolver.prototype, "updateDirector", null);
__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, DeleteManyDirectorArgs_1.DeleteManyDirectorArgs]),
    __metadata("design:returntype", Promise)
], DirectorCrudResolver.prototype, "deleteManyDirector", null);
__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, UpdateManyDirectorArgs_1.UpdateManyDirectorArgs]),
    __metadata("design:returntype", Promise)
], DirectorCrudResolver.prototype, "updateManyDirector", null);
__decorate([
    TypeGraphQL.Mutation(_returns => Director_1.Director, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, UpsertDirectorArgs_1.UpsertDirectorArgs]),
    __metadata("design:returntype", Promise)
], DirectorCrudResolver.prototype, "upsertDirector", null);
__decorate([
    TypeGraphQL.Query(_returns => AggregateDirector_1.AggregateDirector, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, AggregateDirectorArgs_1.AggregateDirectorArgs]),
    __metadata("design:returntype", Promise)
], DirectorCrudResolver.prototype, "aggregateDirector", null);
__decorate([
    TypeGraphQL.Query(_returns => [DirectorGroupBy_1.DirectorGroupBy], {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, GroupByDirectorArgs_1.GroupByDirectorArgs]),
    __metadata("design:returntype", Promise)
], DirectorCrudResolver.prototype, "groupByDirector", null);
DirectorCrudResolver = __decorate([
    TypeGraphQL.Resolver(_of => Director_1.Director)
], DirectorCrudResolver);
exports.DirectorCrudResolver = DirectorCrudResolver;
