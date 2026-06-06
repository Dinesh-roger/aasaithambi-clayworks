package com.aasaithambi.clayworks.service;

import com.aasaithambi.clayworks.entity.Product;
import com.aasaithambi.clayworks.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.Optional;

@Service
public class ProductService {

    @Autowired
    private ProductRepository productRepository;

    public List<Product> getAllActive() {
        return productRepository.findByIsActiveTrue();
    }

    public List<Product> getByCategory(Long categoryId) {
        return productRepository.findByCategoryIdAndIsActiveTrue(categoryId);
    }

    public Optional<Product> getBySlug(String slug) {
        return productRepository.findBySlug(slug);
    }

    public Optional<Product> getById(Long id) {
        return productRepository.findById(id);
    }

    public List<Product> getEcoProducts() {
        return productRepository.findByIsActiveTrueAndIsEcoTrue();
    }

    public List<Product> searchByName(String name) {
        return productRepository.findByNameContainingIgnoreCaseAndIsActiveTrue(name);
    }
}
