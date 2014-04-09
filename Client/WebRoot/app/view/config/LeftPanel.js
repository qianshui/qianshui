Ext.override(Ext.menu.Menu, {
			// inherit docs
			getFocusEl : function() {
				return this.focusedItem || this.el;
			}
		});
Ext.define('YongYou.view.config.LeftPanel', {
	extend : 'Ext.panel.Panel',
	 xtype:'leftPanel',
	alias: 'widget.leftPanel',
	id : 'left-menu',
	title : '工具栏',
	region : 'west',
	animCollapse : true,
	width : 200,
	minWidth : 150,
	maxWidth : 400,
	split : true,
	collapsible : true,
	layout : {
		type : 'accordion',
		animate : true
	},
	items : [],
	listeners : {
		beforerender : function(pa, eOpts) {
			YongYou.util.DataApi.Core.getMenuList(function(rs, scope) {
						menulist = Ext.decode(rs);
						var menus = [];
						for (i = 0; i < menulist.length; i++) {
							var menuConfig = {
								title : menulist[i].title,
								xtype : 'menu',
								cls : 'feed-list',
								iconCls : 'nav',
								showSeparator : false,
								floating : false,
								hideHeader : false,
								parent:scope,
								items : [],
								collapsed : i > 0,
								listeners : {
									click:function( menu, item, e, eOpts){
										YongYou.util.EventHandle.events.leftMenuClick(this.parent,item.data)
									
									}
								}
								
							};
							if (menulist[i].children.length > 0) {
								for (x = 0; x < menulist[i].children.length; x++) {

									menuConfig.items.push({
									id:menulist[i].children[x].id,
									text : menulist[i].children[x].title,
									data:menulist[i].children[x]
											});
								}
							}
							menus.push(menuConfig);
						}
						scope.add(menus);
					},this)

		}
	},
	onClick:function(){
		test();
	}

});