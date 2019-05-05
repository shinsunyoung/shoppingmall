package me.shinsunyoung.shoppingmall.model;


import lombok.Data;

@Data
public class SignUpRequest {

    public String email;
    public String name;
    public String password;

}
