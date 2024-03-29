"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const user_controller_1 = require("./user/user.controller");
const user_service_1 = require("./user/user.service");
const security_service_1 = require("./security/security.service");
const security_controller_1 = require("./security/security.controller");
const group_service_1 = require("./group/group.service");
const group_controller_1 = require("./group/group.controller");
const role_collection_service_1 = require("./role-collection/role-collection.service");
const role_collection_controller_1 = require("./role-collection/role-collection.controller");
const roles_controller_1 = require("./roles/roles.controller");
const roles_service_1 = require("./roles/roles.service");
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [],
        controllers: [
            app_controller_1.AppController,
            user_controller_1.UserController,
            security_controller_1.SecurityController,
            group_controller_1.GroupController,
            role_collection_controller_1.RoleCollectionController,
            roles_controller_1.RolesController
        ],
        providers: [
            app_service_1.AppService,
            user_service_1.UserService,
            security_service_1.SecurityService,
            group_service_1.GroupService,
            role_collection_service_1.RoleCollectionService,
            roles_service_1.RolesService
        ]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map