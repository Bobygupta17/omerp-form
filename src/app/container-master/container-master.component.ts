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
      tableform: this.fb.array([]) ,
    });
  }
  
  tableform() : FormArray {
    return this.productForm.get("tableform") as FormArray
  }
   
  newtableform(): FormGroup {
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
   
  addnewtableform() {
    this.tableform().push(this.newtableform());
  }
   
  removenewtableform(i:number) {
    this.tableform().removeAt(i);
  }
   
  onSubmit() {
    console.log(this.productForm.value);
  }

}
