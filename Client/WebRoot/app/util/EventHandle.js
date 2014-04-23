Ext.define('YongYou.util.EventHandle', {
	singleton : true,

	config : {},
	constructor : function(config) {
		this.initConfig(config);
	},
	events : {

		leftMenuClick : function(parent, item, callback) {
			var desktop = Ext.ComponentQuery.query("panel[id='tab-main']")[0];

			if (!desktop.queryById(item.id)) {
				panel = Ext.create(item.panel, {
							title : item.title,
							id : item.id,
							closable : true
						})
				desktop.add(panel)
			}

			desktop.setActiveTab(item.id);
		},

		ShowForm : function(isUpdate, grid, record, title, form_name, callback) {
			form = Ext.create(form_name);
			if (isUpdate) {
				form.getForm().loadRecord(record)
			}
			Ext.create('Ext.window.Window', {
						title : title,
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
													callback(form,grid, isUpdate)
												}

											}]
								}]
					}).show();
		}
	}

});