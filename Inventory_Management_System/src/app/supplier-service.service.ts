import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SupplierServiceService {

  private localStorageKey = "suppliers"

  private suppliersSubject = new BehaviorSubject<any[]>(this.getData());
  suppliers$ =this.suppliersSubject.asObservable();

  constructor() { }

  getData():any[]{
    const data = localStorage.getItem(this.localStorageKey);
    return data ? JSON.parse(data) : [];
  }

  addData(supplier :any):void{
    const suppliers = this.getData();

    const index = suppliers.findIndex((sup:any)=>sup.S_Id === supplier.S_Id);

    if(index!==-1){
      suppliers[index]=supplier;
    }else{
      suppliers.push(supplier);
    }

    localStorage.setItem(this.localStorageKey,JSON.stringify(suppliers));
    this.suppliersSubject.next(suppliers); //notification about the updated data to subscribers

  }

  deleteData(S_Id:number):void{
    const suppliers = this.getData();

    const updatedSuppliers = suppliers.filter((sup:any)=>sup.S_Id !==S_Id);
    localStorage.setItem(this.localStorageKey,JSON.stringify(updatedSuppliers));

    this.suppliersSubject.next(updatedSuppliers);//notification to subscribers of uodated data

  }
}
