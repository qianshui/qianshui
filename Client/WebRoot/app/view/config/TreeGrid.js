Ext.define('YongYou.view.config.TreeGrid', {
	extend : 'Ext.tree.Panel',

	requires : ['Ext.data.*', 'Ext.grid.*', 'Ext.tree.*', 'Ext.ux.CheckColumn'],
	xtype : 'tree-grid',

	title : '主页',
	height : '100%',
	useArrows : true,
	rootVisible : false,
	multiSelect : true,
	singleExpand : true,

	initComponent : function() {
		this.width = '100%';

		Ext.apply(this, {
			store : new Ext.data.TreeStore({
				autoLoad : true,
				fields : [{
							name : 'title',
							type : 'string'
						}, {
							name : 'icon',
							type : 'string'
						}, {
							name : 'leaf',
							type : 'string'
						}, {
							name : 'parentId',
							type : 'string'
						}, {
							name : 'id',
							type : 'string'
						}, {
							name : 'type',
							type : 'string'
						}],
				proxy : {
					type : 'ajax',
					url : 'http://127.0.0.1:8080/WebService/CategoryService/getCategoryTree',
					reader : 'json'
				},
				folderSort : true,
				listeners : {
					load : function(store, node, records, successful, eOpts) {
						//test();
					}
				}
			}),
			columns : [{
						xtype : 'treecolumn', // this is so we know which
						// column will
						// show the tree
						text : '标题',
						flex : 2,
						sortable : true,
						dataIndex : 'title'
					}, {
						text : '图标',
						flex : 1,
						dataIndex : 'icon',
						sortable : true
					}, {
						text : '添加子分类',
						width : 80,
						menuDisabled : true,
						xtype : 'actioncolumn',
						tooltip : '添加子分类',
						align : 'center',
						icon : 'resources/images/icons/fam/add.png'
					}, {
						text : '添加流程',
						width : 70,
						menuDisabled : true,
						xtype : 'actioncolumn',
						tooltip : '添加流程',
						align : 'center',
						icon : 'resources/images/icons/fam/add.png'
					}, {
						text : '编辑',
						width : 55,
						menuDisabled : true,
						xtype : 'actioncolumn',
						tooltip : '编辑分类',
						align : 'center',
						icon : 'resources/images/edit_task.png',
						handler : function(grid, rowIndex, colIndex,
								actionItem, event, record, row) {
							Ext.Msg.alert('Editing'
											+ (record.get('done')
													? ' completed task'
													: ''), record.get('task'));
						},
						// Only leaf level tasks may be edited
						isDisabled : function(view, rowIdx, colIdx, item,
								record) {
							return !record.data.leaf;
						}
					}, {
						text : '删除分类',
						width : 70,
						menuDisabled : true,
						xtype : 'actioncolumn',
						tooltip : '删除分类',
						align : 'center',
						icon : 'resources/images/icons/fam/delete.png'
					}]
		});
		this.callParent();
	}
});
