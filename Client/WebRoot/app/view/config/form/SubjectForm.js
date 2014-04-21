Ext.define('YongYou.view.config.form.SubjectIconTrigger', {
			extend : 'Ext.form.field.Trigger',
			alias : 'widget.subjecticontrigger',

			// override onTriggerClick
			onTriggerClick : function(a) {

				dataview = Ext.getCmp('images-view')
				if (!dataview) {
					dataview = Ext
							.create('YongYou.view.config.form.IconDataview')
					dataview.getStore().removeAll();
					dataview.getStore().load({
								params : {
									type : 'subject'
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

var subjectType_model = Ext.create('YongYou.model.SubjectType');
subjectTypeComb = Ext.create('Ext.form.ComboBox', {
			fieldLabel : '选择行业类别',
			store : Ext.create('Ext.data.Store', {
						fields : subjectType_model.config.fields,
						proxy : {
							type : 'ajax',
							url : YongYou.util.Config.getService()
									+ 'IndustryService/getIndustryClass',
							reader : 'json'
						}
					}),
			displayField : 'title',
			valueField : 'id',
			listeners : {
				select : function(combo, records, eOpts) {
					YongYou.util.DataApi.Core.getSubjectList(function(res,
									scope) {
								scope.removeAll();
								records = Ext.decode(res);
								scope.add(records);

							}, subject_store, {
								id : records[0].data.id
							})
				}
			}
		})
Ext.define('YongYou.view.config.form.SubjectForm', {
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
						name : 'description'
						// readOnly : true
				}	, {
						xtype : 'combobox',
						fieldLabel : '选择行业类别',
						displayField : 'title',
						valueField : 'id',
						name : 'subjectTypeId',
						store : Ext.create('Ext.data.Store', {
									fields : subjectType_model.config.fields,
									proxy : {
										type : 'ajax',
										url : YongYou.util.Config.getService()
												+ 'IndustryService/getIndustryClass',
										reader : 'json'
									}
								})
					}, {
						xtype : 'checkbox',
						fieldLabel : '常用',
						name : 'commonFlag',
						inputValue: 'true',
						uncheckedValue:'false'

				}	, {
						xtype : 'subjecticontrigger',
						fieldLabel : '图标',
						name : 'imgPath'
				}	, {
						xtype : 'textfield',
						fieldLabel : '关键字',
						name : 'keyWords'

				}]

		});