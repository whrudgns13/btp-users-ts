"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SecurityService = void 0;
const common_1 = require("@nestjs/common");
const security_settings_api_1 = require("../../SecuritySettingsAPI/security-settings-api");
let SecurityService = class SecurityService {
    constructor() {
        this.destination = { destinationName: "apiAccessDestination" };
    }
    async getSecuritySetting() {
        const setting = await security_settings_api_1.SecuritySettingsApi.readSettings().execute(this.destination);
        return setting;
    }
    async updateSecuritySetting(req, res) {
        const setting = await security_settings_api_1.SecuritySettingsApi.updateSettings(req.body).execute(this.destination);
        return res.send(setting);
    }
};
__decorate([
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], SecurityService.prototype, "updateSecuritySetting", null);
SecurityService = __decorate([
    (0, common_1.Injectable)()
], SecurityService);
exports.SecurityService = SecurityService;
//# sourceMappingURL=security.service.js.map