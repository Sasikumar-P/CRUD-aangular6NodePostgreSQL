import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { Data } from '../index/index';
import { AdunitService } from '../../adunit.service';


@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  data: any = {};
  angForm: FormGroup;

  constructor(private route: ActivatedRoute,
    private router: Router,
    private adunitservice: AdunitService,
    private fb: FormBuilder) {
      this.createForm();
     }

     createForm() {
      this.angForm = this.fb.group({
             firstname: ['', Validators.required ],
            lastname: ['', Validators.required ],
            age: ['', Validators.required ]
         });
      }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.adunitservice.editAdUnit(params['id']).subscribe(res => {
        this.data = res;
    });
  });
  
  }

  updateAdUnit(firstname, lastname, age) {
    this.route.params.subscribe(params => {
       this.adunitservice.updateAdUnit(firstname, lastname, age, params['id']);
       this.router.navigate(['index']);
    });
 }

}
