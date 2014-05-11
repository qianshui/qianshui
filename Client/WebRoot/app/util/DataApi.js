Ext.define('YongYou.util.DataApi', {
    singleton : true,

    config : {   
    },
    constructor : function(config) {
        this.initConfig(config);
    },
    Core:{
    	getAreasOfJiangbei:function(callback,scope,param){
			YongYou.util.DataApi.queryData(
		    		YongYou.util.Config.getService()+"MapService/getAreasOfJiangbei",param,
		    		callback,scope)

        },
    	getAdnameByPoint:function(callback,scope,param){
			YongYou.util.DataApi.queryData(
		    		YongYou.util.Config.getService()+"MapService/getAdnameByPoint",param,
		    		callback,scope)

	    },
		getTzjyByInfo:function(callback,scope,param){
			YongYou.util.DataApi.queryData(
		    		YongYou.util.Config.getService()+"IndustryService/getTzjyByInfo",param,
		    		callback,scope)
	
	    },
		getZbptByPoint:function(callback,scope,param){
			YongYou.util.DataApi.queryData(
		    		YongYou.util.Config.getService()+"IndustryService/getZbptByPoint",param,
		    		callback,scope)
	
	    },
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
    	/**
    	 * 菜单列表
    	 * @param {} callback
    	 * @param {} scope
    	 * @param {} param
    	 ******************************************/
    	getMenuList:function(callback,scope,param){
    		YongYou.util.DataApi.queryData(
    	    		YongYou.util.Config.getService()+"ConfigUtilService/getMenuList",param,
    	    		callback,scope)
    	},
    	/***************************************************************************/
    	
    	
/**×××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××
    	 * 类别操作
    	 * @param {} callback
    	 * @param {} scope
    	 * @param {} param
  **********************************************************************************************************/  	
    	getChildByID:function(callback,scope,param,uppa){
    		YongYou.util.DataApi.queryData(
    	    		YongYou.util.Config.getService()+"CategoryService/getChildByID",param,
    	    		callback,scope)

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
   /**********************************************************************************************************/ 
/**×××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××
    	 * 流程操作
    	 * @param {} callback
    	 * @param {} scope
    	 * @param {} param
  **********************************************************************************************************/  	
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
    	},
   /**********************************************************************************************************/ 
    /**×××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××
    	 * 流程节点操作
    	 * @param {} callback
    	 * @param {} scope
    	 * @param {} param
  **********************************************************************************************************/ 
    	getFlowChart:function(callback,scope,param){
    		YongYou.util.DataApi.queryData(
    		YongYou.util.Config.getService()+"CategoryService/getNodeByFlowID",param,
    		callback,scope)

    	},
    	getNodeByFlowID:function(callback,scope,param){
    		YongYou.util.DataApi.queryData(
    	    		YongYou.util.Config.getService()+"CategoryService/getNodeByFlowID",param,
    	    		callback,scope)

    	},
    	getNodeBySubjectID:function(callback,scope,param){
    		YongYou.util.DataApi.queryData(
    	    		YongYou.util.Config.getService()+"CategoryService/getNodeBySubjectID",param,
    	    		callback,scope)

    	},
    	addNode:function(callback,scope,param){
    		YongYou.util.DataApi.postData(
    	    		YongYou.util.Config.getService()+"CategoryService/createNode",param,
    	    		callback,scope)

    	},
    	updateNode:function(callback,scope,param){
    		YongYou.util.DataApi.postData(
    	    		YongYou.util.Config.getService()+"CategoryService/updateNode",param,
    	    		callback,scope)

    	},
  /**×××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××
    	 * 联系人操作
    	 * @param {} callback
    	 * @param {} scope
    	 * @param {} param
  **********************************************************************************************************/  	
    	getContactByContactID:function(callback,scope,param){
    		YongYou.util.DataApi.queryData(
    	    		YongYou.util.Config.getService()+"CategoryService/getContactByContactID",param,
    	    		callback,scope)
    	},
    	getContactList:function(callback,scope,param){
    		YongYou.util.DataApi.queryData(
    	    		YongYou.util.Config.getService()+"CategoryService/getContactList",param,
    	    		callback,scope)
    	},
    	updateContact:function(callback,scope,params,uppa)
    	{
    		YongYou.util.DataApi.postData(
    	    		YongYou.util.Config.getService()+'CategoryService/updateContact',params,
    	    		callback,scope,uppa);
    	},
    	addContact:function(callback,scope,params,uppa)
    	{
    		YongYou.util.DataApi.postData(
    	    		YongYou.util.Config.getService()+'CategoryService/addContact',params,
    	    		callback,scope,uppa);
    	},
 /************************************************************************************************************/  
    	
    	
    	/**×××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××
    	 * 附件操作
    	 * @param {} callback
    	 * @param {} scope
    	 * @param {} param
  **********************************************************************************************************/
    	getAttachmentByNodeID:function(callback,scope,param){
    		YongYou.util.DataApi.queryData(
    	    		YongYou.util.Config.getService()+"CategoryService/getAttachmentByNodeID",param,
    	    		callback,scope)
    	},
    	getAttachmentList:function(callback,scope,param){
    		YongYou.util.DataApi.queryData(
    	    		YongYou.util.Config.getService()+"CategoryService/getAttachmentList",param,
    	    		callback,scope)
    	},
    	updateAttachment:function(callback,scope,params,uppa)
    	{
    		YongYou.util.DataApi.postData(
    	    		YongYou.util.Config.getService()+'CategoryService/updateAttachment',params,
    	    		callback,scope,uppa);
    	},
    	addAttachment:function(callback,scope,params,uppa)
    	{
    		YongYou.util.DataApi.postData(
    	    		YongYou.util.Config.getService()+'CategoryService/addAttachment',params,
    	    		callback,scope,uppa);
    	},
 /************************************************************************************************************/
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

    	getCommonSectors:function(callback,scope,params)
    	{

    		YongYou.util.DataApi.queryData(
    				YongYou.util.Config.getService()+"IndustryService/getIndustryClass",params,
    	    		callback,scope);

    	},
    	getCommonIndustry:function(callback,scope,params)
    	{
    		YongYou.util.DataApi.queryData(
    	    		YongYou.util.Config.getService()+"IndustryService/getSubjectList",params,
    	    		callback,scope);

    	},
    	getAddressList:function(callback,scope,params)
    	{
    		YongYou.util.DataApi.queryData(
    	    		YongYou.util.Config.getService()+"IndustryService/getStreetList",params,
    	    		callback,scope);

    	},
    	getAllStreetList:function(callback,scope,params)
    	{
    		YongYou.util.DataApi.queryData(
    	    		YongYou.util.Config.getService()+"IndustryService/getAllStreetList",params,
    	    		callback,scope);

    	},
    	judge_adrs:function(callback,scope,params)
    	{
    		YongYou.util.DataApi.queryData(
    	    		YongYou.util.Config.getWebsite()+"Judge_address",params,
    	    		callback,scope);
    	},
    	
    	/*******************************************************************************************************************
    	 ************************************************************************************************ 
    	 * config
    	 ************************************************************************************************ 
    	 ********************************************************************************************************************/
    	
    	
    	updateSubject:function(callback,scope,params,uppa)
    	{
    		YongYou.util.DataApi.postData(
    	    		YongYou.util.Config.getService()+'IndustryService/updateSubject',params,
    	    		callback,scope,uppa);
    	},
    	addSubject:function(callback,scope,params,uppa)
    	{
    		YongYou.util.DataApi.postData(
    	    		YongYou.util.Config.getService()+'IndustryService/addSubject',params,
    	    		callback,scope,uppa);
    	},
    	updateLaws:function(callback,scope,params,uppa)
    	{
    		YongYou.util.DataApi.postData(
    	    		YongYou.util.Config.getService()+'IndustryService/updateLaws',params,
    	    		callback,scope,uppa);
    	},
    	addLaws:function(callback,scope,params,uppa)
    	{
    		YongYou.util.DataApi.postData(
    	    		YongYou.util.Config.getService()+'IndustryService/addLaws',params,
    	    		callback,scope,uppa);
    	},
    	updatePolicy:function(callback,scope,params,uppa)
    	{
    		YongYou.util.DataApi.postData(
    	    		YongYou.util.Config.getService()+'IndustryService/updatePolicy',params,
    	    		callback,scope,uppa);
    	},
    	addPolicy:function(callback,scope,params,uppa)
    	{
    		YongYou.util.DataApi.postData(
    	    		YongYou.util.Config.getService()+'IndustryService/addPolicy',params,
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
