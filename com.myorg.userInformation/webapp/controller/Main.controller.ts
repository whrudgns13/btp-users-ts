import MessageBox from "sap/m/MessageBox";
import BaseController from "./BaseController";
import formatter from "../model/formatter";
import FlexibleColumnLayout from "sap/f/FlexibleColumnLayout";

/**
 * @namespace com.myorg.userInformation.controller
 */
export default class Main extends BaseController {
	private formatter = formatter;
	
	public sayHello() : void {
		MessageBox.show("Hello World!");
	}

	getFCL() {
		return sap.ui.getCore().byId("fcl") as FlexibleColumnLayout;
	}

}
