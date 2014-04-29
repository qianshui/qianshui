Ext.define('YongYou.view.SubjectPanel', {
    extend: 'Ext.dataview.DataView',
    xtype:'subject',
    config: {
        store: 'SubjectMenu',
        id:'SubjectPanel',
       // scrollable: 'vertical',
        baseCls: 'categories-list',
        cls:'x-fullscreen',
        itemTpl: [
            '<div class="image" style="background-image:url(\'resources/image/subject/{imgPath}\')"></div>'
           // '<div class="name">{description}</div>'

        ].join('')
    },
    onItemTap: function (container, target, index, e) {
        var me = this,
            store = me.getStore(),
            record = store.data.items[index].data;

        me.fireEvent('itemtap', me, index, target, record, e);
    }

});