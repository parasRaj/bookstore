import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookListComponent } from './book-list/book-list.component';
import { AddbookComponent } from './addbook/addbook.component';
import { BrowserModule } from '../../../node_modules/@angular/platform-browser';
import { FormsModule } from '@angular/Forms';

@NgModule({
  imports: [
    CommonModule, BrowserModule, FormsModule
  ],
  declarations: [BookListComponent, AddbookComponent],
  exports:[BookListComponent,AddbookComponent]
})
export class BookstoreModule { }
