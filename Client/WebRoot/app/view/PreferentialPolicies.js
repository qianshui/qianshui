/**
 * 
 */
Ext.define('YongYou.view.PreferentialPolicies', {
    extend: 'Ext.Container',
    config: {
    	title:'优惠政策',
        id:'PreferentialPolicies',
        height: '100%',
        style : "background-color:white;!important",
        items: [
			{
			    xtype: 'panel',
			    style:'height:590px;overflow:scroll;',
			    scrollable : 'vertical',
			    html: '相关优惠政策'
			}
        ]
    }
});