Ext.define('YongYou.model.ListItem', {
    extend: 'Ext.data.Model',
     config: {
    	fields: [
        	{name: 'title', type: 'string'},
        	{name: 'subtitle', type: 'string'},
        	{name: 'imgId', type: 'string'},
        	{name: 'id', type: 'string'}
    	]
    }
});