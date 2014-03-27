package DataBase;

import java.util.HashSet;
import java.util.Set;

/**
 * Attachment entity. @author MyEclipse Persistence Tools
 */

public class Attachment implements java.io.Serializable {

	// Fields

	private String id;
	private String title;
	private String description;
	private String comments;
	private String downloadLink;
	//private Set narelations = new HashSet(0);

	// Constructors

	/** default constructor */
	public Attachment() {
	}

	/** minimal constructor */
	public Attachment(String id) {
		this.id = id;
	}

	/** full constructor */
	public Attachment(String id, String title, String description,
			String comments, String downloadLink, Set narelations) {
		this.id = id;
		this.title = title;
		this.description = description;
		this.comments = comments;
		this.downloadLink = downloadLink;
		//this.narelations = narelations;
	}

	// Property accessors

	public String getId() {
		return this.id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public String getTitle() {
		return this.title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public String getDescription() {
		return this.description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public String getComments() {
		return this.comments;
	}

	public void setComments(String comments) {
		this.comments = comments;
	}

	public String getDownloadLink() {
		return this.downloadLink;
	}

	public void setDownloadLink(String downloadLink) {
		this.downloadLink = downloadLink;
	}

//	public Set getNarelations() {
//		return this.narelations;
//	}
//
//	public void setNarelations(Set narelations) {
//		this.narelations = narelations;
//	}

}