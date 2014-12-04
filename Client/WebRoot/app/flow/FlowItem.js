Ext
		.define(
				'YongYou.flow.FlowItem',
				{
					extend : 'Ext.Panel',
					alias : 'widget.flowitem',
					hover : false,
					autoDestory : true,
					config : {
						cls : 'flow-item',
						width : 160,
						actid : null,
						key : null,
						data : null,
						items : [

						]
					},
					initialize : function() {
						this.callParent();

						this.element.on({
							scope : this,
							touchstart : 'onPress',
							touchend : 'onRelease',
							tap : 'onTap'
						});
					},

					onPress : function() {
						// alert('ddd')
						var cls = 'hover';

						this.element.addCls(cls);
					},

					onRelease : function() {
						var cls = 'hover';

						this.element.removeCls(cls);
					},
					onTap : function() {

						var me = this, mainEl = me.getParent().getParent().element;
						 if (mainEl.hasCls('out')) {
						 mainEl.removeCls('out').addCls('in');
						//
						 }
						rows = Ext.ComponentQuery
								.query("container[alias='widget.flowRow']");

						if (this.hover) {
							this.element.removeCls('hover').addCls('out');
							this.hover = false;
							for (i = 0; i < rows.length; i++) {
								rows[i].element.removeCls('hover')
										.addCls('out');
							}
						} else {
							items = Ext.ComponentQuery
									.query("panel[alias='widget.flowitem']");
							for (i = 0; i < rows.length; i++) {
								rows[i].element.removeCls('out')
										.addCls('hover');
							}
							for (i = 0; i < items.length; i++) {
								if (items[i].hover && items[i].element) {
									items[i].element.removeCls('hover').addCls(
											'out');
									items[i].hover = false;
								}
							}
							this.element.removeCls('out').addCls('hover');
							this.hover = true;
						}

						if (this.hover) {

							var key = this.getKey();
							if (mainEl.hasCls('slide')) {
								// setTimeout(function(a, b) {
								item = Ext.ComponentQuery.query("panel[id='"
										+ key + "iteminfo']")[0];
								item.setValue(this, mainEl);

								// }, 300)
							}
						}

					},
					setValue : function(item) {
						this
								.setHtml('<div class="icon" style="background-image: url(\'resources/image/flow/'
										+ item.imgId
										// + '\');">');
										+ '\');"></div><div>'
										+ item.title
										+ '</div>');
						this.setId(item.id);
						this.setData(item);
					}

				});