/** 
 * *************************************************************
 * @FileName:CategoryBusiness.java
 * @Description: 分类模块处理文件
 * @Author: wanghong
 * @Create date: 2014.03.21
 * *************************************************************
 */
package Business;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;
import org.hibernate.HibernateException;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;
import org.hibernate.cfg.Configuration;

import Common.DBOperation;
import DataBase.Category;
import DataBase.Categorycontent;
import DataBase.Contact;
import DataBase.DaoFactory;
import DataBase.Flow;
import DataBase.Node;
import DataBase.Attachment;

public class CategoryBusiness {
	private static CategoryBusiness m_Instance = null;

	private CategoryBusiness() {

	}

	public static CategoryBusiness getInstance() {
		if (m_Instance == null) {
			m_Instance = new CategoryBusiness();
		}

		return m_Instance;
	}

	/******************************************************************************************************
	 * Add by Brett get categories data by tree structure for tree grid
	 * 
	 *******************************************************************************************************/
	public List<Category> getCategoryTree() {
		List<Category> CategoryList = new ArrayList<Category>();
		try {
			// SessionFactory sf = DBOperation.getSessionFactory();
			// Session session = sf.openSession();
			// List list = null;
			// list =
			// session.createQuery("from Category where parentId = :strID")
			// .setParameter("strID", "0").list();
			// Transaction tx = session.beginTransaction();
			List list = DaoFactory.getInstance().getCategory_dao()
					.findByProperty("parentId", "0");
			if (list != null) {
				Iterator it = list.iterator();
				while (it.hasNext()) {

					Category Temp = (Category) it.next();

					CategoryList.add(BuildCategoyTree(Temp, 0, null));
				}
			}
			// tx.commit();
			// session.close();
		} catch (HibernateException e) {
			// TODO: handle exception
			e.printStackTrace();
		}

		return CategoryList;

	}

	@SuppressWarnings("unchecked")
	Category BuildCategoyTree(Category item, int flag, Session argSession) {
		try {
			// Session session=null;
			// if(flag==0)
			// {
			// SessionFactory sf = DBOperation.getSessionFactory();
			// session = sf.openSession();
			// }
			// else
			// {
			// session=argSession;
			// }
			List<Category> rs = DaoFactory.getInstance().getCategory_dao()
					.findByProperty("parentId", item.getId());
			// List<Category> rs =
			// session.createQuery("from Category where parentId= :pid")
			// .setParameter("pid", item.getId()).list();
			// Transaction tx = session.beginTransaction();
			if (rs != null) {
				Iterator<Category> temp = rs.iterator();
				while (temp.hasNext()) {
					Category cate = (Category) temp.next();
					if (cate.getLeaf() != null
							&& cate.getLeaf().contentEquals("1")) {
						item.setChildren(cate);
					} else {
						item.setChildren(BuildCategoyTree(cate, 1, null));
					}
				}
			}
			// tx.commit();
			// if(flag==0)
			// {
			// session.close();
			// }
		} catch (HibernateException e) {
			// TODO: handle exception
			e.printStackTrace();
		}
		return item;
	}

	// ******************************************************************************************************

	/**
	 * ************************************************************* FunName :
	 * getDataList Description： 获取分类列表 Input: @param CategoryList Output:void
	 * *************************************************************
	 */
	public void getDataList(List<Category> CategoryList) {
		try {
			// SessionFactory sf = new Configuration().configure()
			// .buildSessionFactory();
			// Session session = sf.openSession();
			List list = null;
			list = DaoFactory.getInstance().getCategory_dao()
					.findAll("id", true);// session.createQuery("from Category").list();
			if (list != null) {
				Iterator it = list.iterator();
				while (it.hasNext()) {
					/* 此处将获取到的list重新添加到了IndustryList中，应该可以直接对IndustryList赋值返回的 */
					CategoryList.add((Category) it.next());
					// System.out.println((Subjecttype)it.next());
				}
			}

			// session.close();
		} catch (HibernateException e) {
			// TODO: handle exception
			e.printStackTrace();
		}
	}

