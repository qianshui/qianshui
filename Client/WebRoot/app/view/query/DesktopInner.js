Ext.define('YongYou.view.query.DesktopInner', {
	extend : 'Ext.Container',
	requires : ['Ext.data.Store'],
	config : {
		height : '100%',
		width : '100%',
		dock : 'top',
		style : "background-color:white;!important",
		items : [{
			xtype : 'dataview',
			store : 'QueryRoot',
			flex : 1,
			width : '100%',
			height : '100%',
			scrollable : true,
			baseCls : 'desktop-list',
			itemTpl : [
					'<div class="image" style="background-image:url(\'resources/img/desktop/{icon}\')"></div>',
					'<div class="name">{title}</div>'

			].join(''),
			listeners : {
				itemtap : function(container, target, index, e) {

					var me = this, store = me.getStore();
					if (store.data.items[target]) {
						record = store.data.items[target].data;

						this.parent.parent.fireEvent('itemtap', this.parent.parent, index,
								target, record, e);
					}
				}
			}
		}]
	},
	initialPanel : function(res) {
		red = Ext.decode(res);
		store=Ext.create("Ext.data.Store", {
					//storeId : "usersStore",
					fields : [{
								name : 'title',
								type : 'string'
							}, {
								name : 'icon',
								type : 'string'
							}, {
								name : 'parentid',
								type : 'string'
							}, {
								name : 'id',
								type : 'string'
<<<<<<< HEAD
							}, {
=======
							},{
>>>>>>> branch 'master' of https://github.com/qianshui/qianshui.git
								name : 'leaf',
								type : 'string'
							}],
					data : red
				});
				this.items.items[0].setStore(store);
	}

});
