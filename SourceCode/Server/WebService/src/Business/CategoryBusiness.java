/** 
 * *************************************************************
 * @FileName:CategoryBusiness.java
 * @Description: 分类模块处理文件
 * @Author: wanghong
 * @Create date: 2014.03.21
 * *************************************************************
 */
package Business;
import java.util.Iterator;
import java.util.List;
import org.hibernate.HibernateException;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;
import org.hibernate.cfg.Configuration;

import DataBase.Category;

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
			Transaction tx = session.beginTransaction();
			if (list != null) {
				Iterator it = list.iterator();
				while (it.hasNext()) {
					/*此处将获取到的list重新添加到了IndustryList中，应该可以直接对IndustryList赋值返回的*/
					CategoryList.add((Category) it.next());
					//System.out.println((Subjecttype)it.next());
				}
			}
			tx.commit();
			session.clear();
		} catch (HibernateException e) {
			// TODO: handle exception
			e.printStackTrace();
		}
    }
    
    /**
     * *************************************************************
	 * FunName : getPreListByID
     * Description： 根据ID获取该ID对应的父ID下的所有子节点
     * Input: @param CategoryList
     * Output:void
     * *************************************************************
	 */
    public Category getPreListByID(String strID,List<Category> childList) {
    	try {
			SessionFactory sf = new Configuration().configure()
					.buildSessionFactory();
			Session session = sf.openSession();
			Category obj = (Category)session.get(Category.class,strID);
			getChildByID(obj.getParentId(),childList);
			Transaction tx = session.beginTransaction();
			tx.commit();
			session.clear();
			System.out.println(obj.getTitle());
			return obj;
		} catch (HibernateException e) {
			// TODO: handle exception
			e.printStackTrace();
		}
		
		return null;
    }
    
    /**
     * *************************************************************
	 * FunName : getDataList
     * Description： 获取分类列表
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
			Transaction tx = session.beginTransaction();
			if (list != null) {
				Iterator it = list.iterator();
				while (it.hasNext()) {
					/*此处将获取到的list重新添加到了IndustryList中，应该可以直接对IndustryList赋值返回的*/
					childList.add((Category) it.next());
				}
			}
			tx.commit();
			session.clear();
		} catch (HibernateException e) {
			// TODO: handle exception
			e.printStackTrace();
		}
    }
}
