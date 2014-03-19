Ext.define('YongYou.model.QueryMenu', {
    extend: 'Ext.data.Model',
     config: {
    	fields: [
        	{name: 'label', type: 'string'},
        	{name: 'imgId', type: 'string'},
        	{name: 'id', type: 'string'},
        	{name: 'type', type: 'string'}
    	]
    }
});