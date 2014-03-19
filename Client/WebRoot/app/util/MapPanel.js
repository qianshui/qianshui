//if use this class, have to set id at reference class.
Ext.define('YongYou.util.MapPanel', {
			extend : 'Ext.Panel',
			config : {
				map : null,				
				xtype : 'panel',
				fullscreen : true,
				layout : 'fit',
				height : '100%',
				width : '100%',
				mapOptions: {},
				mapListeners: null
			},
			initMap : function() {
				var map = this.getMap();
				if (!map) {
					var MM = BMap;
					map = new MM.Map(this.getId());
					var point = new MM.Point(116.3972, 39.9096);
					map.centerAndZoom(point, 12);
					var localCity = new MM.LocalCity();
					localCity.get(function(result) {
								var cityName = result.name;
								var localPoint = new MM.Point(
										result.center.lng, result.center.lat);
								map.setCenter(localPoint, cityName);
							});
					this.setMap(map);
					/*
					 * 启用鼠标滚动
					 */
					map.enableScrollWheelZoom(); // 启用滚轮放大缩小，默认禁用
					map.enableContinuousZoom(); // 启用地图惯性拖拽，默认禁用
				}
			}
		});
