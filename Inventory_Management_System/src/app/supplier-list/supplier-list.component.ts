import { Component } from '@angular/core';
import { MyServiceService } from '../my-service.service';

@Component({
  selector: 'app-supplier-list',
  templateUrl: './supplier-list.component.html',
  styleUrls: ['./supplier-list.component.css']
})
export class SupplierListComponent {



  suppliers = [
    {
      S_Id:1,
      S_Name:"ABC Supplier",
      S_Contact:"9090909000",
      S_Address:"XYZ Street XYZ Place"
    }
  ]




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

  deleteSupplier(Id:number){

    const index =  this.suppliers.findIndex((supplier)=>supplier.S_Id===Id);

    if(index!=-1){
      this.suppliers.splice(index,1);
      this.refreshGrid();
    }

  }

  selectedSupplier :any;


  editSupplier=(Id:number)=>{
    this.selectedSupplier = this.suppliers.find((supp)=>supp.S_Id === Id);
    console.log(this.selectedSupplier)
  }
  
  receiveSuppData(formData:any){

    if(this.selectedSupplier){

      const index = this.suppliers.findIndex((supp)=>supp.S_Id===this.selectedSupplier.S_Id);

      if(index!=-1){
        console.log("inside");
        
        this.suppliers[index] =formData;
        this.selectedSupplier=null;
      }
    }else{
      const newSupp = {
        S_Id:formData.S_Id,
        S_Name:formData.S_Name,
        S_Contact:formData.S_Contact,
        S_Address:formData.S_Address
      }
  
      this.suppliers.push(newSupp);
    
  
    }
    this.refreshGrid();
  }




  refreshGrid(){
    this.suppliers=[...this.suppliers];
  }
  
} 
