import { Component, OnInit } from '@angular/core';
import { Validators,FormGroup,FormBuilder} from '@angular/forms';
import { Router } from '@angular/router';
import { FormArray } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})

export class FormComponent implements OnInit {
  
      form!: FormGroup;


      //A CONSTRUCTOR to initialize values
      constructor(private fb: FormBuilder,private router:Router) {}
      
      //form initilization
      ngOnInit(): void {
      this.form = this.fb.group({
        firstName:['',[Validators.required,Validators.maxLength(10)]],
        lastName:['',Validators.required],
        dob:['',Validators.required],
        email:['',Validators.email],
        gender:['',Validators.required],
        interest: ['', Validators.required],
        addresses:this.fb.array([this.createAddress()])
        })
      }

      createAddress():FormGroup{
        return this.fb.group({
          street:[''],
          city:[''],
          state:[''],
          pincode:['',Validators.minLength(6)]
        })
      }

      addAddress() {
        this.addresses.push(this.createAddress());
      }



      get addresses(): FormArray {
        return this.form.get('addresses') as FormArray;
      }

      deleteAddress(index: number) {
        this.addresses.removeAt(index);
      }



      onSubmit() {
    

        const formData = this.form.value;

        const dataArrayString = localStorage.getItem('formDataArray');

        const dataArray = dataArrayString ? JSON.parse(dataArrayString) : [];

        dataArray.push(formData);
        
        localStorage.setItem('formDataArray', JSON.stringify(dataArray));
        
        console.log(this.form.value);
        
        this.router.navigate(['/table']);
      
  
      }
}
