Ext.define('YongYou.view.NavigationPanel', {
    extend: 'Ext.Container',
    requires:['YongYou.view.SubjectPanel','YongYou.view.IndustrylistPanel','YongYou.view.SelectAddressPanel',
    'YongYou.view.OneIndustryPanel','YongYou.view.ConfirmPanel2'],
    
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
              			ui : 'red',
            			height:'60px',
            			//width:'',
            			layout : {
            				pack : 'center'
            			},
            			style:'font-size:30px;color:white;background: -webkit-linear-gradient(left, rgba(169,3,41,1) 71%,rgba(109,0,25,1) 100%);!important;',
              			title: 'Navigation',
              			items: [
              			    {
           					 	iconCls: 'home',
           					    ui : 'action',
           					    style:"background:#8d2324",
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
           					    ui : 'action',
           					    style:"background:#8d2324",
           					    align: 'left',
            					listeners:
            					{
                					'tap': function (b, e) {
                						
                					}
            					}
        					}
    					]
              		}, 
              		
              		Ext.create('YongYou.view.SubjectPanel',{}),
              		Ext.create('YongYou.view.IndustrylistPanel',{}),
              		Ext.create('YongYou.view.SelectPeoplePanel',{}),
              		Ext.create('YongYou.view.SelectAddressPanel',{}),
        			Ext.create('YongYou.view.OneIndustryPanel',{}),
        			Ext.create('YongYou.view.ConfirmPanel2',{})
                	]
            }
        ]    
    }

});