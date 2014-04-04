package DataBase;

/**
 * Prrelation entity. @author MyEclipse Persistence Tools
 */

public class Prrelation implements java.io.Serializable {

	// Fields

	private String id;
	private String pid;
	private String rid;

	// Constructors

	/** default constructor */
	public Prrelation() {
	}

	/** full constructor */
	public Prrelation(String id, String pid, String rid) {
		this.id = id;
		this.pid = pid;
		this.rid = rid;
	}

	// Property accessors

	public String getId() {
		return this.id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public String getPid() {
		return this.pid;
	}

	public void setPid(String pid) {
		this.pid = pid;
	}

	public String getRid() {
		return this.rid;
	}

	public void setRid(String rid) {
		this.rid = rid;
	}

}