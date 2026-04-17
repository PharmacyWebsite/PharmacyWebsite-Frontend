import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiUrl = `${environment.apiUrl}/user`;

  constructor(private http: HttpClient) {}

  // 🔹 Get current logged user (if backend supports)
  getCurrentUser() {
    return this.http.get<User>(`${this.apiUrl}/me`);
  }

  // 🔹 Get all users (admin use)
  getAllUsers() {
    return this.http.get<User[]>(this.apiUrl);
  }

  // 🔹 Get user by ID
  getUserById(id: number) {
    return this.http.get<User>(`${this.apiUrl}/${id}`);
  }

  // 🔹 Update user
  updateUser(id: number, data: any) {
    return this.http.put(`${this.apiUrl}/${id}`, data);
  }

  // 🔹 Delete user (admin)
  deleteUser(id: number) {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}