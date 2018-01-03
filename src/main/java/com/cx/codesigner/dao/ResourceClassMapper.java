package com.cx.codesigner.dao;

import com.cx.codesigner.model.ResourceClass;
import com.cx.codesigner.model.ResourceClassExample;
import java.util.List;
import org.apache.ibatis.annotations.Param;

public interface ResourceClassMapper {
    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table resource
     *
     * @mbggenerated
     */
    int countByExample(ResourceClassExample example);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table resource
     *
     * @mbggenerated
     */
    int deleteByExample(ResourceClassExample example);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table resource
     *
     * @mbggenerated
     */
    int deleteByPrimaryKey(Integer id);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table resource
     *
     * @mbggenerated
     */
    int insert(ResourceClass record);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table resource
     *
     * @mbggenerated
     */
    int insertSelective(ResourceClass record);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table resource
     *
     * @mbggenerated
     */
    List<ResourceClass> selectByExampleWithBLOBs(ResourceClassExample example);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table resource
     *
     * @mbggenerated
     */
    List<ResourceClass> selectByExample(ResourceClassExample example);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table resource
     *
     * @mbggenerated
     */
    ResourceClass selectByPrimaryKey(Integer id);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table resource
     *
     * @mbggenerated
     */
    int updateByExampleSelective(@Param("record") ResourceClass record, @Param("example") ResourceClassExample example);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table resource
     *
     * @mbggenerated
     */
    int updateByExampleWithBLOBs(@Param("record") ResourceClass record, @Param("example") ResourceClassExample example);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table resource
     *
     * @mbggenerated
     */
    int updateByExample(@Param("record") ResourceClass record, @Param("example") ResourceClassExample example);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table resource
     *
     * @mbggenerated
     */
    int updateByPrimaryKeySelective(ResourceClass record);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table resource
     *
     * @mbggenerated
     */
    int updateByPrimaryKeyWithBLOBs(ResourceClass record);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table resource
     *
     * @mbggenerated
     */
    int updateByPrimaryKey(ResourceClass record);
}