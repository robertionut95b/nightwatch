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
exports.SeasonCrudResolver = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
const graphql_fields_1 = __importDefault(require("graphql-fields"));
const AggregateSeasonArgs_1 = require("./args/AggregateSeasonArgs");
const CreateManySeasonArgs_1 = require("./args/CreateManySeasonArgs");
const CreateSeasonArgs_1 = require("./args/CreateSeasonArgs");
const DeleteManySeasonArgs_1 = require("./args/DeleteManySeasonArgs");
const DeleteSeasonArgs_1 = require("./args/DeleteSeasonArgs");
const FindFirstSeasonArgs_1 = require("./args/FindFirstSeasonArgs");
const FindManySeasonArgs_1 = require("./args/FindManySeasonArgs");
const FindUniqueSeasonArgs_1 = require("./args/FindUniqueSeasonArgs");
const GroupBySeasonArgs_1 = require("./args/GroupBySeasonArgs");
const UpdateManySeasonArgs_1 = require("./args/UpdateManySeasonArgs");
const UpdateSeasonArgs_1 = require("./args/UpdateSeasonArgs");
const UpsertSeasonArgs_1 = require("./args/UpsertSeasonArgs");
const helpers_1 = require("../../../helpers");
const Season_1 = require("../../../models/Season");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const AggregateSeason_1 = require("../../outputs/AggregateSeason");
const SeasonGroupBy_1 = require("../../outputs/SeasonGroupBy");
let SeasonCrudResolver = class SeasonCrudResolver {
    async season(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).season.findUnique({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findFirstSeason(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).season.findFirst({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async seasons(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).season.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createSeason(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).season.create({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createManySeason(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).season.createMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteSeason(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).season.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateSeason(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).season.update({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteManySeason(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).season.deleteMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateManySeason(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).season.updateMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async upsertSeason(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).season.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async aggregateSeason(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).season.aggregate({
            ...args,
            ...(0, helpers_1.transformFields)((0, graphql_fields_1.default)(info)),
        });
    }
    async groupBySeason(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).season.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
};
__decorate([
    TypeGraphQL.Query(_returns => Season_1.Season, {
        nullable: true
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, FindUniqueSeasonArgs_1.FindUniqueSeasonArgs]),
    __metadata("design:returntype", Promise)
], SeasonCrudResolver.prototype, "season", null);
__decorate([
    TypeGraphQL.Query(_returns => Season_1.Season, {
        nullable: true
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, FindFirstSeasonArgs_1.FindFirstSeasonArgs]),
    __metadata("design:returntype", Promise)
], SeasonCrudResolver.prototype, "findFirstSeason", null);
__decorate([
    TypeGraphQL.Query(_returns => [Season_1.Season], {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, FindManySeasonArgs_1.FindManySeasonArgs]),
    __metadata("design:returntype", Promise)
], SeasonCrudResolver.prototype, "seasons", null);
__decorate([
    TypeGraphQL.Mutation(_returns => Season_1.Season, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, CreateSeasonArgs_1.CreateSeasonArgs]),
    __metadata("design:returntype", Promise)
], SeasonCrudResolver.prototype, "createSeason", null);
__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, CreateManySeasonArgs_1.CreateManySeasonArgs]),
    __metadata("design:returntype", Promise)
], SeasonCrudResolver.prototype, "createManySeason", null);
__decorate([
    TypeGraphQL.Mutation(_returns => Season_1.Season, {
        nullable: true
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, DeleteSeasonArgs_1.DeleteSeasonArgs]),
    __metadata("design:returntype", Promise)
], SeasonCrudResolver.prototype, "deleteSeason", null);
__decorate([
    TypeGraphQL.Mutation(_returns => Season_1.Season, {
        nullable: true
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, UpdateSeasonArgs_1.UpdateSeasonArgs]),
    __metadata("design:returntype", Promise)
], SeasonCrudResolver.prototype, "updateSeason", null);
__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, DeleteManySeasonArgs_1.DeleteManySeasonArgs]),
    __metadata("design:returntype", Promise)
], SeasonCrudResolver.prototype, "deleteManySeason", null);
__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, UpdateManySeasonArgs_1.UpdateManySeasonArgs]),
    __metadata("design:returntype", Promise)
], SeasonCrudResolver.prototype, "updateManySeason", null);
__decorate([
    TypeGraphQL.Mutation(_returns => Season_1.Season, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, UpsertSeasonArgs_1.UpsertSeasonArgs]),
    __metadata("design:returntype", Promise)
], SeasonCrudResolver.prototype, "upsertSeason", null);
__decorate([
    TypeGraphQL.Query(_returns => AggregateSeason_1.AggregateSeason, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, AggregateSeasonArgs_1.AggregateSeasonArgs]),
    __metadata("design:returntype", Promise)
], SeasonCrudResolver.prototype, "aggregateSeason", null);
__decorate([
    TypeGraphQL.Query(_returns => [SeasonGroupBy_1.SeasonGroupBy], {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, GroupBySeasonArgs_1.GroupBySeasonArgs]),
    __metadata("design:returntype", Promise)
], SeasonCrudResolver.prototype, "groupBySeason", null);
SeasonCrudResolver = __decorate([
    TypeGraphQL.Resolver(_of => Season_1.Season)
], SeasonCrudResolver);
exports.SeasonCrudResolver = SeasonCrudResolver;
