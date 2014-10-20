<%@ page language="java" import="mine.qianshui.functions.Mail" pageEncoding="utf-8"%>
<%
//注意上面的import的jar包是必须的
String filestr = (String)request.getParameter("file");
String emailstr = (String)request.getParameter("email");

String smtp = "smtp.163.com";  
String from = "meitui666@163.com";  
String to = emailstr.trim();//发送目的地  
String copyto = "1194233829@qq.com";  
String subject = "江北行政系统邮件";  
String content = "附件。";  
String username="meitui666@163.com";  
String password="meitui777";  
String path=application.getRealPath("/")+"//files//attachments//";
String filename = path+filestr;//发送的附件
Mail.sendAndCc(smtp, from, to, copyto, subject, content, username, password, filename);

out.write("<script>alert('"+filestr+emailstr+"');window.opener=null;window.close();</script>");
out.flush();
%>
