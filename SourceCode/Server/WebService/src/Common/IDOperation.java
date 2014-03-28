/** 
 * *************************************************************
 * @FileName:IDOperation.java
 * @Description: ID操作文件
 * @Author: wanghong
 * @Create date: 2014.03.28
 * *************************************************************
 */
package Common;
import org.hibernate.SQLQuery;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;
import org.hibernate.cfg.Configuration;
import DataBase.Classid;

/** 
 * *************************************************************
 * IDOperation为ID操作类，用于生成各数据表的ID字段值
 * @ClassName:IDOperation
 * @Author: wanghong
 * @Create date: 2014.03.28
 * *************************************************************
 */
public class IDOperation {
	
	 /**
     * *************************************************************
	 * FunName : getClassID
     * Description： 获取对应表的ID字段值
     * Input: @param className(数据表名，如“subject”)
     * Output:@param ID值(如“SJ0006”)
     * *************************************************************
	 */
	public static String getClassID(String className) {
		Session session = null;
		String baseValue = "00000";//数值基准部分
		
        try{
        	SessionFactory sf = new Configuration().configure().buildSessionFactory();
	        session = sf.openSession();
	        Transaction tx = session.beginTransaction();
	        Classid obj = ((Classid)session.get(Classid.class, className));
	        if (obj != null) {
	        	/*ID值加1后更改数据库*/
	        	SQLQuery query = session.createSQLQuery("update Classid set num=:num where ClassName=:ClassName");
	        	query.setParameter("num",obj.getNum()+1);
	        	query.setParameter("ClassName", className);
	        	query.executeUpdate();
	        	tx.commit();
	        }
	        
	        String value = String.valueOf(obj.getNum());
	        String classID = obj.getKey() + baseValue.substring(0, baseValue.length()- value.length()) + value;
            return classID;
        }finally {//保证资源得到释放
               if(session != null) {
                  session.close();
               }
        }
	}
}