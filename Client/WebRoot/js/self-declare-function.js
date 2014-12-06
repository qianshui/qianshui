function forSendMail(filestr)
{
	 var win = Ext.create('YongYou.util.Window', {});
	 win.initialPanelControl(new Ext.Panel({
						fullscreen : true,
						scrollable : true,
						layout : 'fit',
						height : '100%',
						width : '100%',
						html: '<iframe style="width:100%;height:580px;"'
							+' src="files/attachments/'+filestr+'"></iframe>',
						items:[
					       {
					    	   xtype:'container',
					    	   height : '10%',
					           width : '100%',
					           docked:'bottom',
					           layout:'hbox',
					           items:[
					                {
					                	xtype:'button',
					                	margin:'0 10% 0 10%',
					                	width:'30%',
					                	ui:'round',
					                	text:'直接下载',
					                	listeners : {
					    					'tap' : function(b, e) {
					    				         //alert(this.parent.parent.NodeInfo.detail);
					                			forDownloadFile(filestr);
					    			        }
					    			    }
					                },
					                {
					                	xtype:'button',
					                	margin:'0 10% 0 10%',
					                	width:'30%',
					                	ui:'round',
					                	text:'发送邮件',
					                	listeners : {
					    					'tap' : function(b, e) {
					    				         //alert(this.parent.parent.NodeInfo.detail);
					                			forSendMail_bak(filestr);
					    			        }
					    			    }
					                }]
					       },
	 					]
						}), '附件展示')
}
function forSendMail_bak(filestr){
	Ext.Msg.prompt('提示','请输入您的邮箱:',function(id,msg){
		//alert('单击的按钮 id 是：'+id+'\n'+'输入内容是'+msg);
		if(id=='ok'){
			if(verifyAddress(msg)){
				//alert("验证通过，即将发送邮件。。。");
				//正在发送邮件的提示
//				var sending = new Ext.LoadMask(win,{
//		            msg : '正在发送...',
//		            removeMask : true// 完成后移除
//		         }); 
//				sending.show();
				//向服务器请求发送邮件
				YongYou.util.DataApi.Core.forSendMail(function(res,scope){
					//sending.hide();
					Ext.Msg.alert("提示",res);
				},null,{
					'email':msg,
					'file' :filestr
				});
			}else{
				forSendMail_bak(filestr);//递归调用，填错邮箱时重新填写
			}
		}else
		{
			Ext.Msg.alert("提示","您取消了发送附件！");
		}
	},this,true);
}
function forDownloadFile(filestr)
{
//	YongYou.util.DataApi.Core.forDownload(function(res,scope){
//		//sending.hide();
//		//Ext.Msg.alert("提示",res);
//	},null,{
//		'file' :filestr
//	});
	window.location="servlet/DownloadFiles?file="+filestr;
}
function verifyAddress(email)    
{    
	 //var email = obj.email.value;    
	 var pattern = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/;    
	 flag = pattern.test(email);    
	 if(flag)    
	 {    
	  //alert("恭喜您！您填写的邮箱地址是正确的！");   
	  return true;    
	 }    
	 else    
	 {    
		 Ext.Msg.alert("提示","邮箱错误，请重新填写！"); 
	     return false;    
	 }    
}    