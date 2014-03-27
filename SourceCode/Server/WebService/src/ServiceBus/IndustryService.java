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
import DataBase.Laws;
import DataBase.Policy;
import DataBase.Street;
import DataBase.Subject;
import DataBase.Subjecttype;
import java.util.List;
import java.util.ArrayList;
import Common.CommonJson;

/**
 * *************************************************************
 * IndustryService为行业业务webservice接口，为客户端提供可直接调用的
 * 接口，包括获取行业，及其对应的法律法规和优惠政策等接口
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
		Industry.getInstance().getIndustryList(IndustryList);
		return CommonJson.list2Json(IndustryList);
	}
	
	/**
	 * *************************************************************
	 * FunName : getSubjectList
     * Description： 获取某行业类别的常用行业
     * Input: 无
     * Output:JSON格式数据
     * Call URL:localhost:8080/WebService/IndustryService/getSubjectList?id=
     * *************************************************************
	 */
	@GET
	@Path("getSubjectList")
	@Produces(MediaType.APPLICATION_OCTET_STREAM)
	public String getSubjectList(@QueryParam("id") String SubjecttypeID) {
		List<Subject> SubjectList = new ArrayList<Subject>();
		Industry.getInstance().getSubjectList(SubjecttypeID,SubjectList);
		return CommonJson.list2Json(SubjectList);
	}
	
	/**
	 * *************************************************************
	 * FunName : getStreetList
     * Description： 获取常用的街道
     * Input: 无
     * Output:JSON格式数据
     * Call URL:localhost:8080/WebService/IndustryService/getStreetList
     * *************************************************************
	 */
	@GET
	@Path("getStreetList")
	@Produces(MediaType.APPLICATION_OCTET_STREAM)
	public String getStreetList() {
		List<Street> StreetList = new ArrayList<Street>();
		Industry.getInstance().getStreetList(StreetList);
		return CommonJson.list2Json(StreetList);
	}
	
	/**
	 * *************************************************************
	 * FunName : getObjectByID
     * Description： 根据行业ID获取行业对象
     * Input: id
     * Output:JSON格式数据
     * Call URL:localhost:8080/WebService/IndustryService/getIndustryByID?id=
     * *************************************************************
	 */
	@GET
	@Path("getIndustryByID")
	@Produces(MediaType.APPLICATION_OCTET_STREAM)
	public String getIndustryByID(@QueryParam("id") String strID){
		return CommonJson.object2Json(Industry.getInstance().getIndustryByID(strID));
	}
	
	/**
	 * *************************************************************
	 * FunName : getObjectByID
     * Description： 根据法规ID获取法规对象
     * Input: id
     * Output:JSON格式数据
     * Call URL:localhost:8080/WebService/IndustryService/getObjectByID?id=
     * *************************************************************
	 */
	@GET
	@Path("getLawByLawID")
	@Produces(MediaType.APPLICATION_OCTET_STREAM)
	public String getLawByLawID(@QueryParam("id") String strID){
		return CommonJson.object2Json(Industry.getInstance().getLawByLawID(strID));
	}
	
	/**
	 * *************************************************************
	 * FunName : getPolicyByPolicyID
     * Description： 根据政策ID获取政策对象
     * Input: id
     * Output:JSON格式数据
     * Call URL:localhost:8080/WebService/IndustryService/getPolicyByPolicyID?id=
     * *************************************************************
	 */
	@GET
	@Path("getPolicyByPolicyID")
	@Produces(MediaType.APPLICATION_OCTET_STREAM)
	public String getPolicyByPolicyID(@QueryParam("id") String strID){
		return CommonJson.object2Json(Industry.getInstance().getPolicyByPolicyID(strID));
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
	
	/**
	 * *************************************************************
	 * FunName : getLawsByIndustryID
     * Description： 根据行业ID获取相关的法律法规
     * Input: 关键字
     * Output:JSON格式数据
     * Call URL:localhost:8080/WebService/IndustryService/getLawsByIndustryID?id=
     * *************************************************************
	 */
	@GET
	@Path("getLawsByIndustryID")
	@Produces(MediaType.APPLICATION_OCTET_STREAM)
	public String getLawsByIndustryID(@QueryParam("id") String industryID) {
		List<Laws> LawsList = new ArrayList<Laws>();	
		Industry.getInstance().getLawsByIndustryID(industryID,LawsList);
		return CommonJson.list2Json(LawsList);
	}
	
	/**
	 * *************************************************************
	 * FunName : getPolicyByIndustryID
     * Description： 根据行业ID获取相关的政策
     * Input: 关键字
     * Output:JSON格式数据
     * Call URL:localhost:8080/WebService/IndustryService/getPolicyByIndustryID?id=
     * *************************************************************
	 */
	@GET
	@Path("getPolicyByIndustryID")
	@Produces(MediaType.APPLICATION_OCTET_STREAM)
	public String getPolicyByIndustryID(@QueryParam("id") String industryID) {
		List<Policy> PolicyList = new ArrayList<Policy>();
		Industry.getInstance().getPolicyByIndustryID(industryID,PolicyList);
		return CommonJson.list2Json(PolicyList);
	}
	
	/**
	 * *************************************************************
	 * FunName : getLawsList
     * Description： 获取所有法规列表
     * Input: 无
     * Output:JSON格式数据
     * Call URL:localhost:8080/WebService/IndustryService/getLawsList
     * *************************************************************
	 */
	@GET
	@Path("getLawsList")
	@Produces(MediaType.APPLICATION_OCTET_STREAM)
	public String getLawsList() {
		List<Laws> LawsList = new ArrayList<Laws>();
		Industry.getInstance().getLawsList(LawsList);
		return CommonJson.list2Json(LawsList);
	}
	
	/**
	 * *************************************************************
	 * FunName : getPolicyList
     * Description： 获取所有政策列表
     * Input: 无
     * Output:JSON格式数据
     * Call URL:localhost:8080/WebService/IndustryService/getPolicyList
     * *************************************************************
	 */
	@GET
	@Path("getPolicyList")
	@Produces(MediaType.APPLICATION_OCTET_STREAM)
	public String getPolicyList() {
		List<Policy> PolicyList = new ArrayList<Policy>();
		Industry.getInstance().getPolicyList(PolicyList);
		return CommonJson.list2Json(PolicyList);
	}
}
