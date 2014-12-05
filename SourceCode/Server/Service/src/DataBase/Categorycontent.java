package DataBase;

/**
 * Categorycontent entity. @author MyEclipse Persistence Tools
 */

public class Categorycontent implements java.io.Serializable {

	// Fields

	private String categoryId;
	private String content;

	// Constructors

	/** default constructor */
	public Categorycontent() {
	}

	/** minimal constructor */
	public Categorycontent(String categoryId) {
		this.categoryId = categoryId;
	}

	/** full constructor */
	public Categorycontent(String categoryId, String content) {
		this.categoryId = categoryId;
		this.content = content;
	}

	// Property accessors

	public String getCategoryId() {
		return this.categoryId;
	}

	public void setCategoryId(String categoryId) {
		this.categoryId = categoryId;
	}

	public String getContent() {
		return this.content;
	}

	public void setContent(String content) {
		this.content = content;
	}

}