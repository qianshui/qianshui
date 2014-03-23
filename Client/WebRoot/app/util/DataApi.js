Ext.define('YongYou.util.DataApi', {
    singleton : true,

    config : {   
    },
    constructor : function(config) {
        this.initConfig(config);
    },
    Core:{
    	getAreaByLngLat:function(callback,scope,param){
    		YongYou.util.DataApi.queryData(
    	    		"http://127.0.0.1:8080/WebService/MapService/getAreaByLngLat",param,
    	    		callback,scope)
    	},
    	getMenuList:function(callback,scope,param){
    		YongYou.util.DataApi.queryData(
    	    		"http://127.0.0.1:8080/WebService/ConfigUtilService/getMenuList",param,
    	    		callback,scope)
    	},
    	getBZList:function(callback,scope,param){
    		YongYou.util.DataApi.queryData(
    		YongYou.util.Config.getWebsite()+"Resource/getBZList",param,
    		callback,scope)
    	},
    	getFGList:function(callback,scope,param){
    		YongYou.util.DataApi.queryData(
    		YongYou.util.Config.getWebsite()+"Resource/getFGList",param,
    		callback,scope)
    	},
    	getZCList:function(callback,scope,param){
    		YongYou.util.DataApi.queryData(
    		YongYou.util.Config.getWebsite()+"Resource/getZCList",param,
    		callback,scope)
    	},
    	getBZ:function(callback,scope,param){
    		YongYou.util.DataApi.queryData(
    		YongYou.util.Config.getWebsite()+"Resource/getBZ",param,
    		callback,scope)
    	},
    	getFG:function(callback,scope,param){
    		YongYou.util.DataApi.queryData(
    		YongYou.util.Config.getWebsite()+"Resource/getFG",param,
    		callback,scope)
    	},
    	getZC:function(callback,scope,param){
    		YongYou.util.DataApi.queryData(
    		YongYou.util.Config.getWebsite()+"Resource/getZC",param,
    		callback,scope)
    	},
    	getFlowChart:function(callback,scope,param){
    		YongYou.util.DataApi.queryData(
    		YongYou.util.Config.getWebsite()+"Resource/getFlowChart",param,
    		callback,scope)
    	},
    	getFlowItemContent:function(callback,scope,param){
    		YongYou.util.DataApi.queryData(
    		YongYou.util.Config.getWebsite()+"Resource/getFlowItemContent",param,
    		callback,scope)
    	},
    	getCommonSectors:function(callback,scope,params)
    	{
    		YongYou.util.DataApi.queryData(
    	    		YongYou.util.Config.getWebsite()+"Sectorslist",params,
    	    		callback,scope);
    	},
    	getCommonIndustry:function(callback,scope,params)
    	{
    		YongYou.util.DataApi.queryData(
    	    		YongYou.util.Config.getWebsite()+"Industrylist",params,
    	    		callback,scope);
    	},
    	getAddressList:function(callback,scope,params)
    	{
    		YongYou.util.DataApi.queryData(
    	    		YongYou.util.Config.getWebsite()+"Addresslist",params,
    	    		callback,scope);
    	},
    	judge_adrs:function(callback,scope,params)
    	{
    		YongYou.util.DataApi.queryData(
    	    		YongYou.util.Config.getWebsite()+"Judge_address",params,
    	    		callback,scope);
    	}
    	
    },
    queryData:function(url, params, callback, scope) {
       // Ext.data.JsonP.request({
         Ext.Ajax.request({
         	url: url,
            params: params,
            method: 'GET',
            dataType:'json',
            scope: scope,
            success: function(response) {
                if (callback) {
                    callback(response.responseText, this);
                }
            },
            failure: function(a, b, c) {
                Ext.Msg.alert('提示', '远程连接失败:' + url);
            }
        });
    }
    
});