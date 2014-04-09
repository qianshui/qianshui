
Ext.define('YongYou.util.Config', {
    singleton : true,

    config : {

        website:'http://127.0.0.1:8086/JiangbeiServer/resource/',
        service:'http://127.0.0.1:8086/Service/'

    },
    constructor : function(config) {
        this.initConfig(config);
    }
});
