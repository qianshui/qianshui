Ext.define('YongYou.model.Policy', {
			extend : 'Ext.data.Model',
			config : {
				fields : [{
							name : 'content',
							type : 'string'
						}, {
							name : 'id',
							type : 'string'
						}, {
							name : 'subTitle',
							type : 'string'
						}, {
							name : 'title',
							type : 'string'
						}, {
							name : 'imgId',
							type : 'string'
						}, {
							name : 'subjectId',
							type : 'string'
						}, {
							name : 'street',
							type : 'string'
						}, {
							name : 'groups',
							type : 'string'
						}

				],
				columns : [{
							text : '标题',
							dataIndex : 'title',
							flex : 1
						}, {
							text : '描述',
							dataIndex : 'subTitle'
						}, 
//							{
//							text : '内容',
//							dataIndex : 'content'
//						}, 
							{
							text : '图片',
							dataIndex : 'imgId'
						}, {
							text : '街道',
							dataIndex : 'street'
						}, {
							text : '人群',
							dataIndex : 'groups'
						}, {
							text : 'ID',
							dataIndex : 'id'
						}, {
							text : '编辑',
							width : 55,
							menuDisabled : true,
							xtype : 'actioncolumn',
							tooltip : '编辑政策',
							align : 'center',
							icon : 'resources/images/edit_task.png',
							handler : function(grid, rowIndex, colIndex,
									actionItem, event, record, row) {
								YongYou.util.EventHandle.events.ShowForm(true,
										grid, record, '编辑政策',
										'YongYou.view.config.form.PolicyForm',
										policyCallback)
							}
						}, {
							text : '删除政策',
							width : 70,
							menuDisabled : true,
							xtype : 'actioncolumn',
							tooltip : '删除政策',
							align : 'center',
							icon : 'resources/images/icons/fam/delete.png'
						}]
			}
		});