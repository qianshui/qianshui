/** 
 * *************************************************************
 * @FileName:CategoryOperation.java
 * @Description:分类数据表操作文件，包括添加、更改、删除数据记录
 * @Author: wanghong
 * @Create date: 2014.04.01
 * *************************************************************
 */
package DBOperation;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.cfg.Configuration;
import DataBase.Category;

public class CategoryOperation implements IDBOperation{
	    private Category cate;
	    
	    public CategoryOperation(Category cate) {
	    	this.cate = cate;
	    }
	    
	    /**
		 * *************************************************************
		 * FunName : add
		 * Description：向Category数据表添加一条法律记录
		 * @param Lng  (输入)： CategoryOperation对象
		 * return : boolean
		 * *************************************************************
		 */
		public <Object> boolean add(Object obj) {
			this.cate = ((CategoryOperation)obj).cate;
			Configuration cfg = new Configuration().configure(); 
	        SessionFactory factory = cfg.buildSessionFactory();
	        
	        Session session = null;
	        try {  
	            session = factory.openSession();    
	            session.beginTransaction(); 
	            session.save(this.cate);   
	            session.getTransaction().commit();  
	            return true;
	        }catch(Exception e) {  
	            e.printStackTrace();  
	            session.getTransaction().rollback();
	            return false;
	        }finally {
	            if (session != null) {  
	                if (session.isOpen()) {
	                    session.close();  
	                }
	            }
	        }
		}
}
