package com.cx.codesigner.service;

import com.cx.codesigner.dao.SubjectMapper;
import com.cx.codesigner.model.ClassType;
import com.cx.codesigner.model.ResourceClass;
import com.cx.codesigner.model.Subject;
import com.cx.codesigner.model.SubjectExample;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public class SubjectService {

    @Autowired
    private SubjectMapper subjectDAO;

    @Autowired
    private ClassTypeService classTypeService;
    @Autowired
    private ResourceService resourceService;
    /**
     * 这里还需要查询到此学科类型关联的分类
     * 以及该学科类型首页关联的三种类型的hot资源
     * @return
     */
    public List<Subject> getAll(){
        SubjectExample example = new SubjectExample();
        //该网站改版成
       // example.createCriteria().andIdEqualTo(1);
        List<Subject> list =  subjectDAO.selectByExample(example);
        for(Subject sub:list){
            List<ClassType> classTypeList = classTypeService.getAll(sub.getId());
            sub.setClassTypeList(classTypeList);
            List<ResourceClass> leftResource = resourceService.getAllByStatus("0",sub.getId());
            List<ResourceClass> centerResource = resourceService.getAllByStatus("1",sub.getId());
            List<ResourceClass> rightResource = resourceService.getAllByStatus("2",sub.getId());
            sub.setLeftResource(leftResource);
            sub.setCenterResource(centerResource);
            sub.setRightResource(rightResource);

        }
        return list;
    }
}
