<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
<%
//String path = request.getContextPath();
//String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
String key=request.getParameter("key"); 
String result="";
if(key==null){
		
			result="["
	               +"{\"label\":\"办事指南\",\"imgId\":\"resources/img/phone_startup.png\",\"key\":\"101\",\"leaf\":false},"
	               +"{\"label\":\"政策法规\",\"imgId\":\"resources/img/phone_startup.png\",\"key\":\"102\",\"leaf\":false},"
	               +"{\"label\":\"优惠政策\",\"imgId\":\"resources/img/phone_startup.png\",\"key\":\"103\",\"leaf\":false}"
	               +"]"; 
			}
		else if("101".equals(key)){
			result="["
	               +"{\"label\":\"行业1\",\"imgId\":\"resources/img/phone_startup.png\",\"leaf\":\"false\"},"
	               +"{\"label\":\"行业2\",\"imgId\":\"resources/img/phone_startup.png\",\"leaf\":\"false\"},"
	               +"{\"label\":\"行业3\",\"imgId\":\"resources/img/phone_startup.png\",\"leaf\":\"false\"}"
	               +"]"; 
			}
			response.getWriter().write(result);
%>