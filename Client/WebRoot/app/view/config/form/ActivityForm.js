Ext.define('YongYou.view.config.form.ActivityIconTrigger', {
			extend : 'Ext.form.field.Trigger',
			alias : 'widget.acticontrigger',

			// override onTriggerClick
			onTriggerClick : function(a) {

				dataview = Ext.getCmp('images-view')
				if (!dataview) {
					dataview = Ext
							.create('YongYou.view.config.form.IconDataview')
					dataview.getStore().removeAll();
					dataview.getStore().load({
								params : {
									type : 'activity'
								}
							});
				}
				win = Ext.create('Ext.window.Window', {
							title : '图标选择',
							id : 'imgselector',
							height : 500,
							width : 600,
							layout : 'fit',
							trigger : this
						}).show();
				win.add(dataview)
			}
		});

Ext.define('YongYou.view.config.form.ContactTrigger', {
	extend : 'Ext.form.field.Trigger',
	alias : 'widget.contacttrigger',
	onTriggerClick : function(a) {
		YongYou.util.DataApi.Core.getContactList(function(res, scope) {
					records = Ext.decode(res);

					store = Ext.create('Ext.data.Store', {
								fields : contact_model.config.fields

							});

					grid = Ext.create('YongYou.view.config.grid.SelectGrid', {
								store : store,
								columns : contact_model.config.columns
							});
					store.add(records);
					win = Ext.create('Ext.window.Window', {
								title : '选择联系人',
								// id : 'imgselector',
								height : 500,
								width : 600,
								layout : 'fit',
								trigger : scope,
								setValue : function(id,value) {
									this.trigger.getForm().findField("contact").setValue(value);
									this.trigger.getForm().findField("contactId").setValue(id);
								}
							}).show();
					win.add(grid)
				}, this.up('panel'))
	}
});
Ext.define('YongYou.view.config.form.ActivityForm', {
	extend : 'Ext.form.Panel',
	win : null,
	// title: 'Basic Form',
	// renderTo: Ext.getBody(),
	bodyPadding : 1,
	items : [{
				xtype : 'textfield',
				fieldLabel : 'ID',
				name : 'id',
				hidden : true
			}, {
				xtype : 'textfield',
				fieldLabel : '标题',
				name : 'title'
			}, {
				xtype : 'htmleditor',
				fieldLabel : '描述',
				name : 'description',
				height : 120
				// readOnly : true
		    }, {
				xtype : 'htmleditor',
				fieldLabel : '详情',
				name : 'detail',
				height : 150
				// readOnly : true
		    }, {
				xtype : 'acticontrigger',
				fieldLabel : '图标',
				name : 'imgId'
			}, {
				xtype : 'contacttrigger',
				fieldLabel : '联系人',
				name : 'contact',
				inputValue : 'true',
				uncheckedValue : 'false'

			}, {
				xtype : 'textfield',
				fieldLabel : '联系人',
				name : 'contactId',
				hidden : true

			}, {
				xtype : 'textfield',
				fieldLabel : '行ID',
				name : 'rowid',
				hidden : true

			}, {
				xtype : 'textfield',
				fieldLabel : '流程ID',
				name : 'flowId',
				hidden : true

			},{
				xtype : 'textfield',
				fieldLabel : '附件',
				name : 'attachment',
				hidden : true

			}, {
				xtype : 'textareafield',
				fieldLabel : '附件',
				enableKeyEvents : true,
				name : 'attachmentName',
				readOnly : true,
				height:70,
				width:300,
				listeners : {
					'render' : function(textArea) {

						textArea.bodyEl.on('click', function() {
							YongYou.util.DataApi.Core.getAttachmentList(
									function(res, scope) {
										records = Ext.decode(res);
										store = Ext.create('Ext.data.Store', {
													fields : attch_model.config.fields

												});

										grid = Ext
												.create(
														'YongYou.view.config.grid.MutilSelectGrid',
														{
															store : store,
															columns : attch_model.config.columns
														});
										store.add(records);
										win = Ext.create('Ext.window.Window', {
													title : '流程选择',
													// id : 'imgselector',
													height : 500,
													width : 600,
													layout : 'fit',
													trigger : scope,
													setValue : function(id,name) {
														this.trigger
																.setValue(name);
														this.trigger.up().getForm().findField("attachment")
																.setValue(id);
													}
												}).show();
										win.add(grid)
									}, textArea)
						})
					}
				}

			}]

});