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

					other_address:'#get_address',
					other_industry:'#get_industry',
					other_subclass:'#get_subclass',
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
				YongYou.util.DataApi.Core.getAreasOfJiangbei(function(res, scope) {
					res = Ext.decode(res);

					commonAdlist=new Array();
					
					for(var adi in res)
					{
//						if(res[adi].commonFlag==1)
//						{
//							commonAdlist.push(res[adi]);
//						}
//						else
//						{
//							otherAdlist.push({text:res[adi].name,value:res[adi].id});
//						}
						commonAdlist.push(res[adi]);
					}
					
					scope.getAddress().getStore().removeAll();
					scope.getAddress().getStore().add(commonAdlist);
					//scope.getOther_address().setOptions(otherAdlist);
					
					//页面切换
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
				prsngrp=record;
			},
			onSubjectItemTap : function(view, index, target, record, e) {
				
				YongYou.util.DataApi.Core.getCommonIndustry(
						function(res, scope) {
							res = Ext.decode(res);

						    
							commonIdlist=new Array();
							otherIdlist=new Array();
							for(var adi in res)
							{
								
								if(res[adi].commonFlag==1)
								{
									
									commonIdlist.push(res[adi]);
								}
								else
								{
									
									otherIdlist.push({text:res[adi].title,value:res[adi].id});
								}
							}

							scope.getIndustry().getStore().removeAll();
							scope.getIndustry().getStore().add(commonIdlist);
							scope.getOther_industry().setOptions(otherIdlist);

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
						   'id' : record.id
						});
				industry1 = record;

			},
			onIndustryListItemTap : function(view, index, target, record, e) {

				Ext.ComponentQuery
						.query("container[id='contain2']")[0]
						.getLayout().setAnimation({
									type : 'slide',
									direction : 'left',
									duration : 250
								})

				Ext.ComponentQuery
						.query("container[id='contain2']")[0]
						.setActiveItem('#SelectPeoplePanel', {
									type : 'slide',
									direction : 'right',
									duration : 250
								});
				this.getNavibar().setTitle("选择人群");
				industry2 = record;
				
			},
			onAddressItemTap : function(view, index, target, record, e) {
				
				//areaname——全局变量
				areaname=record.strName;
				YongYou.util.DataApi.Core.getStreetList(function(res, scope) {
					res = Ext.decode(res);
					streetlist=new Array();
					for(var sti in res)
					{
                        streetlist.push({text:res[sti].name,value:res[sti].id
                        	,strLat:res[sti].strLat,strLng:res[sti].strLng});//携带坐标信息
					}
					scope.scope.getOther_address().setOptions(streetlist);
					//scope.me.element.addCls('hover');
					//scope.getNavibar().setTitle("选择地址");
					
				}, {scope:this,me:view}, {
				  'areaid' : record.id
				});
				
//==========================老代码==14-11-8废弃================================//
//				Ext.ComponentQuery.query("container[id='contain2']")[0]
//						.getLayout().setAnimation({
//									type : 'slide',
//									direction : 'left',
//									duration : 250
//								})
//
//				Ext.ComponentQuery.query("container[id='contain2']")[0]
//						.setActiveItem('#OneIndustryPanel', {
//									type : 'slide',
//									direction : 'right',
//									duration : 250
//								});
//				address = record;
//				this.getNavibar().setTitle("地图点选");
//				
//				point_cur = null;
//				array_about_map = new Array();
//				new Ext.onReady(initializeMap, 
//						{
//							me : navigationPanel,
//							firewho : address.strName
//						});
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
							.setActiveItem("#SelectPeoplePanel", {
										type : 'slide',
										direction : 'right',
										duration : 250
									});
					this.getNavibar().setTitle("选择人群");
				} else if (activeid == 'SelectPeoplePanel') {
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
			
			onMapconfirmTap : function(b, e) {
				//初始验证阶段，如果未获取到具体地址信息，则提示返回
				if(point_cur==null){
					alert("您尚未选择具体位置！");
					return;
				}
				// 汇总页初始化阶段
				this.getConfirm().removeAll();
				// d 法律法规
				var flfg = Ext.create('YongYou.view.FlfgDetailList', {});
				YongYou.util.DataApi.Core.getFG(function(res, scope) {
							res = Ext.decode(res);
							//alert(res.length==0);
							if(res.length==0)
							{
								var myobj={imgId:"logo.gif",title:"木有数据！"
									,subtitle:"真的木有数据！",content:"",id:""};
								res.push(myobj);
							}
							scope.getFlfg_list().getStore().removeAll();
							scope.getFlfg_list().getStore().add(res);
						}, this, {
							'id' : industry2.id
						});
				// c 优惠政策
				var yhzc = Ext.create('YongYou.view.QueryPanelDetailList', {});
				YongYou.util.DataApi.Core.getZC(function(res, scope) {
							res = Ext.decode(res);
							if(res.length==0)
							{
								var myobj={imgId:"logo.gif",title:"木有数据！"
									,subtitle:"真的木有数据！",content:"",id:""};
								res.push(myobj);
							}
							scope.getYhzc_list().getStore().removeAll();
							scope.getYhzc_list().getStore().add(res);
						}, this, {
							'id' : industry2.id,
							'pg' : prsngrp.id
						});
				// a 信息确认

				var infocon = Ext.create('YongYou.view.InformationConfirm', {});
				infocon.setSelectValue(industry1.description + '&nbsp;&nbsp;' + industry2.description,
						prsngrp.description, areaname+"&nbsp;&nbsp;"+address.name);
				// a-1 通过经纬度获取地址名称==========老代码14-11-09废弃
//                YongYou.util.DataApi.Core.getAdnameByPoint(function(res, scope) {
//					
//                	scope.setSelectValue(industry1.description + '业&nbsp;&nbsp;' + industry2.description,
//    						prsngrp.description, address.name+"  "+res);
//				}, infocon,
//				{
//					'lat' : point_cur.lat,
//					'lng' : point_cur.lng
//				});
				// a-2 通过经纬度获取周边配套
				YongYou.util.DataApi.Core.getZbptByPoint(function(res, scope) {
					res = Ext.decode(res);
					var strXueXiao="";
					var strGongYuan="";
					var strYiYuan="";
					var strJiaoTong="";
					var strXiaoQu="";
					var strShangWu="";
					for(var ii=0;ii<res.length;ii++)
					{
						
						if(res[ii].strType=="学校")
						{
							strXueXiao=strXueXiao+res[ii].name.split("<br>")[0]+"、";
						}
						else if(res[ii].strType=="公园")
						{
							strGongYuan=strGongYuan+res[ii].name.split("<br>")[0]+"、";
						}
						else if(res[ii].strType=="医院")
						{
							strYiYuan=strYiYuan+res[ii].name.split("<br>")[0]+"、";
						}
						else if(res[ii].strType=="公交站")
						{
							strJiaoTong=strJiaoTong+res[ii].name.split("<br>")[0]+"、";
						}
						else if(res[ii].strType=="小区")
						{
							strXiaoQu=strXiaoQu+res[ii].name.split("<br>")[0]+"、";
						}
						else if(res[ii].strType=="商务")
						{
							strShangWu=strShangWu+res[ii].name.split("<br>")[0]+"、";
						}
					}
					scope.setAroundValue({
								xuexiao : strXueXiao,
								shangye : strShangWu,
								jiaotong : strJiaoTong,
								gongyuan : strGongYuan,
								biaojian : strXiaoQu,
								yiyuan : strYiYuan,
								xiaoqu : strXiaoQu
							})
					
				}, infocon,
				{
					'lat' : point_cur.lat,
					'lng' : point_cur.lng,
					'ptype':'null'
				});
				// a-3 通过综合信息获取投资建议
				YongYou.util.DataApi.Core.getTzjyByInfo(function(res, scope) {
					
                	scope.setAdviseValue('<div style="margin-left:20px;"><font size="14px">您</font>选择的开办地点与相邻'+industry2.description+'不足100米，不符合'
        					+industry1.description+'许可中关于同行业距离不应小于100米的规定，建议您更换开办地址</div>')
        					
				}, infocon,
				{
					'ids1' : industry1.id,
					'ids2' : industry2.id,
					'lat' : point_cur.lat,
					'lng' : point_cur.lng,
					'tzr' : prsngrp.id
				});
				// b 办事指南
				YongYou.util.DataApi.Core.getNodeBySubjectID(function(res, scope) {
							//var bszn = Ext.create('YongYou.view.LawGuide', {});
							flowview = Ext.create('YongYou.flow.FlowViewport',
									{
										title : '办事流程'
							});
							items = Ext.decode(res);
							if(items.length>0)
							{
								flowview.initialPanelCard(res, 'confirm-');
							}
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

function initializeMap() {
	// ===========================地图初始化===========================//
	point_cur = null;
	array_about_map = new Array();
	
	map = new BMap.Map("mapDiv");
	//var point1 = new BMap.Point(106.54253, 29.574688);
	//map.centerAndZoom(point1, 15);
	// ==========================地图重置控件==========================//
//	ZoomControl.prototype = new BMap.Control();
//	ZoomControl.prototype.initialize = function(map) {
//		// 创建一个DOM元素
//		var div = document.createElement("div");
//		div.style.width = "64px";
//		div.style.height = "64px";
//		// div.style.backgroundColor = "red";
//		div.style.backgroundImage = "url('resources/img/map/zoom_out.png')";
//		// 绑定事件，点击一次放大两级
//
//		div.onclick = function(e) {
//			map.clearOverlays();
//			Ext.ComponentQuery.query("#list_about_map")[0].getStore()
//					.removeAll();
//			array_about_map = [];
//			map.centerAndZoom(point1, 15);
//			point_cur = null;
//			// ========================区域层及其功能部分=======================//
//			var polygon1 = new BMap.Polygon([
//							new BMap.Point(106.54253, 29.574688),
//							new BMap.Point(106.538654, 29.579954),
//							new BMap.Point(106.53422, 29.564098)], {
//						fillColor : 'red'
//					});
//
//			polygon1.addEventListener("click", function() {
//				map.removeOverlay(polygon1);
//				map.removeOverlay(polygon2);
//				var polygon_cur = new BMap.Polygon([
//								new BMap.Point(106.54253, 29.574688),
//								new BMap.Point(106.538654, 29.579954),
//								new BMap.Point(106.53422, 29.564098)], {
//							strokeWeight : 2,
//							strokeColor : "blue",
//							fillColor : 'red'
//						});
//				map.addOverlay(polygon_cur);
//				map.centerAndZoom(point1, 17);
//
//				point_cur = point1;
//				var myIcon = new BMap.Icon("resources/img/map/cur_posi.png",
//						new BMap.Size(32, 32));
//				var marker_cur = new BMap.Marker(point_cur, {
//							icon : myIcon
//						});
//				map.addOverlay(marker_cur);
//				marker_cur.enableDragging();
//				var infoWindow1 = new BMap.InfoWindow("我代表您选择的位置，<br/>请拖动我去您要选择的地方");
//				marker_cur.openInfoWindow(infoWindow1);
//				marker_cur.addEventListener("dragend", function(e) {
//							if (confirm("您选择了" + e.point.lng + "  "
//									+ e.point.lat + "，是否进行验证？")) {
//								point_cur = new BMap.Point(e.point.lng,
//										e.point.lat);
//								for (i = 0; i < array_about_map.length; i++) {
//									array_about_map[i].closeInfoWindow();
//									map.removeOverlay(array_about_map[i]);
//								}
//								Ext.ComponentQuery.query("#list_about_map")[0]
//										.getStore().removeAll();
//							}
//						});
//			});
//
//			map.addOverlay(polygon1);
//			var polygon2 = new BMap.Polygon([
//							new BMap.Point(106.54253, 29.574688),
//							new BMap.Point(106.538654, 29.579954),
//							new BMap.Point(106.54586, 29.583942)], {
//						fillColor : 'blue'
//					});
//			map.addOverlay(polygon2);
//		}
//		// 添加DOM元素到地图中
//		map.getContainer().appendChild(div);
//		// 将DOM元素返回
//		return div;
//	}
//	var myZoomCtrl = new ZoomControl();
//	map.addControl(myZoomCtrl);

	// ========================区域层及其功能部分=======================//
	// 模拟数据提供部分，做到与服务器或得到的完全一致
//	var ppt1={strName:"观音桥",strLat:"29.564098",strLng:"106.53422"
//		,strArea:"106.54253,29.574688;106.538654,29.579954;106.53422,29.564098;"};
//	var ppt2={strName:"华新街",strLat:"29.583942",strLng:"106.54586"
//		,strArea:"106.54253,29.574688;106.538654,29.579954;106.54586,29.583942;"};
//	var ppts=[ppt1,ppt2];
	
	YongYou.util.DataApi.Core.getAreasOfJiangbei(function(res, scope) {
//		res = Ext.decode(res);
//		//描画图层的部分
//		polygonArr=new Array();
//		//alert(point_cur);
//		for(i=0;i<res.length;i++)
//		{
//			var polygoni = new BMap.Polygon(res[i].strArea, {
//				fillColor : 'red'
//			});
//			polygoni.mycnt=new BMap.Point(Number(res[i].strLng),Number(res[i].strLat));
//			polygoni.strname=res[i].strName;
//			polygoni.addEventListener("click", function() {
//
//				for(j=0;j<polygonArr.length;j++)
//				{
//					map.removeOverlay(polygonArr[j]);
//				}
//				polygonArr=[];
//				map.centerAndZoom(this.mycnt, 17);
//			
//				point_cur = this.mycnt;
//				var myIcon = new BMap.Icon("resources/img/map/cur_posi.png",
//						new BMap.Size(32, 32));
//				var marker_cur = new BMap.Marker(point_cur, {
//							icon : myIcon
//						});
//				map.addOverlay(marker_cur);
//				marker_cur.enableDragging();
//				var infoWindow1 = new BMap.InfoWindow("我代表您选择的位置，<br/>请拖动我去您要选择的地方");
//				marker_cur.openInfoWindow(infoWindow1);
//				marker_cur.addEventListener("dragend", function(e) {
//					if (confirm("您选择了" + e.point.lng + "  " + e.point.lat + "，是否进行验证？")) {
//						point_cur = new BMap.Point(e.point.lng, e.point.lat);
//						for (i = 0; i < array_about_map.length; i++) {
//							array_about_map[i].closeInfoWindow();
//							map.removeOverlay(array_about_map[i]);
//						}
//						Ext.ComponentQuery.query("#list_about_map")[0].getStore()
//								.removeAll();
//					}
//				});
//				
//				address={name:this.strname,id:""};
//				
//			});
//			map.addOverlay(polygoni);
//			polygonArr.push(polygoni);
//		}
		
		//======================判断是否需要打开某区域=====================//
		
		if(scope.firewho!=null)
		{
//			var ppidx=0;
//			for(i=0;i<polygonArr.length;i++)
//			{
//				if(scope.firewho==polygonArr[i].strname)
//				{
//					ppidx=i;
//				}
//			}
//			for(j=0;j<polygonArr.length;j++)
//			{
//				map.removeOverlay(polygonArr[j]);
//			}
			point_cur = new BMap.Point(scope.firewho.strLng, scope.firewho.strLat);
			map.centerAndZoom(point_cur, 17);//@@@设置地图中心的代码
	        
	        //polygonArr=[];
	        
			var myIcon = new BMap.Icon("resources/img/map/cur_posi.png",
					new BMap.Size(32, 32));
			var marker_cur = new BMap.Marker(point_cur, {
						icon : myIcon
					});
			map.addOverlay(marker_cur);
			//marker_cur.enableDragging();
			//var infoWindow1 = new BMap.InfoWindow("我代表您选择的位置，<br/>请拖动我去您要选择的地方");
			//marker_cur.openInfoWindow(infoWindow1);
//			marker_cur.addEventListener("dragend", function(e) {
//				if (true) {
//					point_cur = new BMap.Point(e.point.lng, e.point.lat);
//					for (i = 0; i < array_about_map.length; i++) {
//						array_about_map[i].closeInfoWindow();
//						map.removeOverlay(array_about_map[i]);
//					}
//					Ext.ComponentQuery.query("#list_about_map")[0].getStore()
//							.removeAll();
//				}
//			});
		}
	}, this, {
		//'id' : industry2.id
	});
	
}
