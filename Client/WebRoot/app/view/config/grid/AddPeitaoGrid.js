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
		           xtype:'textarea',
		           fieldLabel: 'Name',
		           colspan: 2
		       },
		       {
		    	   xtype:'button',
		    	   text: 'Click me',
		    	   width:255,
		    	   colspan: 2
		       }
			]
		});
