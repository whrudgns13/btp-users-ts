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
exports.AppController = void 0;
const common_1 = require("@nestjs/common");
let AppController = class AppController {
    constructor(appService) {
        this.appService = appService;
    }
    getRolePermission(req, res) {
        // let oPermission = {
        //   create: false,
        //   read: false,
        //   update: false,
        //   delete: false
        // };
        // if (req.authInfo.checkScope("$XSAPPNAME.Admin")) {
        //   oPermission.create = true;
        //   oPermission.read = true;
        //   oPermission.update = true;
        //   oPermission.delete = true;
        //   res.send(oPermission);
        // }
        // if (req.authInfo.checkScope("$XSAPPNAME.Read")) {
        //   oPermission.read = true;
        // }
        // if (req.authInfo.checkScope("$XSAPPNAME.Create")) {
        //   oPermission.create = true;
        // }
        // if (req.authInfo.checkScope("$XSAPPNAME.Update")) {
        //   oPermission.update = true;
        // }
        // if (req.authInfo.checkScope("$XSAPPNAME.Delete")) {
        //   oPermission.delete = true;
        // }
        // res.send(oPermission);
    }
};
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Res)())
], AppController.prototype, "getRolePermission", null);
AppController = __decorate([
    (0, common_1.Controller)()
], AppController);
exports.AppController = AppController;
