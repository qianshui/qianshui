/**
 * *************************************************************
 * @FileName:IndustryService.java
 * @Description:行业业务类web服务接口文件
 * @Author: wanghong
 * @Create date:   2014.02.27
 * *************************************************************
 */
package ServiceBus;
import javax.ws.rs.GET;  
import javax.ws.rs.Path; 
import javax.ws.rs.Produces;
import javax.ws.rs.QueryParam;
import javax.ws.rs.core.MediaType;
import Business.Industry;
import DataBase.Subjecttype;
import java.util.List;
import java.util.ArrayList;
import Common.CommonJson;

/**
 * *************************************************************
 * IndustryService为行业业务webservice接口，为客户端提供可直接调用的
 * 接口。
 * @ClassName:IndustryService
 * @Author: wanghong
 * @Create date:   2014.02.27
 * *************************************************************
 */
@Path("IndustryService")
public class IndustryService {
	
	/**
	 * *************************************************************
	 * FunName : getIndustryClass
     * Description： 获取行业类别信息
     * Input: 无
     * Output:JSON格式数据
     * Call URL:localhost:8080/WebService/IndustryService/getIndustryClass
     * *************************************************************
	 */
	@GET
	@Path("getIndustryClass")
	@Produces(MediaType.APPLICATION_OCTET_STREAM)
	public String getIndustryClass() {
		List<Subjecttype> IndustryList = new ArrayList<Subjecttype>();
		Industry.getInstance().getDataList(IndustryList);
		return CommonJson.list2Json(IndustryList);
	}
	
	/**
	 * *************************************************************
	 * FunName : getObjectByID
     * Description： 根据行业ID获取行业对象
     * Input: id
     * Output:JSON格式数据
     * Call URL:localhost:8080/WebService/IndustryService/getObjectByID?id=
     * *************************************************************
	 */
	@GET
	@Path("getObjectByID")
	@Produces(MediaType.APPLICATION_OCTET_STREAM)
	public String getObjectByID(@QueryParam("id") String strID){
		return CommonJson.object2Json(Industry.getInstance().getObjectByID(strID));
	}
	
	/**
	 * *************************************************************
	 * FunName : getAddressListByKey
     * Description： 根据关键字获取匹配的行业
     * Input: 关键字
     * Output:JSON格式数据
     * Call URL:localhost:8080/WebService/IndustryService/getIndustryListByKey?key=
     * *************************************************************
	 */
	@GET
	@Path("getIndustryListByKey")
	@Produces(MediaType.APPLICATION_OCTET_STREAM)
	public String getIndustryListByKey(@QueryParam("key") String strKey) {
		List<String> industryList = new ArrayList<String>();	
		Industry.getInstance().getIndustryListByKey(strKey,industryList);
		return CommonJson.list2Json(industryList);
	}
}
