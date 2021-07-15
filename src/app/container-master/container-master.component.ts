import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, Validators, FormArray, FormControl } from '@angular/forms';


@Component({
  selector: 'app-container-master',
  templateUrl: './container-master.component.html',
  styleUrls: ['./container-master.component.scss']
})
export class ContainerMasterComponent implements OnInit {

  name = 'Angular';
  
  productForm: FormGroup;
   
  ngOnInit() {
  	
  }
  constructor(private fb:FormBuilder) {
   
    this.productForm = this.fb.group({
      name: '',
      quantities: this.fb.array([]) ,
    });
  }
  
  quantities() : FormArray {
    return this.productForm.get("quantities") as FormArray
  }
   
  newQuantity(): FormGroup {
    return this.fb.group({
      containerno: '',
      containertype: '',
      assetsapcode: '',
      size: '',
      unit: '',
      rate: '',
      formdate: '',
      todate: '',
      location: '',
      coolingperiod: '',
      
    })
  }
   
  addQuantity() {
    this.quantities().push(this.newQuantity());
  }
   
  removeQuantity(i:number) {
    this.quantities().removeAt(i);
  }
   
  onSubmit() {
    console.log(this.productForm.value);
  }

}
