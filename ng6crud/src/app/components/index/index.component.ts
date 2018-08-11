import { Component, OnInit } from '@angular/core';

import { Data } from './index';
import { AdunitService } from '../../adunit.service'

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  datas : Data [];

  constructor(private adunitservice : AdunitService) { }

  ngOnInit() {

    this.adunitservice
      .getAdUnits()
      .subscribe((data: Data[]) => {

      console.log(data);
      this.datas = data;
    });
  
  }
  deleteAdUnit(id) {
    this.adunitservice.deleteAdUnit(id).subscribe(res => {
      console.log('Deleted');
    });
  }

}
