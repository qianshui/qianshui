Ext.define('YongYou.model.Subject', {
    extend: 'Ext.data.Model',
     config: {
    	fields: [
        	{name: 'SubjectTypeID', type: 'string'},
        	{name: 'id', type: 'string'},
        	{name:'description',type:'string'},
        	{name: 'CommonFlag', type: 'string'},
        	{name: 'title', type: 'string'},
        	{name: 'ImgPath', type: 'string'},
        	{name: 'KeyWords', type: 'string'}
    	],
    	 columns: [
        { text: '标题',  dataIndex: 'title',flex: 1  },
        { text: '描述', dataIndex: 'description'},
        { text: '常用', dataIndex: 'CommonFlag'},
        { text: '关键字', dataIndex: 'KeyWords'},
        { text: 'ID', dataIndex: 'id'}
    ]
    }
});