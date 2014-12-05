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
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Map;

import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.PUT;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.QueryParam;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

import org.hibernate.HibernateException;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;
import org.hibernate.cfg.Configuration;

import net.sf.json.JSONObject;

import Business.CategoryBusiness;
import Common.CommonJson;
import Common.DBOperation;
import Common.IDOperation;
import DataBase.Attachment;
import DataBase.Category;
import DataBase.Categorycontent;
import DataBase.Contact;
import DataBase.Flow;
import DataBase.Laws;
import DataBase.Narelation;
import DataBase.Node;
import DataBase.Policy;
import DataBase.Sprelation;


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
	 * FunName : getFlowList
     * Description： 获取流程列表
     * Input: 无
     * Output:JSON格式数据
     * Call URL:localhost:8080/WebService/CategoryService/getFlowList
     * *************************************************************
	 */
	@GET
	@Path("getFlowList")
	@Produces(MediaType.APPLICATION_OCTET_STREAM)
	public String getFlowList() {
		
		List list = CategoryBusiness.getInstance().getFlowList();
		return CommonJson.list2Json(list);
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
	 * FunName : getFlowByID
     * Description：根据分类ID获取对应的流程
     * Input: 无
     * Output:JSON格式数据
     * Call URL:localhost:8080/Service/CategoryService/getFlowByID?id=
     * *************************************************************
	 */
	@GET
	@Path("getFlowByID")
	@Produces(MediaType.APPLICATION_OCTET_STREAM)
	public String getFlowByID(@QueryParam("id") String ID) {
		return CommonJson.object2Json(CategoryBusiness.getInstance().getFlowByID(ID));
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
		
		System.out.println(CommonJson.list2Json(NodeList));
		
		return CommonJson.list2Json(NodeList);
	}
	
	/**
	 * *************************************************************
	 * FunName : getNodeBySubjectID
     * Description： 根据FlowID获取Node
     * Input: 无
     * Output:JSON格式数据
     * Call URL:localhost:8080/WebService/CategoryService/getNodeByFlowID?id=
     * *************************************************************
	 */
	@GET
	@Path("getNodeBySubjectID")
	@Produces(MediaType.APPLICATION_OCTET_STREAM)
	public String getNodeBySubjectID(@QueryParam("id") String subnjectID) {
		List<Node> NodeList = new ArrayList<Node>();
		CategoryBusiness.getInstance().getNodeBySubjectID(subnjectID,NodeList);
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
	 * FunName : getContactList
     * Description：根据联系人ID获取联系人信息
     * Input: 无
     * Output:JSON格式数据
     * Call URL:localhost:8080/WebService/CategoryService/getContactByContactID?id=
     * *************************************************************
	 */
	@GET
	@Path("getContactList")
	@Produces(MediaType.APPLICATION_OCTET_STREAM)
	public String getContactList() {
		return CommonJson.list2Json(CategoryBusiness.getInstance().getContactList());
	}
	
	/**
	 * *************************************************************
	 * FunName : getAttachmentList
     * Description：附件列表
     * Input: 无
     * Output:JSON格式数据
     * Call URL:localhost:8080/Service/CategoryService/getAttachmentList
     * *************************************************************
	 */
	@GET
	@Path("getAttachmentList")
	@Produces(MediaType.APPLICATION_OCTET_STREAM)
	public String getAttachmentList() {
		return CommonJson.list2Json(CategoryBusiness.getInstance().getAttachmentList());
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
    public Response updateCategory(Category category) {
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
	
	/**
	 * *************************************************************
	 * FunName : addContact
     * Description： 增加联系人
     * Input: JSON格式数据
     * Output:
     * Call URL:localhost:8080/Service/CategoryService/addContact
     * *************************************************************
	 */
	@POST
    @Path("/addContact")
    @Consumes(MediaType.APPLICATION_JSON)
    public Response addContact(Contact cont) {
		cont.setId(IDOperation.getClassID("Contact"));
        if (DBOperation.add(cont)) {
        	return Response.status(201).entity("Seccess").build();
        }
        else
        {
        	return Response.status(201).entity("Failure").build();
        }
    }
	
	/**
	 * *************************************************************
	 * FunName : updateContact
     * Description： 更新联系人信息
     * Input: JSON格式数据
     * Output:
     * Call URL:localhost:8080/Service/CategoryService/updateContact
     * *************************************************************
	 */
	@PUT
    @Path("/updateContact")
    @Consumes(MediaType.APPLICATION_JSON)
    public Response updateContact(Contact contact) {
        if (DBOperation.update(contact)) {
        	return Response.status(201).entity("Seccess").build();
        }
        else
        {
        	return Response.status(201).entity("Failure").build();
        }
    }

	/**
	 * *************************************************************
	 * FunName : addFlow
     * Description： 增加flow
     * Input: JSON格式数据
     * Output:
     * Call URL:localhost:8080/Service/CategoryService/addFlow
     * *************************************************************
	 */
	@POST
    @Path("/addFlow")
    @Consumes(MediaType.APPLICATION_JSON)
    public Response addFlow(String flow) {
		Flow bean = (Flow)CommonJson.Json2Obj(flow,Flow.class);
		bean.setId(IDOperation.getClassID("Flow"));
        if (DBOperation.add(bean)) {
        	return Response.status(201).entity("Seccess").build();
        }
        else
        {
        	return Response.status(201).entity("Failure").build();
        }
    }
	
	/**
	 * *************************************************************
	 * FunName : updateFlow
     * Description： 更新Flow
     * Input: JSON格式数据
     * Output:
     * Call URL:localhost:8080/Service/CategoryService/updateFlow
     * *************************************************************
	 */
	@POST
    @Path("/updateFlow")
    @Consumes(MediaType.APPLICATION_JSON)
    public Response updateFlow(String flow) {
		
		Flow bean = (Flow)CommonJson.Json2Obj(flow,Flow.class);
        if (DBOperation.update(bean)) {
        	return Response.status(201).entity("Seccess").build();
        }
        else
        {
        	return Response.status(201).entity("Failure").build();
        }
    }
	
	/**
	 * *************************************************************
	 * FunName : cloneFlow
     * Description： 克隆Flow
     * Input: JSON格式数据
     * Output:
     * Call URL:localhost:8080/Service/CategoryService/cloneFlow
     * *************************************************************
	 */
	@SuppressWarnings("unchecked")
	@POST
    @Path("/cloneFlow")
    @Consumes(MediaType.APPLICATION_JSON)
    public Response cloneFlow(String cloneflow) {
		
		System.out.println("ID_INFO  "+cloneflow);
		Map map= CommonJson.getMapFromJson(cloneflow);
		Session session = null;
		try {
			SessionFactory sf = DBOperation.getSessionFactory();
			session = sf.openSession();
			
			//1.获取节点列表
			List<Node> NodeList = session.createQuery("from Node where flowId = :strID")
		       .setParameter("strID", (String)map.get("sid")).list();

			//=============================NEW CODE=============================
			//2.取得节点Id列表作为查询附件的参数 并 初始化对应于各节点的附件列表字符串
			ArrayList<String>  NodeIdArray = new ArrayList<String> (); 
			HashMap AttachmentsForNodeMap = new HashMap();
			for(int i=0;i<NodeList.size();i++)
			{
				NodeIdArray.add(NodeList.get(i).getId());
				AttachmentsForNodeMap.put(NodeList.get(i).getId(), "");
			}
			//3.数据查询得到附件总列表
			List<Narelation> AttachmentsList = session.createQuery("from Narelation where nid in (:nidArray)")
		       .setParameterList("nidArray",NodeIdArray ).list();

			//4.生成各节点的附件列表字符串
			for(int i=0;i<AttachmentsList.size();i++)
			{
				AttachmentsForNodeMap.put(AttachmentsList.get(i).getNid(),
						AttachmentsForNodeMap.get(AttachmentsList.get(i).getNid())+AttachmentsList.get(i).getAid()+";");
			}
			//5.把附件添加到对应的节点上并将节点添加到数据库
			for(int i=0;i<NodeList.size();i++)
			{
				Node tempNode=NodeList.get(i);
				tempNode.setFlowId((String)map.get("id"));
				String strNodeWithoutAttach=CommonJson.object2Json(tempNode);
				String strNodeWithAttch=CommonJson.addAttrToJson(strNodeWithoutAttach, "attachment", 
						(String)AttachmentsForNodeMap.get(tempNode.getId()));
				createNode(strNodeWithAttch);
			}
			//===========================OLD CODE================================
//			for(int i=0;i<NodeList.size();i++)
//			{
//				Node tempNode=NodeList.get(i);
//				tempNode.setFlowId((String)map.get("id"));
//				String strNodeWithoutAttach=CommonJson.object2Json(tempNode);
//				//Get attachments
//				String Attachments="";
//				List list1 = null;
//				list1 = session.createQuery("from Narelation where nid = :strID")
//			       .setParameter("strID", tempNode.getId()).list();
//				//Transaction tx = session.beginTransaction();
//				if (list1 != null) {
//					Iterator it = list1.iterator();
//					while (it.hasNext()) {
//						Narelation Temp = (Narelation) it.next();
//						Attachments+=Temp.getAid()+";";
//					}
//				}
//				//tx.commit();
//				String strNodeWithAttch=CommonJson.addAttrToJson(strNodeWithoutAttach, "attachment", Attachments);
//				createNode(strNodeWithAttch);
//			}
			session.close();
		} catch (HibernateException e) {
			// TODO: handle exception
			e.printStackTrace();
			return Response.status(201).entity("Failure").build();
		}finally {
            if (session != null) {  
                if (session.isOpen()) {  
                    //关闭session  
                    session.close();  
                }  
            }
        }

        return Response.status(201).entity("Seccess").build();
        
    }
	
	/**
	 * *************************************************************
	 * FunName : addNode
     * Description： 增加Node
     * Input: JSON格式数据
     * Output:
     * Call URL:localhost:8080/Service/CategoryService/createNode
     * *************************************************************
	 */
	@POST
    @Path("/createNode")
    @Consumes(MediaType.APPLICATION_JSON)
    public Response createNode(String node) {
		System.out.println("Node_Info"+node);
		Node bean = (Node)CommonJson.Json2Obj(node,Node.class);
		bean.setId(IDOperation.getClassID("Node"));
        if (DBOperation.add(bean)) {
        	Map map= CommonJson.getMapFromJson(node);
        	String attachment=(String)map.get("attachment");
        	String[] attach_list=attachment.split(";");
        	for(int i = 0; i<attach_list.length; i++){
        		Narelation nr= new Narelation();
        		nr.setId(IDOperation.getClassID("narelation"));
        		nr.setAid(attach_list[i]);
        		nr.setNid(bean.getId());
        		DBOperation.add(nr);
        		
        	}
        	
        	return Response.status(201).entity("Seccess").build();
        }
        else
        {
        	return Response.status(201).entity("Failure").build();
        }
    }
	
	/**
	 * *************************************************************
	 * FunName : updateNode
     * Description： 更新Node
     * Input: JSON格式数据
     * Output:
     * Call URL:localhost:8080/Service/CategoryService/updateNode
     * *************************************************************
	 */
	@POST
    @Path("/updateNode")
    @Consumes(MediaType.APPLICATION_JSON)
    public Response updateNode(String node) {
		Node bean = (Node)CommonJson.Json2Obj(node,Node.class);   	
        if (DBOperation.update(bean)) {
        	
        	Map map= CommonJson.getMapFromJson(node);
        	String attachment=(String)map.get("attachment");
        	if(attachment.length()>1){
        		if(DBOperation.delete("delete from narelation where NID='"+bean.getId()+"'")){
        		String[] attach_list=attachment.split(";");
        		for(int i = 0; i<attach_list.length; i++){
        			Narelation nr= new Narelation();
        			nr.setId(IDOperation.getClassID("narelation"));
        			nr.setAid(attach_list[i]);
        			nr.setNid(bean.getId());
        			DBOperation.add(nr);
        		
        		}
        	}
        	}
        	return Response.status(201).entity("Seccess").build();
        }
        else
        {
        	return Response.status(201).entity("Failure").build();
        }
    }
	
	
	/**
	 * *************************************************************
	 * FunName : updateNode
     * Description： 更新Node
     * Input: JSON格式数据
     * Output:
     * Call URL:localhost:8080/Service/CategoryService/updateNode
     * *************************************************************
	 */
	@POST
    @Path("/deleteNode")
    @Consumes(MediaType.APPLICATION_JSON)
    public Response deleteNode(String node) {
		Node bean = (Node)CommonJson.Json2Obj(node,Node.class);   	
        if (DBOperation.delete(bean)) {
        	
        	Map map= CommonJson.getMapFromJson(node);
        	String attachment=(String)map.get("attachment");
        	if(attachment!=null && attachment.length()>1){
        		DBOperation.delete("delete from narelation where NID='"+bean.getId()+"'");
        	}
        	
        	return Response.status(201).entity("Seccess").build();
        }
        else
        {
        	return Response.status(201).entity("Failure").build();
        }
    }
	
	/**
	 * *************************************************************
	 * FunName : addAttachment
     * Description： 增加Attachment
     * Input: JSON格式数据
     * Output:
     * Call URL:localhost:8080/Service/CategoryService/addAttachment
     * *************************************************************
	 */
	@POST
    @Path("/addAttachment")
    @Consumes(MediaType.APPLICATION_JSON)
    public Response addAttachment(Attachment att) {
		att.setId(IDOperation.getClassID("Attachment"));
        if (DBOperation.add(att)) {
        	return Response.status(201).entity("Seccess").build();
        }
        else
        {
        	return Response.status(201).entity("Failure").build();
        }
    }
	
	/**
	 * *************************************************************
	 * FunName : updateAttachment
     * Description： 更新Attachment
     * Input: JSON格式数据
     * Output:
     * Call URL:localhost:8080/Service/CategoryService/updateAttachment
     * *************************************************************
	 */
	@POST
    @Path("/updateAttachment")
    @Consumes(MediaType.APPLICATION_JSON)
    public Response updateAttachment(Attachment att) {
        if (DBOperation.update(att)) {
        	return Response.status(201).entity("Seccess").build();
        }
        else
        {
        	return Response.status(201).entity("Failure").build();
        }
    }
	
	/**
	 * *************************************************************
	 * FunName : addNarelation
     * Description： 增加Narelation关系表
     * Input: JSON格式数据
     * Output:
     * Call URL:localhost:8080/Service/CategoryService/addNarelation
     * *************************************************************
	 */
	@POST
    @Path("/addNarelation")
    @Consumes(MediaType.APPLICATION_JSON)
    public Response addNarelation(Narelation na) {
		/*增加之前检查对应node和attachment是否存在，不存在则返回node或attachment不存在*/
		if (CategoryBusiness.getInstance().getNodeByNodeID(na.getNid()) == null)
		{
			return Response.status(201).entity("node not exist").build();
		}
		
		if (CategoryBusiness.getInstance().getAttachmentByAttID(na.getAid()) == null)
		{
			return Response.status(201).entity("attachment not exist").build();
		}
		
		na.setId(IDOperation.getClassID("Narelation"));
        if (DBOperation.add(na)) {
        	return Response.status(201).entity("Seccess").build();
        }
        else
        {
        	return Response.status(201).entity("Failure").build();
        }
    }
	
	/**
	 * *************************************************************
	 * FunName : updateNarelation
     * Description： 更新Narelation关系表
     * Input: JSON格式数据
     * Output:
     * Call URL:localhost:8080/Service/CategoryService/updateNarelation
     * *************************************************************
	 */
	@POST
    @Path("/updateNarelation")
    @Consumes(MediaType.APPLICATION_JSON)
    public Response updateNarelation(Narelation na) {
        if (DBOperation.update(na)) {
        	return Response.status(201).entity("Seccess").build();
        }
        else
        {
        	return Response.status(201).entity("Failure").build();
        }
    }
	
	/**
	 * *************************************************************
	 * FunName : getFlowNotInCategory
     * Description： 获取表flow中ID没有出现在category的FlowID字段中的记录
     * Input: 无
     * Output:JSON格式数据
     * Call URL:localhost:8080/WebService/CategoryService/getFlowNotInCategory
     * *************************************************************
	 */
	@GET
	@Path("getFlowNotInCategory")
	@Produces(MediaType.APPLICATION_OCTET_STREAM)
	public String getFlowNotInCategory() {
		List<Flow> FlowList = new ArrayList<Flow>();
		FlowList = CategoryBusiness.getInstance().getNotAppearFlow();
		return CommonJson.list2Json(FlowList);
	}	
	
	
	/**
	 * *************************************************************
	 * FunName : getFlowSubjectIdEqualNULL
     * Description： 获取表flow中SubjectID为空的记录
     * Input: 无
     * Output:JSON格式数据
     * Call URL:localhost:8080/WebService/CategoryService/getFlowSubjectIdEqualNULL
     * *************************************************************
	 */
	@GET
	@Path("getFlowSubjectIdEqualNULL")
	@Produces(MediaType.APPLICATION_OCTET_STREAM)
	public String getFlowSubjectIdEqualNULL() {
		List<Flow> FlowList = new ArrayList<Flow>();
		FlowList = CategoryBusiness.getInstance().getFlowSubjectIdEqualNULL();
		return CommonJson.list2Json(FlowList);
	}	
	
	/**
	 * *************************************************************
	 * FunName : getFlowNotInCategoryAndFlow
     * Description： 获取表flow中ID没有出现在category的FlowID字段中并且SubjectID为空的记录
     * Input: 无
     * Output:JSON格式数据
     * Call URL:localhost:8080/WebService/CategoryService/getFlowNotInCategoryAndSubjecIDIsNull
     * *************************************************************
	 */
	@GET
	@Path("getFlowNotInCategoryAndSubjecIDIsNull")
	@Produces(MediaType.APPLICATION_OCTET_STREAM)
	public String getFlowNotInCategoryAndSubjecIDIsNull() {
		List<Flow> CategoryList = new ArrayList<Flow>();
		CategoryList = CategoryBusiness.getInstance().getFlowNotInCategoryAndSubjecIDIsNull();
		return CommonJson.list2Json(CategoryList);
	}	

	
	@GET
	@Path("getCategorycontentByID")
	@Produces(MediaType.APPLICATION_OCTET_STREAM)
	public String getCategorycontentByID(@QueryParam("id") String ID) {

		Categorycontent content = CategoryBusiness.getInstance().getCategorycontentByID(ID);
		return CommonJson.object2Json(content);
	}	
}


