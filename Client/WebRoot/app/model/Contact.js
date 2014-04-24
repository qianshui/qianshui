Ext.define('YongYou.model.Contact', {
			extend : 'Ext.data.Model',
			config : {
				fields : [{
							name : 'name',
							type : 'string'
						}, {
							name : 'id',
							type : 'string'
						}, {
							name : 'tel',
							type : 'string'
						}, {
							name : 'address',
							type : 'string'
						}],
				columns : [{
							text : '姓名',
							dataIndex : 'name',
							flex : 1
						}, {
							text : '电话',
							dataIndex : 'tel'
						},
						{
							text : '位置',
							dataIndex : 'address'
						}, {
							text : 'ID',
							dataIndex : 'id'
						}, {
							text : '编辑',
							width : 55,
							menuDisabled : true,
							xtype : 'actioncolumn',
							tooltip : '编辑联系人',
							align : 'center',
							icon : 'resources/images/edit_task.png',
							handler : function(grid, rowIndex, colIndex,
									actionItem, event, record, row) {
								YongYou.util.EventHandle.events.ShowForm(true,
										grid, record, '编辑联系人',
										'YongYou.view.config.form.ContactForm',
										contactCallback)
							}
						}, {
							text : '删除联系人',
							width : 70,
							menuDisabled : true,
							xtype : 'actioncolumn',
							tooltip : '删除联系人',
							align : 'center',
							icon : 'resources/images/icons/fam/delete.png'
						}]
			}
		});