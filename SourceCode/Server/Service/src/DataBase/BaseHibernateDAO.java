package DataBase;


import java.lang.reflect.ParameterizedType;
import java.util.List;

import org.hibernate.Query;
import org.hibernate.SQLQuery;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;
import org.hibernate.cfg.Configuration;
import org.hibernate.criterion.Example;
import org.apache.commons.lang.StringUtils;

import DataBase.HibernateSessionFactory;
import DataBase.IBaseHibernateDAO;

public class BaseHibernateDAO<T> implements IBaseHibernateDAO<T> {
	Class clazz;

	public Session getSession() {
		return HibernateSessionFactory.getSession();
	}

	public Transaction getTransaction() {
		return getSession().beginTransaction();
	}

	BaseHibernateDAO(Class c) {
		clazz = c;
	}

	protected void initDao() {

	}

	public boolean save(T domain) {

		Session session = null;
		try {
			session = getSession();
			session.beginTransaction();
			session.save(domain);
			session.getTransaction().commit();
			return true;
		} catch (Exception e) {
			e.printStackTrace();
			session.getTransaction().rollback();
			return false;
		} finally {
			if (session != null) {
				if (session.isOpen()) {
					// 关闭session
					session.close();
				}
			}
		}

	}

	public void saveOrUpdate(T domain) {

		Session session = null;
		try {
			session = getSession();
			session.beginTransaction();
			session.saveOrUpdate(domain);
			session.getTransaction().commit();
		} catch (Exception e) {
			e.printStackTrace();
			session.getTransaction().rollback();
		} finally {
			if (session != null) {
				if (session.isOpen()) {
					// 关闭session
					session.close();
				}
			}
		}

	}

	public boolean delete(T domain) {

		Session session = null;
		try {
			session = getSession();
			session.beginTransaction();
			session.delete(domain);
			session.getTransaction().commit();
			return true;
		} catch (Exception e) {
			e.printStackTrace();
			session.getTransaction().rollback();
			return false;
		} finally {
			if (session != null) {
				if (session.isOpen()) {
					// 关闭session
					session.close();
				}
			}
		}

	}

	@SuppressWarnings("unchecked")
	public T findById(Integer id) {

		try {
			T instance = (T) getSession().get(typeClass().getName(), id);
			return instance;
		} catch (RuntimeException re) {

			throw re;
		} finally {
			getSession().close();
		}
	}

	@SuppressWarnings("unchecked")
	public List<T> findByExample(T domain) {

		try {
			List results = getSession().createCriteria(
					typeClass().getClass().toString()).add(
					Example.create(domain)).list();
			return results;
		} catch (RuntimeException re) {

			throw re;
		} finally {
			getSession().close();
		}
	}

	@SuppressWarnings("unchecked")
	public List<T> findByProperty(String propertyName, Object value) {

		try {
			String queryString = "from " + getTableName()
					+ " as model where model." + propertyName + "= ?";
			Query queryObject = getSession().createQuery(queryString);
			queryObject.setParameter(0, value);
			return queryObject.list();
		} catch (RuntimeException re) {

			throw re;
		} finally {
			getSession().close();
		}
	}

	@SuppressWarnings("unchecked")
	public List<T> findByProperty(String[] propertyNames, Object[] values) {
		try {
			String queryString = "from " + getTableName() + " as model where";
			for (String propertyName : propertyNames) {
				queryString += " model." + propertyName + "=? and";
			}
			queryString = StringUtils.removeEnd(queryString, "and");
			Query queryObject = getSession().createQuery(queryString);
			for (int i = 0; i < values.length; i++) {
				queryObject.setParameter(i, values[i]);
			}
			return queryObject.list();
		} catch (RuntimeException re) {

			throw re;
		} finally {
			getSession().close();
		}
	}

	@SuppressWarnings("unchecked")
	public List<T> fuzzyFindByProperty(String propertyName, Object value) {

		try {
			String queryString = " from " + getTableName()
					+ " as model where LOWER(model." + propertyName
					+ ") like ?";
			Query queryObject = getSession().createQuery(queryString);
			queryObject.setString(0, "%" + String.valueOf(value).toLowerCase()
					+ "%");
			return queryObject.list();
		} catch (RuntimeException re) {

			throw re;
		} finally {
			getSession().close();
		}
	}

	@SuppressWarnings("unchecked")
	public List<T> findByProperty(String propertyName, Object value,
			int firstResult, int size) {

		try {
			String queryString = "from " + getTableName()
					+ " as model where model." + propertyName + "= ?";
			Query queryObject = getSession().createQuery(queryString);
			queryObject.setFirstResult(firstResult);
			queryObject.setMaxResults(size);
			queryObject.setParameter(0, value);
			return queryObject.list();
		} catch (RuntimeException re) {

			throw re;
		} finally {
			getSession().close();
		}
	}

	@SuppressWarnings("unchecked")
	public List<T> findAll(String orderby, boolean isAsc) {

		try {
			String queryString = "from " + getTableName();
			if (isAsc) {
				queryString += " order by " + orderby + " ASC";
			} else {
				queryString += " order by " + orderby + " DESC";

			}
			Query queryObject = getSession().createQuery(queryString);
			return queryObject.list();
		} catch (RuntimeException re) {
			
			throw re;
		} finally {
			getSession().close();
		}
	}

	@SuppressWarnings("unchecked")
	public List<T> findAll(int firstResult, int size, String orderby,
			boolean isAsc) {

		try {
			String queryString = "from " + getTableName();
			if (isAsc) {
				queryString += " order by " + orderby + " ASC";
			} else {
				queryString += " order by " + orderby + " DESC";

			}
			Query queryObject = getSession().createQuery(queryString);
			queryObject.setFirstResult(firstResult);
			queryObject.setMaxResults(size);
			return queryObject.list();
		} catch (RuntimeException re) {

			throw re;
		} finally {
			getSession().close();
		}
	}

	public boolean update(T instance) {

		Session session = null;
		try {
			session = getSession();
			session.beginTransaction();
			session.update(instance);
			session.getTransaction().commit();
			return true;
		} catch (Exception e) {
			e.printStackTrace();
			session.getTransaction().rollback();
			return false;
		} finally {
			if (session != null) {
				if (session.isOpen()) {
					// 关闭session
					session.close();
				}
			}
		}
	}

	// 取得泛型类型
	@SuppressWarnings("unchecked")
	protected Class<T> typeClass() {

		return (Class<T>) ((ParameterizedType) getClass()
				.getGenericSuperclass()).getActualTypeArguments()[0];
	}

	// 取得泛型tableName
	private String getTableName() {
		// return typeClass().getSimpleName();
		return clazz.getSimpleName();
	}

	public List<T> query(String sql) {
		try {

			SQLQuery queryObject = getSession().createSQLQuery(sql);
			queryObject.addEntity(clazz);
			return queryObject.list();
		} catch (RuntimeException re) {

			throw re;
		} finally {
			getSession().close();
		}

	}

	public boolean excuteSql(String Sql) {
		Session session = null;
		try {
			session = getSession();
			session.beginTransaction();
			SQLQuery queryObject = session.createSQLQuery(Sql);
			int rs = queryObject.executeUpdate();
			session.getTransaction().commit();
			if(rs<=0){
				return false;
			}
		} catch (RuntimeException re) {
			//session.getTransaction().rollback();
			throw re;
		} finally {
			if (session != null) {
				if (session.isOpen()) {
					// 关闭session
					session.close();
				}
			}
		}
		return true;
	}


}
