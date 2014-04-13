var subject_model = Ext.create('YongYou.model.Subject');
var subjectType_model = Ext.create('YongYou.model.SubjectType');
var subject_store = Ext.create('Ext.data.Store', {
			fields : subject_model.config.fields
		});

subject_model.config.columns.push({
								text : '编辑',
								width : 55,
								menuDisabled : true,
								xtype : 'actioncolumn',
								tooltip : '编辑行业',
								align : 'center',
								icon : 'resources/images/edit_task.png',
								handler : function(grid, rowIndex, colIndex,
										actionItem, event, record, row) {
										ShowForm(true,grid,record)
								}
							}, {
								text : '删除行业',
								width : 70,
								menuDisabled : true,
								xtype : 'actioncolumn',
								tooltip : '删除行业',
								align : 'center',
								icon : 'resources/images/icons/fam/delete.png'
							})
Ext.define('YongYou.view.config.grid.SubjectGrid', {
			extend : 'Ext.grid.Panel',
			height : 200,
			width : 400,
			scrollable : true,
			store : subject_store,
			columns :subject_model.config.columns,
			tbar : [{
						xtype : 'combobox',
						fieldLabel : '选择行业类别',
						displayField : 'title',
						valueField : 'id',
						store : Ext.create('Ext.data.Store', {
									fields : subjectType_model.config.fields,
									proxy : {
										type : 'ajax',
										url : YongYou.util.Config.getService()
												+ 'IndustryService/getIndustryClass',
										reader : 'json'
									}
								}),
						listeners : {
							select : function(combo, records, eOpts) {
								YongYou.util.DataApi.Core.getSubjectList(
										function(res, scope) {
											scope.removeAll();
											records = Ext.decode(res);
											scope.add(records);

										}, subject_store, {
											id : records[0].data.id
										})
							}
						}
					},{
						xtype : 'button',
						text : '新建行业',
						icon : 'resources/images/icons/fam/add.png',
						handler : function(view, rowIndex, colIndex,
										actionItem, event, record, row) {
										ShowSubjectForm(false,view.up('panel'),record)
								}
					}],
			listeners : {
				itemdblclick : function(dataview, record, item, index, e, eOpts) {
//					this.up('panel').setValue(record.data.id);
//					this.up('panel').close();

				}
			}
		});
ShowSubjectForm = function(isUpdate, grid,record) {
	form = Ext.create('YongYou.view.config.form.SubjectForm');
	if(isUpdate){
	form.getForm().loadRecord(record)
	}
	Ext.create('Ext.window.Window', {
		title : '编辑行业',
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

	callback = function(res, scope,grid) {
	Ext.Msg.alert('提示', '执行操作成功！');
	scope.up('panel').close();
	flow_store.removeAll();
	YongYou.util.DataApi.Core.getFlowList(function(res, scope) {
			records = Ext.decode(res);
			scope.add(records);

		}, flow_store)
}
}
