package com.cx.codesigner.controller;

import com.cx.codesigner.model.MyUser;
import com.cx.codesigner.service.MyUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class LoginController {
    @Autowired
    private MyUserService myUserService;
    @RequestMapping("goToLogin")
    public String goToLogin(Model model){
        return "login";
    }

    @RequestMapping("login")
    public String login(Model model,MyUser myUsers){
        MyUser myUser = myUserService.getMyUserByName(myUsers.getName());
        if(myUser==null){//用户不存在
            model.addAttribute("error","该用户不存在");
            return "login";
        }
        return "index";
    }
}
