import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/auth/login/login.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { MedicineListComponent } from './components/medicine/medicine-list/medicine-list.component';
import { MedicineDetailComponent } from './components/medicine/medicine-detail/medicine-detail.component';
import { CategoryListComponent } from './components/category/category-list/category-list.component';
import { UploadComponent } from './components/prescription/upload/upload.component';
import { CartComponent } from './components/cart/cart.component';
import { OrderListComponent } from './components/order/order-list/order-list.component';
import { OrderDetailComponent } from './components/order/order-detail/order-detail.component';
import { DashboardComponent } from './components/admin/dashboard/dashboard.component';
import { MedicinesComponent } from './components/admin/medicines/medicines.component';
import { InventoryComponent } from './components/admin/inventory/inventory.component';
import { OrdersComponent } from './components/admin/orders/orders.component';
import { LoyaltyComponent } from './components/admin/loyalty/loyalty.component';
import { HealthPackagesComponent } from './components/admin/health-packages/health-packages.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { MedicineCardComponent } from './components/shared/medicine-card/medicine-card.component';
import { LoaderComponent } from './components/shared/loader/loader.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    MedicineListComponent,
    MedicineDetailComponent,
    CategoryListComponent,
    UploadComponent,
    CartComponent,
    OrderListComponent,
    OrderDetailComponent,
    DashboardComponent,
    MedicinesComponent,
    InventoryComponent,
    OrdersComponent,
    LoyaltyComponent,
    HealthPackagesComponent,
    NavbarComponent,
    FooterComponent,
    MedicineCardComponent,
    LoaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
