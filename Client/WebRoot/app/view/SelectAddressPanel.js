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
//				xtype : 'textfield',
//				ui : 'round',
//				id : 'get_address',
//				width : 300,
//				border : 3,
//				height:52,
				xtype: 'selectfield',
				label:'更多地址：',
				id : 'get_address',
				width : 300,
				labelWidth:'40%',
				border : 3,
				height:52,
                options: [
                    {text: '~暂无~',  value: null}
                ],
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
						var adid = Ext.getCmp("get_address").getValue();

						if(adid==null)
						{
							alert("您尚未选择地址！");
							return;
						}
						
						var temp_arr=new Array();
						temp_arr=Ext.getCmp("get_address").getOptions();
						for(var adi in temp_arr)
						{
							if(temp_arr[adi].value==adid)
							{
								address={name:temp_arr[adi].text,id:adid};
								break;
							}
						}
						Ext.ComponentQuery.query("container[id='contain2']")[0]
     						.getLayout().setAnimation({
     									type : 'slide',
     									direction : 'left',
     									duration : 250
     								})
						Ext.ComponentQuery.query("container[id='contain2']")[0]
								.setActiveItem('#OneIndustryPanel', {
									type : 'slide',
									direction : 'right',
									duration : 250
								});
						new Ext.onReady(initializeMap,{ 
								me:navigationPanel,
								firewho:address.name
						});
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
      						.getLayout().setAnimation({
      									type : 'slide',
      									direction : 'left',
      									duration : 250
      								})
						Ext.ComponentQuery.query("container[id='contain2']")[0]
								.setActiveItem('#OneIndustryPanel');
						new Ext.onReady(initializeMap,{ 
							me:navigationPanel,
							firewho:null
					    });
					}
				}
			}]
		}]

	},
	onItemTap : function(container, target, index, e) {
		var me = this, store = me.getStore(), record = store.data.items[index].data;

		me.fireEvent('itemtap', me, index, target, record, e);
	}

});