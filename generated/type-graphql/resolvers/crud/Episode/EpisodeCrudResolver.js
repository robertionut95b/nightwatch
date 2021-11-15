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
exports.EpisodeCrudResolver = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
const graphql_fields_1 = __importDefault(require("graphql-fields"));
const AggregateEpisodeArgs_1 = require("./args/AggregateEpisodeArgs");
const CreateEpisodeArgs_1 = require("./args/CreateEpisodeArgs");
const CreateManyEpisodeArgs_1 = require("./args/CreateManyEpisodeArgs");
const DeleteEpisodeArgs_1 = require("./args/DeleteEpisodeArgs");
const DeleteManyEpisodeArgs_1 = require("./args/DeleteManyEpisodeArgs");
const FindFirstEpisodeArgs_1 = require("./args/FindFirstEpisodeArgs");
const FindManyEpisodeArgs_1 = require("./args/FindManyEpisodeArgs");
const FindUniqueEpisodeArgs_1 = require("./args/FindUniqueEpisodeArgs");
const GroupByEpisodeArgs_1 = require("./args/GroupByEpisodeArgs");
const UpdateEpisodeArgs_1 = require("./args/UpdateEpisodeArgs");
const UpdateManyEpisodeArgs_1 = require("./args/UpdateManyEpisodeArgs");
const UpsertEpisodeArgs_1 = require("./args/UpsertEpisodeArgs");
const helpers_1 = require("../../../helpers");
const Episode_1 = require("../../../models/Episode");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const AggregateEpisode_1 = require("../../outputs/AggregateEpisode");
const EpisodeGroupBy_1 = require("../../outputs/EpisodeGroupBy");
let EpisodeCrudResolver = class EpisodeCrudResolver {
    async episode(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).episode.findUnique({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findFirstEpisode(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).episode.findFirst({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async episodes(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).episode.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createEpisode(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).episode.create({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createManyEpisode(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).episode.createMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteEpisode(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).episode.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateEpisode(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).episode.update({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteManyEpisode(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).episode.deleteMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateManyEpisode(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).episode.updateMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async upsertEpisode(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).episode.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async aggregateEpisode(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).episode.aggregate({
            ...args,
            ...(0, helpers_1.transformFields)((0, graphql_fields_1.default)(info)),
        });
    }
    async groupByEpisode(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).episode.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
};
__decorate([
    TypeGraphQL.Query(_returns => Episode_1.Episode, {
        nullable: true
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, FindUniqueEpisodeArgs_1.FindUniqueEpisodeArgs]),
    __metadata("design:returntype", Promise)
], EpisodeCrudResolver.prototype, "episode", null);
__decorate([
    TypeGraphQL.Query(_returns => Episode_1.Episode, {
        nullable: true
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, FindFirstEpisodeArgs_1.FindFirstEpisodeArgs]),
    __metadata("design:returntype", Promise)
], EpisodeCrudResolver.prototype, "findFirstEpisode", null);
__decorate([
    TypeGraphQL.Query(_returns => [Episode_1.Episode], {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, FindManyEpisodeArgs_1.FindManyEpisodeArgs]),
    __metadata("design:returntype", Promise)
], EpisodeCrudResolver.prototype, "episodes", null);
__decorate([
    TypeGraphQL.Mutation(_returns => Episode_1.Episode, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, CreateEpisodeArgs_1.CreateEpisodeArgs]),
    __metadata("design:returntype", Promise)
], EpisodeCrudResolver.prototype, "createEpisode", null);
__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, CreateManyEpisodeArgs_1.CreateManyEpisodeArgs]),
    __metadata("design:returntype", Promise)
], EpisodeCrudResolver.prototype, "createManyEpisode", null);
__decorate([
    TypeGraphQL.Mutation(_returns => Episode_1.Episode, {
        nullable: true
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, DeleteEpisodeArgs_1.DeleteEpisodeArgs]),
    __metadata("design:returntype", Promise)
], EpisodeCrudResolver.prototype, "deleteEpisode", null);
__decorate([
    TypeGraphQL.Mutation(_returns => Episode_1.Episode, {
        nullable: true
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, UpdateEpisodeArgs_1.UpdateEpisodeArgs]),
    __metadata("design:returntype", Promise)
], EpisodeCrudResolver.prototype, "updateEpisode", null);
__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, DeleteManyEpisodeArgs_1.DeleteManyEpisodeArgs]),
    __metadata("design:returntype", Promise)
], EpisodeCrudResolver.prototype, "deleteManyEpisode", null);
__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, UpdateManyEpisodeArgs_1.UpdateManyEpisodeArgs]),
    __metadata("design:returntype", Promise)
], EpisodeCrudResolver.prototype, "updateManyEpisode", null);
__decorate([
    TypeGraphQL.Mutation(_returns => Episode_1.Episode, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, UpsertEpisodeArgs_1.UpsertEpisodeArgs]),
    __metadata("design:returntype", Promise)
], EpisodeCrudResolver.prototype, "upsertEpisode", null);
__decorate([
    TypeGraphQL.Query(_returns => AggregateEpisode_1.AggregateEpisode, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, AggregateEpisodeArgs_1.AggregateEpisodeArgs]),
    __metadata("design:returntype", Promise)
], EpisodeCrudResolver.prototype, "aggregateEpisode", null);
__decorate([
    TypeGraphQL.Query(_returns => [EpisodeGroupBy_1.EpisodeGroupBy], {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, GroupByEpisodeArgs_1.GroupByEpisodeArgs]),
    __metadata("design:returntype", Promise)
], EpisodeCrudResolver.prototype, "groupByEpisode", null);
EpisodeCrudResolver = __decorate([
    TypeGraphQL.Resolver(_of => Episode_1.Episode)
], EpisodeCrudResolver);
exports.EpisodeCrudResolver = EpisodeCrudResolver;
