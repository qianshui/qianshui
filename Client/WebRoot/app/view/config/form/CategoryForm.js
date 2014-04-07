Ext.define('YongYou.view.config.form.IconTrigger', {
			extend : 'Ext.form.field.Trigger',
			alias : 'widget.icontrigger',

			// override onTriggerClick
			onTriggerClick : function(a) {

				dataview = Ext.getCmp('images-view')
				if (!dataview) {
					dataview = Ext
							.create('YongYou.view.config.form.IconDataview')
				}
				win = Ext.create('Ext.window.Window', {
							title : '图标选择',
							id : 'imgselector',
							height : 500,
							width : 600,
							layout : 'fit',
							trigger:this
						}).show();
				win.add(dataview)
			}
		});

Ext.define('YongYou.view.config.form.CategoryForm', {
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
				hidden:true
			},{
				xtype : 'textfield',
				fieldLabel : '父节点ID',
				name : 'parentId',
				hidden:true
			},{
				xtype : 'textfield',
				fieldLabel : '标题',
				name : 'title'
			}, {
				xtype : 'icontrigger',
				fieldLabel : '图标',
				name : 'icon'
				// readOnly : true
		},	{
				xtype : 'icontrigger',
				fieldLabel : '流程',
				name : 'flowId'
				// readOnly : true
		}	, {
				xtype : 'textfield',
				fieldLabel : '类别',
				name : 'type',
				hidden:true
			}, {
				xtype : 'textfield',
				fieldLabel : '叶节点',
				name : 'leaf',
				hidden:true
			}],

	buttons : [{
		text : '提交',
		handler : function() {
			// The getForm() method returns the Ext.form.Basic instance:
			var form = this.up('form').getForm();
			if (form.isValid()) {
				YongYou.util.DataApi.Core.updateCategory(function(res,scope){
					Ext.Msg.alert('提示', '执行操作成功！');
				},form,form.getValues())
				
			}
		}
	}]
});