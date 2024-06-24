import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

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

  addData(categoryData:any){

    const categories = this.getData();

    const index = categories.findIndex((cat:any)=>cat.id ===categoryData.id);

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

    const updatedCategories = categories.filter((cat:any)=>cat.id !== id);

    localStorage.setItem('categories',JSON.stringify(updatedCategories));

    this.categorySubject.next(updatedCategories);
  }

}
