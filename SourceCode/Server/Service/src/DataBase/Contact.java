package DataBase;

/**
 * Contact entity. @author MyEclipse Persistence Tools
 */

public class Contact implements java.io.Serializable {

	// Fields

	private String id;
	private String name;
	private String tel;
	private String address;
	private String company;

	// Constructors

	/** default constructor */
	public Contact() {
	}

	/** minimal constructor */
	public Contact(String id) {
		this.id = id;
	}

	/** full constructor */
	public Contact(String id, String name, String tel, String address,
			String company) {
		this.id = id;
		this.name = name;
		this.tel = tel;
		this.address = address;
		this.company = company;
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

	public String getTel() {
		return this.tel;
	}

	public void setTel(String tel) {
		this.tel = tel;
	}

	public String getAddress() {
		return this.address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public String getCompany() {
		return this.company;
	}

	public void setCompany(String company) {
		this.company = company;
	}

}