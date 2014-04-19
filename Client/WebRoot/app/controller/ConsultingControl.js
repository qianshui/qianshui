/**
 * 
 */
Ext.define('YongYou.controller.ConsultingControl', {
			extend : 'Ext.app.Controller',
			QueryType : null,
			config : {
				refs : {
					people : '#SelectPeoplePanel',
					subject : 'subject',
					industry : '#IndustrylistPanel',
					address : 'selectaddress',
					confirm : '#ConfirmPanel2',

					naviback : '#navibar_back',
					mapconfirm : '#OneIndustryPanel',
					navibar : '#navigationbar',

					yhzc_list : '#yhzc_list',
					flfg_list : '#flfg_list',
					list_about_map : '#list_about_map'
				},

				control : {
					people : {
						itemtap : 'onPeopleItemTap'
					},
					subject : {
						itemtap : 'onSubjectItemTap'
					},
					industry : {
						itemtap : 'onIndustryListItemTap'
					},
					address : {
						itemtap : 'onAddressItemTap'
					},
					naviback : {
						tap : 'onNavibackTap'
					},
					mapconfirm : {
						itemtap : 'onMapconfirmTap'
					}
				},

				currentRecord : null,

				stack : []
			},
			onPeopleItemTap : function(view, index, target, record, e) {
				YongYou.util.DataApi.Core.getCommonSectors(
						function(res, scope) {
							res = Ext.decode(res);

							scope.getSubject().getStore().removeAll();
							scope.getSubject().getStore().add(res);

							// Ext.ComponentQuery.query("container[id='contain2']")[0]
							// .setActiveItem('#IndustrylistPanel');
						}, this, {});
				Ext.ComponentQuery.query("container[id='contain2']")[0]
						.getLayout().setAnimation({
									type : 'slide',
									direction : 'left',
									duration : 250
								})
				Ext.ComponentQuery.query("container[id='contain2']")[0]
						.setActiveItem('#SubjectPanel', {
									type : 'slide',
									direction : 'right',
									duration : 250
								});

				flag = 0;
				this.getNavibar().setTitle("选择行业类别");
			},
			onSubjectItemTap : function(view, index, target, record, e) {
				// var navigatePanel =
				// Ext.create('YongYou.view.MyNavigationView', {});
				//	    	
				// YongYou.util.DataApi.Core.getCommonIndustry(
				// function(res,obj){
				// var jsonObj = Ext.decode(res);
				// var menuStore = Ext.create('YongYou.store.SubjectMenu',{});
				// menuStore.add(jsonObj);
				// var
				// industrylistPanel=Ext.create('YongYou.view.IndustrylistPanel',
				// {
				// title: 'title2',
				// fullscreen: true,
				// store:menuStore
				// });
				// obj.push(industrylistPanel);
				// Ext.Viewport.add(obj);
				// },navigatePanel,record);
				//	        
				// Ext.Viewport.setActiveItem(navigatePanel, {
				// type: 'slide',
				// direction: 'right'
				// });
				YongYou.util.DataApi.Core.getCommonIndustry(
						function(res, scope) {
							res = Ext.decode(res);

							scope.getIndustry().getStore().removeAll();
							scope.getIndustry().getStore().add(res);

							Ext.ComponentQuery
									.query("container[id='contain2']")[0]
									.getLayout().setAnimation({
												type : 'slide',
												direction : 'left',
												duration : 250
											})

							Ext.ComponentQuery
									.query("container[id='contain2']")[0]
									.setActiveItem('#IndustrylistPanel', {
												type : 'slide',
												direction : 'right',
												duration : 250
											});
							scope.getNavibar().setTitle("选择行业");
						}, this, {
						// 'HYID' : record.internalId
						});
				industry1 = record;

			},
			onIndustryListItemTap : function(view, index, target, record, e) {

				// var navigatePanel =
				// Ext.create('YongYou.view.MyNavigationView', {});
				//	    	
				// YongYou.util.DataApi.Core.getAddressList(
				// function(res,obj){
				// var jsonObj = Ext.decode(res);
				// var menuStore = Ext.create('YongYou.store.SubjectMenu',{});
				// menuStore.add(jsonObj);
				// var
				// selectaddressPanel=Ext.create('YongYou.view.SelectAddressPanel',
				// {
				// title: 'title2',
				// fullscreen: true,
				// store:menuStore
				// });
				// obj.push(selectaddressPanel);
				// Ext.Viewport.add(obj);
				// },navigatePanel,record);
				//	        
				// Ext.Viewport.setActiveItem(navigatePanel, {
				// type: 'slide',
				// direction: 'right'
				// });
				YongYou.util.DataApi.Core.getAddressList(function(res, scope) {
							res = Ext.decode(res);

							scope.getAddress().getStore().removeAll();
							scope.getAddress().getStore().add(res);

							Ext.ComponentQuery
									.query("container[id='contain2']")[0]
									.getLayout().setAnimation({
												type : 'slide',
												direction : 'left',
												duration : 250
											})

							Ext.ComponentQuery
									.query("container[id='contain2']")[0]
									.setActiveItem('#SelectAddressPanel', {
												type : 'slide',
												direction : 'right',
												duration : 250
											});
							scope.getNavibar().setTitle("选择地址");
						}, this, {
						// 'HYID' : record.internalId
						});
				industry2 = record;

				// var navigatePanel =
				// Ext.create('YongYou.view.MyNavigationView', {});
				// navigatePanel.push(Ext.create('YongYou.view.OneIndustryPanel',
				// {
				// title: 'title2',
				// fullscreen: true
				// }));
				//	        
				// Ext.Viewport.add(navigatePanel);
				// Ext.Viewport.setActiveItem(navigatePanel, {
				// type: 'slide',
				// direction: 'right'
				// });
				//	        
				// new Ext.onReady(function(){
				// initializeMap();
				// },navigatePanel);
			},
			onAddressItemTap : function(view, index, target, record, e) {
				// var navigatePanel =
				// Ext.create('YongYou.view.MyNavigationView', {});
				// navigatePanel.push(Ext.create('YongYou.view.OneIndustryPanel',
				// {
				// title: 'title2',
				// fullscreen: true
				// }));
				//	        
				// Ext.Viewport.add(navigatePanel);
				// Ext.Viewport.setActiveItem(navigatePanel, {
				// type: 'slide',
				// direction: 'right'
				// });
				//	        
				// new Ext.onReady(function(){
				// initializeMap();
				// },navigationPanel);
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
				this.getNavibar().setTitle("地图点选");
				new Ext.onReady(function() {
							initializeMap();
						}, navigationPanel);
				address = record;
				point_cur = null;
				array_about_map = new Array();
			},
			onNavibackTap : function(b, e) {
				var activeid = Ext.ComponentQuery
						.query("container[id='contain2']")[0].getActiveItem()
						.getId();
				Ext.ComponentQuery.query("container[id='contain2']")[0]
						.getLayout().setAnimation({
									type : 'slide',
									direction : 'right',
									duration : 250
								})
				if (activeid == 'ConfirmPanel2') {
					Ext.ComponentQuery.query("container[id='contain2']")[0]
							.setActiveItem("#OneIndustryPanel", {
										type : 'slide',
										direction : 'right',
										duration : 250
									});
					this.getNavibar().setTitle("地图点选");
				} else if (activeid == 'OneIndustryPanel') {
					Ext.ComponentQuery.query("container[id='contain2']")[0]
							.setActiveItem("#SelectAddressPanel", {
										type : 'slide',
										direction : 'right',
										duration : 250
									});
					this.getNavibar().setTitle("选择地址");
					this.getList_about_map().getStore().removeAll();
				} else if (activeid == 'SelectAddressPanel') {
					Ext.ComponentQuery.query("container[id='contain2']")[0]
							.setActiveItem("#IndustrylistPanel", {
										type : 'slide',
										direction : 'right',
										duration : 250
									});
					this.getNavibar().setTitle("选择行业");
				} else if (activeid == 'IndustrylistPanel') {
					Ext.ComponentQuery.query("container[id='contain2']")[0]
							.setActiveItem("#SubjectPanel", {
										type : 'slide',
										direction : 'right',
										duration : 250
									});
					this.getNavibar().setTitle("选择行业类别");
				} else if (activeid == 'SubjectPanel') {
					Ext.ComponentQuery.query("container[id='contain2']")[0]
							.setActiveItem("#SelectPeoplePanel", {
										type : 'slide',
										direction : 'right',
										duration : 250
									});
					this.getNavibar().setTitle("选择投资人群");
				} else if (activeid == 'SelectPeoplePanel') {
					Ext.Viewport.setActiveItem('#main', {
								type : 'slide',
								direction : 'right',
								duration : 250
							});
				}
			},

			// initializeInfoConfirm:function()
			// {
			//	    	
			// },
			//	    
			onMapconfirmTap : function(b, e) {
				// 汇总页初始化阶段
				this.getConfirm().removeAll();
				// d 法律法规
				var flfg = Ext.create('YongYou.view.FlfgDetailList', {});
				YongYou.util.DataApi.Core.getFG(function(res, scope) {
							res = Ext.decode(res);
							scope.getFlfg_list().getStore().removeAll();
							scope.getFlfg_list().getStore().add(res);
						}, this, {
							'id' : industry2.id
						});
				// this.getConfirm().add(flfg);
				// c 优惠政策
				var yhzc = Ext.create('YongYou.view.QueryPanelDetailList', {});
				YongYou.util.DataApi.Core.getZC(function(res, scope) {
							res = Ext.decode(res);
							scope.getYhzc_list().getStore().removeAll();
							scope.getYhzc_list().getStore().add(res);
						}, this, {
							'id' : industry2.id
						});
				// this.getConfirm().add(yhzc);

				// a 信息确认
				var infocon = Ext.create('YongYou.view.InformationConfirm', {});
				infocon.setSelectValue(industry1 + '业&nbsp;&nbsp;' + industry2.description,
						'大学生', address)
				infocon.setAroundValue({
							gongjian : '中餐厅;超市;西餐厅;茶餐厅;美容美发;家政中心;娱乐中心;洗衣房;',
							biaozhi : '嘉陵公园',
							gongyuan : '嘉陵公园 查找周边公园',
							jingguan : '嘉陵公园',
							jiuyi : '二级长安医院、三级甲等三二四医院、二级甲等江北一院 查找周边医院',
							jiuxue : '区级建新中学、重庆市直辖后首批重点中学重庆18中、区级华新小学 查找周边学校',
							shangye : '重百商场、北京华联商厦、苏宁电器、香港新世界百货、观音桥步行街等 查找周边商场'
						})
				infocon.setAdviseValue('<div style="margin-left:20px;"><font size="14px">您</font>选择的开办地点与相邻'+industry2.description+'不足100米，不符合'
				+industry1+'许可中关于同行业距离不应小于100米的规定，建议您更换开办地址</div>')
				// infocon.getItems().items[0].setHtml("行业：" + industry1
				// + industry2 + "&nbsp;&nbsp;&nbsp;&nbsp;地址：" + address);
				// this.getConfirm().add(infocon);
				// b 办事指南
				YongYou.util.DataApi.Core.getNodeBySubjectID(function(res, scope) {
							var bszn = Ext.create('YongYou.view.LawGuide', {});
							flowview = Ext.create('YongYou.flow.FlowViewport',
									{
										// id : 'confirm-flowviewport',
										// width : '100%',
										// height:'100%',
										title : '办事流程'
										// style : "margin-right:5px;!important"
								})
							flowview.initialPanelCard(res, 'confirm-');
							// bszn.add(flowview);
							scope.scope.getConfirm().add(flowview);
							scope.scope.getConfirm().add(scope.flfg);
							scope.scope.getConfirm().add(scope.yhzc);
							scope.scope.getConfirm().add(scope.zxhz);
						}, {
							'scope' : this,
							'zxhz' : infocon,
							'flfg' : flfg,
							'yhzc' : yhzc
						}, {
							'id' : industry2.id
						})

				Ext.ComponentQuery.query("container[id='contain2']")[0]
						.getLayout().setAnimation({
									type : 'slide',
									direction : 'left',
									duration : 250
								})
				// 页面跳转
				Ext.ComponentQuery.query("container[id='contain2']")[0]
						.setActiveItem('#ConfirmPanel2', {
									type : 'slide',
									direction : 'right',
									duration : 250
								});
				this.getNavibar().setTitle("咨询汇总");
			}
		});

