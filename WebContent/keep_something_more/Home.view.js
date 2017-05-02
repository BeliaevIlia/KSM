sap.ui.jsview("keep_something_more.Home", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf keep_something_more.Home
	*/ 
	getControllerName : function() {
		return "KSM.Home";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf keep_something_more.Home
	*/ 
	createContent : function(oController) {
 		return new sap.m.Page({
			title: "Keep something more",
			content: oController.createTileContainer( )
		});
	}

});