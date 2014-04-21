Ext.define('YongYou.model.Policy', {
    extend: 'Ext.data.Model',
     config: {
    	fields: [
        	{name: 'content', type: 'string'},
        	{name: 'id', type: 'string'},
        	{name:'subTitle',type:'string'},
        	{name: 'title', type: 'string'},
        	{name: 'imgPath', type: 'string'},
        	{name: 'street', type: 'string'},
        	{name: 'group', type: 'string'}
        	
    	],
    	 columns: [
        { text: '标题',  dataIndex: 'title',flex: 1  },
        { text: '描述', dataIndex: 'subTitle'},
        { text: '内容', dataIndex: 'content'},
        { text: '图片', dataIndex: 'imgPath'},
        { text: '街道', dataIndex: 'street'},
        { text: '人群', dataIndex: 'group'},
        { text: 'ID', dataIndex: 'id'}
    ]
    }
});