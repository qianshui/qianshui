Ext.define('YongYou.view.query.DetailTab', {
	extend : 'Ext.TabPanel',
	requires : [],
	config : {
		id : 'query-detailtab',
		fullscreen : true,
		width : '100%',
		hight : '100%',
		border : true,
		activeTab : 0,
		tabBar : {
			layout : {
				pack : 'center'
			}
		},
		items : []
	},
	initialPanel : function(res) {
		items = Ext.decode(res);
		for (i = 0; i < items.length; i++) {
			inner = Ext.create('YongYou.view.query.DesktopInner', {
						title : items[i].title,
						id:items[i].id+'-inner'
					})
			YongYou.util.DataApi.Core.getChildByID(function(res, scope) {

						scope.initialPanel(res);

					}, inner, {
						'id' : items[i].id
					})
			this.add(inner);
		}
	}
});
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
		title : '详细信息',
		tabBar : {
			layout : {
				pack : 'center'
			}
		},
		items : []
	},
	initialPanel : function(flow) {

		if (flow) {
			YongYou.util.DataApi.Core.getNodeByFlowID(function(res, scope) {
				flowpanel = Ext.create('YongYou.flow.FlowViewport', {
							title : '办事流程'
						})
				flowpanel.initialPanelCard(res, this.id + '-');
				scope.add(flowpanel);
				if (flow.subjectId) {
					YongYou.util.DataApi.Core.getLawsByIndustryID(function(res,
									scope) {
								if (res) {
									res = Ext.decode(res);
									lawpanel = Ext.create(
											'YongYou.view.query.DetailList', {
												title : '法律法规',
												type : 'fg'
											})
									lawpanel.getItems().items[0].getStore()
											.add(res);
									scope.add(lawpanel);
								}

							}, scope, {
								'id' : flow.subjectId
							});
							
					YongYou.util.DataApi.Core.getPolicyByIndustryID(function(
							res, scope) {
						if (res) {
							res = Ext.decode(res);
							policypanel = Ext.create(
									'YongYou.view.query.DetailList', {
										title : '优惠政策',
										type : 'zc'
									})
							policypanel.getItems().items[0].getStore().add(res);
							scope.add(policypanel);
						}

					}, scope, {
						'id' : flow.subjectId
					});
				}

			}, this, {
				'id' : flow.id
			});

		}
	}
});