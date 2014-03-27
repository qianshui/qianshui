Ext.define('YongYou.store.SubjectMenu', {
    extend: 'Ext.data.Store',

    config: {
        autoLoad: true,
        data: [
        { commonFlag:'true',description: '餐饮业', id: '01',title:'' }
        
        ],
        storeId: 'SubjectMenu',
        fields: ['commonFlag','description','id','title']
    }
});
