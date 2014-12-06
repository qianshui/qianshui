Ext.define('YongYou.store.MainMenu', {
    extend: 'Ext.data.Store',

    config: {
        autoLoad: true,
        data: [
        { label: '办事指南', imgId: '\'resources/image/desktop/banshi.gif\'' }, 
//      { label: '微企指南', imgId: '\'resources/image/desktop/weiqi.gif\'' },
	    { label: '投资咨询', imgId: '\'resources/image/desktop/touzi.gif\'' }
  ],
        storeId: 'MainMenu',
        fields: ['imgId','label']
    }
});
