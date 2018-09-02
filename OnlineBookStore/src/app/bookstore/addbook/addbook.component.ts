import { Component, OnInit } from '@angular/core';
import { RequestBoook } from '../request-boook';

@Component({
  selector: 'app-addbook',
  templateUrl: './addbook.component.html',
  styleUrls: ['./addbook.component.css']
})
export class AddbookComponent implements OnInit {
  reqbook:RequestBoook;
  constructor() { }

//reqbook = new RequestBoook('harryPotter', 'jk rowling', ["romantic"]);
powers = ['Really Smart', 'Super Flexible',
            'Super Hot', 'Weather Changer'];


  ngOnInit() {
  }

}
