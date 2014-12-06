Ext.define('YongYou.staticflow.staticFlowRow', {
			extend : 'Ext.Container',
			config : {
				xtype : 'panel',
				cls : 'flow-row',
				alias : 'widget.staticflowRow',
				centered : false,
				height : 90,
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