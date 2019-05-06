package me.shinsunyoung.shoppingmall.model;


import lombok.Data;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

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
