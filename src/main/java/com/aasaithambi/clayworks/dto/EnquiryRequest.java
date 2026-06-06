package com.aasaithambi.clayworks.dto;

import lombok.Data;

@Data
public class EnquiryRequest {

    private String name;
    private String phone;
    private String email;
    private String idolSize;
    private Integer quantity;
    private String message;
}