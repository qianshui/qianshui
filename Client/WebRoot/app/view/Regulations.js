/**
 * 
 */
Ext.define('YongYou.view.Regulations', {
    extend: 'Ext.Container',
    config: {
    	title:'相关法规',
        id:'Regulations',
        style : "background-color:white;!important",
        height: '100%',
        items: [
			{
			    xtype: 'panel',
			    //fullscreen:true,
			    style:'height:590px;overflow:scroll;',
			    scrollable : 'vertical',
			    html: '相关法律法规'
			}
        ]
    }
});