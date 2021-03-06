package com.cx.codesigner.dao;

import com.cx.codesigner.model.ClassType;
import com.cx.codesigner.model.ClassTypeExample;
import java.util.List;
import org.apache.ibatis.annotations.Param;

public interface ClassTypeMapper {
    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table class
     *
     * @mbggenerated
     */
    int countByExample(ClassTypeExample example);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table class
     *
     * @mbggenerated
     */
    int deleteByExample(ClassTypeExample example);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table class
     *
     * @mbggenerated
     */
    int deleteByPrimaryKey(Integer id);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table class
     *
     * @mbggenerated
     */
    int insert(ClassType record);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table class
     *
     * @mbggenerated
     */
    int insertSelective(ClassType record);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table class
     *
     * @mbggenerated
     */
    List<ClassType> selectByExample(ClassTypeExample example);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table class
     *
     * @mbggenerated
     */
    ClassType selectByPrimaryKey(Integer id);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table class
     *
     * @mbggenerated
     */
    int updateByExampleSelective(@Param("record") ClassType record, @Param("example") ClassTypeExample example);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table class
     *
     * @mbggenerated
     */
    int updateByExample(@Param("record") ClassType record, @Param("example") ClassTypeExample example);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table class
     *
     * @mbggenerated
     */
    int updateByPrimaryKeySelective(ClassType record);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table class
     *
     * @mbggenerated
     */
    int updateByPrimaryKey(ClassType record);
}