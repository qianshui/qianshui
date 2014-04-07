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
	items : [Ext.create('YongYou.view.config.grid.TreeGrid')
//    , {
//        title: 'Inactive Tab',
//        html: 'ddddddddddddddddddddddd',
//        closable: true
//    }, {
//        title: 'Disabled Tab',
//       closable: true
//    }
    ]
});