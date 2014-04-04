Ext.define('YongYou.store.SubjectMenu', {
    extend: 'Ext.data.Store',

    config: {
        autoLoad: true,
        data: [
        
        ],
        storeId: 'SubjectMenu',
        fields: ['commonFlag','description','id','imgPath','keyWords','subjectTypeId','title']
    }
});
