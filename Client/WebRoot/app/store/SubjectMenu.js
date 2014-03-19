Ext.define('YongYou.store.SubjectMenu', {
    extend: 'Ext.data.Store',

    config: {
        autoLoad: true,
        data: [
        { label: '餐饮业', imgId: '\'../../resources/img/phone_startup.png\'' },
        { label: '旅游业', imgId: '\'../../resources/img/phone_startup.png\'' },
        { label: '新兴产业', imgId: '\'../../resources/img/phone_startup.png\'' },
         { label: '广告业', imgId: '\'../../resources/img/phone_startup.png\'' },
          { label: '物流业', imgId: '\'../../resources/img/phone_startup.png\'' },
           { label: '金融业', imgId: '\'../../resources/img/phone_startup.png\'' }
        ],
        storeId: 'SubjectMenu',
        fields: ['imgId','label']
    }
});
