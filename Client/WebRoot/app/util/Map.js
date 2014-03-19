Ext.define('YongYou.util.Map', {
			extend : Ext.Map,
			xtype : 'baidumap',
			// @private
			initMap : function() {
				var map = this.getMap();
				if (!map) {
					var me = this, element = me.mapContainer, mapOptions = me
							.getMapOptions(), event;

					var MM = BMap;

					mapOptions = Ext.merge({}, mapOptions);

					if (element.dom.firstChild) {
						Ext.fly(element.dom.firstChild).destroy();
					}

					me.setMap(new MM.Map(element.dom));// , mapOptions));
					if (mapOptions.callback) {
						mapOptions.callback();
					}

					map = me.getMap();

					// 默认位置
					var point = new MM.Point(116.3972, 39.9096);
					map.centerAndZoom(point, 12);

					/*
					 * 获取当前位置
					 */
					var localCity = new MM.LocalCity();
					localCity.get(function(result) {
								var cityName = result.name;
								var localPoint = new MM.Point(
										result.center.lng, result.center.lat);
								map.setCenter(localPoint, cityName);
							});

					/*
					 * 启用鼠标滚动
					 */
					map.enableScrollWheelZoom(); // 启用滚轮放大缩小，默认禁用
					map.enableContinuousZoom(); // 启用地图惯性拖拽，默认禁用
				}
				// me.fireEvent('maprender', me, map);
			},
			setMapCenter : function(coordinates) {
				var me = this, map = me.getMap(), MM = BMap;

				if (!me.isPainted() && coordinates) {
					me.un('painted', 'setMapCenter', this);
					me.on('painted', 'setMapCenter', this, {
								delay : 550,
								single : true,
								args : [coordinates]
							});
					return;
				}
				coordinates = coordinates || new MM.Point(116.3972, 39.9096);

				if (coordinates && !(coordinates instanceof MM.Point)
						&& 'longitude' in coordinates) {
					coordinates = new MM.Point(coordinates.latitude,
							coordinates.longitude);
				}

				if (!map) {
					me.initMap();
					map = me.getMap();
				}

				if (map && coordinates instanceof MM.Point) {
					map.setCenter(coordinates);
				} else {
					this.options = Ext.apply(this.getMapOptions(), {
								center : coordinates
							});
				}
			}
		}, function() {

		});