package DataBase;

/**
 * Locationsite entity. @author MyEclipse Persistence Tools
 */

public class Locationsite implements java.io.Serializable {

	// Fields

	private Integer id;
	private String name;
	private String address;
	private String coordinate;
	private String type;
	private double longitude;
	private double latitude;
	private String subjectId;

	// Constructors

	/** default constructor */
	public Locationsite() {
	}

	/** minimal constructor */
	public Locationsite(String name, String address) {
		this.name = name;
		this.address = address;
	}

	/** full constructor */
	public Locationsite(String name, String address, String coordinate,
			String type, double longitude, double latitude, String subjectId) {
		this.name = name;
		this.address = address;
		this.coordinate = coordinate;
		this.type = type;
		this.longitude = longitude;
		this.latitude = latitude;
		this.subjectId = subjectId;
	}

	// Property accessors

	public Integer getId() {
		return this.id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getName() {
		return this.name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getAddress() {
		return this.address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public String getCoordinate() {
		return this.coordinate;
	}

	public void setCoordinate(String coordinate) {
		this.coordinate = coordinate;
	}

	public String getType() {
		return this.type;
	}

	public void setType(String type) {
		this.type = type;
	}

	public double getLongitude() {
		return this.longitude;
	}

	public void setLongitude(double longitude) {
		this.longitude = longitude;
	}

	public double getLatitude() {
		return this.latitude;
	}

	public void setLatitude(double latitude) {
		this.latitude = latitude;
	}

	public String getSubjectId() {
		return this.subjectId;
	}

	public void setSubjectId(String subjectId) {
		this.subjectId = subjectId;
	}

}