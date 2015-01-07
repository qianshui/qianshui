Ext.define('YongYou.staticflow.staticFlowViewport', {
			extend : 'Ext.Container',
			alias : 'widget.staticflowport',
			requires : ['Ext.TitleBar'],
			
			config : {
				// cls : 'card card1',
			//	id : 'flowviewport',
				fullscreen : true,
				autoDestory : true,
				layout : 'hbox',
				items : []
			},
			initialPanelFlat : function(res) {

				if (this.items.items.length > 1) {
					this.child('#flowpanel').initialPanel(res);
					this.child('#iteminfo').clearValue();
				} else {
					flow = Ext.create('YongYou.staticflow.staticFlowPanel', {
								width : '10%',
								cls : 'card-item'
							})
					info = Ext.create('YongYou.staticflow.staticFlowItemInfo', {
								width : '90%',
								cls : 'card-item'
							})
					flow.initialPanel(res);
					this.add(flow);
					this.add(info);

				}

			},
			initialPanelCard : function(res,key) {
				this.setId(key+this.getId());
				
				if (this.items.items.length > 1) {
					this.child('#'+key+'flowpanel').initialPanel(res,key);
					this.child('#'+key+'iteminfo').clearValue();
				} else {
					flow = Ext.create('YongYou.staticflow.staticFlowPanel', {
								width : '40%',
								//cls : 'slide',
								id:key+'flowpanel'
							})
					info = Ext.create('YongYou.staticflow.staticFlowItemInfo', {
								width : '60%',
								cls : 'nav-list',
								id:key+'iteminfo'
							})
					flow.initialPanel(res,key);
					this.add(flow);
					this.add(info);
				}

			},
			removeChildren : function() {
				this.child('#flowpanel').removeChildren();
			}
		});
