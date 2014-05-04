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
							removeAllColor(panel.up(),'transparent')
								panel.body.setStyle('background', '-webkit-gradient(linear, left top, left bottom, color-stop(0%,rgba(235,241,246,1)), color-stop(50%,rgba(171,211,238,1)), color-stop(51%,rgba(137,195,235,1)), color-stop(100%,rgba(213,235,251,1)))');
						});
			}
		}

		});