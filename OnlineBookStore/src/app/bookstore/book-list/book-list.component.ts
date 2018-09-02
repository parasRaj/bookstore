import { Component, OnInit } from '@angular/core';
import { Book } from '../book';


@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

  books:Book[];
  constructor() { }

  ngOnInit() {
    this.books= [{
                "id":"1",
                "title":"harryPotter",
                "author":"JK rowling",
                "publicationDate":null,
                "publisher":"xyz",
                "price":"100",
                "genre":"imagination",
                "format":"AA"
              },
              {
                "id":"2",
                "title":"harryPotter2",
                "author":"JK rowling",
                "publicationDate":null,
                "publisher":"xyz",
                "price":"150",
                "genre":"imagination",
                "format":"AA"
              }];
  }

  Delete(obj:Book){
alert("hello"+obj.title)
  }

  Edit(obj:any)
  {

  }
  AddToCart(obj:any)
  {

  }

}
