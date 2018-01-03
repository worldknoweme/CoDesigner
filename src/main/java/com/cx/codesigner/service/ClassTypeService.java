package com.cx.codesigner.service;

import com.cx.codesigner.dao.ClassTypeMapper;
import com.cx.codesigner.model.ClassType;
import com.cx.codesigner.model.ClassTypeExample;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public class ClassTypeService {
    @Autowired
    private ClassTypeMapper classTypeDAO;

    public List<ClassType> getAll(int subjectID){
        ClassTypeExample example = new ClassTypeExample();
        example.createCriteria().andSubjectidEqualTo(subjectID);
        return classTypeDAO.selectByExample(example);
    }

    /**
     * 根据classid获取classname
     * @param classID
     * @return
     */
    public String getClassName(Integer classID){
        ClassType classType = classTypeDAO.selectByPrimaryKey(classID);
        if(classType!=null){
            return classType.getClassname();
        }else {
            return "全部";
        }
    }
}
