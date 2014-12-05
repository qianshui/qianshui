
Ext.define('YongYou.view.query.staticDetailTab', {
	extend : 'Ext.TabPanel',
	requires : [],
	config : {
		// id : 'query-DetailTab',
		fullscreen : true,
		width : '100%',
		hight : '100%',
		border : true,
		activeTab : 0,
		title : '详细信息',
		tabBar : {
			ui : 'red',
			height:'60px',
			//width:'',
			layout : {
				pack : 'center'
			},
			style:'font-size:30px;',
			// style : 'background:#99FFFF'
		},
		items : []
	},
	initialPanel : function(flow) {

		if (flow) {
			
			YongYou.util.DataApi.Core.getNodeByFlowID(function(res, scope) {
			//	flowpanel= Ext.ComponentQuery.query("container[id='flowviewport']")[0];
			//if(!flowpanel){
				flowpanel = Ext.create('YongYou.staticflow.staticFlowViewport', {
							title : '办事流程'
							
						})
						//}
				flowpanel.initialPanelCard(res, scope.id + '-');
				scope.add(flowpanel);
				if (flow.subjectId) {
					lawpanel = Ext.create(
							'YongYou.view.query.DetailList', {
								title : '法律法规',
								type : 'fg'
							});
					YongYou.util.DataApi.Core.getLawsByIndustryID(function(res,
									scope) {
								if (res) {
									lawres = Ext.decode(res);
									if(lawres.length==0)
									{
										var myobj={imgId:"logo.gif",title:"暂无数据！"
											,subtitle:"法律法规数据即将上线！",content:"",id:""};
										lawres.push(myobj);
									}
									
									store = new Ext.data.Store({
												autoLoad : true,
												model : 'YongYou.model.ListItem',
												data : lawres
											});
									scope.getItems().items[0]
											.setStore(store)
									//scope.add(lawpanel);
								}

							}, lawpanel, {
								'id' : flow.subjectId
							});

					YongYou.util.DataApi.Core.getPolicyByIndustryID(function(
									res, scope) {
								if (res) {
									pres = Ext.decode(res);
									if(pres.length==0)
									{
										var myobj={imgId:"logo.gif",title:"暂无数据！"
											,subtitle:"优惠政策即将上线！",content:"",id:""};
										pres.push(myobj);
									}
									policypanel = Ext.create(
											'YongYou.view.query.DetailList', {
												title : '优惠政策',
												type : 'zc'
											})
									store = new Ext.data.Store({
												autoLoad : true,
												model : 'YongYou.model.ListItem',
												data : pres
											});
									policypanel.getItems().items[0]
											.setStore(store)// .add(res);
									scope.scope.add(policypanel);
									scope.scope.add(scope.lawpanel);
								}

							}, {scope:scope,lawpanel:lawpanel}, {
								'id' : flow.subjectId
							});
				}

			}, this, {
				'id' : flow.id
			});

		}
	}
});