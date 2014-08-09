<%@ page language="java" import="java.util.*, java.io.*, org.apache.commons.fileupload.*, org.apache.commons.fileupload.disk.DiskFileItemFactory, org.apache.commons.fileupload.servlet.ServletFileUpload" pageEncoding="utf-8"%>
<%
//注意上面的import的jar包是必须的
//下面是使用apache commons fileupload接收上传文件；
FileItemFactory factory = new DiskFileItemFactory();
ServletFileUpload upload = new ServletFileUpload(factory);
//因为内部类无法引用request，所以要实现一个。
class MyProgressListener implements ProgressListener{
	private HttpServletRequest request = null;
	MyProgressListener(HttpServletRequest request){
		this.request = request;
	}
	public void update(long pBytesRead, long pContentLength, int pItems) {
		double percentage = ((double)pBytesRead/(double)pContentLength);
		//上传的进度保存到session，以便processController.jsp使用
		request.getSession().setAttribute("uploadPercentage", percentage);
	}
}
upload.setProgressListener(new MyProgressListener(request));
List items = upload.parseRequest(request);
Iterator iter = items.iterator();
String filename="";
while (iter.hasNext()) {
    FileItem item = (FileItem) iter.next();
    if (item.isFormField()){
    	
    } else {
        //String fieldName = item.getFieldName();
        String fileName = item.getName();
        //String contentType = item.getContentType();
       System.out.println();
        boolean isInMemory = item.isInMemory();
        long sizeInBytes = item.getSize();
        String path=application.getRealPath("/");
        path=path+"//files//attachments//";
        if(fileName.indexOf("pdf")==fileName.length()-3)
        {
            filename=System.currentTimeMillis() + ".pdf";
        }
        else if(fileName.indexOf("doc")==fileName.length()-3)
        {
            filename=System.currentTimeMillis() + ".doc";
        }
        else if(fileName.indexOf("docx")==fileName.length()-4)
        {
            filename=System.currentTimeMillis() + ".docx";
        }
        else
        {
            filename=fileName;
        }
        File uploadedFile = new File(path + filename);
        item.write(uploadedFile);
    }
}
out.write("{success:true,msg:'"+filename+"'}");
out.flush();
%>
