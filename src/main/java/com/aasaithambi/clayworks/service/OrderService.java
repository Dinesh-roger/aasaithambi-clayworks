package com.aasaithambi.clayworks.service;

import com.aasaithambi.clayworks.dto.OrderRequest;
import com.aasaithambi.clayworks.entity.Order;
import com.aasaithambi.clayworks.entity.OrderItem;
import com.aasaithambi.clayworks.entity.Product;
import com.aasaithambi.clayworks.repository.OrderRepository;
import com.aasaithambi.clayworks.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.math.BigDecimal;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class OrderService {

    @Autowired
    private OrderRepository orderRepository;

    @Autowired
    private ProductRepository productRepository;

    public Order placeOrder(OrderRequest req) {

        Order order = new Order();

        // Generate order number like AT-20240605-0001
        String orderNumber = "AT-"
            + LocalDateTime.now().format(DateTimeFormatter.ofPattern("yyyyMMdd"))
            + "-" + String.format("%04d", orderRepository.count() + 1);
        order.setOrderNumber(orderNumber);

        order.setCustomerName(req.getCustomerName());
        order.setCustomerEmail(req.getCustomerEmail());
        order.setCustomerPhone(req.getCustomerPhone());
        order.setDeliveryAddress(req.getDeliveryAddress());
        order.setCity(req.getCity());
        order.setState(req.getState());
        order.setPincode(req.getPincode());
        order.setPaymentMethod(req.getPaymentMethod());
        order.setSpecialNotes(req.getSpecialNotes());

        // Build order items
        List<OrderItem> items = new ArrayList<>();
        BigDecimal total = BigDecimal.ZERO;

        for (OrderRequest.OrderItemRequest itemReq : req.getItems()) {
            Product product = productRepository.findById(itemReq.getProductId())
                .orElseThrow(() -> new RuntimeException(
                    "Product not found: " + itemReq.getProductId()
                ));

            OrderItem item = new OrderItem();
            item.setOrder(order);
            item.setProduct(product);
            item.setProductName(product.getName());
            item.setSizeLabel(product.getSizeLabel());
            item.setUnitPrice(product.getPrice());
            item.setQuantity(itemReq.getQuantity());
            item.setSubtotal(
                product.getPrice().multiply(BigDecimal.valueOf(itemReq.getQuantity()))
            );
            items.add(item);
            total = total.add(item.getSubtotal());
        }

        // Free delivery above ₹5000
        BigDecimal deliveryCharge = total.compareTo(BigDecimal.valueOf(5000)) >= 0
            ? BigDecimal.ZERO
            : BigDecimal.valueOf(500);

        order.setItems(items);
        order.setTotalAmount(total);
        order.setDeliveryCharge(deliveryCharge);
        order.setDiscountAmount(BigDecimal.ZERO);
        order.setGrandTotal(total.add(deliveryCharge));

        return orderRepository.save(order);
    }

    public Optional<Order> getByOrderNumber(String orderNumber) {
        return orderRepository.findByOrderNumber(orderNumber);
    }

    public List<Order> getByEmail(String email) {
        return orderRepository.findByCustomerEmail(email);
    }
}
