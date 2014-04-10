Ext.define('YongYou.model.SubjectType', {
    extend: 'Ext.data.Model',
     config: {
    	fields: [
        	{name: 'id', type: 'string'},
        	{name:'description',type:'string'},
        	{name: 'CommonFlag', type: 'string'},
        	{name: 'title', type: 'string'},
        	{name: 'ImgPath', type: 'string'}
    	],
    	 columns: [
        { text: '标题',  dataIndex: 'title',flex: 1  },
        { text: '描述', dataIndex: 'description'},
        { text: '常用', dataIndex: 'CommonFlag'},
        { text: 'ID', dataIndex: 'id'}
    ]
    }
});