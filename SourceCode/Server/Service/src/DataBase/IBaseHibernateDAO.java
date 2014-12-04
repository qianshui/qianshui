package DataBase;

import org.hibernate.Session;

import java.util.List;


/**
 * Data access interface for domain model
 * @author MyEclipse Persistence Tools
 */
public interface IBaseHibernateDAO<T> {

	public  boolean save(T domain);
	
	public void saveOrUpdate(T domain);

	public  boolean delete(T domain);

	public  T findById(Integer id);

	public  List<T> findByExample(T domain);

	public  List<T> findByProperty(String propertyName,Object value);
	
	public List<T> findByProperty(String propertyName,Object value,int firstResult,int size);
	
	public List<T> findByProperty(String[] propertyNames, Object[] values);

	public  List<T> findAll(String orderby, boolean isAsc);
	
	public List<T> findAll(int firstResult,int size,String orderby, boolean isAsc) ;
	
	public List<T> query(String sql) ;
	
	public  boolean update(T domain);
	public  boolean excuteSql(String Sql);
	

}
