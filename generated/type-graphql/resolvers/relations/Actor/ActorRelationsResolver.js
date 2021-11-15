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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ActorRelationsResolver = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
const Actor_1 = require("../../../models/Actor");
const Movie_1 = require("../../../models/Movie");
const Serie_1 = require("../../../models/Serie");
const ActorMoviesArgs_1 = require("./args/ActorMoviesArgs");
const helpers_1 = require("../../../helpers");
let ActorRelationsResolver = class ActorRelationsResolver {
    async movies(actor, ctx, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).actor.findUnique({
            where: {
                id: actor.id,
            },
        }).movies(args);
    }
    async series(actor, ctx) {
        return (0, helpers_1.getPrismaFromContext)(ctx).actor.findUnique({
            where: {
                id: actor.id,
            },
        }).series({});
    }
};
__decorate([
    TypeGraphQL.FieldResolver(_type => [Movie_1.Movie], {
        nullable: false
    }),
    __param(0, TypeGraphQL.Root()),
    __param(1, TypeGraphQL.Ctx()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Actor_1.Actor, Object, ActorMoviesArgs_1.ActorMoviesArgs]),
    __metadata("design:returntype", Promise)
], ActorRelationsResolver.prototype, "movies", null);
__decorate([
    TypeGraphQL.FieldResolver(_type => Serie_1.Serie, {
        nullable: true
    }),
    __param(0, TypeGraphQL.Root()),
    __param(1, TypeGraphQL.Ctx()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Actor_1.Actor, Object]),
    __metadata("design:returntype", Promise)
], ActorRelationsResolver.prototype, "series", null);
ActorRelationsResolver = __decorate([
    TypeGraphQL.Resolver(_of => Actor_1.Actor)
], ActorRelationsResolver);
exports.ActorRelationsResolver = ActorRelationsResolver;
