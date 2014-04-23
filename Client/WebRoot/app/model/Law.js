Ext.define('YongYou.model.Law', {
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
							name : 'imgPath',
							type : 'string'
						}],
				columns : [{
							text : '标题',
							dataIndex : 'title',
							flex : 1
						}, {
							text : '描述',
							dataIndex : 'subTitle'
						},
						// {
						// text : '内容',
						// //dataIndex : 'content'
						// },
						{
							text : '图片',
							dataIndex : 'imgPath'
						}, {
							text : 'ID',
							dataIndex : 'id'
						}, {
							text : '编辑',
							width : 55,
							menuDisabled : true,
							xtype : 'actioncolumn',
							tooltip : '编辑法规',
							align : 'center',
							icon : 'resources/images/edit_task.png',
							handler : function(grid, rowIndex, colIndex,
									actionItem, event, record, row) {
								YongYou.util.EventHandle.events.ShowForm(true,
										grid, record, '编辑法规',
										'YongYou.view.config.form.LawForm',
										lawCallback)
							}
						}, {
							text : '删除法规',
							width : 70,
							menuDisabled : true,
							xtype : 'actioncolumn',
							tooltip : '删除法规',
							align : 'center',
							icon : 'resources/images/icons/fam/delete.png'
						}]
			}
		});