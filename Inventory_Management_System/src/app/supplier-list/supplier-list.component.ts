import { Component } from '@angular/core';
import { SupplierServiceService } from '../supplier-service.service';


@Component({
  selector: 'app-supplier-list',
  templateUrl: './supplier-list.component.html',
  styleUrls: ['./supplier-list.component.css']
})
export class SupplierListComponent {


  suppliers: any[] = [];
  selectedSupplier :any;

  constructor(private supplierService:SupplierServiceService){

  }

  colDefs : any[] = [
    {headerName:"Supplier ID: ",field:"S_Id"},
    {headerName:"Supplier Name :",field:"S_Name"},
    {headerName:"Supplier Contact: ",field:"S_Contact"},
    {headerName:"Supplier Address",field:"S_Address"},
    {
      headerName:"Action",
      field:"action",
      cellRenderer:(params:any)=>{
        return `
          <button type="button" class="btn btn-success btn-sm" data-action-type="edit">Edit</button>
          <button type="button" class="btn btn-danger btn-sm" data-action-type="delete">Delete</button>
        `
      },
      onCellClicked:(params:any)=>{
        if(params.event.target.dataset.actionType==="edit"){
          this.editSupplier(params.data.S_Id);
        }
        if(params.event.target.dataset.actionType==="delete"){
          this.deleteSupplier(params.data.S_Id);
        }
      }
    }
  ]

  ngOnInit():void{
    this.supplierService.suppliers$.subscribe(suppliers=>{
      this.suppliers = suppliers;
    })
  }

  deleteSupplier(Id:number){
    this.supplierService.deleteData(Id);
  }

  editSupplier=(Id:number)=>{
    this.selectedSupplier = this.suppliers.find((sup)=>sup.S_Id===Id);
  }
  
  
} 
