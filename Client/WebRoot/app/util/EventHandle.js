Ext.define('YongYou.util.EventHandle', {
			singleton : true,

			config : {},
			constructor : function(config) {
				this.initConfig(config);
			},
			events : {

				leftMenuClick : function(parent, item, callback) {
					var desktop = Ext.ComponentQuery
							.query("panel[id='tab-main']")[0];
					desktop.add({
								title : 'Inactive Tab',
								html : 'ddddddddddddddddddddddd',
								closable : true
							})
					desktop.setActiveItem(1);
				}
			}

		});