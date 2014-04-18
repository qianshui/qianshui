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
			style:'border:1px gray solid;width:326px;',
			layout : {
				type : 'vbox'
			},
			items:[{
				xtype:'dataview',
				scrollable : false,
				flex:1,
			    store: {
			        fields: ['name'],
			        data: [
			            {name: '行业占比'},
			            {name: '周边配套'},
			            {name: '点我确认'}
			        ]
			    },
			    itemTpl : [
			                '<div style="float:left;margin-left:30px;marin-right:30px;margin-top:26px;">'+
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
									
									var store=scope.scope.parent.items.items[1].getStore();
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
								YongYou.util.DataApi.Core.getZbptByLngLat(function(
										res, scope) {
									res = Ext.decode(res);
									
									var store=scope.scope.parent.items.items[1].getStore();
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
							else if(record.name=="点我确认")
							{
								this.parent.parent.fireEvent('itemtap', this.parent.parent, index,
										target, record, e);
							}
		}}}
				
			},{
				xtype:'list',
				id:'list_about_map',
				flex:3,
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
			}
					
			]
		},{
			style : 'float:right;',
			xtype : 'component',

			html : '<div id=\'mapDiv\' style=\'width:978px;height:655px;\'>您的设备好像没有联网，请保证网络连接，然后重新尝试一次。。。</div>'
		}

		]
	}

});
