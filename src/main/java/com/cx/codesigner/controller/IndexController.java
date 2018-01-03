package com.cx.codesigner.controller;

import com.cx.codesigner.model.ClassType;
import com.cx.codesigner.model.SearchType;
import com.cx.codesigner.model.Subject;
import com.cx.codesigner.service.ClassTypeService;
import com.cx.codesigner.service.ResourceService;
import com.cx.codesigner.service.SearchTypeService;
import com.cx.codesigner.service.SubjectService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

import java.util.List;

@Controller
public class IndexController {
    @Autowired
    private SearchTypeService searchTypeService;
    @Autowired
    private SubjectService subjectService;

    @RequestMapping("/")
    public String gotoIndex(Model model){
        List<SearchType> list = searchTypeService.getAll();
        List<Subject> subjects = subjectService.getAll();
        model.addAttribute("searchTypeList",list);
        model.addAttribute("subjectlist",subjects);
        return "index";
    }
}
