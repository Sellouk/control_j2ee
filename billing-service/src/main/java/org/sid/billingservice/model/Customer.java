package org.sid.billingservice.model;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
public class Customer {
    private Long id;
    private String name;
    private String email;
}
