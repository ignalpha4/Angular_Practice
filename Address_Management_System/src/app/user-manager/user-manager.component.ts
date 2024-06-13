import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-manager',
  templateUrl: './user-manager.component.html',
  styleUrls: ['./user-manager.component.scss']
})
export class UserManagerComponent implements OnInit {

  form!: FormGroup;
  userData: string | null | undefined;

  @Output() userDataEvent = new EventEmitter<any>(); 

  @Output()  operationMsg = new EventEmitter<any>();

  @Input() users: any[] = []; 

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      userId: ['', Validators.required],
      userName: ['', Validators.required],
      email: ['', Validators.email],
      addresses: this.fb.array([this.createAddress()])
    });
  }

  createAddress(): FormGroup {
    return this.fb.group({
      street: [''],
      city: [''],
      state: [''],
      zip: ['']
    });
  }

  addAddress() {
    this.operationMsg.emit("Add adress button clicked")
    this.addresses.push(this.createAddress());
  }

  get addresses(): FormArray {
    return this.form.get('addresses') as FormArray;
  }

  deleteAddress(index: number) {
    this.operationMsg.emit("Delete Address button clicked")
    this.addresses.removeAt(index);
  }

  onSubmit() {
    const formData = this.form.value;
    console.log('Form submitted:', formData);

    //sending new user to parent array 
    this.userDataEvent.emit(formData);

    this.form.reset();
  }
}
