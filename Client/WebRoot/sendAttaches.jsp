<%@ page language="java" import="mine.qianshui.functions.Mail" pageEncoding="utf-8"%>
<%
//注意上面的import的jar包是必须的
try{
	String filestr=request.getParameter("file");
	String emailstr=request.getParameter("email");
	
	String smtp = "smtp.163.com";  
	String from = "jiangbeixingzheng2@163.com";  
	String to = emailstr.trim();  
	String copyto = "1194233829@qq.com";  
	String subject = "江北行政系统邮件";  
	String content = "附件。";  
	String username="jiangbeixingzheng2@163.com";  
	String password="qianshui123";  
	String path=application.getRealPath("/")+"//files//attachments//";
	String filename = path+filestr.trim();  //所发附件
	//String filename=path+"1234.txt";
	Mail.sendAndCc(smtp, from, to, copyto, subject, content, username, password, filename);
}catch(Exception e)
{
	out.write("发送失败，请重试！");
	out.flush();
}

out.write("发送成功！");
out.flush();
%>
