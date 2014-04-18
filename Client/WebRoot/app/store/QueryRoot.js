Ext.define('YongYou.store.QueryRoot', {
    extend: 'Ext.data.Store',

    config: {
        autoLoad: true,
        data: [
        { label: '便民服务', imgId: '\'resources/image/desktop/bianmin.gif\'',id:'CA001' },
        { label: '企业办事', imgId: '\'resources/image/desktop/qiye.gif\'' ,id:'CA002' }
        ],
        storeId: 'QueryRoot',
        fields: ['imgId','label']
    }
});