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
					desktop : {
						itemtap : 'onDesktopTap'
					}
				}
			},
			onRootTap : function(view, index, target, record, e) {
				var desktop= Ext.ComponentQuery.query("tabpanel[id='query-desktop']")[0];
				if(!desktop){
				desktop = Ext.create('YongYou.view.query.desktop', {
							title : record.label
						})
				YongYou.util.DataApi.Core.getChildByID(function(res, scope) {

							scope.initialPanel(res);

						}, desktop, {
							'id' : record.id
						})
				view.parent.push(desktop);}
				else{
					view.parent.setActiveItem(desktop);
				}
			},
			onDesktopTap : function(view, index, target, record, e) {
				if (record.leaf == "1") {

					detailTab = Ext.create('YongYou.view.query.DetailTab',{title:record.title})
					YongYou.util.DataApi.Core.getFlowByCategoryID(function(res,
									scope) {
								flow = Ext.decode(res);
								scope.title=flow.title;
								scope.initialPanel(flow);

							}, detailTab, {
								'id' : record.id
							})
					view.parent.push(detailTab);
				}
			}
		});
