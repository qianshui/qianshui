package DataBase;

/**
 * Area entity. @author MyEclipse Persistence Tools
 */

public class Area implements java.io.Serializable {

	// Fields

	private String id;
	private String strName;
	private String imgPath;
	private String strLat;
	private String strLng;
	private String strArea;

	// Constructors

	/** default constructor */
	public Area() {
	}

	/** full constructor */
	public Area(String strName, String imgPath, String strLat, String strLng,
			String strArea) {
		this.strName = strName;
		this.imgPath = imgPath;
		this.strLat = strLat;
		this.strLng = strLng;
		this.strArea = strArea;
	}

	// Property accessors

	public String getId() {
		return this.id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public String getStrName() {
		return this.strName;
	}

	public void setStrName(String strName) {
		this.strName = strName;
	}

	public String getImgPath() {
		return this.imgPath;
	}

	public void setImgPath(String imgPath) {
		this.imgPath = imgPath;
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

	public String getStrArea() {
		return this.strArea;
	}

	public void setStrArea(String strArea) {
		this.strArea = strArea;
	}

}