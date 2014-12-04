Ext.define('YongYou.flow.FlowRow', {
			extend : 'Ext.Container',
			config : {
				xtype : 'panel',
				cls : 'flow-row',
				alias : 'widget.flowRow',
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