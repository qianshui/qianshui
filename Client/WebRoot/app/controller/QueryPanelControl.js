Ext.define('YongYou.controller.QueryPanelControl', {
			extend : 'Ext.app.Controller',
			requires : ['YongYou.view.QueryPanelMain',
					'YongYou.view.QueryPanelCategory',
					'YongYou.view.QueryPanelDetailList'],
			QueryType : null,
			id : 'QueryDetail',
			config : {
				refs : {
					nestedList : '#QueryList',
					contain : '#contain',
					category : '#QueryPanelCategory',
					qurymain : '#QueryPanelMain',
					detailList : '#QueryPanelDetailList',
					flowpanel : '#queryPanel-flowviewport'
				},

				control : {
					nestedList : {
						itemtap : 'onListItemTap',
						leafitemtap : 'onLeafTap',
						back : 'onlistBack'
					}
				},
				currentRecord : null,

				stack : []
			},

			onListItemTap : function(view, list, index, target, record, e) {
				if (record.internalId.indexOf("bz") >= 0
						|| record.internalId.indexOf("fg") >= 0
						|| record.internalId.indexOf("zc") >= 0) {
					this.QueryType = record.internalId
					this.getNestedList().setBackText("返回模块选择");
					this.getNestedList().setTitle("选择行业分类")
					this.getContain().setActiveItem('#QueryPanelCategory');

				} else if (record.internalId.indexOf("HL") >= 0) {
					this.getNestedList().setTitle("选择行业")
					this.getNestedList().setBackText("返回行业分类");
					this.getContain().setActiveItem('#QueryPanelSubject');
				}

			},
			onlistBack : function(view, node, lastActiveList, detailCardActive,
					eOpts) {
				if (node.internalId.indexOf("bz") >= 0
						|| node.internalId.indexOf("fg") >= 0
						|| node.internalId.indexOf("zc") >= 0) {
					this.getContain().setActiveItem('#QueryPanelMain');
					this.getNestedList().getStore().removeAll();
					this.getNestedList().getStore().load();
				} else if (node.internalId.indexOf("HL") >= 0) {
					this.getContain().setActiveItem('#QueryPanelCategory');

				}
			},
			onLeafTap : function(view, list, index, target, record, e) {

				this.getDetailList().getItems().items[0].type = this.QueryType
				if (this.QueryType == "fg") {
					YongYou.util.DataApi.Core.getFGList(function(res, scope) {
								res = Ext.decode(res);
								scope.getDetailList().getItems().items[0]
										.getStore().removeAll();
								scope.getDetailList().getItems().items[0]
										.getStore().add(res);
								scope.getContain()
										.setActiveItem('#QueryPanelDetailList');
							}, this, {
								'HYID' : record.internalId
							})
				} else if (this.QueryType == "bz") {
//					if (this.getContain().getActiveItem().id == '#flowviewport') {
//						this.getContain().setActiveItem('#blank');
//					}
					YongYou.util.DataApi.Core.getFlowChart(
							function(res, scope) {

								// flowpanel=Ext.create('YongYou.flow.FlowViewport',
								// {})
								// flowpanel.initialPanelFlat(res);
								// scope.getContain().add(flowpanel)
								// scope.getContain().setActiveItem(flowpanel);
								scope.getFlowpanel().initialPanelCard(res,'queryPanel-');
								scope.getContain()
										.setActiveItem('#queryPanel-flowviewport');

							}, this, {
								'ID' : record.internalId
							})
				} else if (this.QueryType == "zc") {
					YongYou.util.DataApi.Core.getZCList(function(res, scope) {
								res = Ext.decode(res);
								scope.getDetailList().getItems().items[0]
										.getStore().removeAll();
								scope.getDetailList().getItems().items[0]
										.getStore().add(res);
								scope.getContain()
										.setActiveItem('#QueryPanelDetailList');
							}, this, {
								'HYID' : record.internalId
							})
				}
			}

		});
