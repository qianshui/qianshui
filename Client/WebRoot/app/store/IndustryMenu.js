/**
 * 
 */
Ext.define('YongYou.store.IndustryMenu', {
    extend: 'Ext.data.Store',

    config: {
        autoLoad: true,
        data: [
        
        ],
        storeId: 'IndustryMenu',
        fields: ['commonFlag','description','id','imgPath','keyWords','subjectTypeId','title']
    }
});