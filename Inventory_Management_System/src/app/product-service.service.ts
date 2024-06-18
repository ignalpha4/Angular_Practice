import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

  private localStorageKey ="products"

  private productsSubject = new BehaviorSubject<any[]>(this.getData());
  products$=this.productsSubject.asObservable();

  constructor() { }

  getData():any[]{
    const data = localStorage.getItem(this.localStorageKey);
    return data ? JSON.parse(data):[];
  }

  addData(product:any):void{
    const products =this.getData();

    const index = products.findIndex((prod:any)=>prod.P_Id ===product.P_Id)

    if(index!==-1){
      products[index] =product;
    }else{
      products.push(product);
    }

    localStorage.setItem(this.localStorageKey,JSON.stringify(products));
    this.productsSubject.next(products);
  }

  deleteData(P_Id:number):void{
      const products = this.getData();

      const updatedProducts = products.filter((pro:any)=>pro.P_Id!==P_Id);

      localStorage.setItem(this.localStorageKey,JSON.stringify(updatedProducts));

      this.productsSubject.next(updatedProducts);

  }


}
