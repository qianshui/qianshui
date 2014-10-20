function forSendMail(filestr)
{
	var emailstr = prompt('输入您的邮箱：', '');  
    window.open('sendAttaches.jsp?email='+emailstr+'&file='+filestr);
}