package DataBase;

/**
 * Street entity. @author MyEclipse Persistence Tools
 */

public class Street implements java.io.Serializable {

	// Fields

	private String id;
	private String name;
	private String areaId;
	private String strLat;
	private String strLng;
	private Boolean commonFlag;
	private String imgPath;

	// Constructors

	/** default constructor */
	public Street() {
	}

	/** minimal constructor */
	public Street(String name) {
		this.name = name;
	}

	/** full constructor */
	public Street(String name, String areaId, String strLat, String strLng,
			Boolean commonFlag, String imgPath) {
		this.name = name;
		this.areaId = areaId;
		this.strLat = strLat;
		this.strLng = strLng;
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

	public String getAreaId() {
		return this.areaId;
	}

	public void setAreaId(String areaId) {
		this.areaId = areaId;
	}

	public String getStrLat() {
		return this.strLat;
	}

	public void setStrLat(String strLat) {
		this.strLat = strLat;
	}

	public String getStrLng() {
		return this.strLng;
	}

	public void setStrLng(String strLng) {
		this.strLng = strLng;
	}

	public Boolean getCommonFlag() {
		return this.commonFlag;
	}

	public void setCommonFlag(Boolean commonFlag) {
		this.commonFlag = commonFlag;
	}

	public String getImgPath() {
		return this.imgPath;
	}

	public void setImgPath(String imgPath) {
		this.imgPath = imgPath;
	}

}