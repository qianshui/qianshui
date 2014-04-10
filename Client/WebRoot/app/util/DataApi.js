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
    	    		YongYou.util.Config.getService()+"MapService/getAreaByLngLat",param,
    	    		callback,scope)

    	},
    	getZbptByLngLat:function(callback,scope,param){
    		YongYou.util.DataApi.queryData(
    	    		YongYou.util.Config.getService()+"MapService/getZbptByLngLat",param,
    	    		callback,scope)

    	},
    	getMenuList:function(callback,scope,param){
    		YongYou.util.DataApi.queryData(
    	    		YongYou.util.Config.getService()+"ConfigUtilService/getMenuList",param,
    	    		callback,scope)
    	},
    	getChildByID:function(callback,scope,param,uppa){
    		YongYou.util.DataApi.queryData(
    	    		YongYou.util.Config.getService()+"CategoryService/getChildByID",param,
    	    		callback,scope)

    	},
    	getFlowByCategoryID:function(callback,scope,param){
    		YongYou.util.DataApi.queryData(
    	    		YongYou.util.Config.getService()+"CategoryService/getFlowByCategoryID",param,
    	    		callback,scope)
    	},
    	getFlowByID:function(callback,scope,param){
    		YongYou.util.DataApi.queryData(
    	    		YongYou.util.Config.getService()+"CategoryService/getFlowByID",param,
    	    		callback,scope)
    	},
    	getFlowList:function(callback,scope,param){
    		YongYou.util.DataApi.queryData(
    	    		YongYou.util.Config.getService()+"CategoryService/getFlowList",param,
    	    		callback,scope)
    	},
    	getNodeByFlowID:function(callback,scope,param){
    		YongYou.util.DataApi.queryData(
    	    		YongYou.util.Config.getService()+"CategoryService/getNodeByFlowID",param,
    	    		callback,scope)

    	},
    	getAttachmentByNodeID:function(callback,scope,param){
    		YongYou.util.DataApi.queryData(
    	    		YongYou.util.Config.getService()+"CategoryService/getAttachmentByNodeID",param,
    	    		callback,scope)
    	},
    	getContactByContactID:function(callback,scope,param){
    		YongYou.util.DataApi.queryData(
    	    		YongYou.util.Config.getService()+"CategoryService/getContactByContactID",param,
    	    		callback,scope)
    	},
    	getIndustryByID:function(callback,scope,param){
    		YongYou.util.DataApi.queryData(
    	    		YongYou.util.Config.getService()+"IndustryService/getIndustryByID",param,
    	    		callback,scope)
    	},
    	getIndustryClass:function(callback,scope,param){
    		YongYou.util.DataApi.queryData(
    	    		YongYou.util.Config.getService()+"IndustryService/getIndustryClass",param,
    	    		callback,scope)
    	},
    	getSubjectList:function(callback,scope,param){
    		YongYou.util.DataApi.queryData(
    	    		YongYou.util.Config.getService()+"IndustryService/getSubjectList",param,
    	    		callback,scope)
    	},
    	getLawsByIndustryID:function(callback,scope,param){
    		YongYou.util.DataApi.queryData(
    	    		YongYou.util.Config.getService()+"IndustryService/getLawsByIndustryID",param,
    	    		callback,scope)
    	},
    	getPolicyByIndustryID:function(callback,scope,param){
    		YongYou.util.DataApi.queryData(
    	    		YongYou.util.Config.getService()+"IndustryService/getPolicyByIndustryID",param,
    	    		callback,scope)
    	},
    	getLawByLawID:function(callback,scope,param){
    		YongYou.util.DataApi.queryData(
    	    		YongYou.util.Config.getService()+"IndustryService/getLawByLawID",param,
    	    		callback,scope)
    	},
    	getPolicyByPolicyID:function(callback,scope,param){
    		YongYou.util.DataApi.queryData(
    	    		YongYou.util.Config.getService()+"IndustryService/getPolicyByPolicyID",param,
    	    		callback,scope)
    	},
    	
    	
    	/*************************Demo Service**********************************************************
    	 * 
    	 * @param {} callback
    	 * @param {} scope
    	 * @param {} param
    	 */
    	getFlowChart:function(callback,scope,param){
    		YongYou.util.DataApi.queryData(
    		YongYou.util.Config.getService()+"CategoryService/getNodeByFlowID",param,
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
    		YongYou.util.Config.getService()+"IndustryService/getLawsByIndustryID",param,
    		callback,scope)

    	},
    	getZC:function(callback,scope,param){
    		YongYou.util.DataApi.queryData(
    		YongYou.util.Config.getService()+"IndustryService/getPolicyByIndustryID",param,
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
    				YongYou.util.Config.getService()+"IndustryService/getIndustryClass",params,
    	    		callback,scope);

    	},
    	getCommonIndustry:function(callback,scope,params)
    	{
    		YongYou.util.DataApi.queryData(
    	    		YongYou.util.Config.getService()+"IndustryService/getSubjectList?id=ST0003",params,
    	    		callback,scope);

    	},
    	getAddressList:function(callback,scope,params)
    	{
    		YongYou.util.DataApi.queryData(
    	    		YongYou.util.Config.getService()+"IndustryService/getStreetList",params,
    	    		callback,scope);

    	},
    	judge_adrs:function(callback,scope,params)
    	{
    		YongYou.util.DataApi.queryData(
    	    		YongYou.util.Config.getWebsite()+"Judge_address",params,
    	    		callback,scope);
    	},
    	updateCategory:function(callback,scope,params,uppa)
    	{
    		YongYou.util.DataApi.postData(
    	    		YongYou.util.Config.getService()+'CategoryService/updateCategory',params,
    	    		callback,scope,uppa);
    	},
    	addCategory:function(callback,scope,params,uppa)
    	{
    		YongYou.util.DataApi.postData(
    	    		YongYou.util.Config.getService()+'CategoryService/addCategory',params,
    	    		callback,scope,uppa);
    	},
    	updateFlow:function(callback,scope,params,uppa)
    	{
    		YongYou.util.DataApi.postData(
    	    		YongYou.util.Config.getService()+'CategoryService/updateFlow',params,
    	    		callback,scope,uppa);
    	},
    	addFlow:function(callback,scope,params,uppa)
    	{
    		YongYou.util.DataApi.postData(
    	    		YongYou.util.Config.getService()+'CategoryService/addFlow',params,
    	    		callback,scope,uppa);
    	}
    	
    },
    queryData:function(url, params, callback, scope,uppa) {
       // Ext.data.JsonP.request({
         Ext.Ajax.request({
         	url: url,
            params: params,
            method: 'GET',
            dataType:'json',
            scope: scope,
            success: function(response) {
                if (callback) {
                    callback(response.responseText, this,uppa);
                }
            },
            failure: function(a, b, c) {
                Ext.Msg.alert('提示', '远程连接失败:' + url);
            }
        });
    },
     postData:function(url, params, callback, scope,uppa) {
       // Ext.data.JsonP.request({
         Ext.Ajax.request({
         	url: url,
         	headers: {
             'Content-Type': 'application/json;charset=utf-8'
            },
            params: Ext.JSON.encode(params),
            method: 'POST',
            dataType:'json',
            scope: scope,
            success: function(response) {
                if (callback) {
                    callback(response.responseText, this,uppa);
                }
            },
            failure: function(a, b, c) {
                Ext.Msg.alert('提示', '远程连接失败:' + url);
            }
        });
    }
    
});
