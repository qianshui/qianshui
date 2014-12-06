Ext.define('YongYou.util.Window', {
			extend : 'Ext.Panel',
			config : {
				xtype : 'panel',
				modal : true,
				autoDestory : true,
				hideOnMaskTap : true,
				showAnimation : {
					type : 'popIn',
					duration : 250,
					easing : 'ease-out'
				},
				hideAnimation : {
					type : 'popOut',
					duration : 250,
					easing : 'ease-out'
				},
				centered : true,
				width : Ext.filterPlatform('ie10')
						? '100%'
						: (Ext.os.deviceType == 'Phone') ? 260 : 900,
				height : Ext.filterPlatform('ie10')
						? '30%'
						: Ext.os.deviceType == 'Phone' ? 220 : 700,
				items : [],
				scrollable : true,
				listeners : {

				}
			},
			initialize : function() {
				this.toolBar=Ext.create('Ext.Toolbar',{
							docked : 'top',
							xtype : 'toolbar',
							title : '',
//							items:[{
//								xtype:'button',
//								docked : 'right',
//								style:'padding-top:6px;',
//								html:'<span style="font-size:16px;">打印</span>'
//							}]
						})
				this.add(this.toolBar);
			},
			initialPanelHtml : function(content, title) {
				this.setHtml(content);
				this.toolBar.setTitle(title);
				this.overlay = Ext.Viewport.add(this);
				this.overlay.show();
			},
			initialPanelControl : function(content, title) {
				this.add(content);
				this.toolBar.setTitle(title);
				// this.setActiveItem('#testList');
				this.overlay = Ext.Viewport.add(this);
				this.overlay.show();

			}
		})