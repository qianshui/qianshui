package DataBase;

import java.util.Date;
import java.util.HashSet;
import java.util.Set;

/**
 * Laws entity. @author MyEclipse Persistence Tools
 */

public class Laws implements java.io.Serializable {

	// Fields

	private String id;
	private String title;
	private String content;
	private Date addTime;
	private String submitter;
	private boolean micro;
	//private Set slrelations = new HashSet(0);

	// Constructors

	/** default constructor */
	public Laws() {
	}

	/** minimal constructor */
	public Laws(String id) {
		this.id = id;
	}

	/** full constructor */
	public Laws(String id, String title, String content, Date addTime,
			String submitter, boolean micro, Set slrelations) {
		this.id = id;
		this.title = title;
		this.content = content;
		this.addTime = addTime;
		this.submitter = submitter;
		this.micro = micro;
		//this.slrelations = slrelations;
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

	public boolean getMicro() {
		return this.micro;
	}

	public void setMicro(boolean micro) {
		this.micro = micro;
	}

//	public Set getSlrelations() {
//		return this.slrelations;
//	}
//
//	public void setSlrelations(Set slrelations) {
//		this.slrelations = slrelations;
//	}

}