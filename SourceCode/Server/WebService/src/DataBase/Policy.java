package DataBase;

import java.util.Date;
import java.util.HashSet;
import java.util.Set;

/**
 * Policy entity. @author MyEclipse Persistence Tools
 */

public class Policy implements java.io.Serializable {

	// Fields

	private String id;
	private String title;
	private String content;
	private Date addTime;
	private String submitter;
	private String type;
	private boolean micro;
	private Set sprelations = new HashSet(0);

	// Constructors

	/** default constructor */
	public Policy() {
	}

	/** minimal constructor */
	public Policy(String id) {
		this.id = id;
	}

	/** full constructor */
	public Policy(String id, String title, String content, Date addTime,
			String submitter, String type, boolean micro, Set sprelations) {
		this.id = id;
		this.title = title;
		this.content = content;
		this.addTime = addTime;
		this.submitter = submitter;
		this.type = type;
		this.micro = micro;
		this.sprelations = sprelations;
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

	public String getContent() {
		return this.content;
	}

	public void setContent(String content) {
		this.content = content;
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

	public boolean getMicro() {
		return this.micro;
	}

	public void setMicro(boolean micro) {
		this.micro = micro;
	}

	public Set getSprelations() {
		return this.sprelations;
	}

	public void setSprelations(Set sprelations) {
		this.sprelations = sprelations;
	}

}