Ext.define('YongYou.view.ConfirmPanel', {
    extend: 'Ext.Panel',

    config: {
    	id:'ConfirmPanel',
    	layout: {
            type: 'vbox'
        },
    items:[
	    {
	        layout: {
	            align: 'start',
	            type: 'hbox'
	        },
	        items: [
	            {
	                xtype: 'button',
	                flex: 1,
	                margin: '10px 80px',
	                text: '信息确认',
	                listeners:
    	            {
    	                'tap': function (b, e) {
    	                	Ext.ComponentQuery.query("container[id='tabcontain']")[0]
    	        			.setActiveItem('#InformationConfirm');
    	                }
    	            }
	            },
	            {
	                xtype: 'button',
	                flex: 1,
	                margin: '10px 80px',
	                text: '办事指南',
	                listeners:
    	            {
    	                'tap': function (b, e) {
    	                	Ext.ComponentQuery.query("container[id='tabcontain']")[0]
    	        			.setActiveItem('#LawGuide');
    	                }
    	            }
	            },
	            {
	                xtype: 'button',
	                flex: 1,
	                margin: '10px 80px',
	                text: '相关优惠政策',
	                listeners:
    	            {
    	                'tap': function (b, e) {
    	                	Ext.ComponentQuery.query("container[id='tabcontain']")[0]
    	        			.setActiveItem('#PreferentialPolicies');
    	                }
    	            }
	            },
	            {
	                xtype: 'button',
	                flex: 1,
	                margin: '10px 80px',
	                text: '相关法律法规',
	                listeners:
    	            {
    	                'tap': function (b, e) {
    	                	Ext.ComponentQuery.query("container[id='tabcontain']")[0]
    	        			.setActiveItem('#Regulations');
    	                }
    	            }
	            }
	        ]
	    },
	    {
	    	xtype:'container',
	    	id:'tabcontain',
	        layout: {
	            type: 'card'
	        },
	        style:'border:2px solid blue;height:500px;',
	        items: [
                 Ext.create('YongYou.view.InformationConfirm',{}),
	             Ext.create('YongYou.view.LawGuide',{}),
	             Ext.create('YongYou.view.PreferentialPolicies',{}),
	             Ext.create('YongYou.view.Regulations',{})
	        ]
	    }
    ]}

});