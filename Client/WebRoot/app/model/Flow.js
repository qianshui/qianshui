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
        { text: 'ID', dataIndex: 'id'},{
								text : '编辑',
								width : 55,
								menuDisabled : true,
								xtype : 'actioncolumn',
								tooltip : '编辑流程信息',
								align : 'center',
								icon : 'resources/images/edit_task.png',
								handler : function(grid, rowIndex, colIndex,
										actionItem, event, record, row) {
										YongYou.util.EventHandle.events.ShowForm(true,
										grid, record, '编辑流程信息','YongYou.view.config.form.FlowForm',flowCallback)
								}
							},{
								text : '绘制流程图',								
								menuDisabled : true,
								xtype : 'actioncolumn',
								tooltip : '绘制流程图',
								align : 'center',
								icon : 'resources/images/cog_edit.png',
								handler : function(grid, rowIndex, colIndex,
										actionItem, event, record, row) {
										YongYou.util.EventHandle.events.OpenFlowEditWindow(record)
								}
							},  {
								text : '删除流程',
								width : 70,
								menuDisabled : true,
								xtype : 'actioncolumn',
								tooltip : '删除流程',
								align : 'center',
								icon : 'resources/images/icons/fam/delete.png'
							}
    ]
    }
});