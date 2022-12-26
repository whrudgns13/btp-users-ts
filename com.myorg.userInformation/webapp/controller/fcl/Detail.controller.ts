import Table from "sap/m/Table";
import ViewSettingsDialog from "sap/m/ViewSettingsDialog";
import ViewSettingsItem from "sap/m/ViewSettingsItem";
import Event from "sap/ui/base/Event";
import Filter from "sap/ui/model/Filter";
import JSONListBinding from "sap/ui/model/json/JSONListBinding";
import JSONModel from "sap/ui/model/json/JSONModel";
import Sorter from "sap/ui/model/Sorter";
import { ScimUser } from "../../type/scim-user";
import BaseController from "../BaseController";
import Main from "../Main.controller";

export default class Detail extends Main{
    viewModel: JSONModel;
    async defaultSetting(user : ScimUser){
        const detailUser : ScimUser = await (await fetch(`/app/user/${user.id}`)).json();
        const oModel = new JSONModel(Object.assign({
            lastLogonTime : user.lastLogonTime,
            lastModified : user.meta.lastModified,
            created : user.meta.created
        },detailUser));
        this.getView().setModel(oModel,"ViewModel");
    }
    onOpenSortDialog() {
        const _self = this;
        const settingDialog = new ViewSettingsDialog({
            confirm : function(e : Event){
                const parameters = e.getParameters();
                const sortItem = parameters.sortItem as ViewSettingsItem;
                const sortDescending : boolean = parameters.sortDescending;
                const table =  _self.getView().byId("roleTable") as Table;
                const oBinding = table.getBinding("items") as JSONListBinding;
                const sorts = [new Sorter(sortItem.getKey(),sortDescending)]
                oBinding.sort(sorts);
            },
            sortItems : [
                new ViewSettingsItem({
                    text : "이름",
                    key : "value"
                }),
                new ViewSettingsItem({
                    text : "내역",
                    key : "display"
                })
            ]
        });
        settingDialog.open();
    }
    sortConfirm(){

    }
}