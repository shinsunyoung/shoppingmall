package me.shinsunyoung.shoppingmall.service;

import me.shinsunyoung.shoppingmall.model.Item;
import me.shinsunyoung.shoppingmall.repository.ItemRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class ItemService {

    @Autowired
    ItemRepository itemRepository;

    public List<Item> findItems(){
        List<Item> all = itemRepository.findAll();
        List<Item> select = new ArrayList<>();
        for (Item item : all) {
            if(item.getStatus().equals("ON")){
                select.add(item);
            }
        }
        return select;
    }

}
