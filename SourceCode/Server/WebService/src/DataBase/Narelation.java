package DataBase;

/**
 * Narelation entity. @author MyEclipse Persistence Tools
 */

public class Narelation implements java.io.Serializable {

	// Fields

	private String id;
	private Node node;
	private Attachment attachment;

	// Constructors

	/** default constructor */
	public Narelation() {
	}

	/** full constructor */
	public Narelation(String id, Node node, Attachment attachment) {
		this.id = id;
		this.node = node;
		this.attachment = attachment;
	}

	// Property accessors

	public String getId() {
		return this.id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public Node getNode() {
		return this.node;
	}

	public void setNode(Node node) {
		this.node = node;
	}

	public Attachment getAttachment() {
		return this.attachment;
	}

	public void setAttachment(Attachment attachment) {
		this.attachment = attachment;
	}

}