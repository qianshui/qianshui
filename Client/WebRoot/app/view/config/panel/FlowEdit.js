Ext.define('YongYou.view.config.panel.FlowEdit', {
	extend : 'Ext.Panel',
	height : 600,
	width : 700,
	region : 'center',
	selectItem : null,
	autoScroll : true,
	id : 'flow-edit',
	autoDestory : true,
	selectedRow : null,
	lastRowId : 0,
	selectItemId : '',
	record:null,
	layout : {
		type : 'vbox', // Arrange child items vertically
		align : 'stretch'
	},
	tbar : [{
		xtype : 'button',
		text : '添加下一步',
		icon : 'resources/images/icons/fam/add.png',
		handler : function(view, rowIndex, colIndex, actionItem, event, record,
				row) {
			newrow = view.up('panel').createRow()
			view.up('panel').add(newrow);
			view.up('panel').selectRow(newrow);
		}
	}, {
		xtype : 'button',
		text : '添加节点',
		icon : 'resources/images/icons/fam/add.png',
		handler : function(view, rowIndex, colIndex, actionItem, event, record,
				row) {
			YongYou.util.EventHandle.events.ShowForm(false, view.up('panel'),
					record, '添加节点', 'YongYou.view.config.form.ActivityForm',
					actCallback)
		}
	}, {
		xtype : 'button',
		text : '删除节点',
		icon : 'resources/images/icons/fam/delete.png',
		handler : function(view, rowIndex, colIndex, actionItem, event, record,
				row) {
			if (view.up('panel').selectItem) {
				YongYou.util.DataApi.Core.deleteNode(function(res, scope) {
							scope.initialPanel(scope.record);
						}, view.up('panel'), view.up('panel').selectItem)
			}
		}
	}],
	listeners : {
		itemdblclick : function(dataview, record, item, index, e, eOpts) {
			// this.up('panel').setValue(record.data.id);
			// this.up('panel').close();

		}
	},
	initialPanel : function(record) {
		this.record=record;
		if (this.items.length > 0) {
			this.removeAll();
		}
		YongYou.util.DataApi.Core.getNodeByFlowID(function(res, scope) {
					items = Ext.decode(res);
					rowLog = null;
					for (i = 0; i < items.length; i++) {
						if (!rowLog) {
							rowLog = scope.createRow();
						} else if (items[i].rowid != rowLog.rowid) {
							scope.add(rowLog);
							rowLog = scope.createRow();
							rowLog.rowid = items[i].rowid
							scope.lastRowId = rowLog.rowid;
						}
						item = scope.createActivity(items[i]);
						rowLog.add(item);
					}
					scope.add(rowLog);
				}, this, {
					id : record.data.id
				})
		this.id = record.data.id
	},
	selectRow : function(panel) {
		removeAllColor(this, 'transparent')
		panel.body
				.setStyle(
						'background',
						'-webkit-gradient(linear, left top, left bottom, color-stop(0%,rgba(235,241,246,1)), color-stop(50%,rgba(171,211,238,1)), color-stop(51%,rgba(137,195,235,1)), color-stop(100%,rgba(213,235,251,1)))');
		this.selectedRow = panel;
	},
	createRow : function() {
		row = Ext.create('YongYou.view.config.panel.FlowEditRow', {
					rowId : this.lastRowId + 1
				});
		return row;
	},
	createActivity : function(record) {
		item = Ext.create('YongYou.view.config.panel.FlowEditItem', {
					glyph : 72,
					text : record.title,
					scale : 'large',
					iconAlign : 'top',
					data : record
				});
		item.id = record.id;
		item.setValue(record)
		return item;
	}

});

actCallback = function(form, flowpanel, isUpdate) {
	this.callback = function(res, scope) {
		
		
		act = flowpanel.createActivity(scope.getValues());
		scope.up('panel').close();
		flowpanel.initialPanel(flowpanel.record);//.selectedRow.add(act);
	}
	if (form.isValid()) {
		form.getForm().findField("rowid").setValue(flowpanel.selectedRow.rowId);
		form.getForm().findField("flowId").setValue(flowpanel.id);
		YongYou.util.DataApi.Core
				.addNode(this.callback, form, form.getValues());
	}
}
removeAllColor = function(panel, color) {
	panel.items.each(function(p) {
				flow = Ext.getCmp('flow-edit');
				if (flow.selectItem && flow.selectItem.id == p.id) {
					return true;
				}
				p.body.setStyle('background', color);
				removeAllColor(p, color);
			}, panel)

}
