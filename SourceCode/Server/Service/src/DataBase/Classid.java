package DataBase;

/**
 * Classid entity. @author MyEclipse Persistence Tools
 */

public class Classid implements java.io.Serializable {

	// Fields

	private String className;
	private String key;
	private Integer num;

	// Constructors

	/** default constructor */
	public Classid() {
	}

	/** full constructor */
	public Classid(String className, String key, Integer num) {
		this.className = className;
		this.key = key;
		this.num = num;
	}

	// Property accessors

	public String getClassName() {
		return this.className;
	}

	public void setClassName(String className) {
		this.className = className;
	}

	public String getKey() {
		return this.key;
	}

	public void setKey(String key) {
		this.key = key;
	}

	public Integer getNum() {
		return this.num;
	}

	public void setNum(Integer num) {
		this.num = num;
	}

}