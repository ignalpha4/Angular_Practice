import { Component, EventEmitter, Output } from '@angular/core';
import { CategoryServiceService } from 'src/app/services/category-service.service';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.scss']
})
export class CategoryListComponent {

    categories :any[]=[];

    @Output() selectedCat = new EventEmitter<any>();

    constructor(private categoryService:CategoryServiceService){}


    ngOnInit(){
      this.categoryService.category$.subscribe((categories)=>{
        this.categories=categories;
      })
    }

    colDef:any[]=[
      {headerName:'Category ID',field:"id",minWidth:100},
      {headerName:'Category Name',field:'name',minWidth:350},
      {
        headerName:'Actions',
        field:'action',
        cellRenderer:(params:any)=>{
          return `
            <button class="btn btn-success btn-sm" data-action-type="edit">Edit</button>
            <button class="btn btn-danger btn-sm mx-3" data-action-type="delete">Delete</button>
          `
        },
        onCellClicked:(params:any)=>{
          if(params.event.target.dataset.actionType==="edit"){
              this.editCategory(params.data.id);
          }
          if(params.event.target.dataset.actionType==='delete'){
            this.deleteCategory(params.data.id)
          }
        }

      }
    ]

    editCategory(id:number){
      const cat = this.categories.find((cat)=>cat.id===id);
      this.selectedCat.emit(cat);
    } 
    deleteCategory(id:number){
        this.categoryService.deleteData(id);
    }

}
