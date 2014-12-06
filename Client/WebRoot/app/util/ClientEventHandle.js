Ext.define('YongYou.util.ClientEventHandle', {
	singleton : true,

	config : {},
	constructor : function(config) {
		this.initConfig(config);
	},
	events : {
		/**
		 * 
		 * @param {}
		 *            view
		 * @param {}
		 *            index
		 * @param {}
		 *            target
		 * @param {}
		 *            record
		 * @param {}
		 *            e
		 */
		onCatrgotyItemTap : function(view, index, target, record, e) {
			if (view.getId() == 'query-desktop')
				navPort = view.parent;
			else
				navPort = view;

			if (record.flowId) {
				if (record.flowType == '1') {
					detailTab = Ext.create(
							'YongYou.view.query.staticDetailTab', {
								title : record.title
							})
					YongYou.util.DataApi.Core.getFlowByID(function(res, scope) {
						flow = Ext.decode(res);
						scope.title = flow.title;
						scope.initialPanel(flow);

					}, detailTab, {
						'id' : record.flowId
					})
					navPort.push(detailTab);
				}
				else {
					detailTab = Ext.create('YongYou.view.query.DetailTab', {
						title : record.title
					})
					YongYou.util.DataApi.Core.getFlowByID(function(res, scope) {
						flow = Ext.decode(res);
						scope.title = flow.title;
						scope.initialPanel(flow);

					}, detailTab, {
						'id' : record.flowId
					})
					navPort.push(detailTab);
				}
			} else if (record.leaf == '0') {

				inner = Ext.create('YongYou.view.query.DesktopInner', {
					title : record.title
				})
				// inner.add({
				// xtype : 'titlebar',
				// title : record.title
				// })
				YongYou.util.DataApi.Core.getChildByID(function(res, scope) {

					scope.initialPanel(res);

				}, inner, {
					'id' : record.id
				})
				navPort.push(inner);
			}
		}

	}

});