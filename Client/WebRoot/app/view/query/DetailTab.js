
Ext.define('YongYou.view.query.DetailTab', {
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
			ui:'red',
			layout : {
				pack : 'center'
			}
		},
		items : []
	},
	initialPanel : function(flow) {

		if (flow) {
			
			YongYou.util.DataApi.Core.getNodeByFlowID(function(res, scope) {
			//	flowpanel= Ext.ComponentQuery.query("container[id='flowviewport']")[0];
			//if(!flowpanel){
				flowpanel = Ext.create('YongYou.flow.FlowViewport', {
							title : '办事流程'
							
						})
						//}
				flowpanel.initialPanelCard(res, scope.id + '-');
				scope.add(flowpanel);
				if (flow.subjectId) {
					YongYou.util.DataApi.Core.getLawsByIndustryID(function(res,
									scope) {
								if (res) {
									lawres = Ext.decode(res);
									if(lawres.length==0)
									{
										var myobj={imgId:"logo.gif",title:"木有数据！"
											,subtitle:"真的木有数据！",content:"",id:""};
										lawres.push(myobj);
									}
									lawpanel = Ext.create(
											'YongYou.view.query.DetailList', {
												title : '法律法规',
												type : 'fg'
											})
									store = new Ext.data.Store({
												autoLoad : true,
												model : 'YongYou.model.ListItem',
												data : lawres
											}), lawpanel.getItems().items[0]
											.setStore(store)
									// .add(res);
									scope.add(lawpanel);
								}

							}, scope, {
								'id' : flow.subjectId
							});

					YongYou.util.DataApi.Core.getPolicyByIndustryID(function(
									res, scope) {
								if (res) {
									pres = Ext.decode(res);
									if(pres.length==0)
									{
										var myobj={imgId:"logo.gif",title:"木有数据！"
											,subtitle:"真的木有数据！",content:"",id:""};
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
											}), policypanel.getItems().items[0]
											.setStore(store)// .add(res);
									scope.add(policypanel);
								}

							}, scope, {
								'id' : flow.subjectId
							});
				}

			}, this, {
				'id' : flow.id
			});

		}
	}
});