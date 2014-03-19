Ext.define('YongYou.view.ConfirmPanel2', {
			extend : 'Ext.TabPanel',

			config : {
				id : 'ConfirmPanel2',
				fullscreen : true,
				style : "background-color:white;!important",
				defaults : {
					styleHtmlContent : true
				},

				tabBar : {
					layout : {
						pack : 'center'
					},
					style : 'background:#99FFFF'
				},

				items : [
				// Ext.create('YongYou.view.InformationConfirm',{}),
				// Ext.create('YongYou.view.LawGuide',{}),
				// Ext.create('YongYou.view.PreferentialPolicies',{}),
				// Ext.create('YongYou.view.Regulations',{})
				]

			}

		});