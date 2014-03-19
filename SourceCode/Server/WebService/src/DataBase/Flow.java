package DataBase;

import java.util.Date;


/**
 * Flow entity. @author MyEclipse Persistence Tools
 */

public class Flow  implements java.io.Serializable {


    // Fields    

     private String id;
     private Subject subject;
     private String title;
     private String description;
     private Date addTime;
     private String submitter;
     private String type;


    // Constructors

    /** default constructor */
    public Flow() {
    }

	/** minimal constructor */
    public Flow(String id) {
        this.id = id;
    }
    
    /** full constructor */
    public Flow(String id, Subject subject, String title, String description, Date addTime, String submitter, String type) {
        this.id = id;
        this.subject = subject;
        this.title = title;
        this.description = description;
        this.addTime = addTime;
        this.submitter = submitter;
        this.type = type;
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
   








}