import ColumnListItem from "sap/m/ColumnListItem";
import Table from "sap/m/Table";
import Event from "sap/ui/base/Event";
import JSView from "sap/ui/core/mvc/JSView";
import Filter from "sap/ui/model/Filter";
import JSONListBinding from "sap/ui/model/json/JSONListBinding";
import JSONModel from "sap/ui/model/json/JSONModel";
import { ScimUser } from "../../type/scim-user";
import Main from "../Main.controller";
import DetailController from "./Detail.controller";

export default class Master extends Main{
    viewModel: JSONModel;
    
    onInit(){
        this.defaultSetting();
    }
    
    async defaultSetting(){
        const users = await (await fetch("/app/user")).json();
        const view = this.getView();
        const viewModel = new JSONModel(Object.assign({
            searchCondition : {
                familyName : "",
                givenName : "",
                email : "",
            }
        },{user : users}));
        view.setModel(viewModel,"ViewModel");
        this.viewModel = viewModel;
    }
    
    onSearch() {
        const familyName : string = this.viewModel.getProperty("/searchCondition/familyName");
        const givenName : string = this.viewModel.getProperty("/searchCondition/givenName");
        const email : string = this.viewModel.getProperty("/searchCondition/email");
        const table = this.getView().byId("userTable") as Table;
        const filters : Filter[] = [];

        if(familyName) filters.push(new Filter("name/familyName","Contains",familyName));
        if(givenName)  filters.push(new Filter("name/givenName","Contains",givenName));
        if(email) filters.push(new Filter("emails/0/value","Contains",email));
    
        const filter = new Filter({
            filters :filters,
            and : true
        });
        
        (table.getBinding("items") as JSONListBinding).filter(filter);
    }
    onOpenDetail(e : Event) {
        const path = (e.getSource() as ColumnListItem).getBindingContext("ViewModel").getPath();
        const user : ScimUser = this.viewModel.getProperty(path);
        const fcl = this.getFCL();
        const detailPage = fcl.getMidColumnPages()[0] as JSView;
        const detailController = detailPage.getController() as DetailController;
        detailController.defaultSetting(user);
        fcl.setLayout("TwoColumnsMidExpanded");
    }
    
}