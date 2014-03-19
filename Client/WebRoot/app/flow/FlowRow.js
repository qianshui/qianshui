Ext.define('YongYou.flow.FlowRow', {
			extend : 'Ext.Container',
			config : {
				xtype : 'panel',
				centered : false,
				height : 75,
				rowid:'',
				width : '100%',
				style:"text-align:center;",
				layout : {
					pack : 'center',
					type : 'hbox'
				},
				items : []
			}

		});