Ext.define('YongYou.view.InformationConfirm', {
    extend: 'Ext.Panel',
    config: {
    	title:'咨询汇总',
        id:'InformationConfirm',
        height: '100%',
        //style : "background-color:white;!important",
        items: [
			{
			    xtype: 'label',
			    style:'float:left;font-size:24px;width:85%;',
			    id: 'show_indus_adres',
			    html: '行业信息，地址信息'
			},
			{
			    xtype: 'button',
			    ui : 'round',
				width : 172,
				text : '提交按钮',
				style : 'width:15%;font-size:20px;float:right;background:-webkit-linear-gradient(left, rgba(167,207,223,1) 0%,rgba(35,83,138,1) 85%);',
				listeners : {
					'tap' : function(b, e) {
						if(confirm("确认提交吗？"))
						{
							
						}
					}
				}
			},
//			{
//			    xtype: 'textareafield',
//			    readOnly:true,
//			    height:280,
//			    style:'width:100%;font-size:24px;',
//			    value:'    周边配套：'
//			},
			{
			    xtype: 'tabpanel',
			    ui:'red',
			    tabBar : {
					ui:'red',
					layout : {
						pack : 'center'
					}
					//style : 'background:#99FFFF'
				},
			    height:280,
			    width:1200,
			    style:'margin-top:50px;margin-left:30px;',
			    items:[
			           {
			        	    xtype:'list',
			        	    title:'超市',
							store: {
					            fields: ['name'],
						        data: [
						            {name:'金华超市'},
						            {name:'重百超市'},
						            {name:'沃尔玛超市'},
						            {name:'永辉超市'}
						        ]
					        },
			                itemTpl: '<span style="padding-left:40px;font-size:10px;">{name}</span>' 
			           },
			           {
			        	    xtype:'list',
			        	    title:'医院',
							store: {
					            fields: ['name'],
						        data: [
						            {name:'金华超市'},
						            {name:'重百超市'},
						            {name:'沃尔玛超市'},
						            {name:'永辉超市'}
						        ]
					        },
			                itemTpl: '<span style="padding-left:40px;font-size:10px;">{name}</span>' 
			           },
			           {
			        	    xtype:'list',
			        	    title:'学校',
							store: {
					            fields: ['name'],
						        data: [
						            {name:'金华超市'},
						            {name:'重百超市'},
						            {name:'沃尔玛超市'},
						            {name:'永辉超市'}
						        ]
					        },
			                itemTpl: '<span style="padding-left:40px;font-size:10px;">{name}</span>' 
			           }
			    ]
		    },
			{
			    xtype: 'textareafield',
			    readOnly:true,
			    height:230,
			    style:'width:100%;font-size:24px;margin-top:10px;',
			    value:'    投资建议：\r\n\r\n'+

			    	'    a、此处同行业类型企业过多，不适宜再次开展此种行业，否则将导致竞争压力过大，不利于盈利。\r\n\r\n'+

			    	'    b、此处配套标准较好，超市、学校、餐饮遍布，可为您的员工和顾客提供更广泛的服务，免除您的后顾之忧。\r\n\r\n'+

			    	'    c、总体来讲在此处开展KTV业务优劣各参半，是否开展，请您自行斟酌，谢谢。'
			}
        ]
    }
});