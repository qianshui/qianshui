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
								setValue : function(value) {
									this.trigger.items.items[4].setValue(value);
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
						name : 'description'
						// readOnly : true
				},	 {
						xtype : 'acticontrigger',
						fieldLabel : '图标',
						name : 'imgId'
				}	, {
						xtype : 'contacttrigger',
						fieldLabel : '联系人',
						name : 'contactId',
						inputValue: 'true',
						uncheckedValue:'false'

				}, {
						xtype : 'textfield',
						fieldLabel : '关键字',
						name : 'keyWords'

				}, {
						xtype : 'textfield',
						fieldLabel : '行ID',
						name : 'rowId',
						hidden : true

				}, {
						xtype : 'textfield',
						fieldLabel : '流程ID',
						name : 'flowId',
						hidden : true

				}],
					dockedItems : [{
						xtype : 'toolbar',
						dock : 'bottom',
						ui : 'footer',
						items : [{
									xtype : 'component',
									flex : 1
								}, {
									xtype : 'button',
									text : '保存',
									handler : function() {

									}

								}]
					}]

		});