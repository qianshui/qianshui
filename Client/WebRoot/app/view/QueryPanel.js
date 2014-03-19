Ext.define('YongYou.view.QueryPanel', {
    extend: 'Ext.Container',
    requires:['YongYou.view.QueryPanelNestedList','YongYou.model.QueryMenu',
    'YongYou.view.QueryPanelMain','YongYou.view.QueryPanelCategory','YongYou.view.QueryPanelSubject',
    'YongYou.view.QueryPanelDetailList'],
    
    config: {
    	id:'ttd',
        items: [
            {
            	id:'contain',
                xtype: 'container',
                height: '100%',
                right: 0,
                cls: 'card card2',
                style: 'text-align:center;border: none',
                layout: {
            		type: 'card',
            		animation: {
                		type: 'slide',
                		direction: 'left',
                		duration: 250
            		}
        		},
                defaults : {flex : 3},
                cardAnimation : 'slide',
                width: '82%',
                items: [
                	{
                 		docked: 'top',
              			xtype: 'titlebar',
              			title: '办事指南',
              			items: [{
           					 	iconCls: 'home',
            					align: 'right',
            					listeners:
            					{
                					'tap': function (b, e) {
                   							Ext.Viewport.setActiveItem('#main', {
                        					type: 'slide',
                        					direction: 'right',
                        					duration:250
                    						});
                					}
            					}
        					}
    					]
              		}, 
              		Ext.create('YongYou.view.QueryPanelMain',{cls:'card-item'}),
              		Ext.create('YongYou.view.QueryPanelCategory',{cls:'card-item'}),
              		Ext.create('YongYou.view.QueryPanelSubject',{cls:'card-item'}),
        			Ext.create('YongYou.view.QueryPanelDetailList',{cls:'card-item'}),
        			Ext.create('YongYou.flow.FlowViewport', {id:'queryPanel-flowviewport'})
                	]
            }
        ]    
    },
	initialPanel:function(jsonStr){
		var menuStore=new Ext.data.TreeStore({         			
        			autoLoad: true,
					model:'YongYou.model.QueryMenu',
        			storeId: 'QueryMenu',
        			nodeParam:'key',
        			proxy:{
                 			type:'ajax',
                 			url:YongYou.util.Config.getWebsite()+"Resource/find",
                 			reader: 'json'
  						},
               		root:{ 
                    		label:'根节点', 
                  			expanded : true,//根节点是否展开 
                    		id:'1' 
               		}
		});
		var menuList=Ext.create('YongYou.view.QueryPanelNestedList', {
            		store:menuStore,getItemTextTpl: function(recordnode) {  return '<div><strong>{label}</strong></div>';}});
        this.add(menuList);
   }
});