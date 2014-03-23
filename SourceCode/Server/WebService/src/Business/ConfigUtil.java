package Business;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

import org.hibernate.HibernateException;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;
import org.hibernate.cfg.Configuration;

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
			session.clear();
		} catch (HibernateException e) {
			// TODO: handle exception
			e.printStackTrace();
		}
		return MenuList;
    }
}
