Ext.define('YongYou.staticflow.staticFlowItemInfo', {
	extend : 'Ext.Panel',
	id : 'staticiteminfo',
	autoDestory : true,
	config : {
		// cls : 'nav-list',
		style : "text-align:center;background-color:#FFF4D6;!important",
		scrollable : true,
		// layout : {
		// type : 'accordion',
		// toggleOnTitlebar : false,
		// mode : 'SINGLE'
		// },
		items : [{
			xtype : 'panel',
			height : 0,
			style : 'background: url(\'resources/image/about.gif\') no-repeat center'
		}, {
			xtype : 'panel',
			height : 3,
			style : 'background: url(\'resources/image/line.gif\') no-repeat center'
		}, {
			xtype : 'panel',
			collapsed : false,
			layout : 'fit',
			style : 'background: url(\'resources/image/zhengwu.gif\') no-repeat center',
			height : 350,
			items:[{
			    xtype:'button',
			    html:'点击查看详情',
				width: 150,
				right:30,
				bottom:30,
				ui:'decline',
				listeners : {
					'tap' : function(b, e) {
				         //alert(this.parent.parent.NodeInfo.detail);
				         showDetail("",this.parent.parent.NodeInfo.detail);
			        }
			    }
			}]
		}, {
			xtype : 'panel',
			height : 36,
			style : 'background: url(\'resources/image/line2.gif\') no-repeat center',
			items : [{
				xtype : 'panel',
				height : 36,
				style : 'background: url(\'resources/image/lianxi.gif\') no-repeat center'
			}]
		}, {
			xtype : 'panel',
			title : '联系人',
			height : 200,
			layout : 'fit'
			

		}, {
			xtype : 'panel',
			height : 36,
			style : 'background: url(\'resources/image/line2.gif\') no-repeat center',
			items : [{
				xtype : 'panel',
				height : 36,
				style : 'background: url(\'resources/image/fujian.gif\') no-repeat center'
			}]
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
	// {
	// xtype : 'image',
	// style : ''
	// }, {
	// xtype : 'image',
	// style : 'background-image:url(\'resources/image/line.gif\')'
	// },
	setValue : function(node) {
		item_list = this.getItems();
		
        this.NodeInfo=node.getData();
		var node_description=this.NodeInfo.description;
		
		item_list.items[2]
				.setHtml( '<div style=text-align:center;font-size: 20px;font-weight: bold;>'
						// + node.getData().title
						// + '</div></br></br></br></br><div>'
						+ node_description + '</div>');

		YongYou.util.DataApi.Core.getContactByContactID(function(res, scope) {
					res = Ext.decode(res);
					scope.setContact({
								name : res.name,
								seat : res.address,
								tel : res.tel
							},scope.getItems().items[4])

				}, this, {
					'id' : node.getData().contactId
				})

		YongYou.util.DataApi.Core.getAttachmentByNodeID(function(res, scope) {
					res = Ext.decode(res);
					var html = scope.formatFiles(res);
					scope.getItems().items[6].setHtml(html);
					//mainEl.removeCls('in').addCls('out');

				}, this, {
					'id' : node.getData().id
				})

	},
	clearValue : function() {
		this.items.items[2].setHtml('<div></div>')
		this.clearContact(this.items.items[4]);
		this.items.items[6].setHtml('<div></div>')
	},

	/*formatFiles : function(files) {
		var html = "</br><div style='margin-left:10px'>";
		for (i = 0; i < files.length; i++) {
			html += "<img src='resources/image/fujian_logo2.jpg' width='15' height='15' /><a href='files/attachments/"
					+ files[i].downloadLink
					+ "' style='color:black;'>"
					+ files[i].title + "</a></br>";
		}
		html += "</br></br></div>";
		return html;
	},*/
	
	formatFiles : function(files) {
		var html = "</br><div style='margin-left:10px'>";
		for (i = 0; i < files.length; i++) {
			html += "<img src='resources/image/fujian_logo2.jpg' width='15' height='15' /><a"
				+" href='javascript:forSendMail(\""+files[i].downloadLink+"\");' style='color:black;'>"
					+ files[i].title + "</a></br>";
		}
		html += "</br></br></div>";
		return html;
	},
	
	setContact : function(values,scope) {
				html = '<div class="flow-item-info-contact-title"><div class="title" >姓名:&nbsp;</div>'
						+ '<div class="title">联系电话:&nbsp;</div>'
						+ '<div class="title">地址:&nbsp;</div></div>'
						+ '<div class="flow-item-info-contact-content">'
						+ '<div class="item">&nbsp;'
						+ values.name
						+ '</div>'
						+ '<div class="item">&nbsp;'
						+ values.tel
						+ '</div>'
						+ '<div class="item">&nbsp;'
						+ values.seat
						+ '</div></div>';
				scope.setHtml(html);
			},
	clearContact : function(scope) {
				html = '<div class="flow-item-info-contact-title"><div class="title" >姓名:&nbsp;</div>'
						+ '<div class="title">联系电话:&nbsp;</div>'
						+ '<div class="title">地址:&nbsp;</div></div>'
						+ '<div class="flow-item-info-contact-content">'
						+ '<div class="item">&nbsp;'
						
						+ '</div>'
						+ '<div class="item">&nbsp;'
						
						+ '</div>'
						+ '<div class="item">&nbsp;'
						
						+ '</div></div>';
				scope.setHtml(html);
			}
			
});

function showDetail(title,content) {
	var win = Ext.create('YongYou.util.Window', {});
	win.initialPanelControl(new Ext.Panel({
						fullscreen : true,
						scrollable : true,
						layout : 'fit',
						height : '100%',
						width : '100%',
						html : content
					}), title)
}