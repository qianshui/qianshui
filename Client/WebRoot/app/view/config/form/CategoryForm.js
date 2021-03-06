Ext.define('YongYou.view.config.form.CateIconTrigger', {
			extend : 'Ext.form.field.Trigger',
			alias : 'widget.cateicontrigger',

			// override onTriggerClick
			onTriggerClick : function(a) {

				dataview = Ext.getCmp('images-view')
				if (!dataview) {
					dataview = Ext
							.create('YongYou.view.config.form.IconDataview');
					dataview.getStore().removeAll();
					dataview.getStore().load({
								params : {
									type : 'desktop'
								}
							});
				}
				win = Ext.create('Ext.window.Window', {
							title : '图标选择',
							id : 'imgselector',
							height : 500,
							width : 600,
							layout : 'fit',
							trigger : this
						}).show();
				win.add(dataview)
			}
		});

Ext.define('YongYou.view.config.form.FlowTrigger', {
	extend : 'Ext.form.field.Trigger',
	alias : 'widget.flowtrigger',
	onTriggerClick : function(a) {
		YongYou.util.DataApi.Core.getFlowList(function(res, scope) {
					records = Ext.decode(res);
					model = Ext.create('YongYou.model.Flow');
					store = Ext.create('Ext.data.Store', {
								fields : model.config.fields

							});

					grid = Ext.create('YongYou.view.config.grid.SelectGrid', {
								store : store,
								columns : model.config.columns
							});
					store.add(records);
					win = Ext.create('Ext.window.Window', {
								title : '流程选择',
								// id : 'imgselector',
								height : 500,
								width : 600,
								layout : 'fit',
								trigger : scope,
								setValue : function(value) {
									this.trigger.items.items[4].setValue(value);
									this.trigger.items.items[6].setValue("1");
								}
							}).show();
					win.add(grid)
				}, this.up('panel'))
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
				hidden : true
			}, {
				xtype : 'textfield',
				fieldLabel : '父节点ID',
				name : 'parentId',
				hidden : true
			}, {
				xtype : 'textfield',
				fieldLabel : '标题',
				name : 'title'
			}, {
				xtype : 'cateicontrigger',
				fieldLabel : '图标',
				name : 'icon'
				// readOnly : true
		}	, {
				xtype : 'flowtrigger',
				fieldLabel : '流程',
				name : 'flowId'
				// readOnly : true
		}	, {
				xtype : 'textfield',
				fieldLabel : '类别',
				name : 'type',
				hidden : true
			}, {
				xtype : 'textfield',
				fieldLabel : '叶节点',
				name : 'leaf',
				hidden : true
			},{
				xtype : 'combobox',
				fieldLabel : '流程展示类型',
				name:'flowType',
				displayField : 'title',
				valueField : 'id',
				store:Ext.create('Ext.data.Store', {  
					fields: [
					        	{name: 'id', type: 'string'},
					        	{name: 'title', type: 'string'},
					    	],
					data:[  
		                    {id:'0',title:'动态'}  
		                    ,{id:'1',title:'静态'}
		                    ]  
		                }) 
			}]

		// buttons : [{
		// text : '提交',
		//		
		// }]
	});