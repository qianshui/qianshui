var subject_model = Ext.create('YongYou.model.Subject');
var subject_store = Ext.create('Ext.data.Store', {
			fields : subject_model.config.fields
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
			// queryMode : 'local',
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
Ext.define('YongYou.view.config.form.FlowForm', {
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

										}, subject_store, {
											id : records[0].data.id
										})
							}
						}
					}, {
						xtype : 'combobox',
						fieldLabel : '选择行业',
						store : subject_store,
						queryMode : 'local',
						displayField : 'title',
						valueField : 'id',
						name : 'subjectId'
//						listeners : {
//							select : function(combo, records, eOpts) {
//								combo.up().items.items[3]
//										.setValue(records[0].data.id)
//							}
//						}
					}]

		});