function forSendMail(filestr)
{
	var emailstr = prompt('输入您的邮箱：', '1194233829@qq.com');  
    //window.open('sendAttaches.jsp?email='+emailstr+'&file='+filestr);
	if(emailstr){
		if(verifyAddress(emailstr)){
			YongYou.util.DataApi.Core.forSendMail(function(res,scope){
				
				alert(res);
			},null,{
				'email':emailstr,
				'file' :filestr
			});
		}else{
			forSendMail(filestr);
		}
	}else
	{
		alert("您取消了发送附件！");
	}
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
  alert("请再试一次");    
  return false;    
 }    
}    