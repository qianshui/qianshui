Ext.define('YongYou.util.ClientEventHandle', {
    singleton : true,

    config : {   
    },
    constructor : function(config) {
        this.initConfig(config);
    },
    events:{
    	/**
    	 * 
    	 * @param {} view
    	 * @param {} index
    	 * @param {} target
    	 * @param {} record
    	 * @param {} e
    	 */
    	onCatrgotyItemTap : function(view, index, target, record, e) {
		if(view.getId()=='query-desktop')
			navPort=view.parent;
		else
			navPort=view;
		
		if (record.leaf == "1") {

			detailTab = Ext.create('YongYou.view.query.DetailTab', {
						title : record.title
					})
			YongYou.util.DataApi.Core.getFlowByCategoryID(function(res, scope) {
						flow = Ext.decode(res);
						scope.title = flow.title;
						scope.initialPanel(flow);

					}, detailTab, {
						'id' : record.id
					})
			navPort.push(detailTab);
		} else {

				inner = Ext.create('YongYou.view.query.DesktopInner', {
							title : record.title
						})
			inner.add({
						xtype : 'titlebar',
						title : record.title
					})
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