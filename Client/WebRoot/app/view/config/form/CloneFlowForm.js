var subject_model = Ext.create('YongYou.model.Subject');

Ext.define('YongYou.view.config.form.CloneFlowForm', {
			extend : 'Ext.form.Panel',
			win : null,
			// title: 'Basic Form',
			// renderTo: Ext.getBody(),
			bodyPadding : 5,
			width : 350,
			items : [{
						xtype : 'textfield',
						fieldLabel : '本流程ID',
						name : 'id',
						//hidden : true
					}, {
						xtype : 'textfield',
						fieldLabel : '源流程ID',
						name : 'sid'
					}]

		});