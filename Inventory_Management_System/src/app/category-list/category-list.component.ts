import { Component } from '@angular/core';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent {

  categories = [
    {
      C_Id:1,
      C_Name:"Fruits"
    }
  ] 

  colDefs:any[] =[
    {headerName:'Category ID',field:"C_Id",minWidth:500},
    {headerName:'Category Name',field:"C_Name",minWidth:600},
    {headerName:"Action",
      field:"action",
      cellRenderer :(params:any)=>{
        return `
          <button type="button" class="btn btn-sm btn-success" data-action-type="edit">Edit</button>
          <button type="button" class="btn btn-sm btn-danger" data-action-type="delete">Delete</button>
        `
      },
      onCellClicked:(params:any)=>{
        if(params.event.target.dataset.actionType==="edit"){
          this.editCategory(params.data.C_Id);
        }
        if(params.event.target.dataset.actionType==="delete"){
          this.deleteCategory(params.data.C_Id)
        }
      }
    }
  ];

  
  deleteCategory(Id:number){
    const index = this.categories.findIndex((cat)=>cat.C_Id === Id);

    if(index!=-1){
      this.categories.splice(index,1);
      this.refreshGrid()
    }
  } 
  selectedCat :any;
  editCategory(Id:number){
    this.selectedCat = this.categories.find((cat)=>cat.C_Id===Id);
  } 

  receiveCatData(formData:any){

    if(this.selectedCat){

      const index = this.categories.findIndex((cat)=>cat.C_Id===this.selectedCat.C_Id);

      if(index!=-1){
        this.categories[index]=formData;
        this.selectedCat=null;
      }

    }else{

      const newCategory={
        C_Id:formData.C_Id,
        C_Name:formData.C_Name
      }
      this.categories.push(newCategory);
    }


    this.refreshGrid()
  }

  refreshGrid(){
    this.categories =[...this.categories];
  }

}
