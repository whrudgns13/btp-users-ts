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
exports.SecurityController = void 0;
const common_1 = require("@nestjs/common");
let SecurityController = class SecurityController {
    constructor(securityService) {
        this.securityService = securityService;
    }
    getSecuritySetting() {
        return this.securityService.getSecuritySetting();
    }
    updateSecuritySetting(req, res) {
        return this.securityService.updateSecuritySetting(req, res);
    }
};
__decorate([
    (0, common_1.Get)()
], SecurityController.prototype, "getSecuritySetting", null);
__decorate([
    (0, common_1.Patch)(),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Res)())
], SecurityController.prototype, "updateSecuritySetting", null);
SecurityController = __decorate([
    (0, common_1.Controller)('security')
], SecurityController);
exports.SecurityController = SecurityController;
