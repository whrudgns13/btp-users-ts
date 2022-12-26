import App from "sap/m/App";
import JSView from "sap/ui/core/mvc/JSView";
import AppController from "../controller/App.controller";
sap.ui.jsview("com.myorg.userInformation.view.App",{
    getControllerName : function(){
        return "com.myorg.userInformation.controller.App"
    },
    createContent : function(Controller : AppController){
        const _self = this as JSView;
        return new App(_self.createId("app"));
    }
})