package DataBase;

/**
 * Subjecttype entity. @author MyEclipse Persistence Tools
 */

public class Subjecttype implements java.io.Serializable {

	// Fields

	private String id;
	private String description;
	private boolean commonFlag;
	private String title;
	private String imgPath;
	// Constructors

	/** default constructor */
	public Subjecttype() {
	}

	/** minimal constructor */
	public Subjecttype(String id) {
		this.id = id;
	}

	/** full constructor */
	public Subjecttype(String id, String description, boolean commonFlag,
			String title) {
		this.id = id;
		this.description = description;
		this.commonFlag = commonFlag;
		this.title = title;
	}

	// Property accessors

	public String getId() {
		return this.id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public String getDescription() {
		return this.description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public boolean getCommonFlag() {
		return this.commonFlag;
	}

	public void setCommonFlag(boolean commonFlag) {
		this.commonFlag = commonFlag;
	}

	public String getTitle() {
		return this.title;
	}

	public void setTitle(String title) {
		this.title = title;
	}
	public String getImgPath() {
		return this.imgPath;
	}

	public void setImgPath(String imgPath) {
		this.imgPath = imgPath;
	}
}