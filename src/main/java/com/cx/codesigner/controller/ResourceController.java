package com.cx.codesigner.controller;

import com.cx.codesigner.model.ResourceClass;
import com.cx.codesigner.model.Subject;
import com.cx.codesigner.service.ClassTypeService;
import com.cx.codesigner.service.ResourceService;
import com.cx.codesigner.service.SubjectService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

import javax.servlet.http.HttpServletRequest;
import java.io.UnsupportedEncodingException;
import java.util.ArrayList;
import java.util.List;

@Controller
public class ResourceController {
    @Autowired
    private SubjectService subjectService;
    @Autowired
    private ResourceService resourceService;
    @Autowired
    private ClassTypeService classTypeService;
    @RequestMapping("/resource")
    public String resource(Model model, HttpServletRequest request){
        //获取学科列表，用于公共资源的显示
        List<Subject> subjects = subjectService.getAll();

        model.addAttribute("subjectlist",subjects);
        //查询详细的资源信息
        String resourceID = request.getParameter("id");
        ResourceClass rc = resourceService.getResourceByID(Integer.parseInt(resourceID));
        rc.setImg("upload/"+rc.getCode()+"/"+rc.getImg());
        String des3 = rc.getDes3();
        if(!des3.equals("")){
            List<String> imgList = new ArrayList<String>();
            String[] imgArr = des3.split(";");
            for(String img:imgArr){
                imgList.add("upload/"+rc.getCode()+"/"+img);
            }
            rc.setDetailImageList(imgList);
        }

        try {
            rc.setDetailDescription(new String(rc.getDes1(),"gbk"));
        } catch (UnsupportedEncodingException e) {
            e.printStackTrace();
        }

        model.addAttribute("resource",rc);
        return "detail";
    }

    @RequestMapping("/video")
    public String showVideo(Model model, HttpServletRequest request){
        //获取学科列表，用于公共资源的显示
        List<Subject> subjects = subjectService.getAll();

        model.addAttribute("subjectlist",subjects);
        //查询详细的资源信息
        String resourceID = request.getParameter("id");
        ResourceClass rc = resourceService.getResourceByID(Integer.parseInt(resourceID));
        rc.setImg("upload/"+rc.getCode()+"/"+rc.getImg());
        rc.setVideourl("upload/"+rc.getCode()+"/video/"+rc.getCode()+".mp4");
        model.addAttribute("resource",rc);
        return "video";
    }

    @RequestMapping("/testDownload")
    public String testDownload(Model model, HttpServletRequest request){
        String resourceID = request.getParameter("id");
        ResourceClass rc = resourceService.getResourceByID(Integer.parseInt(resourceID));
        rc.setImg("upload/"+rc.getCode()+"/"+rc.getImg());
        rc.setVideourl("upload/"+rc.getCode()+"/video/"+rc.getCode()+".mp4");
        model.addAttribute("resource",rc);
        return "download";

    }

    @RequestMapping("/alllist")
    public String allList(Model model, HttpServletRequest request){
        List<ResourceClass> resourceClassesList = new ArrayList<ResourceClass>();
        String title = "";
        //获取classid
        String classid = request.getParameter("classid");
        if(classid!=null && !classid.equals("")){
            title = classTypeService.getClassName(Integer.parseInt(classid));
            resourceClassesList = resourceService.getAllByClassId(Integer.parseInt(classid),1);
        }else{
            title = "全部";
            resourceClassesList = resourceService.getAll();
        }
        model.addAttribute("title",title);
        model.addAttribute("list",resourceClassesList);
        return "alllist";
    }
}
