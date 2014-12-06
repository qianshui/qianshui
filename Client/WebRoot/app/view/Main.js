Ext.define('YongYou.view.Main', {
	extend : 'Ext.Container',
	requires : ['Ext.data.Store'],
	xtype : 'main',
	config : {
		id : 'main',
		height : '100%',
		width : '100%',
		dock : 'top',
		//style : "!important",
		items : [{
					xtype : 'titlebar',
					ui : 'red',
					height:'85px',
					//width:'',
					layout : {
						pack : 'center'
					},
					title : '<p style=\'font-size:40px;\'>江北区行政服务中心顾问信息库</p>',
					style : "background: -webkit-linear-gradient(left, rgba(169,3,41,1) 71%,rgba(109,0,25,1) 100%);!important;"
				}, { 
					xtype : 'dataview',
					store : 'MainMenu',
					flex : 1,
					width : '100%',
					height : '100%',
					 scrollable: false,
					baseCls : 'categories-list',
					style:'	margin-top:160px;!important',
					itemTpl : [
							'<div class="image" style="background-image:url({imgId})"></div>'
							//,
							//'<div class="name">{label}</div>'

					].join(''),
					listeners : {
						itemtap : function(container, target, index, e) {

							var me = this, store = me.getStore();
							if (store.data.items[target]) {
								record = store.data.items[target].data.label;

								this.parent.fireEvent('itemtap', this.parent, index, target,
										record, e);
							}
						}
					}
				}]
	}

});