package com.aasaithambi.clayworks.controller;

import com.aasaithambi.clayworks.dto.EnquiryRequest;
import com.aasaithambi.clayworks.entity.Enquiry;
import com.aasaithambi.clayworks.service.EnquiryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/enquiries")
@CrossOrigin(origins = "http://localhost:3000")
public class EnquiryController {

    @Autowired
    private EnquiryService enquiryService;

    @PostMapping
    public ResponseEntity<Enquiry> submit(@RequestBody EnquiryRequest request) {
        Enquiry enquiry = enquiryService.submit(request);
        return ResponseEntity.ok(enquiry);
    }
}
