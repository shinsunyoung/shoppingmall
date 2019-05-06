package me.shinsunyoung.shoppingmall.model;


import lombok.Data;
import org.springframework.data.annotation.Id;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;

@Data
@Entity
public class Item {
    @Id
    @GeneratedValue
    private Long id;

    @Column
    private String name;

    @Column
    private Integer price;

    @Column
    private Long sellerId;

    @Column
    private String status;

    @Column
    private Integer categoryId;


}
