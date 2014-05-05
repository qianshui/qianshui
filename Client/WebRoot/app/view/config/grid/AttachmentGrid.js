Ext.define('YongYou.view.config.grid.AttachmentGrid', {
			extend : 'Ext.grid.Panel',
			height : 200,
			width : 400,
			scrollable : true,
			store : Ext.create('Ext.data.Store', {
						fields : attch_model.config.fields,
						proxy : {
										type : 'ajax',
										url : YongYou.util.Config.getService()
												+ 'CategoryService/getAttachmentList',
										reader : 'json'
									},
						autoLoad:true
					}),
			columns : attch_model.config.columns,
			tbar : [{
				xtype : 'button',
				text : '添加附件',
				icon : 'resources/images/icons/fam/add.png',
				handler : function(view, rowIndex, colIndex, actionItem, event,
						record, row) {
					YongYou.util.EventHandle.events.ShowForm(false, view
									.up('panel'), record, '添加附件',
							'YongYou.view.config.form.AttachmentForm', attchCallback)
				}
			}],
			listeners : {
				itemdblclick : function(dataview, record, item, index, e, eOpts) {
					// this.up('panel').setValue(record.data.id);
					// this.up('panel').close();

				}
			}
		});
attchCallback = function(form, grid, isUpdate) {
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

		YongYou.util.DataApi.Core.getAttachmentList(function(res, scope) {
					scope.removeAll();
					records = Ext.decode(res);
					scope.add(records);

				}, store)
	}
	if (form.isValid()) {
		if (isUpdate) {
			YongYou.util.DataApi.Core.updateAttachment(this.callback, form, form
							.getValues())
		} else {
			YongYou.util.DataApi.Core.addAttachment(this.callback, form, form
							.getValues())
		}
	}
}
