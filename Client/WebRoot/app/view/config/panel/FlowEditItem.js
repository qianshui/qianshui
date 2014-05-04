Ext.define('YongYou.view.config.panel.FlowEditItem', {
	extend : 'Ext.Panel',
	alias : 'widget.flowedititem',
	hover : false,
	border : false,
	frame : false,
	autoDestory : true,
	bodyStyle:"border-radius: 15px;background-color: transparent;",
	actid : null,
	key : null,
	data : null,
	items : [

	],
	listeners : {
		'render' : function(panel) {
			panel.body.on('click', function() {
						panel.up().up().selectItem=panel.Data;
						form=Ext.getCmp('act-info');
						if(form)
							form.getForm().loadRecord(panel);
						panel.body.setStyle('background', '-webkit-linear-gradient(top, rgba(254,252,234,1) 0%,rgba(254,252,234,0.6) 100%)');
					});
		}
	},
	setValue : function(item) {
		this.html = '<div style="width:160px;height:75px;background-repeat:no-repeat;background-size:contain;background-image: url(\'resources/image/flow/'
				+ item.imgId + '\');">';
		this.Data = item;
	},
	getData:function(){
		return this.data;
	}

});