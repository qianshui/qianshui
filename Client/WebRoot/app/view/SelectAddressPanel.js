Ext.define('YongYou.view.SelectAddressPanel', {
	extend : 'Ext.dataview.DataView',
	xtype : 'selectaddress',
	config : {
		id : 'SelectAddressPanel',
		baseCls : 'categories-list',
		style : "background-color:white;!important",
		itemTpl : [
				'<div class="image" style="background-image:url(\'resources/img/industry/jiedao2.jpg\')"></div>',
				'<div class="name">{name}</div>'

		].join(''),
		store : 'AddressMenu',
		items : [{
			xtype : 'container',
			docked : 'bottom',
			style : 'margin:20px;',
			items : [{
				xtype : 'textfield',
				ui : 'round',
				id : 'get_address',
				width : 182,
				border : 3,
				height:52,
				
				style : 'float:left;margin-left:165px;border-color: gray; border-style: solid;'
			}, {
				xtype : 'button',
				ui : 'round',
				height : 52,
				width : 172,
				style : 'height:50px;float:left;background:-webkit-linear-gradient(left, rgba(167,207,223,1) 0%,rgba(35,83,138,1) 85%);',
				text : '提交地址',
				listeners : {
					'tap' : function(b, e) {
						// alert("完善中。。。。");
						address = Ext.getCmp("get_address").getValue();
						Ext.ComponentQuery.query("container[id='contain2']")[0]
								.setActiveItem('#OneIndustryPanel');
						new Ext.onReady(function() {
									initializeMap();
								}, navigationPanel);
					}
				}
			}, {
				xtype : 'button',
				ui : 'round',
				height : 52,
				style : 'float:right;margin-right:164px;background:-webkit-linear-gradient(left, rgba(167,207,223,1) 0%,rgba(35,83,138,1) 85%);',
				width : 172,
				text : '我要在地图点选',
				listeners : {
					'tap' : function(b, e) {
						Ext.ComponentQuery.query("container[id='contain2']")[0]
								.setActiveItem('#OneIndustryPanel');
						new Ext.onReady(function() {
									initializeMap();
								}, navigationPanel);
					}
				}
			}]
		}]

	},
	onItemTap : function(container, target, index, e) {
		var me = this, store = me.getStore(), record = store.data.items[index].data.name;

		me.fireEvent('itemtap', me, index, target, record, e);
	}

});