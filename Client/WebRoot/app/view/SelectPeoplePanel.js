Ext.define('YongYou.view.SelectPeoplePanel', {
    extend: 'Ext.dataview.DataView',
    xtype:'selectpeople',
    config: {
        store: {
	        fields: ['description','imgPath'],
	        data: [
	            {description: '大学生',imgPath:'daxuesheng.gif'},
	            {description: '残疾人',imgPath:'canjiren.gif'},
	            {description: '低保户',imgPath:'dibaohu.gif'},
	            {description: '农民',imgPath:'nongmin.gif'}
	        ]
	    },
        id:'SelectPeoplePanel',
       // scrollable: 'vertical',
        baseCls: 'categories-list',
        cls:'x-fullscreen',
        //style : "background-color:white;!important",
        itemTpl: [
            '<div class="image" style="background-image:url(\'resources/image/person/{imgPath}\')"></div>'
            //'<div class="name">{description}</div>'

        ].join('')
    },
    onItemTap: function (container, target, index, e) {
        var me = this,
            store = me.getStore(),
            record = store.data.items[index].data.description;

        me.fireEvent('itemtap', me, index, target, record, e);
    }

});