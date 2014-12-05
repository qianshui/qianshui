package DataBase;

import java.util.List;



public class DaoFactory {
	private static DaoFactory m_Instance = null;


	private DaoFactory() {

	}

	public static DaoFactory getInstance() {
		if (m_Instance == null) {
			m_Instance = new DaoFactory();
		}

		return m_Instance;
	}
	
	public IBaseHibernateDAO<Flow> getFlow_dao() {
		return new BaseHibernateDAO<Flow>(Flow.class);
	}
	
	public IBaseHibernateDAO<Category> getCategory_dao() {
		return new BaseHibernateDAO<Category>(Category.class);
	}
	
	public IBaseHibernateDAO<Icon> getIcon_dao() {
		return new BaseHibernateDAO<Icon>(Icon.class);
	}
	
	public IBaseHibernateDAO<Node> getNode_dao() {
		return new BaseHibernateDAO<Node>(Node.class);
	}
	
	public IBaseHibernateDAO<Attachment> getAttachment_dao() {
		return new BaseHibernateDAO<Attachment>(Attachment.class);
	}
	
	public IBaseHibernateDAO<Laws> getLaws_dao() {
		return new BaseHibernateDAO<Laws>(Laws.class);
	}
	
	public IBaseHibernateDAO<Locationsite> getLocationsite_dao() {
		return new BaseHibernateDAO<Locationsite>(Locationsite.class);
	}
	
	public IBaseHibernateDAO<Menu> getMenu_dao() {
		return new BaseHibernateDAO<Menu>(Menu.class);
	}
	
	public IBaseHibernateDAO<Narelation> getNarelation_dao() {
		return new BaseHibernateDAO<Narelation>(Narelation.class);
	}
	
	public IBaseHibernateDAO<PeitaoObj> getPeitaoObj_dao() {
		return new BaseHibernateDAO<PeitaoObj>(PeitaoObj.class);
	}
	
	public IBaseHibernateDAO<Policy> getPolicy_dao() {
		return new BaseHibernateDAO<Policy>(Policy.class);
	}
	
	public IBaseHibernateDAO<Prrelation> getPrrelation_dao() {
		return new BaseHibernateDAO<Prrelation>(Prrelation.class);
	}
	
	public IBaseHibernateDAO<Slrelation> getSlrelation_dao() {
		return new BaseHibernateDAO<Slrelation>(Slrelation.class);
	}
	
	public IBaseHibernateDAO<Categorycontent> getCategorycontent_dao() {
		return new BaseHibernateDAO<Categorycontent>(Categorycontent.class);
	}
	
	// public IBaseHibernateDAO<Sortconfig> getSortconfigDao(){
	// return new BaseHibernateDAO<Sortconfig>(Sortconfig.class);
	// }
}
