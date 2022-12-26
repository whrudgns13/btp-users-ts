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
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
const common_1 = require("@nestjs/common");
let UserController = class UserController {
    constructor(userService) {
        this.userService = userService;
    }
    getUsers() {
        return this.userService.getUsers();
    }
    getCurrentUser(req, res) {
        return this.userService.getCurrentUser(req, res);
    }
    createUser(req, res) {
        return this.userService.createUser(req, res);
    }
    deleteUser(req, res) {
        return this.userService.deleteUser(req, res);
    }
    updateUser(req, res) {
        return this.userService.updateUser(req, res);
    }
};
__decorate([
    (0, common_1.Get)()
], UserController.prototype, "getUsers", null);
__decorate([
    (0, common_1.Get)("/currentUser"),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Res)())
], UserController.prototype, "getCurrentUser", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Res)())
], UserController.prototype, "createUser", null);
__decorate([
    (0, common_1.Delete)(),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Res)())
], UserController.prototype, "deleteUser", null);
__decorate([
    (0, common_1.Put)(),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Res)())
], UserController.prototype, "updateUser", null);
UserController = __decorate([
    (0, common_1.Controller)("users")
], UserController);
exports.UserController = UserController;
