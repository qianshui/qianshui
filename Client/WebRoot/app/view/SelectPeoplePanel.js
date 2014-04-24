Ext.define('YongYou.view.SelectPeoplePanel', {
    extend: 'Ext.dataview.DataView',
    xtype:'selectpeople',
    config: {
        store: Ext.create('YongYou.store.PersonGroups'),
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