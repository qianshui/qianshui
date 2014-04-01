package DBOperation;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.cfg.Configuration;

import DataBase.Subject;

public class SubjectOperation implements IDBOperation{
    private Subject sj;
    
    public SubjectOperation(Subject sj) {
    	this.sj = sj;
    }
    
    /**
	 * *************************************************************
	 * FunName : add
	 * Description：向Subject数据表添加一条法律记录
	 * @param Lng  (输入)： SubjectOperation对象
	 * return : boolean
	 * *************************************************************
	 */
	public <Object> boolean add(Object obj) {
		this.sj = ((SubjectOperation)obj).sj;
		Configuration cfg = new Configuration().configure(); 
        SessionFactory factory = cfg.buildSessionFactory();
        
        Session session = null;
        try {  
            session = factory.openSession();    
            session.beginTransaction(); 
            session.save(this.sj);
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
