package DataBase;

/**
 * Icon entity. @author MyEclipse Persistence Tools
 */

public class Icon implements java.io.Serializable {

	// Fields

	private Integer id;
	private String name;
	private String url;
	private String type;

	// Constructors

	/** default constructor */
	public Icon() {
	}

	/** full constructor */
	public Icon(String name, String url, String type) {
		this.name = name;
		this.url = url;
		this.type = type;
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

	public String getUrl() {
		return this.url;
	}

	public void setUrl(String url) {
		this.url = url;
	}

	public String getType() {
		return this.type;
	}

	public void setType(String type) {
		this.type = type;
	}

}