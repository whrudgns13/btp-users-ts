sap.ui.define(["../BaseController","sap/ui/core/Fragment"],function(e,t){"use strict";return e.extend("com.myorg.myUI5App.controller.role.Roles",{onBeforeRendering:function(){this._setDefault()},_setDefault:function(){this.onFCLOneColumn();let e=this.getView();this._FCL=e.byId("fcl");e.setModel(new sap.ui.model.json.JSONModel,"roles");e.setModel(new sap.ui.model.json.JSONModel,"role");this._rolesModel=e.getModel("roles");this._roleModel=e.getModel("role");this.getRoles()},getRoles:function(){this.callSDK("GET","/app/roles",undefined,this.setRoles)},setRoles:function(e,t){this.csrfToken=t.getResponseHeader("X-CSRF-Token");this._rolesModel.setProperty("/",e)},setRole:function(){this._roleModel.setProperty("/",this._rolesModel.getProperty(this._rolePath))},onSearch:function(e){let t=this.getView();let o=t.byId("rolesSearchCombo");let l=t.byId("rolesTable").getBinding("items");let s=e.getParameter("query");let n=[];if(s){n.push(new sap.ui.model.Filter(o.getSelectedKey(),"Contains",s))}l.filter([n])},onRoleItemPress:function(e){let t=e.getParameter("listItem");let o=t.getBindingContextPath("roles");this._roleModel.setProperty("/",this._rolesModel.getProperty(o));this._FCL.getLayout()==="OneColumn"?this.onFCLTwoColumn():""}})});