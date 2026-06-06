package com.aasaithambi.clayworks.entity;

import jakarta.persistence.*;
import lombok.Data;
import java.math.BigDecimal;
import java.time.LocalDateTime;

@Entity
@Table(name = "products")
@Data
public class Product {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "category_id", nullable = false)
    private Category category;

    @Column(nullable = false, length = 200)
    private String name;

    @Column(nullable = false, unique = true, length = 220)
    private String slug;

    @Column(columnDefinition = "TEXT")
    private String description;

    @Column(name = "size_feet", nullable = false, precision = 4, scale = 1)
    private BigDecimal sizeFeet;

    @Column(name = "size_label", nullable = false, length = 30)
    private String sizeLabel;

    @Column(nullable = false, precision = 12, scale = 2)
    private BigDecimal price;

    @Column(name = "old_price", precision = 12, scale = 2)
    private BigDecimal oldPrice;

    @Column(name = "stock_qty")
    private Integer stockQty = 10;

    @Column(name = "is_eco")
    private Boolean isEco = false;

    @Column(name = "is_active")
    private Boolean isActive = true;

    @Column(length = 50)
    private String badge;

    @Column(name = "badge_label", length = 80)
    private String badgeLabel;

    @Column(precision = 3, scale = 1)
    private BigDecimal rating = BigDecimal.valueOf(5.0);

    @Column(name = "review_count")
    private Integer reviewCount = 0;

    @Column(name = "finish_type", length = 100)
    private String finishType;

    @Column(name = "pose_type", length = 100)
    private String poseType;

    @Column(name = "lead_time_days")
    private Integer leadTimeDays = 15;

    @Column(name = "weight_kg", precision = 8, scale = 2)
    private BigDecimal weightKg;

    @Column(name = "img_url", length = 500)
    private String imgUrl;

    @Column(name = "img_fallback", length = 500)
    private String imgFallback;

    @Column(name = "created_at")
    private LocalDateTime createdAt = LocalDateTime.now();

    @Column(name = "updated_at")
    private LocalDateTime updatedAt = LocalDateTime.now();

    @PreUpdate
    public void preUpdate() {
        this.updatedAt = LocalDateTime.now();
    }
}