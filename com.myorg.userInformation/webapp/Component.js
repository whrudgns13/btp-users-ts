"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const UIComponent_1 = __importDefault(require("sap/ui/core/UIComponent"));
const Device_1 = require("sap/ui/Device");
const JSONModel_1 = __importDefault(require("sap/ui/model/json/JSONModel"));
const models_1 = __importDefault(require("./model/models"));
/**
 * @namespace com.myorg.userInformation
 */
class Component extends UIComponent_1.default {
    init() {
        // call the base component's init function
        super.init();
        this.setModel(models_1.default.createDeviceModel(), "device");
        this.setModel(new JSONModel_1.default());
        // create the views based on the url/hash
        this.getRouter().initialize();
    }
    /**
     * This method can be called to determine whether the sapUiSizeCompact or sapUiSizeCozy
     * design mode class should be set, which influences the size appearance of some controls.
     *
     * @public
     * @return {string} css class, either 'sapUiSizeCompact' or 'sapUiSizeCozy' - or an empty string if no css class should be set
     */
    getContentDensityClass() {
        if (this.contentDensityClass === undefined) {
            // check whether FLP has already set the content density class; do nothing in this case
            if (document.body.classList.contains("sapUiSizeCozy") || document.body.classList.contains("sapUiSizeCompact")) {
                this.contentDensityClass = "";
            }
            else if (!Device_1.support.touch) { // apply "compact" mode if touch is not supported
                this.contentDensityClass = "sapUiSizeCompact";
            }
            else {
                // "cozy" in case of touch support; default for most sap.m controls, but needed for desktop-first controls like sap.ui.table.Table
                this.contentDensityClass = "sapUiSizeCozy";
            }
        }
        return this.contentDensityClass;
    }
}
exports.default = Component;
Component.metadata = {
    manifest: "json"
};
