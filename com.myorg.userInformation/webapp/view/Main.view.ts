import MainController from "../controller/Main.controller";
import FlexibleColumnLayout from "sap/f/FlexibleColumnLayout";
import { LayoutType } from "sap/f/library";
import JSView from "sap/ui/core/mvc/JSView";
import ViewType from "sap/ui/core/mvc/ViewType";
import ObjectPageLayout from "sap/uxap/ObjectPageLayout";
import ObjectPageDynamicHeaderTitle from "sap/uxap/ObjectPageDynamicHeaderTitle";
import HBox from "sap/m/HBox";
import Title from "sap/m/Title";
import DynamicPage from "sap/f/DynamicPage";
import DynamicPageTitle from "sap/f/DynamicPageTitle";

sap.ui.jsview("com.myorg.userInformation.view.Main",{
    getControllerName : function(){
        return "com.myorg.userInformation.controller.Main"
    },
    createContent : function(Controller : MainController){
        const _self = this as JSView;
        
        const flexibleLayout = new FlexibleColumnLayout("fcl",{
            layout : LayoutType.OneColumn,
            beginColumnPages : [
                sap.ui.view("",{
                    viewName : "com.myorg.userInformation.view.fcl.Master",
                    type : ViewType.JS
                })
            ],
            midColumnPages : [
                sap.ui.view("",{
                    viewName : "com.myorg.userInformation.view.fcl.Detail",
                    type : ViewType.JS
                })
            ]
        })

        return flexibleLayout;
    }
})