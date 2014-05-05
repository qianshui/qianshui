Ext.define('YongYou.view.config.form.AttachmentForm', {
	extend : 'Ext.form.Panel',
	win : null,
	// title: 'Basic Form',
	// renderTo: Ext.getBody(),
	bodyPadding : 5,
	width : 350,
	items : [{
				xtype : 'textfield',
				fieldLabel : 'ID',
				name : 'id',
				hidden : true
			},{
				xtype : 'textfield',
				fieldLabel : '标题',
				name : 'title'
			}, {
				xtype : 'textareafield',
				fieldLabel : '描述',
				name : 'description'
				// readOnly : true
		}	, {
				xtype : 'textareafield',
				fieldLabel : '备注',
				name : 'comments'
				// readOnly : true
		} ,{
				xtype : 'textfield',
				fieldLabel : '链接',
				name : 'downloadLink',
				hidden : false
			}],
	 buttons: [{
        text: '上传附件',
        handler: function(view) {
        	
        	win = Ext.create('Ext.window.Window', {
							title : '图标选择',
							id : 'imgselector',
							height : 500,
							width : 600,
							layout : 'fit',
							trigger : view.up('form').items.items[4]
						}).show();
				win.add(Ext.create('YongYou.view.config.form.uploadForm'));
        	
        	
        }}]
			
	});