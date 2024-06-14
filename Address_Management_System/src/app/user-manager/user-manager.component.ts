import { Component, EventEmitter, Input, OnInit, Output, OnChanges, SimpleChanges } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-manager',
  templateUrl: './user-manager.component.html',
  styleUrls: ['./user-manager.component.scss']
})

export class UserManagerComponent implements OnInit, OnChanges {
  
  form!: FormGroup;

  @Input() user: any | null = null;
  @Output() userDataEvent = new EventEmitter<any>(); 
  @Output() operationMsg = new EventEmitter<any>();

  constructor(private fb: FormBuilder) {
    this.initForm(); 
  }

  ngOnInit(): void {

  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['user'] && changes['user'].currentValue) {
      this.form.patchValue(this.user);
      this.setAddresses(this.user.addresses);
    }
  }

  initForm() {
    this.form = this.fb.group({
      userId: ['', Validators.required],
      userName: ['', Validators.required],
      email: ['', Validators.email],
      addresses: this.fb.array([this.createAddress()])
    });
  }
  createAddress(): FormGroup {
    return this.fb.group({
      street: ['',Validators.required],
      city: ['',Validators.required],
      state: ['',Validators.required],
      zip: ['',Validators.required]
    });
  }

  setAddresses(addresses: any[]) 
  {

    const addressFg = addresses.map(address => this.fb.group(address));
    const addressArray = this.fb.array(addressFg);
    this.form.setControl('addresses', addressArray);

  }

  addAddress() {
    this.operationMsg.emit("add address button clicked")
    this.addresses.push(this.createAddress());
  }

  get addresses(): FormArray {
    return this.form.get('addresses') as FormArray;
  }

  deleteAddress(index: number) {
    this.operationMsg.emit("delete Address button clicked")
    this.addresses.removeAt(index);
  }

  onSubmit() {

    if(this.user){
      this.operationMsg.emit("User Info updated");
    }
    const formData = this.form.value;
    console.log('form  submitted:', formData);
    this.userDataEvent.emit(formData);
    this.form.reset();
  }
}
