package DataBase;

/**
 * Street entity. @author MyEclipse Persistence Tools
 */

public class Street implements java.io.Serializable {

	// Fields

	private String id;
	private String name;
	private boolean commonFlag;
	private String imgPath;

	// Constructors

	/** default constructor */
	public Street() {
	}

	/** minimal constructor */
	public Street(String id, String name) {
		this.id = id;
		this.name = name;
	}

	/** full constructor */
	public Street(String id, String name, boolean commonFlag, String imgPath) {
		this.id = id;
		this.name = name;
		this.commonFlag = commonFlag;
		this.imgPath = imgPath;
	}

	// Property accessors

	public String getId() {
		return this.id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public String getName() {
		return this.name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public boolean getCommonFlag() {
		return this.commonFlag;
	}

	public void setCommonFlag(boolean commonFlag) {
		this.commonFlag = commonFlag;
	}

	public String getImgPath() {
		return this.imgPath;
	}

	public void setImgPath(String imgPath) {
		this.imgPath = imgPath;
	}

}