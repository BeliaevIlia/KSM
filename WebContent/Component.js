jQuery.sap.declare('KSM.Component');

sap.ui.core.UIComponent.extend('KSM.Component', {
	
	init : function() {
// 		Вызываем непереопределёный метод 
//		Типа SUPER~CONSTUCTOR( );
		sap.ui.core.UIComponent.prototype.init.apply(this, arguments);
		
// 		В локальном хранилище будем держать некоторые данные
		jQuery.sap.require('jquery.sap.storage');  
		var oModel = new sap.ui.model.json.JSONModel();	
		var sLogin  = oModel.getProperty('/id');	
		var sUser   = oModel.getProperty('/fullName');
		var sSystem = oModel.getProperty('/system');
		var sOdatalink = 'http://de0.mg.loc:8000/sap/opu/odata/sap/ZBIV_KEEP_SOMTHING_MORE_SRV/';

// 		Записываем атрибуты
		this.oStorage = jQuery.sap.storage(jQuery.sap.storage.Type.local);
	    this.oStorage.put('ID', sLogin); 
	    this.oStorage.put('UserName', sUser);
	    this.oStorage.put('KSMLink', sOdatalink);
	    
// 		Делаем будущие запросы синхронными
		var sAutorityLink = 'http://de0.mg.loc:8000/sap/bc/ui2/start_up';
		oModel.loadData(sAutorityLink, null, false);
		this.setModel(oModel);
	},
	
	createContent : function() {
		return sap.ui.view({
			viewName : "KSM.view.Desk",
			type : sap.ui.core.mvc.ViewType.JS
		});
	}
});