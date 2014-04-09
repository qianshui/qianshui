ImageModel = Ext.define('ImageModel', {
			extend : 'Ext.data.Model',
			fields : [{
						name : 'name'
					}, {
						name : 'url'
					}]
		});

var store = Ext.create('Ext.data.Store', {
			model : 'ImageModel',
			proxy : {
				type : 'ajax',

				url : YongYou.util.Config.getService()
						+ 'ConfigUtilService/getIconList',

				reader : {
					type : 'json',
					root : 'images'
				}
			}
		});
store.load();

Ext.define('YongYou.view.config.form.IconDataview', {
	extend : 'Ext.view.View',
	store : store,
	id : 'images-view',

	tpl : [
			'<tpl for=".">',
			'<div class="thumb-wrap" id="{name:stripTags}">',
			'<div class="thumb"><img src="{url}" title="{name:htmlEncode}"></div>',
			'<span class="x-editable">{name}</span>', '</div>',
			'</tpl>', '<div class="x-clear"></div>'],
	// multiSelect : true,
	height : 450,
	autoScroll : true,
	trackOver : true,
	overItemCls : 'x-item-over',
	itemSelector : 'div.thumb-wrap',
	emptyText : 'No images to display',
	prepareData : function(data) {
		// Ext.apply(data, {
		// shortName : Ext.util.Format.ellipsis(data.name, 15),
		// sizeString : Ext.util.Format.fileSize(data.size),
		// dateString : Ext.util.Format.date(data.lastmod,
		// "m/d/Y g:i a")
		// });
		return data;
	},
	listeners : {
		itemdblclick:function( dataview, record, item, index, e, eOpts ){
			this.up('panel').trigger.setValue(record.data.name);
			this.up('panel').close();
			
		}
	}
})

