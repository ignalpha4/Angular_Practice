import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})


export class AppComponent {
  users = [
    {
      userId: 1,
      userName: 'Shubham Bankar',
      email: 'shubham@gmail.com',
      addresses: [
        {
          street: 'xyz road xyz area',
          city: 'Pune',
          state: 'Maharashtra',
          zip: 404466,
        },
        {
          street:'Station Road',
          city:'Ahmedabad',
          state:'Gujarat',
          zip:456781
        }
      ],
    },
  ];

  columnDefs: any[] = [
    { headerName: 'User ID', field: 'userId' ,maxWidth: 100},
    { headerName: 'Username', field: 'userName' },
    { headerName: 'Email', field: 'email' },
    {
      headerName: 'Addresses',
      field: 'addresses',
      cellRenderer: (params: any) => {
        return params.data.addresses
          .map((address: { street: any; city: any; state: any; zip: any }) => {
            return `${address.street}, ${address.city}, ${address.state}, ${address.zip}`;
          })
          .join('<br>');
      },
      autoHeight: true,
      minWidth: 400,
    },
    {
      headerName: 'Actions',
      field: 'actions',
      cellRenderer: (params: any) => {

        return `
                <button class="btn btn-sm btn-primary" data-action-type="edit">Edit</button>
                <button class="mx-3 btn btn-danger btn-sm" data-action-type="delete">Delete</button>
                
        `;
      },
      onCellClicked: (params: any) => {
        if (params.event.target.dataset.actionType === 'edit') {
          this.editUser(params.data.userId);
        }
        if(params.event.target.dataset.actionType==='delete'){
          this.deleteUser(params.data.userId);
        }

      },
    },
  ];

  defaultColDef = {
    sortable: true,
    filter: true,
    resizable: true,
  };

  selectedUser: any = null;

  receiveUserData(formData: any) {
    if (this.selectedUser) {
      const index = this.users.findIndex(
        (user) => user.userId === this.selectedUser.userId
      );

      if (index !== -1) {
        this.users[index] = formData;
      }
    } else {
      const newUser = {
        userId: formData.userId,
        userName: formData.userName,
        email: formData.email,
        addresses: formData.addresses,
      };
      this.users.push(newUser);
    }
    this.refreshGrid();
    this.selectedUser = null;
  }

  receiveUserMsg(msg: any) {
    console.log(msg);
  }

  refreshGrid() {
    this.users = [...this.users];
  }

  editUser(userId: number) {
    this.selectedUser = this.users.find((user) => user.userId === userId);
  }

 
  //deleting the user form the array
  deleteUser(userId:number){
    console.log("inside delete user")
    const index =this.users.findIndex((user)=>user.userId===userId)
    console.log(index);

    if(index!==-1){
      this.users.splice(index,1);
      this.refreshGrid();
    }
  }

}
