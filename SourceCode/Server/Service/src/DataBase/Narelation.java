package DataBase;

/**
 * Narelation entity. @author MyEclipse Persistence Tools
 */

public class Narelation implements java.io.Serializable {

	// Fields

	private String id;
	private String nid;
	private String aid;

	// Constructors

	/** default constructor */
	public Narelation() {
	}

	/** full constructor */
	public Narelation(String id, String nid, String aid) {
		this.id = id;
		this.nid = nid;
		this.aid = aid;
	}

	// Property accessors

	public String getId() {
		return this.id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public String getNid() {
		return this.nid;
	}

	public void setNid(String nid) {
		this.nid = nid;
	}

	public String getAid() {
		return this.aid;
	}

	public void setAid(String aid) {
		this.aid = aid;
	}

}