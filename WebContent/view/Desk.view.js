sap.ui.jsview("KSM.view.Desk", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf KSM.Desk
	*/ 
	getControllerName : function() {
		return "KSM.controller.Desk";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf KSM.Desk
	*/ 
	createContent : function(oController) {
		debugger;
		var TilesCollection = oController.createTilesCollection();
 		return new sap.m.Page({ 
			title: "Keep something more",
			content: new sap.m.TileContainer({
				id : 'deskTileContatiner',
				editable : true,
				allowAdd : true,
				tiles : TilesCollection,
				tileAdd : 'handleTileDelete',
				tileDelete : 'handleTileDelete',
				tileMove : 'tileMove'
			})
		});
	}

});