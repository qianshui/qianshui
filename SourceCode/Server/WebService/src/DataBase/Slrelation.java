package DataBase;

/**
 * Slrelation entity. @author MyEclipse Persistence Tools
 */

public class Slrelation implements java.io.Serializable {

	// Fields

	private String id;
	private String sid;
	private String lid;

	// Constructors

	/** default constructor */
	public Slrelation() {
	}

	/** full constructor */
	public Slrelation(String id, String sid, String lid) {
		this.id = id;
		this.sid = sid;
		this.lid = lid;
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

	public String getLid() {
		return this.lid;
	}

	public void setLid(String lid) {
		this.lid = lid;
	}

}