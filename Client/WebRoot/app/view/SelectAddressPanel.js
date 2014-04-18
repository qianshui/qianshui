Ext.define('YongYou.view.SelectAddressPanel', {
	extend : 'Ext.dataview.DataView',
	xtype : 'selectaddress',
	config : {
		id : 'SelectAddressPanel',
		baseCls : 'categories-list',
		cls:'x-fullscreen',
		//style : "background-color:white;!important",
		itemTpl : [
				'<div class="image" style="background-image:url(\'resources/image/location/{imgPath}\')"></div>'
				//'<div class="name">{name}</div>'

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
				width : 300,
				border : 3,
				height:52,
				
				style : 'border-radius: 15px;float:left;margin-left:165px;border-color: gray; border-style: solid;'
			}, {
				xtype : 'button',
				ui : 'round',
				style:'float:left;background-image:url(\'resources/image/submit.jpg\')',
				height : 52,
				width : 149,
				//style : 'height:50px;float:left;background:-webkit-linear-gradient(left, rgba(167,207,223,1) 0%,rgba(35,83,138,1) 85%);',
				//text : '提交地址',
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
				xtype : 'image',
				//ui : 'round',
				height : 73,
				style : 'float:right;margin-right:164px;background-image:url(\'resources/image/mapbutton.gif\')',
				width : 304,
				//text : '我要在地图点选',
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