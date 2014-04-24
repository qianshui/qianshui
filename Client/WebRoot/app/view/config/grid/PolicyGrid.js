Ext.define('YongYou.view.config.grid.PolicyGrid', {
			extend : 'Ext.grid.Panel',
			height : 200,
			width : 400,
			scrollable : true,
			store : Ext.create('Ext.data.Store', {
						fields : policy_model.config.fields
					}),
			columns : policy_model.config.columns,
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
									
								}, this.up().items.items[1].getStore(), {
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
						YongYou.util.DataApi.Core.getPolicyByIndustryID(function(
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
				text : '新建优惠政策',
				icon : 'resources/images/icons/fam/add.png',
				handler : function(view, rowIndex, colIndex, actionItem, event,
						record, row) {
					YongYou.util.EventHandle.events.ShowForm(false, view
									.up('panel'), record, '新建优惠政策',
							'YongYou.view.config.form.PolicyForm', policyCallback)
				}
			}],
			listeners : {
				itemdblclick : function(dataview, record, item, index, e, eOpts) {
					// this.up('panel').setValue(record.data.id);
					// this.up('panel').close();

				}
			}
		});
policyCallback = function(form, grid, isUpdate) {
	this.callback = function(res, scope, subjectId) {
		Ext.Msg.alert('提示', '执行操作成功！');
		scope.up('panel').close();
		var store;
		if (grid.dockedItems) {
			//grid.dockedItems.items[1].items.items[0].setValue(subjectId);
			store = grid.items.items[0].getStore();
		} else {
			store = grid.getStore();
			//grid.up().dockedItems.items[1].items.items[0].setValue(subjectId);
		}

		YongYou.util.DataApi.Core.getPolicyByIndustryID(function(res, scope) {
					scope.removeAll();
					records = Ext.decode(res);
					scope.add(records);

				}, store, {
					id : subjectId
				})
	}
	if (form.isValid()) {
		if (isUpdate) {
			YongYou.util.DataApi.Core.updatePolicy(this.callback, form, form
							.getValues(), form.getValues().subjectId)
		} else {
			YongYou.util.DataApi.Core.addPolicy(this.callback, form, form
							.getValues(), form.getValues().subjectId)
		}
	}
}
