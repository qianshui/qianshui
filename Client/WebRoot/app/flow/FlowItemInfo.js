Ext.define('YongYou.flow.FlowItemInfo', {
	extend : 'Ext.Panel',
	id : 'iteminfo',
	autoDestory:true,
	config : {
		//cls : 'nav-list',
		style : "text-align:center;background-color:white;!important",
		scrollable :false,
		layout : {
			type : 'accordion',
			toggleOnTitlebar : false,
			mode : 'SINGLE'
		},
		items : [{
			xtype : 'panel',
			collapsed : false,
			title : '说明',
			layout : 'fit',
			height : 400,
			scrollable : 'vertical'
			}, 
				{
			xtype : 'formpanel',
			title : '联系人',
			collapsed : true,
			height : 300,
			scrollable : 'vertical',
			layout : 'fit',
			cls:'card-item',
			items : [{
						xtype : 'textfield',
						readOnly:true,
						label : '姓名',
						name : 'name'
					}, {
						xtype : 'textfield',
						readOnly:true,
						label : '电话',
						name : 'tel'
					},{
						xtype : 'textareafield',
						readOnly:true,
						label : '地址',
						maxRows : 4,
						name : 'seat'
					}]

		}, {
			xtype : 'panel',
			collapsed : true,
			title : '附件',
			height : 400,
			scrollable : 'vertical',
			style : "text-align:left",
			layout : 'fit'

		}]
	},
	setValue : function(res) {
		item_list = this.getItems();

		item_list.items[0]
				.setHtml('<div style=text-align:center;font-size: 20px;font-weight: bold;>'
						+ res.title
						+ '</div></br></br></br></br><div>'
						+ res.content + '</div>');
		item_list.items[1].setValues({
			name:res.contact.name,
			seat:res.contact.seat,
			tel:res.contact.tel
		})
		var html=this.formatFiles(res.files)
		item_list.items[2]
				.setHtml(html)

	},
	clearValue:function(){
	this.items.items[0].setHtml('<div></div>')
	this.items.items[1].setValues({
			name:'',
			seat:'',
			tel:''
		});
	this.items.items[2]
				.setHtml('<div></div>')
	},
	formatFiles:function(files){
		var html="</br><div style='margin-left:10px'>";
		for(i=0;i<files.length;i++){
			html += "<img src='resources/img/rar.png' width='18' height='14' /><a href='"+files[i].file+"' style='color:black;'>"+files[i].name
			+"</a></br>";
		}
		html+="</div>";
		return html;
	}
});
