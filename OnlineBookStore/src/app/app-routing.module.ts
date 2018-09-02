import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookListComponent } from './bookstore/book-list/book-list.component';
import { RouterModule, Routes } from '@angular/router';
import { AddbookComponent } from './bookstore/addbook/addbook.component';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: BookListComponent },
  { path: 'addbook' , component : AddbookComponent}
 
];
 
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
