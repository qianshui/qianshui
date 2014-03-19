package DataBase;

/**
 * Sprelation entity. @author MyEclipse Persistence Tools
 */

public class Sprelation implements java.io.Serializable {

	// Fields

	private String id;
	private Subject subject;
	private Policy policy;

	// Constructors

	/** default constructor */
	public Sprelation() {
	}

	/** minimal constructor */
	public Sprelation(String id) {
		this.id = id;
	}

	/** full constructor */
	public Sprelation(String id, Subject subject, Policy policy) {
		this.id = id;
		this.subject = subject;
		this.policy = policy;
	}

	// Property accessors

	public String getId() {
		return this.id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public Subject getSubject() {
		return this.subject;
	}

	public void setSubject(Subject subject) {
		this.subject = subject;
	}

	public Policy getPolicy() {
		return this.policy;
	}

	public void setPolicy(Policy policy) {
		this.policy = policy;
	}

}