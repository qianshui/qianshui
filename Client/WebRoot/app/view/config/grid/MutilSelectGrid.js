Ext.define('YongYou.view.config.grid.MutilSelectGrid', {
			extend : 'Ext.grid.Panel',
			height : 200,
			width : 400,
			scrollable : true,
			selType : 'checkboxmodel',
			bbar : [{
						xtype : 'tbfill'
					}, {
						xtype : 'button',
						text : '确定',
						handler : function(dataview, rowIndex, colIndex,
								actionItem, event, record, row) {
							var records = dataview.up('grid').getSelectionModel()
									.getSelection();
							var name = "";
							var id = "";
							for (i = 0; i < records.length; i++) {
								if (records[i].data.name) {
									name += records[i].data.name + ";\n\r";
								} else {
									name += records[i].data.title + ";\n\r";
								}

								if (id.length > 0) {
									id += ";"
								}
								id += records[i].data.id
							}

							this.up('grid').up('panel').setValue(id, name);
							this.up('grid').up('panel').close();
						}
					}],

			initialGrid : function(store) {
				this.store = store;
			}
		});