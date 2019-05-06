package me.shinsunyoung.shoppingmall.service;

import me.shinsunyoung.shoppingmall.model.User;
import me.shinsunyoung.shoppingmall.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserServiceImp implements UserService {

    @Autowired
    private UserRepository userRepository;

    @Override
    public User createUser(User user) {
        return userRepository.save(user);
    }

    @Override
    public User findUser(String email) {
        List<User> all = userRepository.findAll();
        for (User user: all) {
            if(user.getEmail().equals(email)){
                return user;
            }
        }
        return null;
    }
}
