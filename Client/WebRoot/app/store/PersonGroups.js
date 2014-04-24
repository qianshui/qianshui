Ext.define('YongYou.store.PersonGroups', {
    extend: 'Ext.data.Store',

    config: {
        autoLoad: true,
       fields: ['description','imgPath'],
	        data: [
	            {description: '大学生',imgPath:'daxuesheng.gif'},
	            {description: '残疾人',imgPath:'canjiren.gif'},
	            {description: '低保户',imgPath:'dibaohu.gif'},
	            {description: '农民',imgPath:'nongmin.gif'}
	        ]
    }
});
