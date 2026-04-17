import { Component, OnInit } from '@angular/core';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent implements OnInit {

  orders: any[] = [];
  loading = true;

  constructor(private service: OrderService) {}

  ngOnInit(): void {
    this.loadOrders();
  }

  loadOrders() {
    const token = localStorage.getItem('token');

    if (!token) {
      this.loading = false;
      return;
    }

    const payload = JSON.parse(atob(token.split('.')[1]));
    const userId =
      payload['http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier'] ||
      payload['nameid'] ||
      payload['sub'];

    this.service.getAllOrders().subscribe({
      next: (res: any) => {
        const allOrders = res.data || res;

        console.log('ALL ORDERS:', allOrders);
        console.log('CURRENT USER ID:', userId);

        this.orders = allOrders.filter((o: any) => Number(o.userId) === Number(userId));

        console.log('FILTERED ORDERS:', this.orders);

        this.loading = false;
      },
      error: (err) => {
        console.error('ORDER LOAD ERROR:', err);
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

  getTotalQty(order: any) {
    return order.items?.reduce((sum: number, i: any) => sum + i.quantity, 0) || 0;
  }
}