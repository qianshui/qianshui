var flow_model = Ext.create('YongYou.model.Flow');
var flow_store = Ext.create('Ext.data.Store', {
			fields : flow_model.config.fields
		});
YongYou.util.DataApi.Core.getFlowList(function(res, scope) {
			records = Ext.decode(res);
			scope.add(records);

		}, flow_store)
flow_model.config.columns.push({
								text : '编辑',
								width : 55,
								menuDisabled : true,
								xtype : 'actioncolumn',
								tooltip : '编辑流程',
								align : 'center',
								icon : 'resources/images/edit_task.png',
								handler : function(grid, rowIndex, colIndex,
										actionItem, event, record, row) {
										ShowFlowForm(true,grid,record)
								}
							}, {
								text : '删除流程',
								width : 70,
								menuDisabled : true,
								xtype : 'actioncolumn',
								tooltip : '删除流程',
								align : 'center',
								icon : 'resources/images/icons/fam/delete.png'
							})
Ext.define('YongYou.view.config.grid.FlowGrid', {
			extend : 'Ext.grid.Panel',
			height : 200,
			width : 400,
			scrollable : true,
			store : flow_store,
			columns :flow_model.config.columns,
			tbar : [{
						xtype : 'button',
						text : '新建流程',
						icon : 'resources/images/icons/fam/add.png',
						handler : function(view, rowIndex, colIndex,
										actionItem, event, record, row) {
										ShowFlowForm(false,view.up('panel'),record)
								}
					}],
			listeners : {
				itemdblclick : function(dataview, record, item, index, e, eOpts) {
//					this.up('panel').setValue(record.data.id);
//					this.up('panel').close();

				}
			}
		});
ShowFlowForm = function(isUpdate, grid,record) {
	form = Ext.create('YongYou.view.config.form.FlowForm');
	if(isUpdate){
	form.getForm().loadRecord(record)
	}
	Ext.create('Ext.window.Window', {
		title : '编辑流程',
		height : 500,
		width : 600,
		layout : 'fit',
		items : [form],
		dockedItems : [{
			xtype : 'toolbar',
			dock : 'bottom',
			ui : 'footer',
			items : [{
						xtype : 'component',
						flex : 1
					}, {
						xtype : 'button',
						text : '提交',
						handler : function() {

							if (form.isValid()) {
								if (isUpdate) {
									YongYou.util.DataApi.Core.updateFlow(
											callback, form, form.getValues(),grid)
								} else {
									YongYou.util.DataApi.Core.addFlow(
											callback, form, form.getValues(),grid)
								}
							}
						}

					}]
		}]
	}).show();
}
callback = function(res, scope,grid) {
	Ext.Msg.alert('提示', '执行操作成功！');
	scope.up('panel').close();
	flow_store.removeAll();
	YongYou.util.DataApi.Core.getFlowList(function(res, scope) {
			records = Ext.decode(res);
			scope.add(records);

		}, flow_store)
}