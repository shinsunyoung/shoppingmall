package me.shinsunyoung.shoppingmall.controller;


import me.shinsunyoung.shoppingmall.model.SignUpRequest;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class UserController {

    @PostMapping("/user/signup")
    public boolean signUp(@RequestBody SignUpRequest command){

        return true;
    }
}
