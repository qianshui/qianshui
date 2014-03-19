

Ext.define('YongYou.controller.Main', {
	extend : 'Ext.app.Controller',

	config : {
		refs : {
			main : 'main',
			subject:'subject',
            navibar:'#navigationbar'
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
		var navigatePanel = Ext.create('YongYou.view.MyNavigationView', {});

		if (record == '办事指南') {
			var queryPanel = Ext.ComponentQuery.query("container[id='ttd']")[0];
			if (!queryPanel) {
				queryPanel = Ext.create('YongYou.view.QueryPanel', {
							title : 'title2',
							fullscreen : true
						});

				queryPanel.initialPanel();
				// navigatePanel.push(queryPanel);
				Ext.Viewport.add(queryPanel);
			} else {
				Ext.ComponentQuery.query("container[id='contain']")[0]
						.setActiveItem('#QueryPanelMain');
				Ext.ComponentQuery.query("nestedlist[id='QueryList']")[0]
						.getStore().load();
			}
			Ext.Viewport.setActiveItem(queryPanel, {
						type : 'slide',
						direction : 'right'
					});

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

				YongYou.util.DataApi.Core.getCommonSectors(function(res, scope) {
					res= Ext.decode(res);

					scope.getSubject().getStore().removeAll();
					scope.getSubject().getStore().add(res);
					
//					Ext.ComponentQuery.query("container[id='contain2']")[0]
//					.setActiveItem('#IndustrylistPanel');
				},this,{'HYID':record.internalId});
				
				Ext.Viewport.add(navigationPanel);
			} else {
				YongYou.util.DataApi.Core.getCommonSectors(function(res, scope) {
					res= Ext.decode(res);

					scope.getSubject().getStore().removeAll();
					scope.getSubject().getStore().add(res);
					
//					Ext.ComponentQuery.query("container[id='contain2']")[0]
//					.setActiveItem('#IndustrylistPanel');
				},this,{'HYID':record.internalId});
				Ext.ComponentQuery.query("container[id='contain2']")[0]
						.setActiveItem('#SubjectPanel', {
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
			this.getNavibar().setTitle("选择行业类别");
//			YongYou.util.DataApi.Core.getCommonSectors(
//        	    	function(res,obj){
//        	    		var jsonObj = Ext.decode(res);
//        	    		var menuStore = Ext.create('YongYou.store.SubjectMenu',{});
//        	    		menuStore.add(jsonObj);
//        	    		var subjectPanel=Ext.create('YongYou.view.SubjectPanel', {
//        	        		title: 'title2',
//        	        		fullscreen: true,
//        	        		store:menuStore
//        	    			});
//        	    		obj.push(subjectPanel);
//        	    		Ext.Viewport.add(obj);
//        	    	},navigatePanel,record);
//            Ext.Viewport.add(navigatePanel);
//            Ext.Viewport.setActiveItem(navigatePanel, {
//				type : 'slide',
//				direction : 'right'
//			});
		}

	}

});
