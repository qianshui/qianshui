package DataBase;

import java.util.ArrayList;

/**
 * Menu entity. @author MyEclipse Persistence Tools
 */

public class Menu implements java.io.Serializable {

	// Fields

	private String id;
	private String title;
	private String parentid;
	private String panel;
	private ArrayList<Menu> children= new ArrayList<Menu>();
	// Constructors

	/** default constructor */
	public Menu() {
	}

	/** minimal constructor */
	public Menu(String id, String title) {
		this.id = id;
		this.title = title;
	}

	/** full constructor */
	public Menu(String id, String title, String parentid, String panel) {
		this.id = id;
		this.title = title;
		this.parentid = parentid;
		this.panel = panel;
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

	public String getParentid() {
		return this.parentid;
	}

	public void setParentid(String parentid) {
		this.parentid = parentid;
	}

	public String getPanel() {
		return this.panel;
	}

	public void setPanel(String panel) {
		this.panel = panel;
	}
	public void setChildren(Menu node){
		if(this.id.equals(node.getParentid()) && !this.children.contains(node)){	
			this.children.add(node);
		}	
	}
	public ArrayList<Menu> getChildren(){
		return children;
	}
}