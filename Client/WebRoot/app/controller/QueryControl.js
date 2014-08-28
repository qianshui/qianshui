/**
 * 
 */
Ext.define('YongYou.controller.QueryControl', {
	extend : 'Ext.app.Controller',
	QueryType : null,
	config : {
		refs : {
			root : '#query-root',
			desktop : '#query-desktop',
			subinner : '#nav-query',
		},

		control : {
			root : {
				itemtap : 'onRootTap'
			},
			desktop : {
				itemtap : 'onCatrgotyItemTap'
			},
			subinner : {
				itemtap : 'onCatrgotyItemTap',
				back:'onNavRootBack'
			},
			innerquery:{
				action : 'onInnerQueryAction'
			}
		}
	},
	onRootTap : function(view, index, target, record, e) {
		var desktop = Ext.ComponentQuery.query("tabpanel[id='query-desktop']")[0];
		if (!desktop) {
			desktop = Ext.create('YongYou.view.query.desktop', {
						title : record.label
					});
		    view.parent.push(desktop);
		    
		} else {
			desktop.title=record.label
			view.parent.setActiveItem(desktop);
		}
		Ext.getCmp("nav_root_back").setHidden(true);
		YongYou.util.DataApi.Core.getChildByID(function(res, scope) {

					scope.initialPanel(res);

				}, desktop, {
					'id' : record.id
				})
			
	},
	onNavRootBack : function( mythis, eOpts)
	{
		var cur_item = mythis.getActiveItem();
		if(cur_item.xtype=="root")
		{
			Ext.getCmp("nav_root_back").setHidden(false);
		}
	},
});
