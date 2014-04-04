/**
 * *************************************************************
 * @FileName:DBOperation.java
 * @Description:为业务层提供统一的数据表操作层
 * @Author: wanghong
 * @Create date:   2014.04.01
 * *************************************************************
 */

package Common;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.cfg.Configuration;

public class DBOperation {
	public static <Object> boolean add(Object obj) {
		Configuration cfg = new Configuration().configure(); 
        SessionFactory factory = cfg.buildSessionFactory();
        
        Session session = null;
        try {  
            session = factory.openSession();    
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
		Configuration cfg = new Configuration().configure(); 
        SessionFactory factory = cfg.buildSessionFactory();
        
        Session session = null;
        try {  
            session = factory.openSession();    
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
		Configuration cfg = new Configuration().configure(); 
        SessionFactory factory = cfg.buildSessionFactory();
        
        Session session = null;
        try {  
            session = factory.openSession();    
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
}