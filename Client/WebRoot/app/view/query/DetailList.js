Ext.define('YongYou.view.query.DetailList', {
	extend : 'Ext.Container',
	requires : ['YongYou.util.Window', 'YongYou.model.ListItem'],
	config : {
		layout : 'fit',
		cls : 'ks-basic',
		//id : 'QueryPanelDetailList',
		scrollable : true,
		title:"",
		type:null,
		height : '100%',
		items : [{
			xtype : 'dataview',
			scrollable : {
				direction : 'vertical'
			},
			cls : 'dataview-basic',
			itemTpl : '<div class="img" style="background-image: url(\'{imgId}\')">'
					+ '</div><div class="content"><div class="name">{title}</div>'
					+ '<div class="affiliation">{subtitle}</div></div>',
			//store : 
			listeners : {
				itemtap : function(me, list, index, item, e) {

					if (me.parent.getType() == "bz") {
						YongYou.util.DataApi.Core.getBZ(showDetail, item, {
									'ID' : item.internalId
								})
					} else if (me.parent.getType() == "fg") {
						YongYou.util.DataApi.Core.getLawByLawID(showDetail, item, {
									'id' : item.internalId
								})
					} else if (me.parent.getType() == "zc") {
						YongYou.util.DataApi.Core.getPolicyByPolicyID(showDetail, item, {
									'id' : item.internalId
								})
					}

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

function showDetail(res, scope) {
	var win = Ext.create('YongYou.util.Window', {});
	if (res.length <= 5) {
		var map = Ext.create('YongYou.util.MapPanel', {
					id : scope.internalId
				})
		win.initialPanelControl(map, scope.data.title)
		new Ext.onReady(function() {
					map.initMap();
				}, win)
	} else {
		win.initialPanelControl(new Ext.Panel({
							fullscreen : true,
							scrollable : true,
							layout : 'fit',
							height : '100%',
							width : '100%',
							html : res
						}), scope.data.title)
	}
}
