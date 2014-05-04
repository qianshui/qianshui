Ext.define('YongYou.view.config.panel.ActivityInfo', {
			extend : 'Ext.form.Panel',
			region: 'east',
			boder:1,
			height : 600,
			width : 300,
			id:'act-info',
			style : "text-align:center;",
			
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
						xtype : 'textfield',
						fieldLabel : '描述',
						name : 'description'
						// readOnly : true
				}	]
			
		

		});