Ext.define('YongYou.view.config.panel.FlowEditItem', {
	extend : 'Ext.Panel',
	alias : 'widget.flowedititem',
	hover : false,
	border : false,
	frame : false,
	autoDestory : true,
	bodyStyle : "border-radius: 15px;background-color: transparent;",
	actid : null,
	key : null,
	data : null,
	items : [

	],
	listeners : {
		'render' : function(panel) {
			panel.body.on('click', function() {
				panel.up().up().selectItem = panel.Data;
				form = Ext.getCmp('act-info');
				if (form) {
					form.getForm().loadRecord(panel);
					YongYou.util.DataApi.Core.getContactByContactID(function(
									res, scope) {
								res = Ext.decode(res);
								scope.findField("contact").setValue(res.name);

							}, form.getForm(), {
								'id' : panel.getData().contactId
							})

					YongYou.util.DataApi.Core.getAttachmentByNodeID(function(
							res, scope) {
						res = Ext.decode(res);
						var html="";
						for (i = 0; i < res.length; i++) {
							html += res[i].title + ";\n\r";
						}
						scope.findField("attachmentName").setValue(html);

					}, form.getForm(), {
						'id' : panel.getData().id
					})

					
				}
				panel.body
						.setStyle(
								'background',
								'-webkit-linear-gradient(top, rgba(254,252,234,1) 0%,rgba(254,252,234,0.6) 100%)');
			});
		}
	},
	setValue : function(item) {
		this.html = '<div style="width:160px;height:75px;background-repeat:no-repeat;background-size:contain;background-image: url(\'resources/image/flow/'
				+ item.imgId + '\');">';
		this.Data = item;
	},
	getData : function() {
		return this.data;
	}

});