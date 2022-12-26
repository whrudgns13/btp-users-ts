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
exports.GroupService = void 0;
const common_1 = require("@nestjs/common");
const scim_groups_role_collections_api_1 = require("../../PlatformAPI/scim-groups-role-collections-api");
let GroupService = class GroupService {
    constructor() {
        this.destination = { destinationName: "apiAccessDestination" };
    }
    getRoleColleactions() {
        return __awaiter(this, void 0, void 0, function* () {
            const roles = yield scim_groups_role_collections_api_1.SCIMGroupsRoleCollectionsApi.getAllGroupsUsingGet().execute(this.destination);
            return roles;
        });
    }
    addUserRoleColleaction(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const body = req.body;
                const role = yield scim_groups_role_collections_api_1.SCIMGroupsRoleCollectionsApi.addUserRoleUsingPost(body.id, body.group).execute(this.destination);
                return res.send(role);
            }
            catch (error) {
                return res.send(error);
            }
        });
    }
    deleteUserRoleColleaction(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const body = req.body;
            const role = yield scim_groups_role_collections_api_1.SCIMGroupsRoleCollectionsApi.deleteUserRoleUsingDelete(body.groupId, body.userId).execute(this.destination);
            return res.send(role);
        });
    }
};
__decorate([
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Res)())
], GroupService.prototype, "addUserRoleColleaction", null);
__decorate([
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Res)())
], GroupService.prototype, "deleteUserRoleColleaction", null);
GroupService = __decorate([
    (0, common_1.Injectable)()
], GroupService);
exports.GroupService = GroupService;
