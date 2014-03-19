/**
 * *************************************************************
 * @FileName:PolicyService.java
 * @Description:优惠政策业务web服务接口文件
 * @Author: wanghong
 * @Create date:   2014.03.03
 * *************************************************************
 */
package ServiceBus;

import java.util.ArrayList;
import java.util.List;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.QueryParam;
import javax.ws.rs.core.MediaType;

import Business.Industry;
import Common.CommonJson;
import DataBase.Subjecttype;

/**
 * *************************************************************
 * PolicyService优惠政策业务webservice接口，为客户端提供行业相关的优惠政策
 * 查询接口等。
 * @ClassName:PolicyService
 * @Author: wanghong
 * @Create date:   2014.03.03
 * *************************************************************
 */
@Path("PolicyService")
public class PolicyService {
	/**
	 * *************************************************************
	 * FunName : getIndustryClass
     * Description： 根据行业获取相关的优惠政策
     * Input: 无
     * Output:JSON格式数据
     * Call URL:localhost:8080/WebService/PolicyService/getPolicyByID
     * *************************************************************
	 */
	@GET
	@Path("getPolicyByIndustryID")
	@Produces(MediaType.APPLICATION_OCTET_STREAM)
	public String getPolicyByIndustryID(@QueryParam("id") String strIndustryID) {
		Industry objIndustry = Industry.getInstance();
		List<Subjecttype> IndustryList = new ArrayList<Subjecttype>();
		objIndustry.getDataList(IndustryList);
		return CommonJson.list2Json(IndustryList);
	}
}
