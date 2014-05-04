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
						//industry2 = Ext.getCmp("get_industry").getValue();

						var idid = Ext.getCmp("get_industry").getValue();

						if(idid==null)
						{
							alert("您尚未选择行业！");
							return;
						}
						
						var temp_arr=new Array();
						temp_arr=Ext.getCmp("get_industry").getOptions();
						for(var adi in temp_arr)
						{
							if(temp_arr[adi].value==idid)
							{
								industry2={description:temp_arr[adi].text,id:idid};
								break;
							}
						}
						Ext.getCmp("navigationbar").setTitle("选择地址");
						YongYou.util.DataApi.Core.getAddressList(function(res,
										scope) {
									res = Ext.decode(res);

									commonAdlist=new Array();
									otherAdlist=new Array();
									for(var adi in res)
									{
										if(res[adi].commonFlag==1)
										{
											commonAdlist.push(res[adi]);
										}
										else
										{
											otherAdlist.push({text:res[adi].name,value:res[adi].id});
										}
									}
									
									Ext.ComponentQuery
											.query("#SelectAddressPanel")[0]
											.getStore().removeAll();
									Ext.ComponentQuery
											.query("#SelectAddressPanel")[0]
											.getStore().add(commonAdlist);

									Ext.getCmp("get_address").setOptions(otherAdlist);
									Ext.ComponentQuery
											.query("container[id='contain2']")[0]
											.setActiveItem('#SelectAddressPanel');
								}, this, {
									
								});
					}
				}
			},
			{
//				xtype : 'textfield',
//				ui : 'round',
//				id : 'get_industry',
//				border : 3,
//				style : 'border-radius: 15px;float:right;border-color: gray; border-style: solid;',
//				width : 300
				xtype: 'selectfield',
				label:'更多行业：',
				id : 'get_industry',
				width : 300,
				labelWidth:'40%',
				border : 3,
				height:52,
				options: [
		                    {text: '~暂无~',  value: null}
		                ],
                style : 'border-radius: 15px;float:right;border-color: gray; border-style: solid;'
			
			}
			]
		}]

	},
	onItemTap : function(container, target, index, e) {
		var me = this, store = me.getStore(), record = store.data.items[index].data;

		me.fireEvent('itemtap', me, index, target, record, e);
	}

});