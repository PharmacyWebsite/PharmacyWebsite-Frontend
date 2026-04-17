import { Component, OnInit } from '@angular/core';
import { InventoryService } from '../../../services/inventory.service';
import { MedicineService } from '../../../services/medicine.service';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css']
})
export class InventoryComponent implements OnInit {

  inventory: any[] = [];

  constructor(
    private inventoryService: InventoryService,
    private medicineService: MedicineService
  ) {}

  ngOnInit(): void {
    this.loadInventory();
  }

  loadInventory() {

    this.medicineService.getAllMedicines().subscribe((meds: any[]) => {

      this.inventory = [];

      meds.forEach(med => {

        this.inventoryService.getByMedicineId(med.id).subscribe((res: any) => {

          const item = res.data || res;

          this.inventory.push({
            id: med.id,
            medicine: med,
            stock: item.stock,
            newStock: item.stock
          });

        });

      });

    });
  }

  updateStock(item: any) {
    this.inventoryService.updateInventory(item.id, item.newStock)
      .subscribe(() => {
        this.loadInventory();
      });
  }
}