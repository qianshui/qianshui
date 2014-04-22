law_model.config.columns.push({
	text : '编辑',
	width : 55,
	menuDisabled : true,
	xtype : 'actioncolumn',
	tooltip : '编辑法规',
	align : 'center',
	icon : 'resources/images/edit_task.png',
	handler : function(grid, rowIndex, colIndex, actionItem, event, record, row) {
		ShowLawForm(true, grid, record)
	}
}, {
	text : '删除法规',
	width : 70,
	menuDisabled : true,
	xtype : 'actioncolumn',
	tooltip : '删除法规',
	align : 'center',
	icon : 'resources/images/icons/fam/delete.png'
})
Ext.define('YongYou.view.config.grid.LawGrid', {
			extend : 'Ext.grid.Panel',
			height : 200,
			width : 400,
			scrollable : true,
			store : Ext.create('Ext.data.Store', {
						fields : law_model.config.fields
					}),
			columns : subject_model.config.columns,
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
						YongYou.util.DataApi.Core.getSubjectList(function(res,
										scope) {
									store = scope.up().items.items[1]
											.getStore();
									store.removeAll();
									records = Ext.decode(res);
									store.add(records);
									scope.up().items.items[1].reset()
								}, this, {
									id : records[0].data.id
								})
					}
				}
			}, {
				xtype : 'combobox',
				fieldLabel : '选择行业',
				displayField : 'title',
				valueField : 'id',
				store : Ext.create('Ext.data.Store', {
							fields : subject_model.config.fields,
							data : [{
										id : ''
									}, {
										title : ''
									}]
						}),
				listeners : {
					select : function(combo, records, eOpts) {
						YongYou.util.DataApi.Core.getLawsByIndustryID(function(
										res, scope) {
									store = scope.up('grid').getStore();
									store.removeAll();
									records = Ext.decode(res);
									store.add(records);

								}, this, {
									id : records[0].data.id
								})
					},
					keydown : function(combo, e, eOpts) {
						this.getStore();
					}
				}
			}, {
				xtype : 'button',
				text : '新建法规',
				icon : 'resources/images/icons/fam/add.png',
				handler : function(view, rowIndex, colIndex, actionItem, event,
						record, row) {
					ShowLawForm(false, view.up('panel'), record)
				}
			}],
			listeners : {
				itemdblclick : function(dataview, record, item, index, e, eOpts) {
					// this.up('panel').setValue(record.data.id);
					// this.up('panel').close();

				}
			}
		});
ShowLawForm = function(isUpdate, grid, record) {
	form = Ext.create('YongYou.view.config.form.LawForm');
	if (isUpdate) {
		form.getForm().loadRecord(record)
	}
	Ext.create('Ext.window.Window', {
		title : '编辑法规',
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
									YongYou.util.DataApi.Core.updateSubject(
											callback, form, form.getValues(),
											form.getValues().subjectTypeId)
								} else {
									YongYou.util.DataApi.Core.addSubject(
											callback, form, form.getValues(),
											form.getValues().subjectTypeId)
								}
							}
						}

					}]
		}]
	}).show();

	callback = function(res, scope, typeid) {
		Ext.Msg.alert('提示', '执行操作成功！');
		scope.up('panel').close();
		grid.dockedItems.items[1].items.items[0].setValue(typeid);

		YongYou.util.DataApi.Core.getSubjectList(function(res, scope) {
					scope.removeAll();
					records = Ext.decode(res);
					scope.add(records);

				}, subject_store, {
					id : typeid
				})
	}
}
