package me.shinsunyoung.shoppingmall.controller;

import me.shinsunyoung.shoppingmall.model.Item;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import java.util.List;

import static org.junit.Assert.assertEquals;

@RunWith(SpringRunner.class)
@SpringBootTest
public class ItemControllerTest {

    @Autowired
    private ItemController itemController;

    @Test
    public void 조회_하기() {

        //when : 메소드를 실행했을 때
        List<Item> find = itemController.findItems();


        //then : 결과 확인
        assertEquals(2, find.size() );

    }
}