import { Component } from '@angular/core';
import { AgGridAngular } from 'ag-grid-angular';


interface ValueGetterParams {
  data: {
    addresses: {
      street: string;
      city: string;
      state: string;
      zip: string;
    }[];
  };
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent {
  users = [
    {
      userId: 1,
      userName: 'Shubham Bankar',
      email: 'shubham@gmail.com',
      addresses: [
        { street: 'xyz road xyz area', city: 'some city ', state: 'Maharashtra', zip: '404466' }
      ]
    }
  ];

  columnDefs: any[] = [
    { headerName: 'User ID', field: 'userId' },
    { headerName: 'Username', field: 'userName'  },
    { headerName: 'Email', field: 'email' },
    {
      headerName: 'Addresses',
      field: 'addresses',
      cellRenderer: (params: any) => {
        return params.data.addresses.map((address: { street: any; city: any; state: any; zip: any; }) => {
          return `${address.street}, ${address.city}, ${address.state}, ${address.zip}`;
        }).join('<br>');
      },
      autoHeight: true,
      minWidth: 500 
    }
    
  ];

  defaultColDef = {
    sortable: true,
    filter: true,
    resizable: true
  };

  receiveUserData(formData: any) {
    console.log('Received form data in parent:', formData);

    const newUser = {
      userId: formData.userId,
      userName: formData.userName,
      email: formData.email,
      addresses: formData.addresses
    };

    this.users.push(newUser);
    this.refreshGrid();
  }


  receiveUserMsg(msg:any){
    console.log(msg);
  }
  refreshGrid() {
    this.users = [...this.users]; 
  }
}
