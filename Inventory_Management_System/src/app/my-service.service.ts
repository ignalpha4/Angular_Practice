import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CategoryListComponent } from './category-list/category-list.component';

@Injectable({
  providedIn: 'root'
})
export class MyServiceService {

  data_of_cat=[
    {
      C_Id:1,
      C_Name:"sample cat"
    }
];

  getData() {
  console.log("Get Data Service",this.data_of_cat);
    return this.data_of_cat;
  }

  addData(newData:any){
    console.log("data added",this.data_of_cat)
    this.data_of_cat.push({ C_Id:2,
      C_Name:"sample cat1"})
    this.data_of_cat.push(newData);
  }

}
