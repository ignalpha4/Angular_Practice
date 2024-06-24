import { Component, EventEmitter, Output } from '@angular/core';
import { filter } from 'rxjs';
import { ICategory } from 'src/app/core/interfaces/category.interface';
import { CategoryServiceService } from 'src/app/core/services/category-service.service';
import { ColDef, ColGroupDef } from 'ag-grid-community';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.scss']
})
export class CategoryListComponent {

    categories :ICategory[]=[];

    @Output() selectedCat = new EventEmitter<any>();

    constructor(private categoryService:CategoryServiceService){}


    ngOnInit(){
      this.categoryService.category$.subscribe((categories)=>{
        this.categories=categories;
      })
    }

    colDef:(ColDef |ColGroupDef)[]=[
      {headerName:'Category ID',field:"id",minWidth:100,filter:true},
      {headerName:'Category Name',field:'name',minWidth:350,filter:true},
      {
        headerName:'Actions',
        field:'action',
        cellRenderer:()=>{
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
