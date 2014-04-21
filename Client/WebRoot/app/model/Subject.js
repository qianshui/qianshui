Ext.define('YongYou.model.Subject', {
    extend: 'Ext.data.Model',
     config: {
    	fields: [
        	{name: 'subjectTypeId', type: 'string'},
        	{name: 'id', type: 'string'},
        	{name:'description',type:'string'},
        	{name: 'commonFlag', type: 'string'},
        	{name: 'title', type: 'string'},
        	{name: 'imgPath', type: 'string'},
        	{name: 'keyWords', type: 'string'}
    	],
    	 columns: [
        { text: '标题',  dataIndex: 'title',flex: 1  },
        { text: '描述', dataIndex: 'description'},
        { text: '常用', dataIndex: 'commonFlag'},
        { text: '关键字', dataIndex: 'keyWords'},
        { text: 'ID', dataIndex: 'id'}
    ]
    }
});