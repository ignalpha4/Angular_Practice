import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ICategories } from '../interfaces/categories.interface';

@Injectable({
  providedIn: 'root'
})

export class categoryService {

  private localStorageKey :string= 'categories';


  private categoriesSubject = new BehaviorSubject<ICategories[]>(this.getData());
  categories$ = this.categoriesSubject.asObservable();
  

  constructor() {}

  getData(): ICategories[] {
    const data = localStorage.getItem(this.localStorageKey);
    return data ? JSON.parse(data) : [];
  }

  addData(category: ICategories): void {
    const categories = this.getData();
    const index = categories.findIndex((cat: ICategories) => cat.C_Id === category.C_Id);

    if (index !== -1) {
      categories[index] = category; 
    } else {
      categories.push(category); 
    }

    localStorage.setItem(this.localStorageKey, JSON.stringify(categories));
    this.categoriesSubject.next(categories); 
  }

  deleteData(C_Id: number): void {
    const categories = this.getData();
    const updatedCategories = categories.filter((cat: ICategories) => cat.C_Id !== C_Id);
    localStorage.setItem(this.localStorageKey, JSON.stringify(updatedCategories));
    this.categoriesSubject.next(updatedCategories);
  }
}
