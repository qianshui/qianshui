
Ext.define('YongYou.view.query.NavigationPanel', {
			extend : 'Ext.navigation.View',

			config : {
				id:'nav-query',
				fullscreen: true,
				defaultBackButtonText: '返回',
				navigationBar : {
					ui :'dark', //"background:#9d2627;!important",
					items : [{
								xtype : 'button',
								ui : 'action',
								iconCls : 'home',
								iconMask : true,
								align : 'right',
								style:"background:#8d2324",
								listeners : {
									'tap' : function(b, e) {
										
										Ext.Viewport.setActiveItem('#main', {
													type : 'slide',
													direction : 'left',
													duration : 250
												});
									}
								}
							}]
				},
				items:[Ext.create('YongYou.view.query.Root')]
				

			}

		});