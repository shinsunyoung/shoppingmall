package me.shinsunyoung.shoppingmall.controller;

import me.shinsunyoung.shoppingmall.model.Item;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import java.util.List;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertNull;

@RunWith(SpringRunner.class)
@SpringBootTest
public class ItemControllerTest {

    @Autowired
    private ItemController itemController;

    @Test
    public void 모든_아이템_조회_하기() {

        //when : 메소드를 실행했을 때
        List<Item> find = itemController.findItems();


        //then : 결과 확인
        assertEquals(2, find.size() );

    }

    @Test
    public void 특정_아이템_가져오기(){

        // when
        Item item = itemController.getItemDetail(1L);

        // then
        assertEquals("아메리카노",item.getName());

    }

    @Test
    public void 특정_아이템_가져오기_없는_경우_NULL_반환(){

        // when
        Item item = itemController.getItemDetail(50000L);

        // then
        assertNull(item);


    }

}