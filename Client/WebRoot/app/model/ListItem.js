Ext.define('YongYou.model.ListItem', {
    extend: 'Ext.data.Model',
     config: {
    	fields: [
        	{name: 'title', type: 'string'},
        	{name: 'subTitle', type: 'string'},
        	{name: 'content',type:'string'},
        	{name: 'imgId', type: 'string'},
        	{name: 'id', type: 'string'}
    	]
    }
});