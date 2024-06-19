import { Component } from '@angular/core';
import { ProductServiceService } from '../../services/product-service.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent {
  //array of products
  products:any[] = [];
  selectedProduct: any;

  constructor(private productService:ProductServiceService){};

  //column definition for grid/table
  ColDef: any[] = [
    { headerName: 'ID', field: 'P_Id', maxWidth: 90 },
    { headerName: 'Name', field: 'P_Name' },
    { headerName: 'Category', field: 'P_Category' },
    { headerName: 'Quantity', field: 'P_Quantity' },
    { headerName: 'Price', field: 'P_Price' },
    { headerName: 'Supplier', field: 'P_Supplier' },
    {
      headerName: 'Actions',
      field: 'actions',
      cellRenderer: (param: any) => {
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

  deleteProduct = (Id: any) => {
    this.productService.deleteData(Id);
  };


  editProduct = (Id: number) => {
    this.selectedProduct = this.products.find((pro)=>pro.P_Id===Id);
  };

 
}
