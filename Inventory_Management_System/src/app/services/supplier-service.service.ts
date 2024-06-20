import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ISuppliers } from '../interfaces/suppliers.interface';

@Injectable({
  providedIn: 'root'
})
export class SupplierServiceService {

  private localStorageKey:string = "suppliers"

  private suppliersSubject = new BehaviorSubject<ISuppliers[]>(this.getData());
  suppliers$ =this.suppliersSubject.asObservable();

  constructor() { }

  getData():ISuppliers[]{
    const data = localStorage.getItem(this.localStorageKey);
    return data ? JSON.parse(data) : [];
  }

  addData(supplier :ISuppliers):void{
    const suppliers = this.getData();

    const index = suppliers.findIndex((sup:ISuppliers)=>sup.S_Id === supplier.S_Id);

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

    const updatedSuppliers = suppliers.filter((sup:ISuppliers)=>sup.S_Id !==S_Id);
    localStorage.setItem(this.localStorageKey,JSON.stringify(updatedSuppliers));

    this.suppliersSubject.next(updatedSuppliers);//notification to subscribers of uodated data

  }
}
