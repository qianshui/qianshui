Ext.define('YongYou.view.config.grid.SubjectGrid', {
			extend : 'Ext.grid.Panel',
			height : 200,
			width : 400,
			scrollable : true,
			store : Ext.create('Ext.data.Store', {
						fields : subject_model.config.fields
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
									scope.removeAll();
									records = Ext.decode(res);
									scope.add(records);

								}, combo.up('panel').items.items[0].getStore(),
								{
									id : records[0].data.id
								})
					}
				}
			}, {
				xtype : 'button',
				text : '新建行业',
				icon : 'resources/images/icons/fam/add.png',
				handler : function(view, rowIndex, colIndex, actionItem, event,
						record, row) {
					YongYou.util.EventHandle.events.ShowForm(false, view
									.up('panel'), record, '新建行业',
							'YongYou.view.config.form.SubjectForm',
							subjectCallback)
				}
			}],
			listeners : {
				itemdblclick : function(dataview, record, item, index, e, eOpts) {
					// this.up('panel').setValue(record.data.id);
					// this.up('panel').close();

				}
			}
		});

subjectCallback = function(form, grid, isUpdate) {
	this.callback = function(res, scope, typeid) {
		Ext.Msg.alert('提示', '执行操作成功！');
		scope.up('panel').close();
		var store;
		if (grid.dockedItems) {
			grid.dockedItems.items[1].items.items[0].setValue(typeid);
			store = grid.items.items[0].getStore();
		} else {
			store = grid.getStore();
			grid.up().dockedItems.items[1].items.items[0].setValue(typeid);
		}

		YongYou.util.DataApi.Core.getSubjectList(function(res, scope) {
					scope.removeAll();
					records = Ext.decode(res);
					scope.add(records);

				}, store, {
					id : typeid
				})
	}
	if (form.isValid()) {
		if (isUpdate) {
			YongYou.util.DataApi.Core.updateSubject(this.callback, form, form
							.getValues(), form.getValues().subjectTypeId)
		} else {
			YongYou.util.DataApi.Core.addSubject(this.callback, form, form
							.getValues(), form.getValues().subjectTypeId)
		}
	}
}
