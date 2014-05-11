Ext.define('YongYou.view.config.panel.FlowContainer', {
	extend : 'Ext.window.Window',
	height : 600,
	width : 1000,
	layout : {
		type : 'border'
		// padding: '0 0 0 0' // pad the layout from the window edges
	},
	title : '编辑流程图',
	closeAction : 'hide',
	id : 'flow-win',
	items : [Ext.create('YongYou.view.config.panel.FlowEdit', {
						height : '100%',
						width : '60%'
					}), Ext.create('YongYou.view.config.form.ActivityForm', {
				id : 'act-info',
				region : 'east',
				boder : 1,
				height : '100%',
				width : '40%',
				dockedItems : [{
					xtype : 'toolbar',
					dock : 'bottom',
					ui : 'footer',
					items : [{
								xtype : 'component',
								flex : 1
							}, {
								xtype : 'button',
								text : '保存',
								handler : function(btn, e) {
									form=btn.up('panel');
									if (form.isValid()) {
										YongYou.util.DataApi.Core.updateNode(
												function(){
													Ext.Msg.alert('提示','保存成功');
												}, form, form
														.getValues());
									}
								}

							}]
				}]

			})],
	// dockedItems : [{
	// xtype : 'toolbar',
	// dock : 'bottom',
	// ui : 'footer',
	// items : [{
	// xtype : 'component',
	// flex : 1
	// }, {
	// xtype : 'button',
	// text : '提交',
	// handler : function() {
	//
	// }
	//
	// }]
	// }],
	initialPanel : function(record) {
		this.items.items[0].initialPanel(record);
	}

});