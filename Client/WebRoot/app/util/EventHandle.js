Ext.define('YongYou.util.EventHandle', {
    singleton : true,

    config : {   
    },
    constructor : function(config) {
        this.initConfig(config);
    },
    events:{
    	
    	leftMenuClick:function(parent,item,callback)
    	{
    		alert('sss');
    	}
    }
    
    
});