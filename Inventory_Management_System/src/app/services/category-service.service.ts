import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class categoryService {
  private localStorageKey = 'categories';


  private categoriesSubject = new BehaviorSubject<any[]>(this.getData());
  categories$ = this.categoriesSubject.asObservable();
  

  constructor() {}

  getData(): any[] {
    const data = localStorage.getItem(this.localStorageKey);
    return data ? JSON.parse(data) : [];
  }

  addData(category: any): void {
    const categories = this.getData();
    const index = categories.findIndex((cat: any) => cat.C_Id === category.C_Id);

    if (index !== -1) {
      categories[index] = category; 
    } else {
      categories.push(category); 
    }

    localStorage.setItem(this.localStorageKey, JSON.stringify(categories));
    this.categoriesSubject.next(categories); // notify subscribers of the updated data
  }

  deleteData(C_Id: number): void {
    const categories = this.getData();
    const updatedCategories = categories.filter((cat: any) => cat.C_Id !== C_Id);
    localStorage.setItem(this.localStorageKey, JSON.stringify(updatedCategories));
    this.categoriesSubject.next(updatedCategories); // notify subscribers of the updated data
  }
}