// 定义一个控件类，即function
function ZoomControl() {
	// 设置默认停靠位置和偏移量
	this.defaultAnchor = BMAP_ANCHOR_TOP_RIGHT;
	this.defaultOffset = new BMap.Size(10, 10);
}

function setMap() {
	// ========================区域层及其功能部分=======================//
	var polygon1 = new BMap.Polygon([new BMap.Point(106.54253, 29.574688),
					new BMap.Point(106.538654, 29.579954),
					new BMap.Point(106.53422, 29.564098)], {
				fillColor : 'red'
			});

	polygon1.addEventListener("click", function() {
		map.removeOverlay(polygon1);
		map.removeOverlay(polygon2);
		var polygon_cur = new BMap.Polygon([
						new BMap.Point(106.54253, 29.574688),
						new BMap.Point(106.538654, 29.579954),
						new BMap.Point(106.53422, 29.564098)], {
					strokeWeight : 2,
					strokeColor : "blue",
					fillColor : 'red'
				});
		map.addOverlay(polygon_cur);
		map.centerAndZoom(point1, 17);

		point_cur = point1;
		var myIcon = new BMap.Icon("resources/img/map/cur_posi.png",
				new BMap.Size(32, 32));
		var marker_cur = new BMap.Marker(point_cur, {
					icon : myIcon
				});
		map.addOverlay(marker_cur);
		marker_cur.enableDragging();
		var infoWindow1 = new BMap.InfoWindow("我代表您选择的位置，<br/>请拖动我去您要选择的地方");
		marker_cur.openInfoWindow(infoWindow1);
		marker_cur.addEventListener("dragend", function(e) {
			if (confirm("您选择了" + e.point.lng + "  " + e.point.lat + "，是否进行验证？")) {
				point_cur = new BMap.Point(e.point.lng, e.point.lat);
				for (i = 0; i < array_about_map.length; i++) {
					array_about_map[i].closeInfoWindow();
					map.removeOverlay(array_about_map[i]);
				}
				Ext.ComponentQuery.query("#list_about_map")[0].getStore()
						.removeAll();
			}
		});
	});

	map.addOverlay(polygon1);
	var polygon2 = new BMap.Polygon([new BMap.Point(106.54253, 29.574688),
					new BMap.Point(106.538654, 29.579954),
					new BMap.Point(106.54586, 29.583942)], {
				fillColor : 'blue'
			});
	map.addOverlay(polygon2);
}

