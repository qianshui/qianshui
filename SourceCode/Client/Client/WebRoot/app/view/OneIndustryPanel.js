Ext.define('YongYou.view.OneIndustryPanel', {
	extend : 'Ext.form.Panel',

	config : {
		id : 'OneIndustryPanel',
		scrollable : false,
		items : [{
			style : 'border:solid 2px blue',
			xtype : 'component',

			html : '<div id=\'mapDiv\' style=\'width:1038px;height:655px;border:solid 2px blue;\'>请重新尝试一次。。。</div>'
		}, {
			docked : 'right',
			height : '100%',
			width : '20%',
			layout : {
				type : 'vbox'
			},
			items : [{
				style : 'margin:80px 40px;background:-webkit-linear-gradient(left, rgba(167,207,223,1) 0%,rgba(35,83,138,1) 85%);',
				xtype : 'button',
				ui : 'round',
				flex : 1,
				text : '行业占比',
				listeners : {
					'tap' : function(b, e) {
						if (flag == 0) {
							// map.addOverlay(new BMap.Marker(new
							// BMap.Point(106.54253,29.574688)));
							// map.addOverlay(new BMap.Marker(new
							// BMap.Point(106.53422,29.564098)));
							// map.addOverlay(new BMap.Marker(new
							// BMap.Point(106.538654,29.579954)));
							// map.addOverlay(new BMap.Marker(new
							// BMap.Point(106.54586,29.583942)));
							YongYou.util.DataApi.Core.getAreaByLngLat(function(
									res, scope) {
								res = Ext.decode(res);
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
									scope.addOverlay(marker);
								}
							}, map, {
								'lng' : 29.582719,
								'lat' : 106.535602
							});
							flag = 1;
						} else {
							// map.clearOverlays();
							flag = 0;
						}

					}
				}
			}, {
				style : 'margin:80px 40px;background:-webkit-linear-gradient(left, rgba(167,207,223,1) 0%,rgba(35,83,138,1) 85%);',
				xtype : 'button',
				ui : 'round',
				flex : 1,
				text : '周边配套',
				listeners : {
					'tap' : function(b, e) {

					}
				}
			}, {
				id : 'map_confirm',
				style : 'margin:80px 40px;background:-webkit-linear-gradient(left, rgba(167,207,223,1) 0%,rgba(35,83,138,1) 85%);',
				xtype : 'button',
				ui : 'round',
				flex : 1,
				text : '点我确认',
				listeners : {
					'tap' : function(b, e) {
						// Ext.ComponentQuery.query("#show_indus_adres")[0]
						// .setHtml("行业："+industry1+industry2+"&nbsp;&nbsp;&nbsp;&nbsp;地址："+address);
						// Ext.ComponentQuery.query("container[id='contain2']")[0]
						// .setActiveItem('#ConfirmPanel2', {
						// type: 'slide',
						// direction: 'right',
						// duration:250
						// });
					}
				}
			}]
		}

		]
	}

});
