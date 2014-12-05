Ext.define('YongYou.view.query.CategoryContent', {
	extend : 'Ext.Panel',
	id : 'categorycontent',
	autoDestory : true,
	config : {		
		xtype : 'panel',
		baseCls : 'categories-list',
		cls:'x-fullscreen',
		fullscreen : true,
		layout : 'fit',
		height : '100%',
		width : '100%',
	},
	initialPanel : function(records) {
		this.setHtml(records);
		

	}
			
});