Ext.define('YongYou.view.config.form.LawIconTrigger', {
			extend : 'Ext.form.field.Trigger',
			alias : 'widget.LawIcontrigger',

			// override onTriggerClick
			onTriggerClick : function(a) {

				dataview = Ext.getCmp('images-view')
				if (!dataview) {
					dataview = Ext
							.create('YongYou.view.config.form.IconDataview')
					dataview.getStore().removeAll();
					dataview.getStore().load({
								params : {
									type : 'law'
								}
							});
				}
				win = Ext.create('Ext.window.Window', {
							title : '图标选择',
							
							height : 500,
							width : 600,
							layout : 'fit',
							trigger : this
						}).show();
				win.add(dataview)
			}
		});
Ext.define('YongYou.view.config.form.LawForm', {
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
						fieldLabel : '标题',
						name : 'title'
					}, {
						xtype : 'textfield',
						fieldLabel : '描述',
						name : 'subTitle'
						// readOnly : true
				}, {
						xtype : 'LawIcontrigger',
						fieldLabel : '图标',
						name : 'imgId'
				},	{
						xtype : 'combobox',
						fieldLabel : '选择行业类别',
						displayField : 'title',
						valueField : 'id',
						store : Ext.create('Ext.data.Store', {
									fields : subjectType_model.config.fields,
									proxy : {
										type : 'ajax',
										url : YongYou.util.Config.getService()
												+ 'IndustryService/getIndustryClass',
										reader : 'json'
									}
								}),
						listeners : {
							select : function(combo, records, eOpts) {
								YongYou.util.DataApi.Core.getSubjectList(
										function(res, scope) {
											scope.removeAll();
											records = Ext.decode(res);
											scope.add(records);

										},
										combo.up().items.items[5].getStore(), {
											id : records[0].data.id
										})
							}
						}
					}, {
						xtype : 'combobox',
						fieldLabel : '选择行业',
						store : Ext.create('Ext.data.Store', {
									fields : subject_model.config.fields
								}),
						queryMode : 'local',
						displayField : 'title',
						valueField : 'id',
						name : 'subjectId'
					}, {
						xtype : 'htmleditor',
						fieldLabel : '内容编辑',
						width : 580,
						height : 250,
						name : 'content'
					}]

		});