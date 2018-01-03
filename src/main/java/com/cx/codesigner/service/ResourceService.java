package com.cx.codesigner.service;

import com.cx.codesigner.dao.ResourceClassMapper;
import com.cx.codesigner.model.ResourceClass;
import com.cx.codesigner.model.ResourceClassExample;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.List;

/**
 * 资源服务类
 */
@Component
public class ResourceService {
    @Autowired
    private ResourceClassMapper resourceClassDAO;

    public List<ResourceClass> getAll(){
        ResourceClassExample example = new ResourceClassExample();
        //只显示计算机
        example.createCriteria().andSubjectidEqualTo(1);
        List<ResourceClass> list = resourceClassDAO.selectByExample(example);
        for(ResourceClass resource:list){
            resource.setImg("upload/"+resource.getCode()+"/"+resource.getImg());
        }
        return list;
    }

    /**
     * 根据状态获取资源列表
     * 左边、中间和右边
     * @param status
     * @return
     */
    public List<ResourceClass> getAllByStatus(String status,Integer subjectID){
        ResourceClassExample example = new ResourceClassExample();
        example.createCriteria().andDes2EqualTo(status).andSubjectidEqualTo(subjectID);
        List<ResourceClass> list =  resourceClassDAO.selectByExample(example);
        for(ResourceClass resource:list){
            resource.setImg("upload/"+resource.getCode()+"/"+resource.getImg());
        }
        return list;
    }

    /**
     * 根据classid和subjectid获取资源
     * @param classID
     * @param subjectID
     * @return
     */
    public List<ResourceClass> getAllByClassId(Integer classID,Integer subjectID){
        ResourceClassExample example = new ResourceClassExample();
        example.createCriteria().andClassidEqualTo(classID).andSubjectidEqualTo(subjectID);
        List<ResourceClass> list =  resourceClassDAO.selectByExample(example);
        for(ResourceClass resource:list){
            resource.setImg("upload/"+resource.getCode()+"/"+resource.getImg());
        }
        return list;
    }

    /**
     * 根据id获取资源详细
     * @param id
     * @return
     */
    public ResourceClass getResourceByID(Integer id){
        return resourceClassDAO.selectByPrimaryKey(id);
    }
}