	/**
	 * ************************************************************* FunName :
	 * getFlowList Description： 获取流程列表 Input: Output:void
	 * *************************************************************
	 */
	public List getFlowList() {
		List list = null;
		try {
			// SessionFactory sf = new Configuration().configure()
			// .buildSessionFactory();
			// Session session = sf.openSession();

			list = DaoFactory.getInstance().getFlow_dao().findAll("id", true);// session.createQuery("from Flow").list();
			// session.close();
		} catch (HibernateException e) {
			// TODO: handle exception
			e.printStackTrace();
		}
		return list;
	}

	/**
	 * ************************************************************* FunName :
	 * getPreListByID Description： 根据ID获取该ID对应的父ID下的所有子节点 Input: @param
	 * CategoryList Output:void
	 * *************************************************************
	 */
	public void getPreListByID(String strID,List<Category> childList) {
    	try {
//			SessionFactory sf = new Configuration().configure()
//					.buildSessionFactory();
//			Session session = sf.openSession();
			List<Category> list =DaoFactory.getInstance().getCategory_dao().findByProperty("id", strID);// (Category)session.get(Category.class,strID);>
					if(list!=null && list.size()>0){
			getChildByID(list.get(0).getParentId(),childList);}
			//session.close();
		} catch (HibernateException e) {
			// TODO: handle exception
			e.printStackTrace();
		}
    }

	/**
	 * ************************************************************* FunName :
	 * getDataList Description： 获取子节点列表 Input: @param CategoryList Output:void
	 * *************************************************************
	 */
	public void getChildByID(String strID, List<Category> childList) {
		try {

			List list = null;
			list = DaoFactory
					.getInstance()
					.getCategory_dao()
					.query("select * from Category where parentId ='" + strID
							+ "' order by fororder");

			// Transaction tx = session.beginTransaction();
			if (list != null) {
				Iterator it = list.iterator();
				while (it.hasNext()) {
					/* 此处将获取到的list重新添加到了IndustryList中，应该可以直接对IndustryList赋值返回的 */
					childList.add((Category) it.next());
				}
			}

			// tx.commit();

		} catch (HibernateException e) {
			// TODO: handle exception
			e.printStackTrace();
		}
	}

	/**
	 * ************************************************************* FunName :
	 * getFlowByCategoryID Description： 根据分类ID获取对应的流程 Input: @param categoryID
	 * Output:void *************************************************************
	 */
	public Flow getFlowByCategoryID(String categoryID) {
		try {

			List<Flow> list = DaoFactory.getInstance().getFlow_dao()
					.findByProperty("CategoryId", categoryID);
			if (list.size() != 0) {
				return list.get(0);
			}

			return null;
		} catch (HibernateException e) {
			// TODO: handle exception
			e.printStackTrace();
		}

		return null;
	}

	/**
	 * ************************************************************* FunName :
	 * getFlowByID Description： 根据ID获取对应的流程 Input: @param flowID Output:void
	 * *************************************************************
	 */
	public Flow getFlowByID(String ID) {
		try {

			List<Flow> list = DaoFactory.getInstance().getFlow_dao()
					.findByProperty("id", ID);

			if (list.size() != 0) {
				return list.get(0);
			}

			return null;
		} catch (HibernateException e) {
			// TODO: handle exception
			e.printStackTrace();
		} finally {

		}

		return null;
	}

	/**
	 * ************************************************************* FunName :
	 * getNodeByFlowID Description： 根据FlowID获取Node Input: @param flowID
	 * Output:@param nodeList
	 * *************************************************************
	 */
	public void getNodeByFlowID(String flowID, List<Node> nodeList) {
		try {
			List list = null;
			list = DaoFactory
					.getInstance()
					.getNode_dao()
					.query("select * from  Node where FlowID = '" + flowID
							+ "' order by Rowid asc");

			if (list != null) {
				Iterator it = list.iterator();
				while (it.hasNext()) {
					/* 此处将获取到的list重新添加到了IndustryList中，应该可以直接对IndustryList赋值返回的 */
					nodeList.add((Node) it.next());
				}
			}

			// tx.commit();

		} catch (HibernateException e) {
			// TODO: handle exception
			e.printStackTrace();
		}
	}

	/**
	 * ************************************************************* FunName :
	 * getAttachmentByNodeID Description： 根据NodeID获取Attachement Input: @param
	 * nodeID Output:@param attachmentList
	 * *************************************************************
	 */

