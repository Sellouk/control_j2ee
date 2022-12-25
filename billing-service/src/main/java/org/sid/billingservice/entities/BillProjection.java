package org.sid.billingservice.entities;


import org.sid.billingservice.enums.BillStatus;
import org.springframework.data.rest.core.config.Projection;

import java.util.Date;

@Projection(name="fullOrder",types=Bill.class)
public interface BillProjection {
    Long getId();
    Date getBillingDate();
    BillStatus getBillStatus();
    Long getCustomerId();




}
