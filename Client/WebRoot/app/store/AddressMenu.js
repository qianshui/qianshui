Ext.define('YongYou.store.AddressMenu', {
    extend: 'Ext.data.Store',

    config: {
        autoLoad: true,
        data: [
        
        ],
        storeId: 'AddressMenu',
        fields: ['commonFlag','id','name','imgPath']
    }
});