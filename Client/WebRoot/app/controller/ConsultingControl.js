/**
 * 
 */
Ext.define('YongYou.controller.ConsultingControl', {
			extend : 'Ext.app.Controller',
			QueryType : null,
			config : {
				refs : {
					subject : 'subject',
					industry : '#IndustrylistPanel',
					address : 'selectaddress',
					confirm : '#ConfirmPanel2',

					naviback : '#navibar_back',
					mapconfirm : '#map_confirm',
					navibar : '#navigationbar',
						
				    yhzc_list:'#yhzc_list',
				    flfg_list:'#flfg_list'
				},

				control : {
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
						tap : 'onMapconfirmTap'
					}
				},

				currentRecord : null,

				stack : []
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
							//'HYID' : record.internalId
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
							//'HYID' : record.internalId
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
				// a 信息确认
				var infocon = Ext.create('YongYou.view.InformationConfirm', {});
				infocon.getItems().items[0].setHtml("行业：" + industry1
						+ industry2 + "&nbsp;&nbsp;&nbsp;&nbsp;地址：" + address);
				this.getConfirm().add(infocon);
				// b 办事指南

				YongYou.util.DataApi.Core.getNodeByFlowID(function(res, scope) {
					var bszn = Ext.create('YongYou.view.LawGuide', {});
							flowview = Ext.create('YongYou.flow.FlowViewport',
									{
										id : 'confirm-flowviewport',
										width : '95%',
										height:'95%',
										style : "margin-right:20px;!important"
									})
							flowview.initialPanelCard(res,'confirm-');
							bszn.add(flowview)
							scope.getConfirm().add(bszn);
						}, this, {
							'id' : 'FL002'
						})

				// c 优惠政策
//				var yhzc = Ext.create('YongYou.view.PreferentialPolicies', {});
//				YongYou.util.DataApi.Core.getFG(function(res, scope) {
//							scope.getItems().items[0].setHtml(res);
//						}, yhzc, {
//							'ID' : 'FG01'
//						});
//				this.getConfirm().add(yhzc);
				var yhzc = Ext.create('YongYou.view.QueryPanelDetailList', {});
				YongYou.util.DataApi.Core.getZC(function(res, scope) {
					        res = Ext.decode(res);
					        scope.getYhzc_list().getStore().removeAll();
					        scope.getYhzc_list().getStore().add(res);
						}, this, {
							'id' : 'SJ0001'
						});
				this.getConfirm().add(yhzc);
				// d 法律法规
				var flfg = Ext.create('YongYou.view.FlfgDetailList', {});
				YongYou.util.DataApi.Core.getFG(function(res, scope) {
					        res = Ext.decode(res);
					        scope.getFlfg_list().getStore().removeAll();
					        scope.getFlfg_list().getStore().add(res);
						}, this, {
							'id' : 'SJ0001'
						});
				this.getConfirm().add(flfg);
//				var flfg = Ext.create('YongYou.view.Regulations', {});
//				YongYou.util.DataApi.Core.getFG(function(res, scope) {
//							scope.getItems().items[0].setHtml(res);
//						}, flfg, {
//							'ID' : 'FG02'
//						});
//				this.getConfirm().add(flfg);
				// 页面跳转
				Ext.ComponentQuery.query("container[id='contain2']")[0]
						.setActiveItem('#ConfirmPanel2', {
									type : 'slide',
									direction : 'right',
									duration : 250
								});
				this.getNavibar().setTitle("信息确认");
			}
		});

function initializeMap() {
	map = new BMap.Map("mapDiv");
	var point1 = new BMap.Point(106.53422, 29.564098);
	map.centerAndZoom(point1, 15);

	var polygon1 = new BMap.Polygon([new BMap.Point(106.54253, 29.574688),
					new BMap.Point(106.538654, 29.579954),
					new BMap.Point(106.53422, 29.564098)], {
				fillColor : 'red'
			});
	map.addOverlay(polygon1);
	var polygon2 = new BMap.Polygon([new BMap.Point(106.54253, 29.574688),
					new BMap.Point(106.538654, 29.579954),
					new BMap.Point(106.54586, 29.583942)], {
				fillColor : 'blue'
			});
	map.addOverlay(polygon2);
	// var myIcon = new BMap.Icon("resources/img/biaoshi.png", new
	// BMap.Size(80,120));
	// var marker2 = new BMap.Marker(point1); // 创建标注
	// map.addOverlay(marker2);
	// var infoWindow1 = new BMap.InfoWindow("普通标注");
	// marker2.addEventListener("click",
	// function(){this.openInfoWindow(infoWindow1);});

	// map.addEventListener("click", function(e){
	// YongYou.util.DataApi.Core.judge_adrs(
	// function(res,obj){
	// alert(res);
	// },map,e.point.lng + ", " + e.point.lat);
	// });
}
