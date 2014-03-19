Ext.define('YongYou.view.Main', {
	extend : 'Ext.Container',
	requires : ['Ext.data.Store'],
	xtype : 'main',
	config : {
		id : 'main',
		height : '100%',
		width : '100%',
		dock : 'top',
		style : "background-color:white;!important",
		items : [{
					xtype : 'titlebar',
					title : '江北区行政服务中心自助查询系统'
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
							'<div class="image" style="background-image:url({imgId})"></div>',
							'<div class="name">{label}</div>'

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