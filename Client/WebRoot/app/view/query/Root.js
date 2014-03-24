Ext.define('YongYou.view.query.Root', {
	extend : 'Ext.Container',
	requires : ['Ext.data.Store'],
	xtype : 'root',
	config : {
		id : 'query-root',
		height : '100%',
		width : '100%',
		dock : 'top',
		style : "background-color:white;!important",
		title:'办事指南',
		items : [{
					xtype : 'dataview',
					store : 'QueryRoot',
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
								record = store.data.items[target].data;

								this.parent.fireEvent('itemtap', this.parent, index, target,
										record, e);
							}
						}
					}
				}]
	}

});