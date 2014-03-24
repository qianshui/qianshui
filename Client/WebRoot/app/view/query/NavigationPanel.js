Ext.define('YongYou.view.query.NavigationPanel', {
			extend : 'Ext.navigation.View',

			config : {
				id:'nav-query',
				fullscreen: true,
				navigationBar : {
					items : [{
								xtype : 'button',
								ui : 'action',
								iconCls : 'home',
								iconMask : true,
								align : 'right',
								listeners : {
									'tap' : function(b, e) {
										Ext.Viewport.setActiveItem('#main', {
													type : 'slide',
													direction : 'right',
													duration : 250
												});
									}
								}
							}]
				},
				items:[Ext.create('YongYou.view.query.Root')]

			}

		});