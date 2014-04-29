Ext.define('YongYou.view.InformationConfirm', {
	extend : 'Ext.Panel',
	config : {
		title : '咨询汇总',
		id : 'InformationConfirm',
		height : '100%',
		style : "background-color:white;!important",
		items : [{
					xtype : 'panel'
				}, {
					xtype : 'panel',
					html : '<div style="width:800px;line-height:35px;margin-top:55px;'
							+ 'text-align:left;font-size:14px;font-family: Georgia;'
							+ 'font-weight:bold;color:rgba(171, 93, 57,0.8);">&nbsp;&nbsp;</div>'

				}, {
					xtype : 'formpanel',
					id : 'around',
					width : '80%',
					height : '40%',
					margin : '5px 1px 10px 20px',
					border:1,
					style : "background-color:white;!important",
					items : [{
								xtype : 'fieldset',
								width : '100%',
								height : '100%',
								margin : '0 0 0 0',

								items : [{
											xtype : 'textfield',
											readOnly : true,
											height : 5,
											style : 'width:100%;font-size:16px;',
											label : '学校：',
											labelWidth:'20%',
											labelAlian:'right',
											name : 'xuexiao'
										}, {
											xtype : 'textfield',
											readOnly : true,
											height : 5,
											labelWidth:'20%',
											labelAlian:'right',
											style : 'width:100%;font-size:16px;',
											label : '商业：',
											name : 'shangye'
										}, {
											xtype : 'textfield',
											readOnly : true,
											height : 5,
											labelWidth:'20%',
											labelAlian:'right',
											style : 'width:100%;font-size:16px;',
											label : '交通：',
											name : 'jiaotong'
										}, {
											xtype : 'textfield',
											readOnly : true,
											height : 5,
											labelWidth:'20%',
											labelAlian:'right',
											style : 'width:100%;font-size:16px;',
											label : '公园：',
											name : 'gongyuan'
										}, {
											xtype : 'textfield',
											readOnly : true,
											height : 5,
											labelWidth:'20%',
											labelAlian:'right',
											style : 'width:100%;font-size:16px;',
											label : '标志建筑：',
											name : 'biaojian'
										}, {
											xtype : 'textfield',
											readOnly : true,
											height : 5,
											labelWidth:'20%',
											labelAlian:'right',
											style : 'width:100%;font-size:16px;',
											label : '医院：',
											name : 'yiyuan'
										}, {
											xtype : 'textareafield',
											readOnly : true,
											height : 5,
											labelWidth:'20%',
											labelAlian:'right',
											style : 'width:100%;font-size:16px;',
											label : '小区：',
											name : 'xiaoqu'

										}]
							}]
				}, {
					xtype : 'panel',
					collapsed : false,
					layout : 'fit',
					style : 'background: url(\'resources/image/touzi_bg.gif\') no-repeat left;margin:10px 0px 0px 0px;',
					height : 110
				}, {
					xtype : 'panel',		
					height : 90,
					style : 'width:100%;font-size:16px;margin-left:80px;'
				}, {
					xtype : 'panel',
					docked : 'bottom',
					style : 'margin:10px',
					items : [{
						xtype : 'button',
						ui : 'round',
						height : 52,
						width : 149,

						style : 'width:15%;font-size:20px;float:right;background-image:url(\'resources/image/submit.jpg\')',
						listeners : {
							'tap' : function(b, e) {
								if (confirm("确认提交吗？")) {

								}
							}
						}
					}]
				}]
	},
	setSelectValue : function(subject, person, address) {
		this.items.items[0]
				.setHtml('<div class="confirm-logo"><img src="resources/image/logo.gif"/></div>'
						+ '<div class="confirm-selectinfo">'
						+ '<div class="subject" >&nbsp;行业：'
						+ subject
						+ '</div>'
						+ '<div class="person">&nbsp;人群:&nbsp;'
						+ person
						+ '</div>'
						+ '<div class="address">&nbsp;地址:&nbsp;'
						+ address
						+ '</div>' 
						+ '<div class="title">&nbsp;在您选取的位置方圆3公里配套情况如下：</div></div>')
	},
	setAroundValue : function(values) {
		this.items.items[2].setValues(values);
	},
	setAdviseValue : function(values) {
		this.items.items[4].setHtml(values);
	}
});