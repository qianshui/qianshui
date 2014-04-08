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

import DataBase.Category;
import DataBase.Contact;
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
     * Add by Brett
     * get categories data by tree structure for tree grid
     * 
     *******************************************************************************************************/
    public List<Category> getCategoryTree(){
    	List<Category> CategoryList = new ArrayList<Category>();
    	try {
			SessionFactory sf = new Configuration().configure()
					.buildSessionFactory();
			Session session = sf.openSession();
			List list = null;
			list = session.createQuery("from Category where parentId = :strID")
		       .setParameter("strID", "0").list();
			Transaction tx = session.beginTransaction();
			if (list != null) {
				Iterator it = list.iterator();
				while (it.hasNext()) {
					
					Category Temp = (Category) it.next();
					
					CategoryList.add(BuildCategoyTree(Temp));
				}
			}
			tx.commit();
			session.close();
		} catch (HibernateException e) {
			// TODO: handle exception
			e.printStackTrace();
		}
		
		return CategoryList;
    	
    }
    
    Category BuildCategoyTree(Category item){
    	try {
			SessionFactory sf = new Configuration().configure()
					.buildSessionFactory();
			Session session = sf.openSession();
			List rs = session.createQuery("from Category where parentId= :pid")
			.setParameter("pid", item.getId()).list();
			if (rs != null) {
				Iterator temp = rs.iterator();
				while (temp.hasNext()) {
					Category cate= (Category)temp.next();
					if(cate.getLeaf()!=null &&cate.getLeaf().contentEquals("1")){
						item.setChildren(cate);
					}else{
					item.setChildren(BuildCategoyTree(cate));
					}
				}
		}
		}catch (HibernateException e) {
			// TODO: handle exception
			e.printStackTrace();
		}
    	return item;
    }
    //******************************************************************************************************

    /**
     * *************************************************************
	 * FunName : getDataList
     * Description： 获取分类列表
     * Input: @param CategoryList
     * Output:void
     * *************************************************************
	 */
    public void getDataList(List<Category> CategoryList) {
    	try {
			SessionFactory sf = new Configuration().configure()
					.buildSessionFactory();
			Session session = sf.openSession();
			List list = null;
			list = session.createQuery("from Category").list();
			if (list != null) {
				Iterator it = list.iterator();
				while (it.hasNext()) {
					/*此处将获取到的list重新添加到了IndustryList中，应该可以直接对IndustryList赋值返回的*/
					CategoryList.add((Category) it.next());
					//System.out.println((Subjecttype)it.next());
				}
			}
			
			session.close();
		} catch (HibernateException e) {
			// TODO: handle exception
			e.printStackTrace();
		}
    }
    
    
    /**
     * *************************************************************
	 * FunName : getFlowList
     * Description： 获取流程列表
     * Input: 
     * Output:void
     * *************************************************************
	 */
    public List getFlowList() {
    	List list = null;
    	try {
			SessionFactory sf = new Configuration().configure()
					.buildSessionFactory();
			Session session = sf.openSession();
			
			list = session.createQuery("from Flow").list();	
			session.close();
		} catch (HibernateException e) {
			// TODO: handle exception
			e.printStackTrace();
		}
		return list;
    }
    
    
    /**
     * *************************************************************
	 * FunName : getPreListByID
     * Description： 根据ID获取该ID对应的父ID下的所有子节点
     * Input: @param CategoryList
     * Output:void
     * *************************************************************
	 */
    public void getPreListByID(String strID,List<Category> childList) {
    	try {
			SessionFactory sf = new Configuration().configure()
					.buildSessionFactory();
			Session session = sf.openSession();
			Category obj = (Category)session.get(Category.class,strID);
			getChildByID(obj.getParentId(),childList);
			session.close();
		} catch (HibernateException e) {
			// TODO: handle exception
			e.printStackTrace();
		}
    }
    
    /**
     * *************************************************************
	 * FunName : getDataList
     * Description： 获取子节点列表
     * Input: @param CategoryList
     * Output:void
     * *************************************************************
	 */
    public void getChildByID(String strID, List<Category> childList) {
    	try {
			SessionFactory sf = new Configuration().configure()
					.buildSessionFactory();
			Session session = sf.openSession();
			List list = null;
			list = session.createQuery("from Category where parentId = :strID")
			       .setParameter("strID", strID).list();
			//Transaction tx = session.beginTransaction();
			if (list != null) {
				Iterator it = list.iterator();
				while (it.hasNext()) {
					/*此处将获取到的list重新添加到了IndustryList中，应该可以直接对IndustryList赋值返回的*/
					childList.add((Category) it.next());
				}
			}
			
			//tx.commit();
			session.close();
		} catch (HibernateException e) {
			// TODO: handle exception
			e.printStackTrace();
		}
    }
    
    /**
     * *************************************************************
	 * FunName : getFlowByCategoryID
     * Description： 根据分类ID获取对应的流程
     * Input: @param categoryID
     * Output:void
     * *************************************************************
	 */
    public Flow getFlowByCategoryID(String categoryID) {
    	try {
			SessionFactory sf = new Configuration().configure()
					.buildSessionFactory();
			Session session = sf.openSession();
			List<Flow> list = session.createQuery("from Flow where CategoryId = :id").setParameter("id", categoryID).list();
			session.close();
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
     * *************************************************************
	 * FunName : getFlowByID
     * Description： 根据ID获取对应的流程
     * Input: @param flowID
     * Output:void
     * *************************************************************
	 */
    public Flow getFlowByID(String ID) {
    	try {
			SessionFactory sf = new Configuration().configure()
					.buildSessionFactory();
			Session session = sf.openSession();
			List<Flow> list = session.createQuery("from Flow where id = :id").setParameter("id", ID).list();
			session.close();
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
     * *************************************************************
	 * FunName : getNodeByFlowID
     * Description： 根据FlowID获取Node
     * Input: @param flowID
     * Output:@param nodeList
     * *************************************************************
	 */
    public void getNodeByFlowID(String flowID,List<Node> nodeList) {
    	try {
			SessionFactory sf = new Configuration().configure()
					.buildSessionFactory();
			Session session = sf.openSession();
			List list = null;
			list = session.createQuery("from Node where FlowID = :strID")
			       .setParameter("strID", flowID).list();
			//Transaction tx = session.beginTransaction();
			if (list != null) {
				Iterator it = list.iterator();
				while (it.hasNext()) {
					/*此处将获取到的list重新添加到了IndustryList中，应该可以直接对IndustryList赋值返回的*/
					nodeList.add((Node) it.next());
				}
			}
			
			//tx.commit();
			session.close();
		} catch (HibernateException e) {
			// TODO: handle exception
			e.printStackTrace();
		}
    }
    
    /**
     * *************************************************************
	 * FunName : getAttachmentByNodeID
     * Description： 根据NodeID获取Attachement
     * Input: @param nodeID
     * Output:@param attachmentList
     * *************************************************************
	 */
    
    public void getAttachmentByNodeID(String nodeID,List<Attachment> attachmentList) {
    	try {
			SessionFactory sf = new Configuration().configure()
					.buildSessionFactory();
			Session session = sf.openSession();
			List<Attachment> list = session.createSQLQuery("select a.* from Attachment a,Narelation n " +
					"where a.id = n.aid  and n.nid = :nodeID").addEntity(Attachment.class)
			        .setParameter("nodeID", nodeID).list();
			if (list != null) {
				Iterator it = list.iterator();
				while (it.hasNext()) {
					/*此处将获取到的list重新添加到了IndustryList中，应该可以直接对IndustryList赋值返回的*/
					attachmentList.add((Attachment) it.next());
				}
			}
			
			session.close();
		} catch (HibernateException e) {
			// TODO: handle exception
			e.printStackTrace();
		}
    }
    
    /**
     * *************************************************************
	 * FunName : getContactByContactID
     * Description： 根据联系人ID获取联系人信息
     * Input: @param strID
     * Output:void
     * *************************************************************
	 */
    public Contact getContactByContactID(String contactID) {
    	Session session = null;
        try{
            /*获取session对象*/
        	SessionFactory sf = new Configuration().configure().buildSessionFactory();
	        session = sf.openSession();
            return (Contact)session.get(Contact.class, contactID);
        }finally {//保证资源得到释放
               if(session != null) {
                  session.close();
               }
        }
    }
}
