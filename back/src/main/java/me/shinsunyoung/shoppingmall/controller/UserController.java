package me.shinsunyoung.shoppingmall.controller;


import me.shinsunyoung.shoppingmall.model.SignUpRequest;
import me.shinsunyoung.shoppingmall.model.User;
import me.shinsunyoung.shoppingmall.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
public class UserController {
    @Autowired
    private UserService userService;

    @PostMapping("/user/signup")
    public boolean signUp(@RequestBody SignUpRequest command){

        User user = new User();

        user.setEmail(command.getEmail());
        user.setName(command.getName());
        user.setPassword(command.getPassword());

        userService.createUser(user);

        return true;
    }

    @GetMapping("/user")
    public User getUserByEmail(@RequestParam String email){
        return userService.findUser(email);
    }
}
