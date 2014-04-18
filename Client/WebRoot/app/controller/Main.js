

Ext.define('YongYou.controller.Main', {
	extend : 'Ext.app.Controller',

	config : {
		refs : {
			main : 'main',
			subject:'subject',
            navibar:'#navigationbar',
            query:'#nav-query'
		},

		control : {
			main: {
                itemtap: 'onMainItemTap'
            }
            
		},

		// routes: {
		// ':id': 'showPanel'
		// },

		currentRecord : null,

		stack : []
	},

	onMainItemTap : function(view, index, target, record, e) {
		//var navigatePanel = Ext.create('YongYou.view.NavigationPanel', {});

		if (record == '办事指南') {
			
				navigationPanel = Ext.ComponentQuery.query("container[id='nav-query']")[0];

			if (!navigationPanel) {
				navigationPanel = Ext.create('YongYou.view.query.NavigationPanel', {
							title : '办事指南',
							fullscreen : true
						});
				
				Ext.Viewport.add(navigationPanel);
			} else {
				navigationPanel.reset();
			}
			Ext.Viewport.setActiveItem(navigationPanel, {
						type : 'slide',
						direction : 'left'
					});
			flag=0;
			
			
//********************************	old  Code***********************************************************		
//			var queryPanel = Ext.ComponentQuery.query("container[id='btab']")[0];
//			if (!queryPanel) {
//				queryPanel = Ext.create('YongYou.view.query.bottomTab', {
//							title : 'title2',
//							fullscreen : true
//						});
//
//				queryPanel.initialPanel();
//				// navigatePanel.push(queryPanel);
//				Ext.Viewport.add(queryPanel);
//			} else {
////				Ext.ComponentQuery.query("container[id='contain']")[0]
////						.setActiveItem('#QueryPanelMain');
////						
////				Ext.ComponentQuery.query("nestedlist[id='QueryList']")[0]
////						.getStore().load();
//			}
//			Ext.Viewport.setActiveItem(queryPanel, {
//						type : 'slide',
//						direction : 'right'
//					});
//***********************************************************************************************************
		} else if (record == '微企指南') {
			YongYou.util.DataApi.Core.getFlowChart(function(res, scope) {

						flowpanel = Ext.create('YongYou.flow.FlowViewport', {})
						flowpanel.initialPanelCard(res);

						navigatePanel.push(flowpanel);
						Ext.Viewport.add(navigatePanel);
						Ext.Viewport.setActiveItem(navigatePanel, {
									type : 'slide',
									direction : 'right'
								});
					}, navigatePanel, {
						'ID' : 'HY01'
					})

			// var win = Ext.create('YongYou.util.Window', {});
			// win.initialPanelControl(flowPanel, 'Flow Chart')

		}  else if (record == '投资咨询') {
			industry1='';industry2='';address='';
			navigationPanel = Ext.ComponentQuery.query("container[id='ttd2']")[0];

			if (!navigationPanel) {
				navigationPanel = Ext.create('YongYou.view.NavigationPanel', {
							title : 'title2',
							fullscreen : true
						});
				Ext.Viewport.add(navigationPanel);
			} else {
				
				Ext.ComponentQuery.query("container[id='contain2']")[0]
						.setActiveItem('#SelectPeoplePanel', {
        					type: 'slide',
        					direction: 'right',
        					duration:250
    						});
				}
				Ext.Viewport.setActiveItem(navigationPanel, {
							type : 'slide',
							direction : 'right'
						});
				flag=0;
				this.getNavibar().setTitle("选择投资人群");

		}

	}

});
