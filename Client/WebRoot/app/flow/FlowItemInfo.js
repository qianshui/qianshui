Ext.define('YongYou.flow.FlowItemInfo', {
	extend : 'Ext.Panel',
	id : 'iteminfo',
	autoDestory : true,
	config : {
		// cls : 'nav-list',
		style : "text-align:center;background-color:white;!important",
		scrollable : true,
		// layout : {
		// type : 'accordion',
		// toggleOnTitlebar : false,
		// mode : 'SINGLE'
		// },
		items : [{
			xtype : 'panel',
			collapsed : false,
			title : '说明',
			layout : 'fit'

				// height : 400,
				// scrollable : 'vertical'
			}, {
			xtype : 'titlebar',
			title : '联系人'
		}, {
			xtype : 'formpanel',
			title : '联系人',
			collapsed : true,
			height : 200,
			// scrollable : 'vertical',
			layout : 'fit',
			cls : 'card-item',
			items : [{
						xtype : 'textfield',
						readOnly : true,
						label : '姓名',
						name : 'name'
					}, {
						xtype : 'textfield',
						readOnly : true,
						label : '电话',
						name : 'tel'
					}, {
						xtype : 'textareafield',
						readOnly : true,
						label : '地址',
						maxRows : 4,
						name : 'seat'
					}]

		}, {
			xtype : 'titlebar',
			title : '附件'
		}, {
			xtype : 'panel',
			collapsed : true,
			title : '附件',
			// height : 400,
			// scrollable : 'vertical',
			style : "text-align:left",
			layout : 'fit'

		}]
	},
	setValue : function(node, mainEl) {
		item_list = this.getItems();

		item_list.items[0]
				.setHtml('<div style=text-align:center;font-size: 20px;font-weight: bold;>'
//						+ node.getData().title
//						+ '</div></br></br></br></br><div>'
						+ node.getData().description + '</div>');

		YongYou.util.DataApi.Core.getContactByContactID(function(res, scope) {
					res = Ext.decode(res);
					scope.setValues({
								name : res.name,
								seat : res.address,
								tel : res.tel
							})

				}, item_list.items[2], {
					'id' : node.getData().contactId
				})

		YongYou.util.DataApi.Core.getAttachmentByNodeID(function(res, scope) {
					res = Ext.decode(res);
					var html = scope.formatFiles(res)
					scope.getItems().items[4].setHtml(html)
					mainEl.removeCls('in').addCls('out');

				}, this, {
					'id' : node.getData().id
				})

	},
	clearValue : function() {
		this.items.items[0].setHtml('<div></div>')
		this.items.items[2].setValues({
					name : '',
					seat : '',
					tel : ''
				});
		this.items.items[4].setHtml('<div></div>')
	},
	formatFiles : function(files) {
		var html = "</br><div style='margin-left:10px'>";
		for (i = 0; i < files.length; i++) {
			html += "<img src='resources/img/rar.png' width='18' height='14' /><a href='"
					+ files[i].downloadlink
					+ "' style='color:black;'>"
					+ files[i].title + "</a></br>";
		}
		html += "</br></br></div>";
		return html;
	}
});
