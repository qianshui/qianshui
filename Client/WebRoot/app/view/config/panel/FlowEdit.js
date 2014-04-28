Ext.define('YongYou.view.config.panel.FlowEdit', {
			extend : 'Ext.Panel',
			height : 600,
			width : 800,
			autoScroll : true,
			layout : {
				type : 'vbox', // Arrange child items vertically
				align : 'stretch'
			},
			tbar : [{
				xtype : 'button',
				text : '添加下一步',
				icon : 'resources/images/icons/fam/add.png',
				handler : function(view, rowIndex, colIndex, actionItem, event,
						record, row) {
					view.up('panel').add(createRow());
				}
			}, {
				xtype : 'button',
				text : '添加节点',
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
			},
			initialPanel : function(record) {
				YongYou.util.DataApi.Core.getNodeByFlowID(function(res, scope) {
							items = Ext.decode(res);
							rowLog = null;
							for (i = 0; i < items.length; i++) {
								if (!rowLog) {
									rowLog = createRow();
								} else if (items[i].rowid != rowLog.rowid) {
									scope.add(rowLog);
									rowLog = createRow();
									rowLog.rowid = items[i].rowid
								}
								item = createActivity(items[i]);
								rowLog.add(item);
							}
							scope.add(rowLog);
						}, this, {
							id : record.data.id
						})
			}

		});
createRow = function() {
	row = Ext.create('Ext.toolbar.Toolbar', {
				layout : {
					type : 'hbox',
					pack : 'center'
				},
				listeners : {
					click : {
						fn : function() {
							alert("double click");
						},
						// You can also pass 'body' if you don't want click
						// on the header or
						// docked elements
						element : 'el'
					}
				}

			});
	return row;
}
createActivity = function(record) {
	item = Ext.create('Ext.Button', {
				glyph : 72,
				text : record.title,
				scale : 'large',
				iconAlign : 'top',
				data : record
			});
	item.id = record.id;
	return item;
}
subjectCallback = function(form, grid, isUpdate) {
	this.callback = function(res, scope, typeid) {

	}
	if (form.isValid()) {

	}
}
