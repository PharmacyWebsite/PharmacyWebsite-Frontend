import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/services/category.service';
import { MedicineService } from 'src/app/services/medicine.service';

@Component({
  selector: 'app-medicine-list',
  templateUrl: './medicine-list.component.html',
  styleUrls: ['./medicine-list.component.css']
})
export class MedicineListComponent implements OnInit {

  medicines: any[] = [];
  allMedicines: any[] = [];
  categories: any[] = [];

  searchText: string = '';
  selectedCategory: string = '';

  constructor(
    private medicineService: MedicineService,
    private categoryService: CategoryService
  ) {}

  ngOnInit(): void {
    this.loadMedicines();
    this.loadCategories();
  }

  loadMedicines() {
    this.medicineService.getAllMedicines().subscribe((res: any) => {
      this.allMedicines = res.data || res;
      this.medicines = this.allMedicines;
    });
  }

  loadCategories() {
    this.categoryService.getAllCategories().subscribe((res: any) => {
      this.categories = res.data || res;
    });
  }

  // 🔍 SEARCH
  filterMedicines() {
    this.medicines = this.allMedicines.filter(m =>
      m.name.toLowerCase().includes(this.searchText.toLowerCase()) &&
      (this.selectedCategory === '' || m.category?.name === this.selectedCategory)
    );
  }

  // 🧠 CATEGORY FILTER
  selectCategory(name: string) {
    this.selectedCategory = name;
    this.filterMedicines();
  }

  clearFilter() {
    this.selectedCategory = '';
    this.searchText = '';
    this.medicines = this.allMedicines;
  }
}