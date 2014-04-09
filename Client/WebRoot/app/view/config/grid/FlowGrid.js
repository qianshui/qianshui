var flow_model = Ext.create('YongYou.model.Flow');
var flow_store=Ext.create('Ext.data.Store', {fields : flow_model.config.fields});
YongYou.util.DataApi.Core.getFlowList(function(res, scope) {
					records = Ext.decode(res);							
							scope.add(records);
					
						}, flow_store)
Ext.define('YongYou.view.config.grid.FlowGrid', {
			extend : 'Ext.grid.Panel',
			height : 200,
			width : 400,
			scrollable : true,
			store :flow_store, 
			columns : flow_model.config.columns,

			listeners : {
				itemdblclick : function(dataview, record, item, index, e, eOpts) {
					this.up('panel').setValue(record.data.id);
					this.up('panel').close();

				}
			}
		});