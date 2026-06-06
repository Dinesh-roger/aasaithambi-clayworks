package com.aasaithambi.clayworks.controller;

import com.aasaithambi.clayworks.entity.NewsletterSubscriber;
import com.aasaithambi.clayworks.repository.NewsletterRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.Map;

@RestController
@RequestMapping("/api/newsletter")
@CrossOrigin(origins = "*")
public class NewsletterController {

    @Autowired
    private NewsletterRepository newsletterRepository;

    @PostMapping("/subscribe")
    public ResponseEntity<?> subscribe(@RequestBody Map<String, String> body) {
        String email = body.get("email");

        if (email == null || email.isBlank()) {
            return ResponseEntity.badRequest()
                .body(Map.of("message", "Email is required"));
        }

        if (newsletterRepository.existsByEmail(email)) {
            return ResponseEntity.ok()
                .body(Map.of("message", "Already subscribed!"));
        }

        NewsletterSubscriber subscriber = new NewsletterSubscriber();
        subscriber.setEmail(email);
        newsletterRepository.save(subscriber);

        return ResponseEntity.ok()
            .body(Map.of("message", "Subscribed successfully!"));
    }
}