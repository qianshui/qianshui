Ext.define('YongYou.view.config.grid.AddPeitaoGrid', {
			extend : 'Ext.Panel',
			height : 200,
			width : 200,
			layout: {
		        type: 'table',
		        // The total column count must be specified here
		        columns: 2
		    },
			scrollable : true,
			items:[
				{
				   xtype:'combobox',
				   fieldLabel: '选择配套类型：',
				   colspan: 2,
				   store: Ext.create('Ext.data.Store', {
					    fields: ['abbr', 'name'],
					    data : [
					        {"abbr":"学校", "name":"学校"},
					        {"abbr":"医院", "name":"医院"},
					        {"abbr":"公园", "name":"公园"}
					    ]
					}),
				   queryMode: 'local',
				   displayField: 'name',
				   valueField: 'abbr',
				   id:'pttype'
				},
		       {
		           xtype:'textarea',
		           fieldLabel: '配套地址名称：<br>(可逗号分隔)',
		           colspan: 2,
		           id:'ptlist',
		       },
		       {
		    	   xtype:'button',
		    	   text: 'Click me to commit !',
		    	   width:255,
		    	   colspan: 2,
		    	   handler: function() {
			    	    var pl=Ext.getCmp("ptlist").getValue();
			    	    var pt=Ext.getCmp("pttype").getValue();
		    	        YongYou.util.DataApi.Core.addPeitaoInfo(function(res, scope){
		    	        	alert(res);
		    	        },{
		    	        	scope:this
		    	        },{
		    	        	ptl:pl,
		    	        	ptt:pt
		    	        });
		    	   }
		       }
			]
		});
