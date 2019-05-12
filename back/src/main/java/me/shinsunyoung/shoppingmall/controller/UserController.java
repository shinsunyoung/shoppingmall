package me.shinsunyoung.shoppingmall.controller;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class UserController {
    @PostMapping("user/signup")
    public String signUp(){
        return "들어왔습니당 뇸뇸";
    }
}
