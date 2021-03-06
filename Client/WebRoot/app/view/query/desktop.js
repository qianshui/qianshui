Ext.define('YongYou.view.query.desktop', {
	extend : 'Ext.TabPanel',
	requires : [],
	config : {
		id : 'query-desktop',
		fullscreen : true,
		width : '100%',
		hight : '100%',
		border : true,
		activeTab : 0,
		title:'',
		
		tabBar : {
			ui : 'red',
			height:'60px',
			//width:'',
			layout : {
				pack : 'center'
			},
			style:'font-size:30px;',
			// style : 'background:#99FFFF'
		},
		items : []
	},
	initialPanel : function(res) {
		this.removeAll();
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