Ext.define('YongYou.view.config.panel.FlowEditRow', {
			extend : 'Ext.Panel',
			cls:'row',
			rowid : '',
			width : '100%',
			height: 76,
			style : "text-align:center;",
			layout : {
				pack : 'center',
				type : 'hbox'
			},
			items : [],
			listeners : {
			'render' : function(panel) {
				panel.body.on('click', function() {
							panel.up().selectRow(panel);
						});
			}
		}

		});