	public void getAttachmentByNodeID(String nodeID,
			List<Attachment> attachmentList) {
		try {
			List<Attachment> list = DaoFactory
					.getInstance()
					.getAttachment_dao()
					.query("select a.* from Attachment a,Narelation n "
							+ "where a.id = n.aid  and n.nid = '" + nodeID
							+ "'");
			if (list != null) {
				Iterator it = list.iterator();
				while (it.hasNext()) {
					/* 此处将获取到的list重新添加到了IndustryList中，应该可以直接对IndustryList赋值返回的 */
					attachmentList.add((Attachment) it.next());
				}
			}

		} catch (HibernateException e) {
			// TODO: handle exception
			e.printStackTrace();
		}
	}

	/**
	 * ************************************************************* FunName :
	 * getContactByContactID Description： 根据联系人ID获取联系人信息 Input: @param strID
	 * Output:void *************************************************************
	 */
	public Contact getContactByContactID(String contactID) {

			/* 获取session对象 */
			List<Contact> list = DaoFactory.getInstance().getContactDao().findByProperty("id", contactID);
			if(list!=null && list.size()>0){
				return list.get(0);
			}
			return null;
	
	}

	/**
	 * ************************************************************* FunName :
	 * getContactList Description： 根据联系人列表 Input: @param strID Output:void
	 * *************************************************************
	 */
	public List<Contact> getContactList() {

		List<Contact> list = new ArrayList<Contact>();
		try {
			/* 获取session对象 */

			list = DaoFactory.getInstance().getContactDao().findAll("id", true);
			
		} catch (HibernateException e) {
			// TODO: handle exception
			e.printStackTrace();
		}
		return list;
	}

	/**
	 * ************************************************************* FunName :
	 * getAttachmentList Description：附件列表 Input: @param strID Output:void
	 * *************************************************************
	 */
	public List<Attachment> getAttachmentList() {
//		Session session = null;
		List<Attachment> list = new ArrayList<Attachment>();
		try {
			/* 获取session对象 */
//			SessionFactory sf = new Configuration().configure()
//					.buildSessionFactory();
//			session = sf.openSession();
			list = DaoFactory.getInstance().getAttachment_dao().findAll("id", true);//session.createQuery("from Attachment").list();
//			session.close();
		} catch (HibernateException e) {
			// TODO: handle exception
			e.printStackTrace();
		}
		return list;
	}

	/**
	 * ************************************************************* FunName :
	 * getNodeByNodeID Description： 根据NodeID获取Node对象 Input: @param lawID
	 * Output:Laws *************************************************************
	 */
	public Node getNodeByNodeID(String nodeID) {
//		Node node = null;
//		Session session = null;
		try {
			/* 获取session对象 */
//			SessionFactory sf = new Configuration().configure()
//					.buildSessionFactory();
//			session = sf.openSession();
			List<Node> list = DaoFactory.getInstance().getNode_dao().findByProperty("id", nodeID);//(Node) session.get(Node.class, nodeID);
			if(list!=null&& list.size()>0){
				return list.get(0);
			}
			return null;
		} finally {// 保证资源得到释放
//			if (session != null) {
//				session.close();
//			}
		}
	}

	/**
	 * ************************************************************* FunName :
	 * getAttachmentByAttID Description： 根据AttachmentID获取Attachment对象 Input: @param
	 * lawID Output:Laws
	 * *************************************************************
	 */
	public Attachment getAttachmentByAttID(String attachmentID) {
		
		List<Attachment> list = DaoFactory.getInstance().getAttachment_dao().findByProperty("id", attachmentID);//(Node) session.get(Node.class, nodeID);
		if(list!=null&& list.size()>0){
			return list.get(0);
		}
		return null;
		
//		Attachment att = null;
//		Session session = null;
//		try {
			/* 获取session对象 */
//			SessionFactory sf = new Configuration().configure()
//					.buildSessionFactory();
//			session = sf.openSession();
//			att = (Attachment) session.get(Attachment.class, attachmentID);
//			return att;
//		} finally {// 保证资源得到释放
//			if (session != null) {
//				session.close();
//			}
//		}
	}

