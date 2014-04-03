/** 
 * *************************************************************
 * @ClassName:
 * @Author: wanghong
 * @Create date: 2014.02.25
 * @Description: 暂时未用
 * *************************************************************
 */
package ServiceBus;
import javax.ws.rs.GET;  
import javax.ws.rs.Path;  
import javax.ws.rs.PathParam;  
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

public interface IGetData {
	@GET
	@Path("getDataList")
	@Produces(MediaType.APPLICATION_JSON)
	public String getDataList();
	
	@GET
	@Path("getObjectID/{id}")
	@Produces(MediaType.APPLICATION_OCTET_STREAM)
	public String getObjectID(@PathParam("id") String s);
}
