/**
 * *************************************************************
 * @FileName:CategoryService.java
 * @Description:分类业务类web服务接口文件
 * @Author: wanghong
 * @Create date: 2014.03.21
 * *************************************************************
 */
package ServiceBus;

import java.util.ArrayList;
import java.util.List;

import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.PUT;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.QueryParam;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

import Business.CategoryBusiness;
import Common.CommonJson;
import Common.DBOperation;
import Common.IDOperation;
import DataBase.Attachment;
import DataBase.Category;
import DataBase.Laws;
import DataBase.Node;
import DataBase.Policy;


/**
 * *************************************************************
 * CategoryService为行业业务webservice接口，为客户端提供可直接调用的
 * 接口。
 * @ClassName:CategoryService
 * @Author: wanghong
 * @Create date: 2014.03.21
 * *************************************************************
 */
@Path("CategoryService")
public class CategoryService {
	/**
	 * *************************************************************
	 * FunName : getCategoryList
     * Description： 获取分类信息
     * Input: 无
     * Output:JSON格式数据
     * Call URL:localhost:8080/WebService/CategoryService/getCategoryList
     * *************************************************************
	 */
	@GET
	@Path("getCategoryList")
	@Produces(MediaType.APPLICATION_OCTET_STREAM)
	public String getCategoryList() {
		List<Category> CategoryList = new ArrayList<Category>();
		CategoryBusiness.getInstance().getDataList(CategoryList);
		return CommonJson.list2Json(CategoryList);
	}
	
	/**
	 * *************************************************************
	 * FunName : getCategoryTree
     * Description： 获取分类树
     * Input: 无
     * Output:JSON格式数据
     * Call URL:localhost:8080/WebService/CategoryService/getCategoryTree
     * *************************************************************
	 */
	@GET
	@Path("getCategoryTree")
	@Produces(MediaType.APPLICATION_OCTET_STREAM)
	public String getCategoryTree() {
		List<Category> CategoryList = CategoryBusiness.getInstance().getCategoryTree();
		return CommonJson.list2Json(CategoryList);
	}
	
	/**
	 * *************************************************************
	 * FunName : getPreListByID
     * Description： 根据ID获取其父节点下的所有子节点
     * Input: 无
     * Output:JSON格式数据
     * Call URL:localhost:8080/WebService/CategoryService/getPreListByID?id=
     * *************************************************************
	 */
	@GET
	@Path("getPreListByID")
	@Produces(MediaType.APPLICATION_OCTET_STREAM)
	public String getPreListByID(@QueryParam("id") String strID) {
		List<Category> ChildList = new ArrayList<Category>();
		CategoryBusiness.getInstance().getPreListByID(strID,ChildList);
		return CommonJson.list2Json(ChildList);
	}
	
	/**
	 * *************************************************************
	 * FunName : getChildByID
     * Description： 根据ID获取子节点信息
     * Input: 无
     * Output:JSON格式数据
     * Call URL:localhost:8080/WebService/CategoryService/getChildByID?id=
     * *************************************************************
	 */
	@GET
	@Path("getChildByID")
	@Produces(MediaType.APPLICATION_OCTET_STREAM)
	public String getChildByID(@QueryParam("id") String strID) {
		List<Category> ChildList = new ArrayList<Category>();
		CategoryBusiness.getInstance().getChildByID(strID,ChildList);
		return CommonJson.list2Json(ChildList);
	}
	
	/**
	 * *************************************************************
	 * FunName : getFlowByCategoryID
     * Description：根据分类ID获取对应的流程
     * Input: 无
     * Output:JSON格式数据
     * Call URL:localhost:8080/WebService/CategoryService/getFlowByCategoryID?id=
     * *************************************************************
	 */
	@GET
	@Path("getFlowByCategoryID")
	@Produces(MediaType.APPLICATION_OCTET_STREAM)
	public String getFlowByCategoryID(@QueryParam("id") String categoryID) {
		return CommonJson.object2Json(CategoryBusiness.getInstance().getFlowByCategoryID(categoryID));
	}
	
	/**
	 * *************************************************************
	 * FunName : getNodeByFlowID
     * Description： 根据FlowID获取Node
     * Input: 无
     * Output:JSON格式数据
     * Call URL:localhost:8080/WebService/CategoryService/getNodeByFlowID?id=
     * *************************************************************
	 */
	@GET
	@Path("getNodeByFlowID")
	@Produces(MediaType.APPLICATION_OCTET_STREAM)
	public String getNodeByFlowID(@QueryParam("id") String flowID) {
		List<Node> NodeList = new ArrayList<Node>();
		CategoryBusiness.getInstance().getNodeByFlowID(flowID,NodeList);
		return CommonJson.list2Json(NodeList);
	}
	
	/**
	 * *************************************************************
	 * FunName : getAttachmentByNodeID
     * Description： 根据NodeID获取attchment列表
     * Input: 无
     * Output:JSON格式数据
     * Call URL:localhost:8080/WebService/CategoryService/getAttachmentByNodeID?id=ACT0001
     * *************************************************************
	 */
	@GET
	@Path("getAttachmentByNodeID")
	@Produces(MediaType.APPLICATION_OCTET_STREAM)
	public String getAttachmentByNodeID(@QueryParam("id") String nodeID) {
		List<Attachment> AttachmentList = new ArrayList<Attachment>();
		CategoryBusiness.getInstance().getAttachmentByNodeID(nodeID,AttachmentList);
		return CommonJson.list2Json(AttachmentList);
	}
	
	/**
	 * *************************************************************
	 * FunName : getContactByContactID
     * Description：根据联系人ID获取联系人信息
     * Input: 无
     * Output:JSON格式数据
     * Call URL:localhost:8080/WebService/CategoryService/getContactByContactID?id=
     * *************************************************************
	 */
	@GET
	@Path("getContactByContactID")
	@Produces(MediaType.APPLICATION_OCTET_STREAM)
	public String getContactByContactID(@QueryParam("id") String contactID) {
		return CommonJson.object2Json(CategoryBusiness.getInstance().getContactByContactID(contactID));
	}
	
	/**
	 * *************************************************************
	 * FunName : updateCategory
     * Description： 更新流程分类
     * Input: JSON格式数据
     * Output:
     * Call URL:localhost:8080/Service/CategoryService/updateCategory
     * *************************************************************
	 */
	@POST
    @Path("/updateCategory")
    @Consumes(MediaType.APPLICATION_JSON)
    public Response updatePolicy(Category category) {
        if (DBOperation.update(category)) {
        	return Response.status(201).entity("Seccess").build();
        }
        else
        {
        	return Response.status(201).entity("Failure").build();
        }
    }
	
	/**
	 * *************************************************************
	 * FunName : addCategory
     * Description： 增加流程分类
     * Input: JSON格式数据
     * Output:
     * Call URL:localhost:8080/Service/CategoryService/addCategory
     * *************************************************************
	 */
	@POST
    @Path("/addCategory")
    @Consumes(MediaType.APPLICATION_JSON)
    public Response addCategory(Category category) {
		category.setId(IDOperation.getClassID("category"));
        if (DBOperation.add(category)) {
        	return Response.status(201).entity("Seccess").build();
        }
        else
        {
        	return Response.status(201).entity("Failure").build();
        }
    }
}


