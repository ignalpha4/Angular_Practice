import { Component } from '@angular/core';
import { ProductServiceService } from '../../services/product-service.service';
import { IProducts } from 'src/app/interfaces/products.interface';
import { ColDef, ColGroupDef } from 'ag-grid-community';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],

})
export class ProductListComponent {
  //array of products
  products:IProducts[] = [];
  selectedProduct!: IProducts ;

  constructor(private productService:ProductServiceService){};

  //column definition for grid/table
  ColDef: (ColDef | ColGroupDef)[] = [
    { headerName: 'ID', field: 'P_Id', maxWidth: 90 },
    { headerName: 'Name', field: 'P_Name' },
    { headerName: 'Category', field: 'P_Category' },
    { headerName: 'Quantity', field: 'P_Quantity' },
    { headerName: 'Price', field: 'P_Price' },
    { headerName: 'Supplier', field: 'P_Supplier' },
    {
      headerName: 'Actions',
      field: 'actions',
      cellRenderer: () => {
        return `
        <button type="button" class="btn btn-sm btn-success" data-action-type="edit">Edit</button>
        <button type="button" class="btn btn-sm btn-danger" data-action-type="delete">Delete</button>
      `;
      },
      onCellClicked: (params: any) => {
        if (params.event.target.dataset.actionType === 'edit') {
          this.editProduct(params.data.P_Id);
        }

        if (params.event.target.dataset.actionType === 'delete') {
          this.deleteProduct(params.data.P_Id);
        }
      },
    },
  ];

  ngOnInit():void{
    this.productService.products$.subscribe(products=>{
      this.products = products;
    })
  }

  deleteProduct = (Id: number):void => {
    this.productService.deleteData(Id);
  };


  editProduct = (Id: number) :void=> {
    
    const foundProduct = this.products.find((pro)=>pro.P_Id===Id)

    if(foundProduct){
      this.selectedProduct = foundProduct;
      console.log(this.selectedProduct);
    }else{
      console.log(`No product found with Id${Id}`);
    }
  };

 
}
