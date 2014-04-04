Ext.define('YongYou.view.InformationConfirm', {
    extend: 'Ext.Panel',
    config: {
    	title:'信息确认',
        id:'InformationConfirm',
        height: '100%',
        style : "background-color:white;!important",
        items: [
			{
			    xtype: 'label',
			    style:'font-size:24px;',
			    id: 'show_indus_adres',
			    html: '行业信息，地址信息'
			},
			{
			    xtype: 'textareafield',
			    style:'height:300px;font-size:24px;',
			    value:'周边配套'
			},
			{
			    xtype: 'textareafield',
			    style:'height:200px;font-size:24px;',
			    value:'投资建议'
			}
        ]
    }
});