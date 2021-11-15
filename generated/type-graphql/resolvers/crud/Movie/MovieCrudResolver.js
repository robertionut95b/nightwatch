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
exports.MovieCrudResolver = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
const graphql_fields_1 = __importDefault(require("graphql-fields"));
const AggregateMovieArgs_1 = require("./args/AggregateMovieArgs");
const CreateManyMovieArgs_1 = require("./args/CreateManyMovieArgs");
const CreateMovieArgs_1 = require("./args/CreateMovieArgs");
const DeleteManyMovieArgs_1 = require("./args/DeleteManyMovieArgs");
const DeleteMovieArgs_1 = require("./args/DeleteMovieArgs");
const FindFirstMovieArgs_1 = require("./args/FindFirstMovieArgs");
const FindManyMovieArgs_1 = require("./args/FindManyMovieArgs");
const FindUniqueMovieArgs_1 = require("./args/FindUniqueMovieArgs");
const GroupByMovieArgs_1 = require("./args/GroupByMovieArgs");
const UpdateManyMovieArgs_1 = require("./args/UpdateManyMovieArgs");
const UpdateMovieArgs_1 = require("./args/UpdateMovieArgs");
const UpsertMovieArgs_1 = require("./args/UpsertMovieArgs");
const helpers_1 = require("../../../helpers");
const Movie_1 = require("../../../models/Movie");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const AggregateMovie_1 = require("../../outputs/AggregateMovie");
const MovieGroupBy_1 = require("../../outputs/MovieGroupBy");
let MovieCrudResolver = class MovieCrudResolver {
    async movie(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).movie.findUnique({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findFirstMovie(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).movie.findFirst({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async movies(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).movie.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createMovie(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).movie.create({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createManyMovie(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).movie.createMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteMovie(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).movie.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateMovie(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).movie.update({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteManyMovie(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).movie.deleteMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateManyMovie(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).movie.updateMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async upsertMovie(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).movie.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async aggregateMovie(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).movie.aggregate({
            ...args,
            ...(0, helpers_1.transformFields)((0, graphql_fields_1.default)(info)),
        });
    }
    async groupByMovie(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).movie.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
};
__decorate([
    TypeGraphQL.Query(_returns => Movie_1.Movie, {
        nullable: true
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, FindUniqueMovieArgs_1.FindUniqueMovieArgs]),
    __metadata("design:returntype", Promise)
], MovieCrudResolver.prototype, "movie", null);
__decorate([
    TypeGraphQL.Query(_returns => Movie_1.Movie, {
        nullable: true
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, FindFirstMovieArgs_1.FindFirstMovieArgs]),
    __metadata("design:returntype", Promise)
], MovieCrudResolver.prototype, "findFirstMovie", null);
__decorate([
    TypeGraphQL.Query(_returns => [Movie_1.Movie], {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, FindManyMovieArgs_1.FindManyMovieArgs]),
    __metadata("design:returntype", Promise)
], MovieCrudResolver.prototype, "movies", null);
__decorate([
    TypeGraphQL.Mutation(_returns => Movie_1.Movie, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, CreateMovieArgs_1.CreateMovieArgs]),
    __metadata("design:returntype", Promise)
], MovieCrudResolver.prototype, "createMovie", null);
__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, CreateManyMovieArgs_1.CreateManyMovieArgs]),
    __metadata("design:returntype", Promise)
], MovieCrudResolver.prototype, "createManyMovie", null);
__decorate([
    TypeGraphQL.Mutation(_returns => Movie_1.Movie, {
        nullable: true
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, DeleteMovieArgs_1.DeleteMovieArgs]),
    __metadata("design:returntype", Promise)
], MovieCrudResolver.prototype, "deleteMovie", null);
__decorate([
    TypeGraphQL.Mutation(_returns => Movie_1.Movie, {
        nullable: true
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, UpdateMovieArgs_1.UpdateMovieArgs]),
    __metadata("design:returntype", Promise)
], MovieCrudResolver.prototype, "updateMovie", null);
__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, DeleteManyMovieArgs_1.DeleteManyMovieArgs]),
    __metadata("design:returntype", Promise)
], MovieCrudResolver.prototype, "deleteManyMovie", null);
__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, UpdateManyMovieArgs_1.UpdateManyMovieArgs]),
    __metadata("design:returntype", Promise)
], MovieCrudResolver.prototype, "updateManyMovie", null);
__decorate([
    TypeGraphQL.Mutation(_returns => Movie_1.Movie, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, UpsertMovieArgs_1.UpsertMovieArgs]),
    __metadata("design:returntype", Promise)
], MovieCrudResolver.prototype, "upsertMovie", null);
__decorate([
    TypeGraphQL.Query(_returns => AggregateMovie_1.AggregateMovie, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, AggregateMovieArgs_1.AggregateMovieArgs]),
    __metadata("design:returntype", Promise)
], MovieCrudResolver.prototype, "aggregateMovie", null);
__decorate([
    TypeGraphQL.Query(_returns => [MovieGroupBy_1.MovieGroupBy], {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, GroupByMovieArgs_1.GroupByMovieArgs]),
    __metadata("design:returntype", Promise)
], MovieCrudResolver.prototype, "groupByMovie", null);
MovieCrudResolver = __decorate([
    TypeGraphQL.Resolver(_of => Movie_1.Movie)
], MovieCrudResolver);
exports.MovieCrudResolver = MovieCrudResolver;
