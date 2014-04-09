package DataBase;

import java.util.ArrayList;

/**
 * Category entity. @author MyEclipse Persistence Tools
 */

public class Category implements java.io.Serializable {

	// Fields

	private String id;
	private String title;
	private String icon;
	private String type;
	private String parentId;
	private String leaf;
	private String flowId;
	private ArrayList<Category> children= new ArrayList<Category>();
	// Constructors

	/** default constructor */
	public Category() {
	}

	/** minimal constructor */
	public Category(String id) {
		this.id = id;
	}

	/** full constructor */
	public Category(String id, String title, String icon, String type,
			String parentId, String leaf,String flowId) {
		this.id = id;
		this.title = title;
		this.icon = icon;
		this.type = type;
		this.parentId = parentId;
		this.leaf = leaf;
		this.flowId=flowId;
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

	public String getIcon() {
		return this.icon;
	}

	public void setIcon(String icon) {
		this.icon = icon;
	}

	public String getType() {
		return this.type;
	}

	public void setType(String type) {
		this.type = type;
	}

	public String getParentId() {
		return this.parentId;
	}

	public void setParentId(String parentId) {
		this.parentId = parentId;
	}

	public String getLeaf() {
		return this.leaf;
	}

	public void setLeaf(String leaf) {
		this.leaf = leaf;
	}
	public String getFlowId() {
		return this.flowId;
	}

	public void setFlowId(String flowId) {
		this.flowId = flowId;
	}
	
	public void setChildren(Category node){
		if(this.id.equals(node.getParentId()) && !this.children.contains(node)){	
			this.children.add(node);
		}	
	}
	public ArrayList<Category> getChildren(){
		return children;
	}
}