package com.aasaithambi.clayworks.dto;

import lombok.Data;
import java.util.List;

@Data
public class OrderRequest {

    private String customerName;
    private String customerEmail;
    private String customerPhone;
    private String deliveryAddress;
    private String city;
    private String state;
    private String pincode;
    private String paymentMethod;
    private String specialNotes;
    private List<OrderItemRequest> items;

    @Data
    public static class OrderItemRequest {
        private Long productId;
        private Integer quantity;
    }
}
