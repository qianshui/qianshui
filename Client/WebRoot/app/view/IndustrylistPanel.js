Ext.define('YongYou.view.IndustrylistPanel', {
	extend : 'Ext.dataview.DataView',
	xtype : 'industrylist',
	config : {
		id : 'IndustrylistPanel',
		baseCls : 'categories-list',
		cls:'x-fullscreen',
		//style : "background-color:white;!important",
		itemTpl : [
				'<div class="image" style="background-image:url(\'resources/image/subject/{imgPath}\')"></div>'
				//'<div class="name">{description}</div>'

		].join(''),
		store : 'IndustryMenu',
		items : [{
			xtype : 'container',
			docked : 'bottom',
			style : 'margin:20px;',
			items : [{
				xtype : 'button',
				ui : 'round',
				style:'float:right;margin-right:165px;background-image:url(\'resources/image/submit.jpg\')',
				height : 52,
				width : 149,
				//text : '提交行业',
				//style : 'float:right;margin-right:165px;background:-webkit-linear-gradient(left, rgba(167,207,223,1) 0%,rgba(35,83,138,1) 85%);',
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
			},
			{
				xtype : 'textfield',
				ui : 'round',
				id : 'get_industry',
				border : 3,
				style : 'border-radius: 15px;float:right;border-color: gray; border-style: solid;',
				width : 300
			}
			]
		}]

	},
	onItemTap : function(container, target, index, e) {
		var me = this, store = me.getStore(), record = store.data.items[index].data;

		me.fireEvent('itemtap', me, index, target, record, e);
	}

});