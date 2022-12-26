import DynamicPage from "sap/f/DynamicPage";
import DynamicPageHeader from "sap/f/DynamicPageHeader";
import DynamicPageTitle from "sap/f/DynamicPageTitle";
import Column from "sap/m/Column";
import ColumnListItem from "sap/m/ColumnListItem";
import HBox from "sap/m/HBox";
import Input from "sap/m/Input";
import SearchField from "sap/m/SearchField";
import Table from "sap/m/Table";
import Text from "sap/m/Text";
import Title from "sap/m/Title";
import VBox from "sap/m/VBox";
import Event from "sap/ui/base/Event";
import FilterBar from "sap/ui/comp/filterbar/FilterBar";
import FilterItem from "sap/ui/comp/filterbar/FilterItem";
import JSView from "sap/ui/core/mvc/JSView";
import MasterController from "../../controller/fcl/Master.controller";

sap.ui.jsview("com.myorg.userInformation.view.fcl.Master",{
    getControllerName : function(){
        return "com.myorg.userInformation.controller.fcl.Master";
    },
    createContent : function(controller : MasterController){
        const _self = this as JSView;
        const page = new DynamicPage({
            title : new DynamicPageTitle({
                expandedHeading : new HBox({
                    items : [
                        new Title({text : "Master",titleStyle:"H3"})
                    ]
                }),
                snappedHeading : new VBox({
                    items : [
                        new Title({text : "Master",titleStyle:"H3"}),
                    ]
                }),
            }),
            header : new DynamicPageHeader({
                content : [
                    (function(){
                        const filterbar = new FilterBar({
                            useToolbar : false,
                            filterItems : [
                                new FilterItem({
                                    name : "familyName",
                                    label : "성",
                                    control : new SearchField({
                                        value : "{ViewModel>/searchCondition/familyName}",
                                        showSearchButton : false,
                                        search : function(){
                                            controller.onSearch();
                                        }
                                    })
                                }),
                                new FilterItem({
                                    name : "givenName",
                                    label : "이름",
                                    control : new SearchField({
                                        value : "{ViewModel>/searchCondition/givenName}",
                                        showSearchButton : false,
                                        search : function(){
                                            controller.onSearch();
                                        }
                                    })
                                }),
                                new FilterItem({
                                    name : "email",
                                    label : "이메일",
                                    control : new SearchField({
                                        value : "{ViewModel>/searchCondition/email}",
                                        showSearchButton : false,
                                        search : function(){
                                            controller.onSearch();
                                        }
                                    })
                                })
                            ],
                            search : function(e : Event){
                                controller.onSearch();
                            }
                        });
                        // filterbar.getFilterItems().forEach(filterItem=>{
                        //     filterItem.getControl().attachBrowserEvent("keyup",function(e : KeyboardEvent){
                        //         if(e.keyCode===13) controller.onSearch();
                        //     })
                        // })
                        
                        return filterbar;
                    }()),
                    
                ]
            }),
            content : new Table(_self.createId("userTable"),{
                columns : [
                    new Column({
                        header : new Text({text : "사용자이름"})
                    }),
                    new Column({
                        header : new Text({text : "성"})
                    }),
                    new Column({
                        header : new Text({text : "이름"})
                    }),
                    new Column({
                        header : new Text({text : "전자메일"})
                    }),
                    new Column({
                        header : new Text({text : "마지막 업데이트"})
                    }),
                    new Column({
                        header : new Text({text : "마지막 로그온"})
                    })
                ],
                items : {
                    path : "ViewModel>/user/resources",
                    template : new ColumnListItem({
                        type : "Active",
                        press : function(e : Event){
                            controller.onOpenDetail(e);
                        },
                        cells : [
                            new Text({text : "{ViewModel>name/familyName} {ViewModel>name/givenName}"}),
                            new Text({text : "{ViewModel>name/familyName}"}),
                            new Text({text : "{ViewModel>name/givenName}"}),
                            new Text({text : "{ViewModel>emails/0/value}"}),
                            new Text({
                                text : {
                                    path : 'ViewModel>meta/lastModified',
                                    formatter : (value : string)=>{
                                        return controller.formatDate(value)
                                    }
                                }
                            }),
                            new Text({
                                text : {
                                    path : 'ViewModel>lastLogonTime',
                                    formatter : (value : string | number)=>{
                                        if(value){
                                            if(!isNaN(Number(value))) value = Number(value);
                                            return controller.formatDate(value)
                                        }
                                    }
                                }
                            }),
                        ]
                    })
                }
            })

        })
        return page;
    }
})