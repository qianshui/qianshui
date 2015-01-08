package DataBase;

/**
 * VisitInfo entity. @author MyEclipse Persistence Tools
 */

public class VisitInfo implements java.io.Serializable {

	// Fields

	private String objectid;
	private String objectname;
	private Integer visitcount;
	private String memo;

	// Constructors

	/** default constructor */
	public VisitInfo() {
	}

	/** minimal constructor */
	public VisitInfo(String objectid, Integer visitcount) {
		this.objectid = objectid;
		this.visitcount = visitcount;
	}

	/** full constructor */
	public VisitInfo(String objectid, String objectname, Integer visitcount,
			String memo) {
		this.objectid = objectid;
		this.objectname = objectname;
		this.visitcount = visitcount;
		this.memo = memo;
	}

	// Property accessors

	public String getObjectid() {
		return this.objectid;
	}

	public void setObjectid(String objectid) {
		this.objectid = objectid;
	}

	public String getObjectname() {
		return this.objectname;
	}

	public void setObjectname(String objectname) {
		this.objectname = objectname;
	}

	public Integer getVisitcount() {
		return this.visitcount;
	}

	public void setVisitcount(Integer visitcount) {
		this.visitcount = visitcount;
	}

	public String getMemo() {
		return this.memo;
	}

	public void setMemo(String memo) {
		this.memo = memo;
	}

}