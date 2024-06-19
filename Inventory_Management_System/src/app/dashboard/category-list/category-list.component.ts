import { Component, OnInit } from '@angular/core';
import { categoryService } from '../../services/category-service.service';


@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})

export class CategoryListComponent implements OnInit {
  categories: any[] = [];
  selectedCat: any;

  constructor(private categoryService:categoryService) {}

  colDefs: any[] = [
    { headerName: 'Category ID', field: 'C_Id', minWidth: 500 },
    { headerName: 'Category Name', field: 'C_Name', minWidth: 600 },
    {
      headerName: 'Action',
      field: 'action',
      cellRenderer: (params: any) => {
        return `
          <button type="button" class="btn btn-sm btn-success" data-action-type="edit">Edit</button>
          <button type="button" class="btn btn-sm btn-danger" data-action-type="delete">Delete</button>
        `;
      },
      onCellClicked: (params: any) => {
        if (params.event.target.dataset.actionType === 'edit') {
          this.editCategory(params.data.C_Id);
        }
        if (params.event.target.dataset.actionType === 'delete') {
          this.deleteCategory(params.data.C_Id);
        }
      }
    }
  ];

  ngOnInit(): void {
    this.categoryService.categories$.subscribe(categories => {
      this.categories = categories;
    });

  }

  deleteCategory(Id: number): void {
    this.categoryService.deleteData(Id);
  }

  editCategory(Id: number): void {
    this.selectedCat = this.categories.find((cat) => cat.C_Id === Id);
  }

}
