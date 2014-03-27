Ext.define('YongYou.view.SubjectPanel', {
    extend: 'Ext.dataview.DataView',
    xtype:'subject',
    config: {
        store: 'SubjectMenu',
        id:'SubjectPanel',
       // scrollable: 'vertical',
        baseCls: 'categories-list',

        itemTpl: [
            '<div class="image" style="background-image:url(\'resources/img/phone_startup.png\')"></div>',
            '<div class="name">{description}</div>'

        ].join('')
    },
    onItemTap: function (container, target, index, e) {
        var me = this,
            store = me.getStore(),
            record = store.data.items[index].data.label;

        me.fireEvent('itemtap', me, index, target, record, e);
    }

});