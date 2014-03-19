/** 
 * *************************************************************
 * @FileName:Industry.java
 * @Description: 行业模块处理文件
 * @Author: wanghong
 * @Create date: 2014.02.27
 * *************************************************************
 */
package Business;
import DataBase.Subjecttype;
import java.util.Iterator;
import java.util.List;
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
	 * FunName : getDataList
     * Description： 获取行业列表
     * Input: @param IndustryList
     * Output:void
     * *************************************************************
	 */
    public void getDataList(List<Subjecttype> IndustryList) {
    	try {
			SessionFactory sf = new Configuration().configure()
					.buildSessionFactory();
			Session session = sf.openSession();
			List list = null;
			list = session.createQuery("from Subjecttype").list();
			Transaction tx = session.beginTransaction();
			if (list != null) {
				Iterator it = list.iterator();
				while (it.hasNext()) {
					/*此处将获取到的list重新添加到了IndustryList中，应该可以直接对IndustryList赋值返回的*/
					IndustryList.add((Subjecttype) it.next());
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
	 * FunName : getObjectByID
     * Description： 根据ID获取行业对象
     * Input: @param strID
     * Output:void
     * *************************************************************
	 */
    public Subjecttype getObjectByID(String strID) {
    	Session session = null;
        try{
            /*获取session对象*/
        	SessionFactory sf = new Configuration().configure().buildSessionFactory();
	        session = sf.openSession();
            Subjecttype obj = (Subjecttype)session.get(Subjecttype.class, strID);
            return obj;
        }finally {//保证资源得到释放
               if(session != null) {
                  session.close();
               }
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
	        Transaction tx = session.beginTransaction();
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
			
			tx.commit();
			session.clear();
		} catch (HibernateException e) {
			// TODO: handle exception
			e.printStackTrace();
		}
	}
}
