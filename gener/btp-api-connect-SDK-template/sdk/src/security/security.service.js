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
exports.SecurityService = void 0;
const common_1 = require("@nestjs/common");
const security_settings_api_1 = require("../../SecuritySettingsAPI/security-settings-api");
let SecurityService = class SecurityService {
    constructor() {
        this.destination = { destinationName: "apiAccessDestination" };
    }
    getSecuritySetting() {
        return __awaiter(this, void 0, void 0, function* () {
            const setting = yield security_settings_api_1.SecuritySettingsApi.readSettings().execute(this.destination);
            return setting;
        });
    }
    updateSecuritySetting(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const setting = yield security_settings_api_1.SecuritySettingsApi.updateSettings(req.body).execute(this.destination);
            return res.send(setting);
        });
    }
};
__decorate([
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Res)())
], SecurityService.prototype, "updateSecuritySetting", null);
SecurityService = __decorate([
    (0, common_1.Injectable)()
], SecurityService);
exports.SecurityService = SecurityService;
