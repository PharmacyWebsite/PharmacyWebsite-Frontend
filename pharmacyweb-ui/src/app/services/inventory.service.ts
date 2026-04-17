import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({ providedIn: 'root' })
export class InventoryService {

  private apiUrl = `${environment.apiUrl}/inventory`;

  constructor(private http: HttpClient) {}

  getByMedicineId(id: number) {
    return this.http.get(`${this.apiUrl}/${id}`);
  }
getAll() {
    return this.http.get<any[]>(this.apiUrl);
  }

  updateInventory(id: number, quantity: number) {
    return this.http.put(`${this.apiUrl}/${id}?quantity=${quantity}`, {});
  }
}