package me.shinsunyoung.shoppingmall.controller;

import me.shinsunyoung.shoppingmall.model.SignUpRequest;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import static org.junit.Assert.assertTrue;

@RunWith(SpringRunner.class)
@SpringBootTest
public class UserControllerTest {

    @Autowired
    private UserController userController;

    @Test
    public void 테이블에_잘_들어갔나(){
        // given = 값넣기
        SignUpRequest a = new SignUpRequest();

        // when = 저장하기
        a.setName("신선영");
        a.setPassword("1234");
        a.setEmail("ssy3181@naver.com");

        //then
        assertTrue(userController.signUp(a));
    }
}