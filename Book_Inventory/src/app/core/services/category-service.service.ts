import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ICategory } from '../interfaces/category.interface';

@Injectable({
  providedIn: 'root'
})
export class CategoryServiceService {

  constructor() { }

  categorySubject = new BehaviorSubject(this.getData());
  category$ = this.categorySubject.asObservable();


  getData(){
      const data =localStorage.getItem('categories');
      return data ? JSON.parse(data) : [];
  }

  addData(categoryData:ICategory){

    const categories = this.getData();

    const index = categories.findIndex((cat:ICategory)=>cat.id ===categoryData.id);

    if(index!==-1){
      categories[index]=categoryData;
    }else{
      categories.push(categoryData)
    }

    localStorage.setItem("categories",JSON.stringify(categories));
    this.categorySubject.next(categories);
  }


  deleteData(id:number){

    const categories =  this.getData();

    const updatedCategories = categories.filter((cat:ICategory)=>cat.id !== id);

    localStorage.setItem('categories',JSON.stringify(updatedCategories));

    this.categorySubject.next(updatedCategories);
  }

}
