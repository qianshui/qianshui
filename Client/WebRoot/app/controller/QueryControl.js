/**
 * 
 */
Ext.define('YongYou.controller.QueryControl', {
			extend : 'Ext.app.Controller',
			QueryType : null,
			config : {
				refs : {
					root : '#query-root',
					desktop : '#query-desktop'

				},

				control : {
					root : {
						itemtap : 'onRootTap'
					},
					desktop: {
						itemtap : 'onDesktopTap'
					}
				}
			},
			onRootTap : function(view, index, target, record, e) {
				desktop = Ext.create('YongYou.view.query.desktop', {
							title : record.label
						})
				YongYou.util.DataApi.Core.getChildByID(function(res, scope) {

							scope.initialPanel(res);

						}, desktop, {
							'id' : record.id
						})
				view.parent.push(desktop);
			},
			onDesktopTap : function(view, index, target, record, e) {
				if(record.leaf=="1"){	
					flowpanel=Ext.create('YongYou.flow.FlowViewport', {id:record.id+'-flowviewport'})
					YongYou.util.DataApi.Core.getFlowChart(
							function(res, scope) {
								scope.getFlowpanel().initialPanelCard(res,record.id+'-');
								scope.getContain()
										.setActiveItem('#queryPanel-flowviewport');

							}, this, {
								'ID' : record.id
							})
				}
			}
		});
