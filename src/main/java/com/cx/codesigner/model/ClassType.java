package com.cx.codesigner.model;

public class ClassType {
    /**
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column class.id
     *
     * @mbggenerated
     */
    private Integer id;

    /**
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column class.classcode
     *
     * @mbggenerated
     */
    private String classcode;

    /**
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column class.classname
     *
     * @mbggenerated
     */
    private String classname;

    /**
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column class.subjectid
     *
     * @mbggenerated
     */
    private Integer subjectid;

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column class.id
     *
     * @return the value of class.id
     *
     * @mbggenerated
     */
    public Integer getId() {
        return id;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column class.id
     *
     * @param id the value for class.id
     *
     * @mbggenerated
     */
    public void setId(Integer id) {
        this.id = id;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column class.classcode
     *
     * @return the value of class.classcode
     *
     * @mbggenerated
     */
    public String getClasscode() {
        return classcode;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column class.classcode
     *
     * @param classcode the value for class.classcode
     *
     * @mbggenerated
     */
    public void setClasscode(String classcode) {
        this.classcode = classcode == null ? null : classcode.trim();
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column class.classname
     *
     * @return the value of class.classname
     *
     * @mbggenerated
     */
    public String getClassname() {
        return classname;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column class.classname
     *
     * @param classname the value for class.classname
     *
     * @mbggenerated
     */
    public void setClassname(String classname) {
        this.classname = classname == null ? null : classname.trim();
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column class.subjectid
     *
     * @return the value of class.subjectid
     *
     * @mbggenerated
     */
    public Integer getSubjectid() {
        return subjectid;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column class.subjectid
     *
     * @param subjectid the value for class.subjectid
     *
     * @mbggenerated
     */
    public void setSubjectid(Integer subjectid) {
        this.subjectid = subjectid;
    }
}