package DataBase;

/**
 * PeitaoObj entity. @author MyEclipse Persistence Tools
 */

public class PeitaoObj implements java.io.Serializable {

	// Fields

	private long id;
	private String name;
	private String type;
	private double lng;
	private double lat;

	// Constructors

	/** default constructor */
	public PeitaoObj() {
	}

	/** full constructor */
	public PeitaoObj(String name, String type, double lng, double lat) {
		this.name = name;
		this.type = type;
		this.lng = lng;
		this.lat = lat;
	}

	// Property accessors

	public long getId() {
		return this.id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getName() {
		return this.name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getType() {
		return this.type;
	}

	public void setType(String type) {
		this.type = type;
	}

	public double getLng() {
		return this.lng;
	}

	public void setLng(double lng) {
		this.lng = lng;
	}

	public double getLat() {
		return this.lat;
	}

	public void setLat(double lat) {
		this.lat = lat;
	}

}