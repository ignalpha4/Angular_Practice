import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IProducts } from '../interfaces/products.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

  private localStorageKey ="products"

  private productsSubject = new BehaviorSubject<IProducts[]>(this.getData());
  products$=this.productsSubject.asObservable();

  constructor() { }

  getData():IProducts[]{
    const data = localStorage.getItem(this.localStorageKey);
    return data ? JSON.parse(data):[];
  }

  addData(product:IProducts):void{
    const products =this.getData();

    const index = products.findIndex((prod:IProducts)=>prod.P_Id ===product.P_Id)

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

      const updatedProducts = products.filter((pro:IProducts)=>pro.P_Id!==P_Id);

      localStorage.setItem(this.localStorageKey,JSON.stringify(updatedProducts));

      this.productsSubject.next(updatedProducts);
  }
}
