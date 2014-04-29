Ext.define('YongYou.store.PersonGroups', {
    extend: 'Ext.data.Store',

    config: {
        autoLoad: true,
       fields: ['description','imgPath'],
	        data: [
	            {description: '大学生',imgPath:'daxuesheng.gif',id:'PS001'},
	            {description: '残疾人',imgPath:'canjiren.gif',id:'PS002'},
	            {description: '低保户',imgPath:'dibaohu.gif',id:'PS003'},
	            {description: '农民',imgPath:'nongmin.gif',id:'PS004'}
	        ]
    }
});
