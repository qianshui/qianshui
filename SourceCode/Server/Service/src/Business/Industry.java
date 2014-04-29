/** 
 * *************************************************************
 * @FileName:Industry.java
 * @Description: 行业模块处理文件
 * @Author: wanghong
 * @Create date: 2014.02.27
 * *************************************************************
 */
package Business;
import Common.DBOperation;
import DataBase.Attachment;
import DataBase.Laws;
import DataBase.Policy;
import DataBase.Street;
import DataBase.Subject;
import DataBase.Subjecttype;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

import javax.ws.rs.DELETE;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.core.Response;

import org.hibernate.HibernateException;
import org.hibernate.SQLQuery;
import org.hibernate.Session;
import org.hibernate.Transaction;
import org.hibernate.SessionFactory;
import org.hibernate.cfg.Configuration; 

/** 
 * *************************************************************
 * Industry为行业模块类，与ORM层交互，实现对底层数据库的操作，为行业
 * IndustryService类提供数据处理方法，该类设计为单例模式
 * @ClassName:Industry
 * @Author: wanghong
 * @Create date: 2014.02.27
 * *************************************************************
 */
public class Industry {
	private static Industry m_Instance = null;
	 
    private Industry() {
    	
    }
    
    public static Industry getInstance() {
        if (m_Instance == null) {
        	m_Instance = new Industry();
        }
        
        return m_Instance;
    }
    
