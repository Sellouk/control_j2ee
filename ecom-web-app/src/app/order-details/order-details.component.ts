import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.css']
})
export class OrderDetailsComponent implements OnInit {

  orderDetails :any;
  billId!:number;
  constructor(private http:HttpClient, private router: Router, private route:ActivatedRoute) {
    this.billId=route.snapshot.params['billId'];
  }

  ngOnInit(): void {

    this.http.get("http://localhost:8888/BILLING-SERVICE/fullBill/"+this.billId)
      .subscribe({
        next : (data)=>{
          this.orderDetails=data;

        },
        error : (err)=>{}
      });
  }

  getOrderDetails(o: any) {
    this.router.navigateByUrl("/order-details/"+o.id);
  }
}