	/******************************************************************************************************
	 * 获取没有在category中出现的流程记录
	 * 
	 *******************************************************************************************************/
	public List<Flow> getNotAppearFlow() {
		List<Flow> list = new ArrayList<Flow>();
		try {
//			SessionFactory sf = new Configuration().configure()
//					.buildSessionFactory();
//			Session session = sf.openSession();
//			list = session
//					.createSQLQuery(
//							"SELECT * from flow where flow.ID not in(SELECT category.FlowID from category)")
//					.addEntity(Flow.class).list();
//			session.close();
			list=DaoFactory.getInstance().getFlow_dao().query("SELECT * from flow where flow.ID not in(SELECT category.FlowID from category)");
		} catch (HibernateException e) {
			// TODO: handle exception
			e.printStackTrace();
		}
		return list;
	}

	/******************************************************************************************************
	 * 获取没有在SubjectID为空的流程记录
	 * 
	 *******************************************************************************************************/
	public List<Flow> getFlowSubjectIdEqualNULL() {
		List<Flow> list = new ArrayList<Flow>();
		try {
//			SessionFactory sf = new Configuration().configure()
//					.buildSessionFactory();
//			Session session = sf.openSession();
//			list = session
//					.createSQLQuery(
//							"SELECT * from flow WHERE SubjectID is null")
//					.addEntity(Flow.class).list();
//			session.close();
			list=DaoFactory.getInstance().getFlow_dao().query("SELECT * from flow WHERE SubjectID is null");
		} catch (HibernateException e) {
			// TODO: handle exception
			e.printStackTrace();
		}
		return list;
	}

	/******************************************************************************************************
	 * 获取没有在category中出现并且SubjectID为空的流程记录
	 * 
	 *******************************************************************************************************/
	public List<Flow> getFlowNotInCategoryAndSubjecIDIsNull() {
		List<Flow> list = new ArrayList<Flow>();
		try {
//			SessionFactory sf = new Configuration().configure()
//					.buildSessionFactory();
//			Session session = sf.openSession();
//			list = session
//					.createSQLQuery(
//							"SELECT * from flow WHERE flow.ID not in(SELECT DISTINCT category.FlowID from category) and flow.SubjectID is null")
//					.addEntity(Flow.class).list();
//			session.close();
			list=DaoFactory.getInstance().getFlow_dao().query("SELECT * from flow WHERE flow.ID not in(SELECT DISTINCT category.FlowID from category) and flow.SubjectID is null");
		} catch (HibernateException e) {
			// TODO: handle exception
			e.printStackTrace();
		}
		return list;
	}

	/******************************************************************************************************
	 * 获取指定SubjectID的流程记录
	 * 
	 *******************************************************************************************************/
	public Flow getFlowBySubjectId(String subnjectID) {
		List<Flow> list = new ArrayList<Flow>();
		try {
//			SessionFactory sf = new Configuration().configure()
//					.buildSessionFactory();
//			Session session = sf.openSession();
//			list = session.createQuery("from Flow where SubjectID = :strID")
//					.setParameter("strID", subnjectID).list();
//			session.close();
			list=DaoFactory.getInstance().getFlow_dao().query("SELECT * from flow WHERE SubjectID ='"+subnjectID+"'");
		} catch (HibernateException e) {
			// TODO: handle exception
			e.printStackTrace();
		}
		if (list.size() > 0) {
			return list.get(0);
		} else {
			return null;
		}
	}

	/**
	 * ************************************************************* FunName :
	 * getNodeBySubjectID Description： 根据FlowID获取Node Input: @param flowID
	 * Output:@param nodeList
	 * *************************************************************
	 */
	public void getNodeBySubjectID(String subnjectID, List<Node> nodeList) {

		Flow flow = getFlowBySubjectId(subnjectID);
		if (flow == null) {
			return;
		}
		this.getNodeByFlowID(flow.getId(), nodeList);
	}

	public Categorycontent getCategorycontentByID(String CategoryID) {
		List<Categorycontent> list = DaoFactory.getInstance()
				.getCategorycontent_dao()
				.findByProperty("categoryId", CategoryID);
		if (list != null && list.size() > 0) {
			return list.get(0);
		}
		return null;
	}

}
