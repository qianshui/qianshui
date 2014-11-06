Ext.define('YongYou.view.ConfirmPanel2', {
			extend : 'Ext.TabPanel',

			config : {
				id : 'ConfirmPanel2',
				fullscreen : true,
				width : '100%',
				hight : '100%',
				border : true,
				// style : "background-color:white;!important",
//				defaults : {
//					styleHtmlContent : true
//				},

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

				items : [
				// Ext.create('YongYou.view.InformationConfirm',{}),
				// Ext.create('YongYou.view.LawGuide',{}),
				// Ext.create('YongYou.view.PreferentialPolicies',{}),
				// Ext.create('YongYou.view.Regulations',{})
				]

			}

		});