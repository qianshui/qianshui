Ext.define('YongYou.view.query.DetailTab', {
			extend : 'Ext.TabPanel',
			requires : [],
			config : {
				// id : 'query-DetailTab',
				fullscreen : true,
				width : '100%',
				hight : '100%',
				border : true,
				activeTab : 0,
				title:'详细信息',
				tabBar : {
					layout : {
						pack : 'center'
					}
				},
				items : []
			},
			initialPanel : function(flow) {

				if (flow) {
					YongYou.util.DataApi.Core.getNodeByFlowID(function(res,scope) {
								flowpanel=Ext.create('YongYou.flow.FlowViewport', {title:'办事流程'})
								flowpanel.initialPanelCard(res,this.id+'-');
								scope.add(flowpanel);

							}, this, {
								'id' : flow.id
							})
				}
				// for (i = 0; i < items.length; i++) {
				// inner = Ext.create('YongYou.view.query.DesktopInner', {
				// title : items[i].title,
				// id:items[i].id+'-inner'
				// })
				// YongYou.util.DataApi.Core.getChildByID(function(res, scope) {
				//
				// scope.initialPanel(res);
				//
				// }, inner, {
				// 'id' : items[i].id
				// })
				// this.add(inner);
				// }
			}
		});