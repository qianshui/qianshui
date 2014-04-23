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
        { text: 'ID', dataIndex: 'id'},
        {
								text : '编辑',
								width : 55,
								menuDisabled : true,
								xtype : 'actioncolumn',
								tooltip : '编辑行业',
								align : 'center',
								icon : 'resources/images/edit_task.png',
								handler : function(grid, rowIndex, colIndex,
										actionItem, event, record, row) {
										YongYou.util.EventHandle.events.ShowForm(true,grid,record,'新建行业','YongYou.view.config.form.SubjectForm',subjectCallback)
								}
							}, {
								text : '删除行业',
								width : 70,
								menuDisabled : true,
								xtype : 'actioncolumn',
								tooltip : '删除行业',
								align : 'center',
								icon : 'resources/images/icons/fam/delete.png'
							}
    ]
    }
});