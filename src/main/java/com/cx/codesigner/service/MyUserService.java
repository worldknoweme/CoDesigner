package com.cx.codesigner.service;

import com.cx.codesigner.dao.MyUserMapper;
import com.cx.codesigner.model.MyUser;
import com.cx.codesigner.model.MyUserExample;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public class MyUserService {
    @Autowired
    private MyUserMapper myUserMapper;

    /**
     * 根据用户名获取用户详细信息，获取不到则返回null
     * @param name
     * @return
     */
    public MyUser getMyUserByName(String name){
        MyUserExample example = new MyUserExample();
        example.createCriteria().andNameEqualTo(name);
        List<MyUser> userList = myUserMapper.selectByExample(example);
        if(userList.size()>0){
            return  userList.get(0);
        }else{
            return null;
        }
    }
}
