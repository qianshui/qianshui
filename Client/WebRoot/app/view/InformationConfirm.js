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
					html : '<div style="width:800px;line-height:35px;margin:100px 1px 2px 5px;'
							+ 'text-align:left;font-size:14px;font-family: Georgia;'
							+ 'font-weight:bold;color:rgba(171, 93, 57,0.8);">&nbsp;&nbsp;在您选取的位置方圆3公里配套情况如下：&nbsp;&nbsp;</div>'

				}, {
					xtype : 'formpanel',
					id : 'around',
					width : '80%',
					height : 282,
					margin : '5px 1px 2px 20px',
					style : "background-color:white;!important",
					items : [{
								xtype : 'fieldset',
								width : '100%',
								height : '100%',
								margin : '0 0 0 0',

								items : [{
											xtype : 'textfield',
											readOnly : true,
											height : 10,
											style : 'width:100%;font-size:16px;',
											label : '公建配套：',
											labelWidth:'10%',
											name : 'gongjian'
										}, {
											xtype : 'textfield',
											readOnly : true,
											height : 10,
											labelWidth:'10%',
											style : 'width:100%;font-size:16px;',
											label : '标志建筑：',
											name : 'biaozhi'
										}, {
											xtype : 'textfield',
											readOnly : true,
											height : 10,
											labelWidth:'10%',
											style : 'width:100%;font-size:16px;',
											label : '公园绿化：',
											name : 'gongyuan'
										}, {
											xtype : 'textfield',
											readOnly : true,
											height : 10,
											labelWidth:'10%',
											style : 'width:100%;font-size:16px;',
											label : '自然景观：',
											name : 'jingguan'
										}, {
											xtype : 'textfield',
											readOnly : true,
											height : 10,
											labelWidth:'10%',
											style : 'width:100%;font-size:16px;',
											label : '就医条件：',
											name : 'jiuyi'
										}, {
											xtype : 'textfield',
											readOnly : true,
											height : 10,
											labelWidth:'10%',
											style : 'width:100%;font-size:16px;',
											label : '就学条件：',
											name : 'jiuxue'
										}, {
											xtype : 'textareafield',
											readOnly : true,
											height : 10,
											labelWidth:'10%',
											style : 'width:100%;font-size:16px;',
											label : '商业环境：',
											name : 'shangye'

										}]
							}]
				}, {
					xtype : 'panel',
					collapsed : false,
					layout : 'fit',
					style : 'background: url(\'resources/image/touzi_bg.gif\') no-repeat left',
					height : 100
				}, {
					xtype : 'panel',		
					height : 100,
					style : 'width:100%;font-size:16px;margin-left:80px;'
				}, {
					xtype : 'container',
					docked : 'bottom',
					style : 'margin:20px;',
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
						+ '<div class="person">&nbsp;人群:'
						+ person
						+ '</div>'
						+ '<div class="address">&nbsp;地址:'
						+ address
						+ '</div></div>')
	},
	setAroundValue : function(values) {
		this.items.items[2].setValues(values);
	},
	setAdviseValue : function(values) {
		this.items.items[4].setHtml(values);
	}
});