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
			subinner : '#nav-query'

		},

		control : {
			root : {
				itemtap : 'onRootTap'
			},
			desktop : {
				itemtap : 'onCatrgotyItemTap'
			},
			subinner : {
				itemtap : 'onCatrgotyItemTap'
			}

		}
	},
	onRootTap : function(view, index, target, record, e) {
		var desktop = Ext.ComponentQuery.query("tabpanel[id='query-desktop']")[0];
		if (!desktop) {
			desktop = Ext.create('YongYou.view.query.desktop', {
						title : record.label
					})
			YongYou.util.DataApi.Core.getChildByID(function(res, scope) {

						scope.initialPanel(res);

					}, desktop, {
						'id' : record.id
					})
			view.parent.push(desktop);
		} else {
			view.parent.setActiveItem(desktop);
		}
	}
	
});
