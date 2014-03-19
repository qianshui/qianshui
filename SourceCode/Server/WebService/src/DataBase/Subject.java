package DataBase;

import java.util.HashSet;
import java.util.Set;

/**
 * Subject entity. @author MyEclipse Persistence Tools
 */

public class Subject implements java.io.Serializable {

	// Fields

	private String id;
	private String description;
	private String subjectTypeId;
	private boolean commonFlag;
	private String imgPath;
	private String keyWords;
	private String title;
	private Set flows = new HashSet(0);
	private Set sprelations = new HashSet(0);
	private Set slrelations = new HashSet(0);

	// Constructors

	/** default constructor */
	public Subject() {
	}

	/** minimal constructor */
	public Subject(String id, String subjectTypeId) {
		this.id = id;
		this.subjectTypeId = subjectTypeId;
	}

	/** full constructor */
	public Subject(String id, String description, String subjectTypeId,
			boolean commonFlag, String imgPath, String keyWords, String title,
			Set flows, Set sprelations, Set slrelations) {
		this.id = id;
		this.description = description;
		this.subjectTypeId = subjectTypeId;
		this.commonFlag = commonFlag;
		this.imgPath = imgPath;
		this.keyWords = keyWords;
		this.title = title;
		this.flows = flows;
		this.sprelations = sprelations;
		this.slrelations = slrelations;
	}

	// Property accessors

	public String getId() {
		return this.id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public String getDescription() {
		return this.description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public String getSubjectTypeId() {
		return this.subjectTypeId;
	}

	public void setSubjectTypeId(String subjectTypeId) {
		this.subjectTypeId = subjectTypeId;
	}

	public boolean getCommonFlag() {
		return this.commonFlag;
	}

	public void setCommonFlag(boolean commonFlag) {
		this.commonFlag = commonFlag;
	}

	public String getImgPath() {
		return this.imgPath;
	}

	public void setImgPath(String imgPath) {
		this.imgPath = imgPath;
	}

	public String getKeyWords() {
		return this.keyWords;
	}

	public void setKeyWords(String keyWords) {
		this.keyWords = keyWords;
	}

	public String getTitle() {
		return this.title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public Set getFlows() {
		return this.flows;
	}

	public void setFlows(Set flows) {
		this.flows = flows;
	}

	public Set getSprelations() {
		return this.sprelations;
	}

	public void setSprelations(Set sprelations) {
		this.sprelations = sprelations;
	}

	public Set getSlrelations() {
		return this.slrelations;
	}

	public void setSlrelations(Set slrelations) {
		this.slrelations = slrelations;
	}

}