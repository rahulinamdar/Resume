sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";

	return Controller.extend("com.rahul.MyResume.controller.View1", {
		onInit: function () {

		},
		onClick: function(oEvent){
			var oRouter = this.getOwnerComponent().getRouter();
			oRouter.navTo("Resume");
		}
	});
});