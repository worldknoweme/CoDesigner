package com.cx.codesigner.service;

import com.cx.codesigner.dao.SearchTypeMapper;
import com.cx.codesigner.model.SearchType;
import com.cx.codesigner.model.SearchTypeExample;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.List;
@Component
public class SearchTypeService {
    @Autowired
    private SearchTypeMapper searchTypeDAO;

    /**
     * 获取搜索类型的数量
     * @return
     */
    public int getListCount(){
        SearchTypeExample example = new SearchTypeExample();
        int count = searchTypeDAO.selectByExample(example).size();
        return count;
    }

    /**
     * 获取所有的搜索类型
     * @return
     */
    public List<SearchType> getAll(){
        SearchTypeExample example = new SearchTypeExample();
        return searchTypeDAO.selectByExample(example);
    }

}
