Ext.define('YongYou.view.config.grid.SelectGrid', {
	extend : 'Ext.grid.Panel',
    height: 200,
    width: 400,
    scrollable:true,
    listeners : {
		itemdblclick:function( dataview, record, item, index, e, eOpts ){
			this.up('panel').setValue(record.data.id);
			this.up('panel').close();
			
		}
	},
    initialGrid:function(store){
    	this.store=store;
    }
});