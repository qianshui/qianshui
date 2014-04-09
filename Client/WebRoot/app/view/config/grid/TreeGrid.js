treeStore=new Ext.data.TreeStore({
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
										}, {
											name : 'flowId',
											type : 'string'
										}],
								proxy : {
									type : 'ajax',
									url : YongYou.util.Config.getService()
											+ 'CategoryService/getCategoryTree',
									reader : 'json'
								},
								folderSort : true
		
							})

Ext.define('YongYou.view.config.grid.TreeGrid', {
	extend : 'Ext.tree.Panel',

	requires : ['Ext.data.*', 'Ext.grid.*', 'Ext.tree.*', 'Ext.ux.CheckColumn'],
	xtype : 'tree-grid',

	title : '主页',
	height : '100%',
	id:'tree-grid',
	useArrows : true,
	rootVisible : false,
	multiSelect : true,
	singleExpand : true,
	loadMask:true,
	initComponent : function() {
		this.width = '100%';

		Ext.apply(this, {
					store : treeStore,
					columns : [{
								xtype : 'treecolumn', // this is so we know
								// which
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
								icon : 'resources/images/icons/fam/add.png',
								handler : function(grid, rowIndex, colIndex,
										actionItem, event, record, row) {
										ShowForm(false,grid,record,{data:{paretId:record.data.id}})
								}
							},  {
								text : '编辑',
								width : 55,
								menuDisabled : true,
								xtype : 'actioncolumn',
								tooltip : '编辑分类',
								align : 'center',
								icon : 'resources/images/edit_task.png',
								handler : function(grid, rowIndex, colIndex,
										actionItem, event, record, row) {
										ShowForm(true,grid,record)
								},
								// Only leaf level tasks may be edited
								isDisabled : function(view, rowIdx, colIdx,
										item, record) {
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
	},
	listeners:{
        'afterrender': function(view,e){
        	
            loading = new Ext.LoadMask(view,{
               msg : 'Loading...',
               removeMask : true// 完成后移除
            });            
            loading.show();
        },//加载前
        'load': function(){loading.hide();}   //加载完成后
    }
});

ShowForm = function(isUpdate, grid,record) {
	form = Ext.create('YongYou.view.config.form.CategoryForm');
	if(isUpdate){
	form.getForm().loadRecord(record)
	}else{
		parentField=form.getForm().findField('parentId');
		parentField.setValue(record.data.id);
		leafField=form.getForm().findField('leaf');
		leafField.setValue(0);
	}
	Ext.create('Ext.window.Window', {
		title : '编辑分类',
		height : 500,
		width : 600,
		layout : 'fit',
		items : [form],
		dockedItems : [{
			xtype : 'toolbar',
			dock : 'bottom',
			ui : 'footer',
			items : [{
						xtype : 'component',
						flex : 1
					}, {
						xtype : 'button',
						text : '提交',
						handler : function() {

							if (form.isValid()) {
								if (isUpdate) {
									YongYou.util.DataApi.Core.updateCategory(
											callback, form, form.getValues(),grid)
								} else {
									YongYou.util.DataApi.Core.addCategory(
											callback, form, form.getValues(),grid)
								}
							}
						}

					}]
		}]
	}).show();
}
callback = function(res, scope,grid) {
	Ext.Msg.alert('提示', '执行操作成功！');
	scope.up('panel').close();
	grid.getStore().treeStore.reload();
}