function initializeMap() {
	// ===========================地图初始化===========================//
	map = new BMap.Map("mapDiv");
	var point1 = new BMap.Point(106.54253, 29.574688);
	map.centerAndZoom(point1, 15);
	// ==========================地图重置控件==========================//
	ZoomControl.prototype = new BMap.Control();
	ZoomControl.prototype.initialize = function(map) {
		// 创建一个DOM元素
		var div = document.createElement("div");
		div.style.width = "64px";
		div.style.height = "64px";
		// div.style.backgroundColor = "red";
		div.style.backgroundImage = "url('resources/img/map/zoom_out.png')";
		// 绑定事件，点击一次放大两级

		div.onclick = function(e) {
			map.clearOverlays();
			Ext.ComponentQuery.query("#list_about_map")[0].getStore()
					.removeAll();
			array_about_map = [];
			map.centerAndZoom(point1, 15);
			point_cur = null;
			// ========================区域层及其功能部分=======================//
			var polygon1 = new BMap.Polygon([
							new BMap.Point(106.54253, 29.574688),
							new BMap.Point(106.538654, 29.579954),
							new BMap.Point(106.53422, 29.564098)], {
						fillColor : 'red'
					});

			polygon1.addEventListener("click", function() {
				map.removeOverlay(polygon1);
				map.removeOverlay(polygon2);
				var polygon_cur = new BMap.Polygon([
								new BMap.Point(106.54253, 29.574688),
								new BMap.Point(106.538654, 29.579954),
								new BMap.Point(106.53422, 29.564098)], {
							strokeWeight : 2,
							strokeColor : "blue",
							fillColor : 'red'
						});
				map.addOverlay(polygon_cur);
				map.centerAndZoom(point1, 17);

				point_cur = point1;
				var myIcon = new BMap.Icon("resources/img/map/cur_posi.png",
						new BMap.Size(32, 32));
				var marker_cur = new BMap.Marker(point_cur, {
							icon : myIcon
						});
				map.addOverlay(marker_cur);
				marker_cur.enableDragging();
				var infoWindow1 = new BMap.InfoWindow("我代表您选择的位置，<br/>请拖动我去您要选择的地方");
				marker_cur.openInfoWindow(infoWindow1);
				marker_cur.addEventListener("dragend", function(e) {
							if (confirm("您选择了" + e.point.lng + "  "
									+ e.point.lat + "，是否进行验证？")) {
								point_cur = new BMap.Point(e.point.lng,
										e.point.lat);
								for (i = 0; i < array_about_map.length; i++) {
									array_about_map[i].closeInfoWindow();
									map.removeOverlay(array_about_map[i]);
								}
								Ext.ComponentQuery.query("#list_about_map")[0]
										.getStore().removeAll();
							}
						});
			});

			map.addOverlay(polygon1);
			var polygon2 = new BMap.Polygon([
							new BMap.Point(106.54253, 29.574688),
							new BMap.Point(106.538654, 29.579954),
							new BMap.Point(106.54586, 29.583942)], {
						fillColor : 'blue'
					});
			map.addOverlay(polygon2);
		}
		// 添加DOM元素到地图中
		map.getContainer().appendChild(div);
		// 将DOM元素返回
		return div;
	}
	var myZoomCtrl = new ZoomControl();
	map.addControl(myZoomCtrl);

	// ========================区域层及其功能部分=======================//
	var polygon1 = new BMap.Polygon([new BMap.Point(106.54253, 29.574688),
					new BMap.Point(106.538654, 29.579954),
					new BMap.Point(106.53422, 29.564098)], {
				fillColor : 'red'
			});

	polygon1.addEventListener("click", function() {
		map.removeOverlay(polygon1);
		map.removeOverlay(polygon2);
		var polygon_cur = new BMap.Polygon([
						new BMap.Point(106.54253, 29.574688),
						new BMap.Point(106.538654, 29.579954),
						new BMap.Point(106.53422, 29.564098)], {
					strokeWeight : 2,
					strokeColor : "blue",
					fillColor : 'red'
				});
		map.addOverlay(polygon_cur);
		map.centerAndZoom(point1, 17);

		point_cur = point1;
		var myIcon = new BMap.Icon("resources/img/map/cur_posi.png",
				new BMap.Size(32, 32));
		var marker_cur = new BMap.Marker(point_cur, {
					icon : myIcon
				});
		map.addOverlay(marker_cur);
		marker_cur.enableDragging();
		var infoWindow1 = new BMap.InfoWindow("我代表您选择的位置，<br/>请拖动我去您要选择的地方");
		marker_cur.openInfoWindow(infoWindow1);
		marker_cur.addEventListener("dragend", function(e) {
			if (confirm("您选择了" + e.point.lng + "  " + e.point.lat + "，是否进行验证？")) {
				point_cur = new BMap.Point(e.point.lng, e.point.lat);
				for (i = 0; i < array_about_map.length; i++) {
					array_about_map[i].closeInfoWindow();
					map.removeOverlay(array_about_map[i]);
				}
				Ext.ComponentQuery.query("#list_about_map")[0].getStore()
						.removeAll();
			}
		});
	});

	map.addOverlay(polygon1);
	var polygon2 = new BMap.Polygon([new BMap.Point(106.54253, 29.574688),
					new BMap.Point(106.538654, 29.579954),
					new BMap.Point(106.54586, 29.583942)], {
				fillColor : 'blue'
			});
	map.addOverlay(polygon2);
}
