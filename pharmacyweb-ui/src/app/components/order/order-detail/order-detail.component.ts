import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OrderService } from 'src/app/services/order.service';
@Component({
  selector: 'app-order-detail',
  templateUrl: './order-detail.component.html',
  styleUrls: ['./order-detail.component.css']
})
export class OrderDetailComponent implements OnInit {

  order: any;
  loading = true;

  constructor(
    private route: ActivatedRoute,
    private service: OrderService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];

    this.service.getAllOrders().subscribe({
      next: (res) => {
        this.order = res.find((o: any) => o.id == id);
        this.loading = false;
      },
      error: () => {
        this.loading = false;
      }
    });
  }

  getStatusClass(status: any) {
    const s = String(status).toLowerCase();

    if (s.includes('pending')) return 'pending';
    if (s.includes('approved')) return 'approved';
    if (s.includes('completed')) return 'completed';
    if (s.includes('rejected')) return 'rejected';

    return '';
  }

  getTotalQty() {
    return this.order?.items?.reduce((sum: number, i: any) => sum + i.quantity, 0) || 0;
  }
}