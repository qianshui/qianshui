Ext.define('YongYou.view.config.TabMain', {
	extend : 'Ext.tab.Panel',
	xtype : 'basic-tabs',
 fullscreen: true,
  region: 'center',
	defaults : {
		bodyPadding : 10,
		autoScroll : true
	},
	items : [{
        title: '主页',
        html: 'sssssssssssssssssssssssssssssssssssssssss'
    }, {
        title: 'Inactive Tab',
        html: 'ddddddddddddddddddddddd',
        closable: true
    }, {
        title: 'Disabled Tab',
       closable: true
    }]
});