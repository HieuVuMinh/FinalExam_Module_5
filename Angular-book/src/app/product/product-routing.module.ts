import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BookListComponent} from './book-list/book-list.component';
import {BookEditComponent} from './book-edit/book-edit.component';
import {BookCreateComponent} from './book-create/book-create.component';
import {BookViewComponent} from './book-view/book-view.component';


const routes: Routes = [
  {
    path: '',
    component: BookListComponent
  },
  {
    path: 'edit/:id',
    component: BookEditComponent
  },
  {
    path: 'create',
    component: BookCreateComponent
  },
  {
    path: 'view/:id',
    component: BookViewComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
