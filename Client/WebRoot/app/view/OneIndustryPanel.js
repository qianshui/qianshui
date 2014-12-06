Ext.define('YongYou.view.OneIndustryPanel', {
	extend : 'Ext.form.Panel',

	config : {
		id : 'OneIndustryPanel',
		scrollable : false,
		style : "background-color:white;!important",
		items : [
		{
			xtype:'container',
			height : '100%',
			docked : 'left',
			style:'border:1px gray solid;width:25%;background-color:white;!important',
			layout : {
				type : 'vbox'
			},
			items:[{
				xtype:'dataview',
				scrollable : false,
				flex:3,
			    store: {
			        fields: ['name'],
			        data: [
			            {name: '功能介绍'},
			            {name: '行业占比'},
			            {name: '周边配套'},
			            
			        ]
			    },
			    itemTpl : [
			                '<div style="float:left;margin-left:20px;marin-right:20px;margin-top:10px;">'+
							'<div class="image" style="margin-left:6px;width:60px;height:70px;background-image:url(\'resources/img/desktop/root_gr_ztfl_ns.png\')"></div>'+
							'<div class="name" style="font-weight:bold">{name}</div>'+
							'</div>'

					].join(''),
				listeners : {
					itemtap : function(container, target, index, e) {

						var me = this, store = me.getStore();
						if (store.data.items[target]) {
							record = store.data.items[target].data;
//							YongYou.util.ClientEventHandle.events.onCatrgotyItemTap(this.parent.parent, index,
//									target, record, e)

							//alert(record.name);
							if(record.name=="行业占比")
							{
								if(point_cur==null)
								{
									alert("请选择当前位置！");
									return;
								}
								YongYou.util.DataApi.Core.getAreaByLngLat(function(
										res, scope) {
									res = Ext.decode(res);
									
									scope.scope.parent.items.items[1].setActiveItem(1);
									
									var store=scope.scope.parent.items.items[1].items.items[1].getStore();
									store.removeAll();
									store.add(res);
									
									for(i=0;i<array_about_map.length;i++){
										scope.map.removeOverlay(array_about_map[i]);
									}
									array_about_map=[];
									for (i = 0; i < res.length; i++) {
										var marker = new BMap.Marker(new BMap.Point(
												res[i].lat, res[i].lng));
										var info = res[i].name;
										marker.setTitle(info);
										marker.setLabel(info);
										marker.addEventListener("click", function(
												a, b) {
											this
													.openInfoWindow(new BMap.InfoWindow(a.currentTarget
															.getTitle()));
										});
										scope.map.addOverlay(marker);
										array_about_map.push(marker);
									}
								}, {'map':map,'scope':this}, {
									'lng' : point_cur.lat,
									'lat' : point_cur.lng
								});
							}
							else if(record.name=="周边配套")
							{
								if(point_cur==null)
								{
									alert("请选择当前位置！");
									return;
								}
								this.parent.items.items[1].setActiveItem(2);

							}
							else if(record.name=="功能介绍")
							{
								this.parent.items.items[1].setActiveItem(0);
							}
		}}}
				
			},
			{
				xtype:'container',
				layout: {
	        		type: 'card',//重点理解
	        	},
	            style: 'border-top:1px solid gray;',
	            flex:12,
	        	//height:520,
	        	items:[
	        	   {
	        		   xtype:'panel',
	        		   html:'<div style=\'width:220px;margin:0 auto;\'><p style=\'margin-top:40px;\'>行业占比 ： 用于分析此地点周围同行业的信息。</p>'+
	        			   '<p style=\'margin-top:20px;\'>周边配套 ： 分析此地点周围的学校/医院等基本配套信息。</p></div>',
	        	   },
	        	   {
						xtype:'list',
						id:'list_about_map',
						//flex:3,
						store: {
				            fields: ['lng','lat','name'],
					        data: [
					            
					        ]
				        },
		                itemTpl: '<span style="padding-left:40px;font-size:10px;">{name}</span>',
		                listeners:{
				        	itemtap:function(container, target, index, e){
					        	var me = this, store = me.getStore();
								if (store.data.items[target]) {
									record = store.data.items[target].data;
									//alert(record.lng+"  "+record.lat);
									var marker = new BMap.Marker(new BMap.Point(
											record.lat, record.lng));
									map.addOverlay(marker);
									marker.openInfoWindow(new BMap.InfoWindow(record.name));
									array_about_map.push(marker);
								}
				        	}
				        }
					},
					{
						xtype:'dataview',
						//flex:3,
					    store: {
					        fields: ['name'],
					        data: [
					            {name: '学校'},
					            {name: '公园'},
					            {name: '医院'},
					            {name: '公交'},
					            {name: '商业'},
					        ]
					    },
					    itemTpl : [
					                '<div style="float:left;margin-left:20px;marin-right:20px;margin-top:26px;">'+
									'<div class="image" style="margin-left:6px;width:60px;height:70px;background-image:url(\'resources/img/desktop/root_gr_ztfl_sb.png\')"></div>'+
									'<div class="name" style="font-weight:bold">&nbsp;&nbsp;&nbsp;&nbsp;{name}&nbsp;&nbsp;&nbsp;&nbsp;</div>'+
									'</div>'

							].join(''),
						listeners : {
							itemtap : function(container, target, index, e) {

								var me = this, store = me.getStore();
								if (store.data.items[target]) {
									record = store.data.items[target].data;
									
									YongYou.util.DataApi.Core.getZbptByPoint(function(res, scope) {
										res = Ext.decode(res);
										
										for(i=0;i<array_about_map.length;i++){
											scope.map.removeOverlay(array_about_map[i]);
										}
										array_about_map=[];
										for (i = 0; i < res.length; i++) {
											var marker = new BMap.Marker(new BMap.Point(
													res[i].lng, res[i].lat));
											var info = res[i].name;
											marker.setTitle(info);
											marker.addEventListener("click", function(
													a, b) {
												this
														.openInfoWindow(new BMap.InfoWindow(a.currentTarget
																.getTitle()));
											});
											scope.map.addOverlay(marker);
											array_about_map.push(marker);
										}
									}, {'map':map,'scope':this},
									{
										'lat' : point_cur.lat,
										'lng' : point_cur.lng,
										'ptype':record.name
									});
								}
					        }
					    }//listener结束
					}//dataview结束
	        	]
			},
			{
			    xtype:'button',
			    flex:1,
			    width:'100%',
			    text:'点击进入下一步',
			    style:'font-weight:bold;font-size:25px;',
			    listeners : {
					'tap' : function(b, e) {
						this.parent.parent.fireEvent('itemtap', this.parent.parent, null,
								null, null, e);
					}
			    }
			}
		    ]
		},{
			//style : 'float:right;',
			xtype : 'component',
			width:'100%',
			height:'100%',
			html : '<div id=\'mapDiv\' style=\'width:950px;height:800px;\'>您的设备没有联网，请保证网络连接，然后重新尝试一次。。。</div>'
		}

		]
	}

});
