Ext.define('YongYou.staticflow.staticFlowPanel', {
			extend : 'Ext.Container',
			alias : 'widget.staticflowpanel',
			autoDestory : true,
			config : {
				id:'flowpanel',
				height : '100%',
				width : '100%',
				dock : 'top',
				title : '流程图',
				scrollable : true,
				style : "background-color:#FFF;!important",
				layout : {
					type : 'vbox'
				},
				items : [{
							xtype : 'panel',
							centered : false,
							height : 75,
							width : '100%',
							layout : {
								pack : 'center',
								type : 'hbox'
							}
						}]
			},
			initialPanel : function(res,key) {
				this.element.removeCls('out').addCls('in');
				list = this.getItems().items;
				if(list.length>1){
					this.removeChildren(list);
				}
				items = Ext.decode(res);
				rowLog = null;
				
				for (i = 0; i < items.length; i++) {
					if (!rowLog) {
						rowLog = Ext.create('YongYou.staticflow.staticFlowRow', {
									//id : items[i].rowid
								});
					} else if (items[i].rowid != rowLog.getRowid()) {
						this.add(rowLog);
						this.add(Ext.create('YongYou.staticflow.staticFlowRow', {
									items : [Ext.create('Ext.Img', {
												cls : 'flow-item-img',
												src : 'resources/image/flow/arrow.gif'
											})]
								}));
						rowLog = Ext.create('YongYou.staticflow.staticFlowRow', {
									
								});
								rowLog.setRowid(items[i].rowid)
					}
					item = Ext.create('YongYou.staticflow.staticFlowItem', {});
					item.setId(key+items[i].id)
					item.setKey(key);
					item.setValue(items[i]);
					if(i==0){
							panel = Ext.ComponentQuery.query("panel[id='"
									+ key + "iteminfo']")[0];
							panel.setValue(item);
					}
					rowLog.add(item);
				}
				this.add(rowLog);

			},
			removeChildren:function(list){
					var len = list.length;
				 for(i=len;i>0;i--){
				 this.removeAt(i)
				 }
			}

		});