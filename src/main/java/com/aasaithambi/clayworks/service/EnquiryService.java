package com.aasaithambi.clayworks.service;

import com.aasaithambi.clayworks.dto.EnquiryRequest;
import com.aasaithambi.clayworks.entity.Enquiry;
import com.aasaithambi.clayworks.repository.EnquiryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class EnquiryService {

    @Autowired
    private EnquiryRepository enquiryRepository;

    public Enquiry submit(EnquiryRequest req) {
        Enquiry enquiry = new Enquiry();
        enquiry.setName(req.getName());
        enquiry.setPhone(req.getPhone());
        enquiry.setEmail(req.getEmail());
        enquiry.setIdolSize(req.getIdolSize());
        enquiry.setQuantity(req.getQuantity() != null ? req.getQuantity() : 1);
        enquiry.setMessage(req.getMessage());
        return enquiryRepository.save(enquiry);
    }
}
