"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const scim_users_shadow_users_api_1 = require("../../PlatformAPI/scim-users-shadow-users-api");
let UserService = class UserService {
    constructor() {
        this.destination = { destinationName: "apiAccessDestination" };
    }
    getUsers() {
        return __awaiter(this, void 0, void 0, function* () {
            const oUsers = yield scim_users_shadow_users_api_1.SCIMUsersShadowUsersApi.getAllUsersUsingGet().execute(this.destination);
            return oUsers;
        });
    }
    getCurrentUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const sCurrentUserId = req.authInfo.getTokenInfo().getUserId();
            const oCurrentUser = yield scim_users_shadow_users_api_1.SCIMUsersShadowUsersApi.getUserUsingGet(sCurrentUserId).execute(this.destination);
            return res.send(oCurrentUser);
        });
    }
    createUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const oUser = yield scim_users_shadow_users_api_1.SCIMUsersShadowUsersApi.createUserUsingPost(req.body).execute(this.destination);
            return res.send(oUser);
        });
    }
    deleteUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const oUser = yield scim_users_shadow_users_api_1.SCIMUsersShadowUsersApi.deleteUserUsingDelete(req.body.id).execute(this.destination);
            return res.send(oUser);
        });
    }
    updateUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            //If-Match : *     업데이트할 SCIM 모두 허용
            const oUser = yield scim_users_shadow_users_api_1.SCIMUsersShadowUsersApi.updateUserUsingPut(req.body.id, req.body)
                .addCustomHeaders({ "If-Match": "*" })
                .execute(this.destination);
            return res.send(oUser);
        });
    }
};
__decorate([
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Res)())
], UserService.prototype, "getCurrentUser", null);
__decorate([
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Res)())
], UserService.prototype, "createUser", null);
__decorate([
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Res)())
], UserService.prototype, "deleteUser", null);
__decorate([
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Res)())
], UserService.prototype, "updateUser", null);
UserService = __decorate([
    (0, common_1.Injectable)()
], UserService);
exports.UserService = UserService;
