package me.shinsunyoung.shoppingmall.controller;

import me.shinsunyoung.shoppingmall.model.Item;
import me.shinsunyoung.shoppingmall.service.ItemService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@RestController
public class ItemController {

    @Autowired
    private ItemService itemService;

    @GetMapping("/item")
    public List<Item> findItems(){
//       return itemService.findItems();


        List<Item> result = new ArrayList<>();
        Item item1 = new Item();

        item1.setId(1l);
        item1.setName("아이스티");
        item1.setPrice(2000);
        item1.setSellerId(2l);
        item1.setCategoryId(1);
        item1.setStatus("ON");

        result.add(item1);

        Item item2 = new Item();

        item2.setId(2l);
        item2.setName("아메리카노");
        item2.setPrice(1500);
        item2.setSellerId(2l);
        item2.setCategoryId(1);
        item2.setStatus("ON");

        result.add(item2);

        return result;
    }


}
