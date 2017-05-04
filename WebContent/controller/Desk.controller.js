sap.ui.controller("KSM.controller.Desk", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf keep_something_more.Home
*/
//	onInit: function() {
//
//	},

/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf KSM.Desk
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf KSM.Desk
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf KSM.Desk
*/
//	onExit: function() {
//
//	}
	
	clickToLogOff: function(){
		var self = this;
		jQuery.sap.require("sap.ui.commons.MessageBox");
		sap.ui.commons.MessageBox.confirm(
			"Несохраненные данные будут утеряны. Вы хотите выйти?", 
			logOff,
			"Выход из системы"
		);	
		
		function logOff( messageBoxResult ){
			if (messageBoxResult != true) return;
			jQuery.sap.initMobile();
			jQuery.sap.require("jquery.sap.storage");  
			this.oStorage = jQuery.sap.storage(jQuery.sap.storage.Type.local);
			this.oStorage.clear();  	
			jQuery.ajax({
				type: "GET",  
				url: "/sap/public/bc/icf/logoff" 
			}).done( logOffDone() );
		};
		
		function logOffDone(data){
			if (!document.execCommand("ClearAuthenticationCache")) {  
                //"ClearAuthenticationCache" will work only for IE. Below code for other browsers  
				$.ajax({  
		              type: "GET",  
		              url: "/sap/opu/odata/SOME/SERVICE", //any URL to a Gateway service  
		              username: 'dummy', //dummy credentials: when request fails, will clear the authentication header  
		              password: 'dummy',  
		              statusCode: { 401: function() {  
		                        //This empty handler function will prevent authentication pop-up in chrome/firefox  
		           	   location.reload();  
		              } },  
		              error: function() {  
		                   //alert('reached error of wrong username password')  
		              }  
               });  
           }else{
           	location.reload();  
           }
		};
	},

	createTilesCollection: function( ){
		debugger;
		
		var tilesCollection = [
			new sap.m.StandardTile({
	            icon : "sap-icon://play",
	            title : "Important Tile",
	            press : function() {
	            	this.navigateToTile( );
	            }
	        }), 
	        new sap.m.StandardTile({
	            icon : "sap-icon://pause",
	            title : "ANOTHER Important Tile",
	            press : function() {
	            	this.navigateToTile( );
	            }
	        }), 
	        new sap.m.StandardTile({
	            icon : "sap-icon://timesheet",
	            title : "Third important tile",
	            press : function() {
	            	this.navigateToTile( );
	            }
	        }), 
	        new sap.m.StandardTile({
	            icon : "sap-icon://number-sign",
	            title : "UNIMPORTANT ONE",
	            press : function() {
	            	this.navigateToTile( );
	            }
	        }), 
	        new sap.m.StandardTile({
	            icon : "sap-icon://locate-me",
	            title : "UNIMPORTANT TWO",
	            press : function() {
	            	this.navigateToTile( );
	            }
	        })
		];
		
		return tilesCollection;
		
//		return new sap.m.TileContainer({
//			id : "DESK",
//			visible : true,
//			busy : false,
//			width : "100%", 
//			height : "100%",
//			editable : true,
//			allowAdd : true
//		});
//		alert("createTileContainer");
//		
////		Объявляем путь к локальному хранилищу
//		jQuery.sap.require("jquery.sap.storage");
//		this.oStorage = jQuery.sap.storage(jQuery.sap.storage.Type.local);
//		
//		alert("this.oStorage");
//		
////		Получаем атрибут "Путь к ODATA"
//		var sLink = this.oStorage.get("KSMLink");
//		
//		alert("sLink");
//		
////		Объявляем ODATAChanel для обмена данными с R/3
//		var loCore = sap.ui.getCore();
//		var loModel = new sap.ui.model.odata.ODataModel(sLink, false);
//		loCore.setModel(loModel);
//		
//		alert("loCore.setModel");
//		
//		var loTileContainer = new sap.m.TileContainer({
//			id : "TileContainer", // sap.ui.core.ID
//			busy : false, // boolean
//			busyIndicatorDelay : 1000, // int
//			visible : true, // boolean
//			width : "100%", // sap.ui.core.CSSSize
//			height : "100%", // sap.ui.core.CSSSize
//			editable : true, // boolean
//			allowAdd : false, // boolean
//			tooltip : undefined, // sap.ui.core.TooltipBase
//			tiles : [ ] // sap.m.Tile
//		});
//		
//		loModel.read(	"/NOTESet",
//			    		null,
//		    			null,
//		    			false,
//			            function(oData, oResponse){
//							loNoteSet = oData.results; 
//			       		}
//		);
//		
//		for( var i = 0; 1 < loNoteSet.length; i++ ){
////			var loTile = new sap.m.StandardTile({
////							busy : false, // boolean
////							busyIndicatorDelay : 1000, // int
////							visible : true, // boolean
////							fieldGroupIds : [], // string[], since 1.31
////							removable : true, // boolean
////							title : "AZAZAAZ" // string
////						});
//			
//			var loTile = new sap.m.StandardTile({
//                title : "Coming from a view ",
//            })
//			
////			loTile.addDependent( new sap.m.Text({ text: loNoteSet[i].note_label }) );
////			Добавляем данные в Tile 
////			var loText = new sap.m.Text();
////			loText.setText( loNoteSet[i].note_label );
////			loTile.addCustomData(loText);
//			
//			loTileContainer.addTile( loTile );
//		}		
//		
//		return loTileContainer;
	},
	
	navigateToTile: function( ){
		debugger;
	}

});