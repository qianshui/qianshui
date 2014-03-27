package DataBase;

import java.util.Date;

/**
 * Flow entity. @author MyEclipse Persistence Tools
 */

public class Flow implements java.io.Serializable {

	// Fields

	private String id;
	private String subjectId;
	private String title;
	private String description;
	private Date addTime;
	private String submitter;
	private String type;
	private String categoryId;

	// Constructors

	/** default constructor */
	public Flow() {
	}

	/** minimal constructor */
	public Flow(String id) {
		this.id = id;
	}

	/** full constructor */
	public Flow(String id, String subjectId, String title, String description,
			Date addTime, String submitter, String type, String categoryId) {
		this.id = id;
		this.subjectId = subjectId;
		this.title = title;
		this.description = description;
		this.addTime = addTime;
		this.submitter = submitter;
		this.type = type;
		this.categoryId = categoryId;
	}

	// Property accessors

	public String getId() {
		return this.id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public String getSubjectId() {
		return this.subjectId;
	}

	public void setSubjectId(String subjectId) {
		this.subjectId = subjectId;
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

	public Date getAddTime() {
		return this.addTime;
	}

	public void setAddTime(Date addTime) {
		this.addTime = addTime;
	}

	public String getSubmitter() {
		return this.submitter;
	}

	public void setSubmitter(String submitter) {
		this.submitter = submitter;
	}

	public String getType() {
		return this.type;
	}

	public void setType(String type) {
		this.type = type;
	}

	public String getCategoryId() {
		return this.categoryId;
	}

	public void setCategoryId(String categoryId) {
		this.categoryId = categoryId;
	}

}