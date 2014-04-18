Ext.define('YongYou.view.QueryPanelDetailList', {
	extend : 'Ext.Container',
	requires : ['YongYou.util.Window', 'YongYou.model.ListItem'],
	config : {
	    title:'优惠政策',
		layout : 'fit',
		cls : 'ks-basic',
		id : 'QueryPanelDetailList',
		scrollable : true,
		//style : "background-color:white;!important",

		height : '100%',
		items : [{
			id:'yhzc_list',
			xtype : 'dataview',
			scrollable : {
				direction : 'vertical'
			},
			cls : 'dataview-basic',
			itemTpl : '<div class="img" style="background-image: url(\'resources/img/{imgId}\')">'
					+ '</div><div class="content"><div class="name">{title}</div>'
					+ '<div class="affiliation">{subtitle}</div></div>',
			store : new Ext.data.Store({
						autoLoad : true,
						model : 'YongYou.model.ListItem'
					}),
			listeners : {
				itemtap : function(me, list, index, item, e) {
				    showDetail(item);
//					if (me.type == "bz") {
//						YongYou.util.DataApi.Core.getBZ(showDetail, item, {
//									'ID' : item.internalId
//								})
//					} else if (me.type == "fg") {
//						YongYou.util.DataApi.Core.getFG(showDetail, item, {
//									'ID' : item.internalId
//								})
//					} else if (me.type == "zc") {
//						YongYou.util.DataApi.Core.getZC(showDetail, item, {
//									'ID' : item.internalId
//								})
//					}
				    

					// *******************************make element.dom as map
					// target, but only first time the map will display at the
					// center*********************
					// win.initialPanelControl(new Ext.Panel({
					// fullscreen : true,
					// layout : 'fit',
					// height : '100%',
					// width:'100%',
					// items : [Ext.create('YongYou.util.Map',{})]
					// }), 'test')

				}
			}

		}]
	}
});

function showDetail(item) {
	var win = Ext.create('YongYou.util.Window', {});
	win.initialPanelControl(new Ext.Panel({
						fullscreen : true,
						scrollable : true,
						layout : 'fit',
						height : '100%',
						width : '100%',
						html : item.data.content
					}), item.data.title)
}

//function showDetail(res, scope) {
//	var win = Ext.create('YongYou.util.Window', {});
//	if (res.length <= 5) {
//		var map = Ext.create('YongYou.util.MapPanel', {
//					id : scope.internalId
//				})
//		win.initialPanelControl(map, scope.data.title)
//		new Ext.onReady(function() {
//					map.initMap();
//				}, win)
//	} else {
//		win.initialPanelControl(new Ext.Panel({
//							fullscreen : true,
//							scrollable : true,
//							layout : 'fit',
//							height : '100%',
//							width : '100%',
//							html : res
//						}), scope.data.title)
//	}
//}
