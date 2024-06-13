import { Component } from '@angular/core';
import { ColDef, GridOptions } from 'ag-grid-community'; // Import GridOptions for master-detail setup

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent {

  rowData: any;
  gridOptions: GridOptions;
  colDefs: ColDef[];

  constructor() {
    this.gridOptions = <GridOptions>{};
    this.colDefs = [
      { headerName: 'First Name', field: 'firstName', editable: true, filter: true },
      { headerName: 'Last Name', field: 'lastName' },
      { headerName: 'Date of Birth', field: 'dob' },
      { headerName: 'Email', field: 'email' },
      { headerName: 'Gender', field: 'gender' },
      { headerName: 'Interest', field: 'interest' },
      {
        headerName: 'Addresses',
        field: 'addresses',
        cellRenderer: 'agGroupCellRenderer', // Use agGroupCellRenderer for master-detail rows
        cellRendererParams: {
          suppressCount: true, // Optional: hide the count of child rows
          innerRenderer: this.innerRenderer.bind(this) // Use innerRenderer for custom content
        }
      }
    ];

    this.gridOptions.defaultColDef = {
      flex: 1,
      resizable: true,
      filter: true,
      sortable: true,
      minWidth: 100,
    };

    const savedData = localStorage.getItem("formDataArray");
    this.rowData = savedData ? JSON.parse(savedData) : [];
  }

  innerRenderer(params: any) {
    if (params.node && params.node.data && params.node.data.addresses) {
      const addresses = params.node.data.addresses;
      return addresses.map((addr: any) => {
        return `${addr.street}, ${addr.city}, ${addr.state}, ${addr.pincode}`;
      }).join('<br>');
    } else {
      return '';
    }
  }
}
