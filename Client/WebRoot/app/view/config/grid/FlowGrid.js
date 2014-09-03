
var flow_store = Ext.create('Ext.data.Store', {
			fields : flow_model.config.fields
		});
YongYou.util.DataApi.Core.getFlowList(function(res, scope) {
			records = Ext.decode(res);
			scope.add(records);

		}, flow_store)
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
										YongYou.util.EventHandle.events.ShowForm(false, view.up('panel'), record, '新建流程',
							'YongYou.view.config.form.FlowForm', flowCallback)
								}
					}],
			listeners : {
				itemdblclick : function(dataview, record, item, index, e, eOpts) {
//					this.up('panel').setValue(record.data.id);
//					this.up('panel').close();

				}
			}
		});

flowCallback = function(form, grid, isUpdate) {
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

		YongYou.util.DataApi.Core.getFlowList(function(res, scope) {
					scope.removeAll();
					records = Ext.decode(res);
					scope.add(records);

				}, store)
	}
	if (form.isValid()) {
		if (isUpdate) {
			YongYou.util.DataApi.Core.updateFlow(this.callback, form, form
							.getValues(), form.getValues().subjectId)
		} else {
			YongYou.util.DataApi.Core.addFlow(this.callback, form, form
							.getValues(), form.getValues().subjectId)
		}
	}
}

cloneFlowCallBack=function(form, grid, isUpdate){
	this.callback = function(res, scope, loading) {
		loading.hide();
		Ext.Msg.alert('提示', '执行操作成功！');
		scope.up('panel').close();
	}
	if (form.isValid()) {
		loading = new Ext.LoadMask(form,{
            msg : '正在克隆...',
            removeMask : true// 完成后移除
         });            
         loading.show();
		YongYou.util.DataApi.Core.cloneFlow(this.callback, form, form
						.getValues(), loading)
	}
}

