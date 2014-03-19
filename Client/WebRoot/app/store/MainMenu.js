Ext.define('YongYou.store.MainMenu', {
    extend: 'Ext.data.Store',

    config: {
        autoLoad: true,
        data: [
        { label: '办事指南', imgId: '\'resources/img/cover/jiangbei1.jpg\'' },
        { label: '微企指南', imgId: '\'resources/img/cover/jiangbei2.jpg\'' },
        { label: '投资咨询', imgId: '\'resources/img/cover/jiangbei3.jpg\'' }
        ],
        storeId: 'MainMenu',
        fields: ['imgId','label']
    }
});
