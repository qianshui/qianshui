Ext.define('YongYou.flow.FlowViewport', {
			extend : 'Ext.Container',
			alias : 'widget.flowport',
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
					flow = Ext.create('YongYou.flow.FlowPanel', {
								width : '70%',
								cls : 'card-item'
							})
					info = Ext.create('YongYou.flow.FlowItemInfo', {
								width : '30%',
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
					flow = Ext.create('YongYou.flow.FlowPanel', {
								width : '100%',
								cls : 'slide',
								id:key+'flowpanel'
							})
					info = Ext.create('YongYou.flow.FlowItemInfo', {
								width : 550,
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
