Ext.define('YongYou.store.QueryMenu', {
    extend: 'Ext.data.Store',
	requires:['YongYou.model.QueryMenu'],  
    config: {
        autoLoad: true,
		model:'YongYou.model.QueryMenu',
        storeId: 'QueryMenu'
    }
});
