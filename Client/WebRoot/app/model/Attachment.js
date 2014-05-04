Ext.define('YongYou.model.Attachment', {
			extend : 'Ext.data.Model',
			config : {
				fields : [{
							name : 'title',
							type : 'string'
						}, {
							name : 'id',
							type : 'string'
						}, {
							name : 'description',
							type : 'string'
						}, {
							name : 'Comments',
							type : 'string'
						},{
							name : 'DownloadLink',
							type : 'string'
						}],
				columns : [{
							text : '标题',
							dataIndex : 'title',
							flex : 1
						}, {
							text : '描述',
							dataIndex : 'description'
						},
						{
							text : '备注',
							dataIndex : 'Comments'
						}, {
							text : 'ID',
							dataIndex : 'id'
						}, {
							text : '编辑',
							width : 55,
							menuDisabled : true,
							xtype : 'actioncolumn',
							tooltip : '编辑附件',
							align : 'center',
							icon : 'resources/images/edit_task.png',
							handler : function(grid, rowIndex, colIndex,
									actionItem, event, record, row) {
								YongYou.util.EventHandle.events.ShowForm(true,
										grid, record, '编辑附件',
										'YongYou.view.config.form.ContactForm',
										contactCallback)
							}
						}, {
							text : '删除附件',
							width : 70,
							menuDisabled : true,
							xtype : 'actioncolumn',
							tooltip : '删除附件',
							align : 'center',
							icon : 'resources/images/icons/fam/delete.png'
						}]
			}
		});