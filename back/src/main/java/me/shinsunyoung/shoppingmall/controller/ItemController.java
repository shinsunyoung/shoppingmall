package me.shinsunyoung.shoppingmall.controller;

import me.shinsunyoung.shoppingmall.model.Item;
import me.shinsunyoung.shoppingmall.service.ItemService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class ItemController {

    @Autowired
    private ItemService itemService;

    @GetMapping("/item")
    public List<Item> findItems(){
       return itemService.findItems();

    }

    @GetMapping("/item/detail")
    public Item getItemDetail(@RequestParam Long id){
        return itemService.getItemByid(id);
    }
}
