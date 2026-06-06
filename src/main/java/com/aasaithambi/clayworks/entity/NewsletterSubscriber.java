package com.aasaithambi.clayworks.entity;

import jakarta.persistence.*;
import lombok.Data;
import java.time.LocalDateTime;

@Entity
@Table(name = "newsletter_subscribers")
@Data
public class NewsletterSubscriber {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false, unique = true, length = 200)
    private String email;

    @Column(name = "is_active")
    private Boolean isActive = true;

    @Column(name = "subscribed_at")
    private LocalDateTime subscribedAt = LocalDateTime.now();
}