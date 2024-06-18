import { Component } from '@angular/core';
import { ProductServiceService } from '../../product-service.service';

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
          this.editUser(params.data.P_Id);
        }

        if (params.event.target.dataset.actionType === 'delete') {
          this.deleteUser(params.data.P_Id);
        }
      },
    },
  ];

  ngOnInit():void{
    this.productService.products$.subscribe(products=>{
      this.products = products;
    })
  }

  deleteUser = (id: any) => {
    //find the index first
    const index = this.products.findIndex((product) => product.P_Id === id);

    this.products.splice(index, 1);
    this.refreshGrid();
  };


  editUser = (id: number) => {
    console.log('edit btn clicked');
    this.selectedProduct = this.products.find((product) => product.P_Id === id);
    console.log(this.selectedProduct);
  };

  receiveData = (formData: any) => {
    if (this.selectedProduct) {
      const index = this.products.findIndex(
        (product) => product.P_Id === this.selectedProduct.P_Id
      );

      if (index != -1) {
        this.products[index] = formData;
        this.selectedProduct=null;
      }
    } else {
      const newProduct = {
        P_Id: formData.P_Id,
        P_Name: formData.P_Name,
        P_Category: formData.P_Category,
        P_Price: formData.P_Price,
        P_Quantity: formData.P_Quantity,
        P_Supplier: formData.P_Supplier,
      };

      this.products.push(newProduct);
    }
    this.refreshGrid();
  };

  refreshGrid() {
    this.products = [...this.products];
  }
  
}
