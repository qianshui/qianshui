Ext.define('YongYou.view.query.DetailList', {
	extend : 'Ext.Container',
	requires : ['YongYou.util.Window', 'YongYou.model.ListItem'],
	config : {
		layout : 'fit',
		cls : 'ks-basic',
		// id : 'QueryPanelDetailList',
		scrollable : true,
		title : "",
		type : null,
		height : '100%',
		items : [{
			xtype : 'dataview',
			scrollable : {
				direction : 'vertical'
			},
			cls : 'dataview-basic',
			itemTpl : '<div class="img" style="background-image: url(\'resources/img/{imgId}\')">'
					+ '</div><div class="content"><div class="name">{title}</div>'
					+ '<div class="affiliation">{subTitle}</div></div>',
			listeners : {
				itemtap : function(me, list, index, item, e) {
					showDetail(item);
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
