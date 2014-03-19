Ext.define('YongYou.util.Config', {
    singleton : true,

    config : {
        website:'http://127.0.0.1:8080/JiangbeiServer/resource/'
    },
    constructor : function(config) {
        this.initConfig(config);
    }
});