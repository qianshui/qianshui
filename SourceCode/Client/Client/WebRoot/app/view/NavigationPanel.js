Ext.define('YongYou.view.NavigationPanel', {
    extend: 'Ext.Container',
    requires:['YongYou.view.SubjectPanel','YongYou.view.IndustrylistPanel','YongYou.view.SelectAddressPanel',
    'YongYou.view.OneIndustryPanel','YongYou.view.ConfirmPanel'],
    
    config: {
    	id:'ttd2',
        items: [
            {
            	id:'contain2',
                xtype: 'container',
                height: '100%',
                right: 0,
                cls: 'card card2',//重点理解
                //style: 'text-align:center;border: none',
                layout: {
            		type: 'card',//重点理解
            		animation: {
                		type: 'slide',
                		direction: 'left',
                		duration: 250
            		}
        		},
                //defaults : {flex : 3},//重点理解
                cardAnimation : 'slide',
                width: '100%',
                items: [
                	{
                		id:'navigationbar',
                 		docked: 'top',
              			xtype: 'titlebar',
              			title: 'Navigation',
              			items: [
              			    {
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
        					},
        					{
        						id:'navibar_back',
           					 	iconCls: 'arrow_left',
            					align: 'left',
            					listeners:
            					{
                					'tap': function (b, e) {
                						
//                						var activeid=Ext.ComponentQuery.query("container[id='contain2']")[0]
//                						.getActiveItem().getId();
//                						Ext.ComponentQuery.query("container[id='contain2']")[0]
//										.getLayout().setAnimation({type: 'slide',direction: 'right',duration: 250}) 
//                						if(activeid=='ConfirmPanel2')
//                						{
//                							Ext.ComponentQuery.query("container[id='contain2']")[0]
//                    						.setActiveItem("#OneIndustryPanel", {
//                            					type: 'slide',
//                            					direction: 'right',
//                            					duration:250
//                        						});
//                						}else if(activeid=='OneIndustryPanel')
//                						{
//                							Ext.ComponentQuery.query("container[id='contain2']")[0]
//                    						.setActiveItem("#SelectAddressPanel", {
//                            					type: 'slide',
//                            					direction: 'right',
//                            					duration:250
//                        						});
//                						}else if(activeid=='SelectAddressPanel')
//                						{
//                							Ext.ComponentQuery.query("container[id='contain2']")[0]
//                    						.setActiveItem("#IndustrylistPanel", {
//                            					type: 'slide',
//                            					direction: 'right',
//                            					duration:250
//                        						});
//                						}else if(activeid=='IndustrylistPanel')
//                						{
//                							Ext.ComponentQuery.query("container[id='contain2']")[0]
//                    						.setActiveItem("#SubjectPanel", {
//                            					type: 'slide',
//                            					direction: 'right',
//                            					duration:250
//                        						});
//                						}else if(activeid=='SubjectPanel')
//                						{
//                							Ext.Viewport.setActiveItem('#main', {
//                            					type: 'slide',
//                            					direction: 'right',
//                            					duration:250
//                        						});
//                						}
                					}
            					}
        					}
    					]
              		}, 
              		Ext.create('YongYou.view.SubjectPanel',{}),
              		Ext.create('YongYou.view.IndustrylistPanel',{}),
              		Ext.create('YongYou.view.SelectAddressPanel',{}),
        			Ext.create('YongYou.view.OneIndustryPanel',{}),
        			Ext.create('YongYou.view.ConfirmPanel2',{})
                	]
            }
        ]    
    }
//	initialPanel:function(jsonStr){
//		var menuStore=new Ext.data.TreeStore({         			
//        			autoLoad: true,
//					model:'YongYou.model.QueryMenu',
//        			storeId: 'QueryMenu',
//        			nodeParam:'key',
//        			proxy:{
//                 			type:'ajax',
//                 			url:YongYou.util.Config.getWebsite()+"Resource/find",
//                 			reader: 'json'
//  						},
//               		root:{ 
//                    		label:'根节点', 
//                  			expanded : true,//根节点是否展开 
//                    		id:'1' 
//               		}
//		});
//		var menuList=Ext.create('YongYou.view.QueryPanelNestedList', {
//            		store:menuStore,getItemTextTpl: function(recordnode) {  return '<div><strong>{label}</strong></div>';}});
//        this.add(menuList);
//   }
});