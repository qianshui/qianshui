Ext.define('YongYou.store.AddressMenu', {
    extend: 'Ext.data.Store',

    config: {
        autoLoad: true,
        data: [
        { label: '办事指南', imgId: '\'resources/img/phone_startup.png\'' },
        { label: '微企指南', imgId: '\'resources/img/phone_startup.png\'' },
        { label: '投资咨询', imgId: '\'resources/img/phone_startup.png\'' }
        ],
        storeId: 'AddressMenu',
        fields: ['imgId','label']
    }
});