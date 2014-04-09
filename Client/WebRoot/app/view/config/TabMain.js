Ext.define('YongYou.view.config.TabMain', {
	extend : 'Ext.tab.Panel',
	xtype : 'basic-tabs',
	id:'tab-main',
 fullscreen: true,
  region: 'center',
	defaults : {
		bodyPadding : 10,
		autoScroll : true
	},
	items : [
     {
        title: '主页',
        html: '',
        closable: false
    }

    ]
});