    /**
     * *************************************************************
	 * FunName : getIndustryList
     * Description： 获取常用行业列表
     * Input: @param IndustryList
     * Output:void
     * *************************************************************
	 */
    public void getIndustryList(List<Subjecttype> IndustryList) {
    	try {
			SessionFactory sf = new Configuration().configure()
					.buildSessionFactory();
			Session session = sf.openSession();
			List list = null;
			list = session.createQuery("from Subjecttype where CommonFlag=1").list();
			if (list != null) {
				Iterator it = list.iterator();
				while (it.hasNext()) {
					/*此处将获取到的list重新添加到了IndustryList中，应该可以直接对IndustryList赋值返回的*/
					IndustryList.add((Subjecttype) it.next());
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
	 * FunName : getIndustryList
     * Description： 获取常用行业列表
     * Input: @param IndustryList
     * Output:void
     * *************************************************************
	 */
    public void getSubjectList(String SubjecttypeID, List<Subject> SubjectList) {
    	try {
			SessionFactory sf = new Configuration().configure()
					.buildSessionFactory();
			Session session = sf.openSession();
			List list = null;
			list = session.createQuery("from Subject where SubjecttypeID=:SubjecttypeID")
					.setParameter("SubjecttypeID", SubjecttypeID).list();
			if (list != null) {
				Iterator it = list.iterator();
				while (it.hasNext()) {
					/*此处将获取到的list重新添加到了IndustryList中，应该可以直接对IndustryList赋值返回的*/
					SubjectList.add((Subject) it.next());
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
	 * FunName : getIndustryList
     * Description： 获取常用行业列表
     * Input: @param IndustryList
     * Output:void
     * *************************************************************
	 */
    public void getStreetList(List<Street> StreetList) {
    	try {
			SessionFactory sf = new Configuration().configure()
					.buildSessionFactory();
			Session session = sf.openSession();
			List list = null;
			//list = session.createQuery("from Street where CommonFlag=1").list();
			list = session.createQuery("from Street").list();
			if (list != null) {
				Iterator it = list.iterator();
				while (it.hasNext()) {
					/*此处将获取到的list重新添加到了IndustryList中，应该可以直接对IndustryList赋值返回的*/
					StreetList.add((Street) it.next());
				}
			}
			
			session.close();
		} catch (HibernateException e) {
			// TODO: handle exception
			e.printStackTrace();
		}
    }
    
    
    public List<Street> getAllStreetList() {
    	List<Street> list=new ArrayList<Street>();
    	try {
			SessionFactory sf = new Configuration().configure()
					.buildSessionFactory();
			Session session = sf.openSession();
			
			list = session.createQuery("from Street").list();
			
			session.close();
		} catch (HibernateException e) {
			// TODO: handle exception
			e.printStackTrace();
		}
		return list;
    }
    /**
     * *************************************************************
	 * FunName : getLawsList
     * Description： 获取法规列表
     * Input: @param IndustryList
     * Output:void
     * *************************************************************
	 */
    public void getLawsList(List<Laws> lowsList) {
    	try {
			SessionFactory sf = new Configuration().configure()
					.buildSessionFactory();
			Session session = sf.openSession();
			List list = null;
			list = session.createQuery("from Laws").list();
			
			if (list != null) {
				Iterator it = list.iterator();
				while (it.hasNext()) {
					/*此处将获取到的list重新添加到了IndustryList中，应该可以直接对IndustryList赋值返回的*/
					lowsList.add((Laws)it.next());
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
	 * FunName : getPolicyList
     * Description： 获取政策列表
     * Input: @param IndustryList
     * Output:void
     * *************************************************************
	 */
    public void getPolicyList(List<Policy> policyList) {
    	try {
			SessionFactory sf = new Configuration().configure()
					.buildSessionFactory();
			Session session = sf.openSession();
			List list = null;
			list = session.createQuery("from Policy").list();
			
			if (list != null) {
				Iterator it = list.iterator();
				while (it.hasNext()) {
					/*此处将获取到的list重新添加到了IndustryList中，应该可以直接对IndustryList赋值返回的*/
					policyList.add((Policy)it.next());
				}
			}
			
			session.clear();
		} catch (HibernateException e) {
			// TODO: handle exception
			e.printStackTrace();
		}
    }
    
    /**
     * *************************************************************
	 * FunName : getObjectByID
     * Description： 根据ID获取行业对象
     * Input: @param strID
     * Output:void
     * *************************************************************
	 */
    public Subject getIndustryByID(String strID) {
    	Subject st = null;
    	Session session = null;
        try{
            /*获取session对象*/
        	SessionFactory sf = new Configuration().configure().buildSessionFactory();
	        session = sf.openSession();
	        st = (Subject)session.get(Subject.class, strID);
            return st;
        }finally {//保证资源得到释放
               if(session != null) {
                  session.close();
               }
        }
        
    }
    
	/**
     * *************************************************************
	 * FunName : getLawByLawID
     * Description： 根据法规ID获取法规对象
     * Input: @param lawID
     * Output:Laws
     * *************************************************************
	 */
    public Laws getLawByLawID(String lawID) {
    	Session session = null;
        try{
            /*获取session对象*/
        	SessionFactory sf = new Configuration().configure().buildSessionFactory();
	        session = sf.openSession();
            return (Laws)session.get(Laws.class, lawID);
        }finally {//保证资源得到释放
               if(session != null) {
                  session.close();
               }
        }
    }
    
    /**
     * *************************************************************
	 * FunName : getLawByLawID
     * Description： 根据政策ID获取政策对象
     * Input: @param policyID
     * Output:Policy
     * *************************************************************
	 */
    public Policy getPolicyByPolicyID(String policyID) {
    	Session session = null;
        try{
            /*获取session对象*/
        	SessionFactory sf = new Configuration().configure().buildSessionFactory();
	        session = sf.openSession();
            return (Policy)session.get(Policy.class, policyID);
        }finally {//保证资源得到释放
               if(session != null) {
                  session.close();
               }
        }
    }
	
	/**
	 * *************************************************************
	 * FunName : getLawsByIndustryID
	 * Description： 根据行业id获取相应的法规列表
	 * @param industryID  (输入)： 行业ID
	 * @param lawsList (输出)： 法规列表
	 * *************************************************************
	 */
	public void getLawsByIndustryID(String industryID,List<Laws> lawsList) {
		try {
			SessionFactory sf = new Configuration().configure().buildSessionFactory();
	        Session session = sf.openSession();
//	        List<Laws> list = session.createSQLQuery("select l.* from Laws l,Slrelation s " +
//					"where l.id = s.lid  and s.sid = :industryID").addEntity(Laws.class)
//					.setParameter("industryID", industryID).list();
	        List<Laws> list = session.createSQLQuery("select l.* from Laws l " +
			"where l.SubjectId = :industryID").addEntity(Laws.class)
			.setParameter("industryID", industryID).list();
	        if (list.size() != 0) {
		        Iterator it = list.iterator();
		        while (it.hasNext()) {
			    /*此处将获取到的list重新添加到了IndustryList中，应该可以直接对IndustryList赋值返回的*/
			    lawsList.add((Laws)it.next());
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
	 * FunName : getPolicyByIndustryID
	 * Description： 根据行业id获取相应的政策列表
	 * @param industryID  (输入)： 行业ID
	 * @param policyList  (输出)： 政策列表
	 * *************************************************************
	 */
	public void getPolicyByIndustryID(String industryID,List<Policy> policyList) {
		try {
			SessionFactory sf = new Configuration().configure()
			.buildSessionFactory();
	        Session session = sf.openSession();       
//	        List<Policy> list = session.createSQLQuery("select p.* from Policy p,Sprelation s " +
//					"where p.id = s.pid  and s.sid = :industryID").addEntity(Policy.class)
//					.setParameter("industryID", industryID).list();
	        List<Policy> list = session.createSQLQuery("select p.* from Policy p " +
					"where p.SubjectId = :industryID").addEntity(Policy.class)
					.setParameter("industryID", industryID).list();
	        if (list.size() != 0) {
		        Iterator it = list.iterator();
		        while (it.hasNext()) {
			    /*此处将获取到的list重新添加到了IndustryList中，应该可以直接对IndustryList赋值返回的*/
			    policyList.add((Policy)it.next());
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
	 * FunName : getAddressListByKey
	 * Description： 根据关键字查询符合条件的地址
	 * @param strAddress  (输入)： 查询关键字
	 * @param addressList (输出)： 地址列表
	 * *************************************************************
	 */
	public void getIndustryListByKey(String strKey,List<String> addressList) {
		try {
			SessionFactory sf = new Configuration().configure()
			.buildSessionFactory();
	        Session session = sf.openSession();
	        //Transaction tx = session.beginTransaction();
	        List<String> list = null;
	        String sql = "{call getIndustryListByKey(?)}";
	        SQLQuery query= session.createSQLQuery(sql);
	        String parame = "%" + strKey + "%";
	        query.setString(0,parame);
	        list = query.list();
	        if (list.size() != 0) {
		        Iterator it = list.iterator();
		        while (it.hasNext()) {
			    /*此处将获取到的list重新添加到了IndustryList中，应该可以直接对IndustryList赋值返回的*/
			    addressList.add((String) it.next());
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
	 * FunName : deleteSubject
     * Description： 删除行业类别信息
     * Input: id
     * Output:boolean
     * *************************************************************
	 */
	
    public boolean deleteSubject(String id) {
    	Subject st = getIndustryByID(id);
    	if (st != null) {
    		if (DBOperation.delete(st)) {
    			return true;
    		}
    	}
    	
    	return false;
    }
    
    /**
	 * *************************************************************
	 * FunName : deleteLaws
     * Description： 删除法规信息
     * Input: id
     * Output:boolean
     * *************************************************************
	 */
	
    public boolean deleteLaws(String id) {
    	Laws law = getLawByLawID(id);
    	if (law != null) {
    		if (DBOperation.delete(law)) {
    			return true;
    		}
    	}
    	
    	return false;
    }
    
    /**
	 * *************************************************************
	 * FunName : deletePolicy
     * Description： 删除优惠政策信息
     * Input: id
     * Output:boolean
     * *************************************************************
	 */
	
    public boolean deletePolicy(String id) {
    	Policy pl = getPolicyByPolicyID(id);
    	if (pl != null) {
    		if (DBOperation.delete(pl)) {
    			return true;
    		}
    	}
    	
    	return false;
    }
}
