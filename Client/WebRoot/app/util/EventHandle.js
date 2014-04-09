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

					if (!desktop.queryById(item.id)) {
						panel = Ext.create(item.panel, {
									title : item.title,
									id : item.id,
									closable : true
								})
						desktop.add(panel)
					}
					desktop.setActiveTab(item.id);
				}
			}

		});