package me.shinsunyoung.shoppingmall.repository;

import me.shinsunyoung.shoppingmall.model.Item;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ItemRepository extends JpaRepository<Item, Long> {
}
