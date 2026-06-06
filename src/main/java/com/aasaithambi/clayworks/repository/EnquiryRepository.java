package com.aasaithambi.clayworks.repository;

import com.aasaithambi.clayworks.entity.Enquiry;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.util.List;

@Repository
public interface EnquiryRepository extends JpaRepository<Enquiry, Long> {
    List<Enquiry> findByStatus(Enquiry.EnquiryStatus status);
}