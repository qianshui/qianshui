package DataBase;

/**
 * Sprelation entity. @author MyEclipse Persistence Tools
 */

public class Sprelation implements java.io.Serializable {

	// Fields

	private String id;
	private String sid;
	private String pid;

	// Constructors

	/** default constructor */
	public Sprelation() {
	}

	/** minimal constructor */
	public Sprelation(String id) {
		this.id = id;
	}

	/** full constructor */
	public Sprelation(String id, String sid, String pid) {
		this.id = id;
		this.sid = sid;
		this.pid = pid;
	}

	// Property accessors

	public String getId() {
		return this.id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public String getSid() {
		return this.sid;
	}

	public void setSid(String sid) {
		this.sid = sid;
	}

	public String getPid() {
		return this.pid;
	}

	public void setPid(String pid) {
		this.pid = pid;
	}

}