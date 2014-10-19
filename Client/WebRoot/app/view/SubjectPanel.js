Ext.define('YongYou.view.SubjectPanel', {
    extend: 'Ext.dataview.DataView',
    xtype:'subject',
    config: {
        store: 'SubjectMenu',
        id:'SubjectPanel',
       // scrollable: 'vertical',
        baseCls: 'categories-list',
        cls:'x-fullscreen',
        itemTpl: [
            '<div class="image" style="background-image:url(\'resources/image/subject/{imgPath}\')"></div>'
           // '<div class="name">{description}</div>'

        ].join(''),
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

						var icid = Ext.getCmp("get_subclass").getValue();

						if(icid==null)
						{
							alert("您尚未选择行业类别！");
							return;
						}
						
						var temp_arr=new Array();
						temp_arr=Ext.getCmp("get_subclass").getOptions();
						for(var adi in temp_arr)
						{
							if(temp_arr[adi].value==icid)
							{
								industry1={description:temp_arr[adi].text,id:icid};
								break;
							}
						}
						Ext.getCmp("navigationbar").setTitle("选择行业类别");
						YongYou.util.DataApi.Core.getCommonIndustry(function(res,
										scope) {
									res = Ext.decode(res);

									commonIclist=new Array();
									otherIclist=new Array();
									for(var adi in res)
									{
										if(res[adi].commonFlag==1)
										{
											commonIclist.push(res[adi]);
										}
										else
										{
											otherIclist.push({text:res[adi].description,value:res[adi].id});
										}
									}
									
									Ext.ComponentQuery
											.query("#IndustrylistPanel")[0]
											.getStore().removeAll();
									Ext.ComponentQuery
											.query("#IndustrylistPanel")[0]
											.getStore().add(commonIclist);

									Ext.getCmp("get_industry").setOptions(otherIclist);
									Ext.ComponentQuery
											.query("container[id='contain2']")[0]
											.setActiveItem('#IndustrylistPanel');
								}, this, {
									'id':icid
								});
					}
				}
			},
			{
				xtype: 'selectfield',
				label:'更多行业类别：',
				id : 'get_subclass',
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
    onItemTap: function (container, target, index, e) {
        var me = this,
            store = me.getStore(),
            record = store.data.items[index].data;

        me.fireEvent('itemtap', me, index, target, record, e);
    }

});