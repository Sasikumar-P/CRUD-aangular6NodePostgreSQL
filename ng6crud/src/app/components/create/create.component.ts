import { Component, OnInit } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { AdunitService } from '../../adunit.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  angForm: FormGroup;

  constructor(private adunitservice: AdunitService, private fb: FormBuilder) { 
    this.createForm();
  }
  
  createForm() {
    this.angForm = this.fb.group({
      firstname: ['', Validators.required ],
      lastname: ['', Validators.required ],
      age: ['', Validators.required ]


   });
  }

  addAdUnit(firstname, lastname, age) {
    this.adunitservice.addAdUnit(firstname, lastname, age);
}

  ngOnInit() {
  }

}
