Ext.define('YongYou.model.Flow', {
    extend: 'Ext.data.Model',
     config: {
    	fields: [
        	{name: 'addTime', type: 'string'},
        	{name: 'id', type: 'string'},
        	{name:'description',type:'string'},
        	{name: 'subjectId', type: 'string'},
        	{name: 'title', type: 'string'}
    	],
    	 columns: [
        { text: '标题',  dataIndex: 'title',flex: 1  },
        { text: 'ID', dataIndex: 'id'}
    ]
    }
});