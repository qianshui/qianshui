package DataBase;

/**
 * Slrelation entity. @author MyEclipse Persistence Tools
 */

public class Slrelation implements java.io.Serializable {

	// Fields

	private String id;
	private Laws laws;
	private Subject subject;

	// Constructors

	/** default constructor */
	public Slrelation() {
	}

	/** full constructor */
	public Slrelation(String id, Laws laws, Subject subject) {
		this.id = id;
		this.laws = laws;
		this.subject = subject;
	}

	// Property accessors

	public String getId() {
		return this.id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public Laws getLaws() {
		return this.laws;
	}

	public void setLaws(Laws laws) {
		this.laws = laws;
	}

	public Subject getSubject() {
		return this.subject;
	}

	public void setSubject(Subject subject) {
		this.subject = subject;
	}

}