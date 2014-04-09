package Business;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

import org.hibernate.HibernateException;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;
import org.hibernate.cfg.Configuration;

import DataBase.Attachment;
import DataBase.Category;
import DataBase.Icon;
import DataBase.Menu;

public class ConfigUtil {
	private static ConfigUtil m_Instance = null;
	 
    private ConfigUtil() {
    	
    }   
    public static ConfigUtil getInstance() {
        if (m_Instance == null) {
        	m_Instance = new ConfigUtil();
        }
        
        return m_Instance;
    }
    
    public List<Menu> getMenuList() {
    	List<Menu> MenuList = new ArrayList<Menu>();
    	try {
			SessionFactory sf = new Configuration().configure()
					.buildSessionFactory();
			Session session = sf.openSession();
			List list = null;
			list = session.createQuery("from Menu where parentid is null").list();
			Transaction tx = session.beginTransaction();
			if (list != null) {
				Iterator it = list.iterator();
				while (it.hasNext()) {
					
					Menu Temp = (Menu) it.next();
					List rs = session.createQuery("from Menu where parentid= :pid")
					.setParameter("pid", Temp.getId()).list();
					if (rs != null) {
						Iterator item = rs.iterator();
						while (item.hasNext()) {
							Temp.setChildren((Menu)item.next());
						}
					}
					MenuList.add(Temp);
				}
			}
			tx.commit();
			session.close();
		} catch (HibernateException e) {
			// TODO: handle exception
			e.printStackTrace();
		}
		return MenuList;
    }
    
    /**
     * 获取图标列表
     * @return
     */
    public List getIconList() {
    	List list = null;
    	try {
			SessionFactory sf = new Configuration().configure()
					.buildSessionFactory();
			Session session = sf.openSession();
			
			list = session.createQuery("from Icon").list();
			if (list != null) {
				Iterator it = list.iterator();
			
			}
			
			session.close();
		} catch (HibernateException e) {
			// TODO: handle exception
			e.printStackTrace();
		}
		return list;	
    }
    
    /**
     * 根据图标的类型(Type字段)获取图标列表
     * @return
     */
    public List getIconListByIconType(String strIconType) {
    	List IconList = null;
    	try {
			SessionFactory sf = new Configuration().configure()
					.buildSessionFactory();
			Session session = sf.openSession();			
			IconList = session.createSQLQuery("select * from Icon where type = :strID").addEntity(Icon.class).setParameter("strID", strIconType).list();	
			session.close();
			
		} catch (HibernateException e) {
			// TODO: handle exception
			e.printStackTrace();
		}
		return IconList;	
    }
}
