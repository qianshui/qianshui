package mine.qianshui.functions;

import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletContext;
import javax.servlet.ServletException;
import javax.servlet.ServletOutputStream;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

public class DownloadFiles extends HttpServlet {

	/**
	 * Constructor of the object.
	 */
	public DownloadFiles() {
		super();
	}

	/**
	 * Destruction of the servlet. <br>
	 */
	public void destroy() {
		super.destroy(); // Just puts "destroy" string in log
		// Put your code here
	}

	/**
	 * The doGet method of the servlet. <br>
	 *
	 * This method is called when a form has its tag value method equals to get.
	 * 
	 * @param request the request send by the client to the server
	 * @param response the response send by the server to the client
	 * @throws ServletException if an error occurred
	 * @throws IOException if an error occurred
	 */
	public void doGet(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {

		doPost(request,response);
	}

	/**
	 * The doPost method of the servlet. <br>
	 *
	 * This method is called when a form has its tag value method equals to post.
	 * 
	 * @param request the request send by the client to the server
	 * @param response the response send by the server to the client
	 * @throws ServletException if an error occurred
	 * @throws IOException if an error occurred
	 */
	public void doPost(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {

		try{
			String filestr=request.getParameter("file");
			String path=getServletContext().getRealPath(File.separator)+"//files//attachments//";
			String filename = path+filestr.trim();  //所发附件
			
			response.setContentType("application/octet-stream");
		    response.setHeader("Content-Disposition","attachment;filename="+filestr.trim());
		    
		    File file = new File(filename);
		    FileInputStream fileIn = new FileInputStream(file);
		    ServletOutputStream out = response.getOutputStream();
		     
		    byte[] outputByte = new byte[4096];
		    //copy binary contect to output stream
		    while(fileIn.read(outputByte, 0, 4096) != -1)
		    {
		    	out.write(outputByte, 0, 4096);
		    }
		    fileIn.close();
		    out.flush();
		    out.close();
		    
			
		}catch(Exception e)
		{
		    e.printStackTrace();
		}
	}

	/**
	 * Initialization of the servlet. <br>
	 *
	 * @throws ServletException if an error occurs
	 */
	public void init() throws ServletException {
		// Put your code here
	}

}
