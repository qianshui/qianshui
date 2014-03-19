Ext.define('YongYou.view.IndustrylistPanel', {
	extend : 'Ext.dataview.DataView',
	xtype : 'industrylist',
	config : {
		id : 'IndustrylistPanel',
		baseCls : 'categories-list',
		itemTpl : [
				'<div class="image" style="background-image:url(\'resources/img/phone_startup.png\')"></div>',
				'<div class="name">{label}</div>'

		].join(''),
		store : 'IndustryMenu',
		items : [{
			xtype : 'container',
			docked : 'bottom',
			style : 'margin:20px;',
			items : [{
				xtype : 'textfield',
				ui : 'round',
				id : 'get_industry',
				border : 3,
				style : 'float:left;margin-left:165px;border-color: gray; border-style: solid;',
				width : 182
			}, {
				xtype : 'button',
				ui : 'round',
				height : 52,
				width : 172,
				text : '提交行业',
				style : 'background:-webkit-linear-gradient(left, rgba(167,207,223,1) 0%,rgba(35,83,138,1) 85%);',
				listeners : {
					'tap' : function(b, e) {
						industry2 = Ext.getCmp("get_industry").getValue();

						YongYou.util.DataApi.Core.getAddressList(function(res,
										scope) {
									res = Ext.decode(res);

									// scope.getAddress().getStore().removeAll();
									// scope.getAddress().getStore().add(res);
									Ext.ComponentQuery
											.query("#SelectAddressPanel")[0]
											.getStore().removeAll();
									Ext.ComponentQuery
											.query("#SelectAddressPanel")[0]
											.getStore().add(res);

									Ext.ComponentQuery
											.query("container[id='contain2']")[0]
											.setActiveItem('#SelectAddressPanel');
								}, this, {
									'HYID' : 'haha'
								});
					}
				}
			}]
		}]

	},
	onItemTap : function(container, target, index, e) {
		var me = this, store = me.getStore(), record = store.data.items[index].data.label;

		me.fireEvent('itemtap', me, index, target, record, e);
	}

});