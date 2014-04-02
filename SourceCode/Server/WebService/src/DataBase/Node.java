package DataBase;

import java.util.HashSet;
import java.util.Set;
import java.util.ArrayList;
import java.util.List;

/**
 * Node entity. @author MyEclipse Persistence Tools
 */

public class Node implements java.io.Serializable {

	// Fields

	private String id;
	private String flowId;
	private String title;
	private String description;
	private String prevNode;
	private Integer no;
	private String contactId;
	private String imgId;
	private Integer rowid;
	//private Set narelations = new HashSet(0);

	// Constructors

	/** default constructor */
	public Node() {
	}

	/** minimal constructor */
	public Node(String id, String imgId, Integer rowid) {
		this.id = id;
		this.imgId = imgId;
		this.rowid = rowid;
	}

	/** full constructor */
	public Node(String id, String flowId, String title, String description,
			String prevNode, Integer no, String contactId, String imgId,
			Integer rowid, Set narelations) {
		this.id = id;
		this.flowId = flowId;
		this.title = title;
		this.description = description;
		this.prevNode = prevNode;
		this.no = no;
		this.contactId = contactId;
		this.imgId = imgId;
		this.rowid = rowid;
		//this.narelations = narelations;
	}

	// Property accessors

	public String getId() {
		return this.id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public String getFlowId() {
		return this.flowId;
	}

	public void setFlowId(String flowId) {
		this.flowId = flowId;
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

	public String getPrevNode() {
		return this.prevNode;
	}

	public void setPrevNode(String prevNode) {
		this.prevNode = prevNode;
	}

	public Integer getNo() {
		return this.no;
	}

	public void setNo(Integer no) {
		this.no = no;
	}

	public String getContactId() {
		return this.contactId;
	}

	public void setContactId(String contactId) {
		this.contactId = contactId;
	}

	public String getImgId() {
		return this.imgId;
	}

	public void setImgId(String imgId) {
		this.imgId = imgId;
	}

	public Integer getRowid() {
		return this.rowid;
	}

	public void setRowid(Integer rowid) {
		this.rowid = rowid;
	}

//	public Set getNarelations() {
//		return this.narelations;
//	}
//
//	public void setNarelations(Set narelations) {
//		this.narelations = narelations;
//	}
}