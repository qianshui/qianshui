Ext.define('YongYou.view.OneIndustryPanel', {
	extend : 'Ext.form.Panel',

	config : {
		id : 'OneIndustryPanel',
		scrollable : false,
		style : "background-color:white;!important",
		items : [
		{
			xtype:'container',
			height : '100%',
			width : '25%',
			docked : 'left',
			style:'border:1px gray solid;',
			layout : {
				type : 'vbox'
			},
			items:[{
				xtype:'dataview',
				scrollable : false,
				flex:1,
			    store: {
			        fields: ['name'],
			        data: [
			            {name: '行业占比'},
			            {name: '周边配套'},
			            {name: '点我确认'},
			        ]
			    },
			    itemTpl : [
			                '<div style="float:left;margin-left:30px;marin-right:30px;margin-top:26px;">'+
							'<div class="image" style="margin-left:6px;width:60px;height:70px;background-image:url(\'resources/img/desktop/root_gr_ztfl_ns.png\')"></div>'+
							'<div class="name">{name}</div>'+
							'</div>'

					].join(''),
				listeners : {
					itemtap : function(container, target, index, e) {

						var me = this, store = me.getStore();
						if (store.data.items[target]) {
							record = store.data.items[target].data;
//							YongYou.util.ClientEventHandle.events.onCatrgotyItemTap(this.parent.parent, index,
//									target, record, e)
							alert(record.name);

						}
					}
				}
			},{
				xtype:'list',
				flex:3,
				store: {
		            fields: ['name'],
			        data: [
			            {name: '江北区人民医院'},
			            {name: '江北大石坝'},
			            {name: '蚂蝗梁立交'},
			            {name: '鸿恩寺立交'}
			        ]
		        },
                itemTpl: '<span style="padding-left:40px;">{name}</span>'
			}
					
			]
		},{
			style : 'float:right;',
			xtype : 'component',

			html : '<div id=\'mapDiv\' style=\'width:978px;height:655px;\'>请重新尝试一次。。。</div>'
		}

		]
	}

});
