/**
 * *************************************************************
 * @FileName:DBOperation.java
 * @Description:为业务层提供统一的数据表操作层
 * @Author: wanghong
 * @Create date:   2014.04.01
 * *************************************************************
 */

package Common;

import org.hibernate.HibernateException;
import org.hibernate.Query;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;
import org.hibernate.cfg.Configuration;

import DataBase.HibernateSessionFactory;

public class DBOperation {
	private static SessionFactory factory=null;
	public static Session getHibernateSession()
	{
		return HibernateSessionFactory.getSession();
	}
//	public static SessionFactory getSessionFactory()
//	{
//		if(factory==null)
//		{
//			Configuration cfg = new Configuration().configure(); 
//			factory = cfg.buildSessionFactory();
//		}
//		return factory;
//	}
	@SuppressWarnings("hiding")
	public static <Object> boolean add(Object obj) {
		//Configuration cfg = new Configuration().configure(); 
        //SessionFactory factory = getSessionFactory();
        
        Session session = null;
        try {  
            //session = factory.openSession();   
            session=getHibernateSession();
            session.beginTransaction(); 
            session.save(obj);   
            session.getTransaction().commit();  
            return true;
        }catch(Exception e) {  
            e.printStackTrace();  
            session.getTransaction().rollback();
            return false;
        }finally {
            if (session != null) {  
                if (session.isOpen()) {  
                    //关闭session  
                    session.close();  
                }  
            }
        }
	}
	
	public static <Object> boolean update(Object obj) {
		//Configuration cfg = new Configuration().configure(); 
        //SessionFactory factory = getSessionFactory();
        
        Session session = null;
        try {  
        	//session = factory.openSession();   
            session=getHibernateSession();
            session.beginTransaction(); 
            session.update(obj);
            session.getTransaction().commit();  
            return true;
        }catch(Exception e) {  
            e.printStackTrace();  
            session.getTransaction().rollback();
            return false;
        }finally {
            if (session != null) {  
                if (session.isOpen()) {  
                    //关闭session  
                    session.close();  
                }  
            }
        }
	}
	
	public static <Object> boolean delete(Object obj) {
		//Configuration cfg = new Configuration().configure(); 
        //SessionFactory factory = getSessionFactory();
        
        Session session = null;
        try {  
        	//session = factory.openSession();   
            session=getHibernateSession();
            session.beginTransaction(); 
            session.delete(obj);   
            session.getTransaction().commit();  
            return true;
        }catch(Exception e) {  
            e.printStackTrace();  
            session.getTransaction().rollback();
            return false;
        }finally {
            if (session != null) {  
                if (session.isOpen()) {  
                    //关闭session  
                    session.close();  
                }  
            }
        }
	}
	
	public static boolean delete(String sql){
		//Configuration cfg = new Configuration().configure(); 
		//SessionFactory factory = getSessionFactory();
		Session session = null;
		Transaction tx = null;
		try {
				//session = factory.openSession();   
	            session=getHibernateSession();
			    tx = session.getTransaction();
			    session.beginTransaction(); 
			    Query query = session.createSQLQuery(sql);

			    query.executeUpdate();
			    tx.commit();
			    return true;
		} catch (HibernateException e) {
			    tx.rollback();
			    e.printStackTrace();
			    return false;
	    } finally{
	    	if (session != null) {  
                if (session.isOpen()) {  
                    //关闭session  
                    session.close();  
                }  
            }
	    }
	}
}