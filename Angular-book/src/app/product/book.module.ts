import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import {BookListComponent} from './book-list/book-list.component';
import {BookEditComponent} from './book-edit/book-edit.component';
import {BookCreateComponent} from './book-create/book-create.component';
import {ReactiveFormsModule} from '@angular/forms';
import { BookViewComponent } from './book-view/book-view.component';


@NgModule({
  declarations: [
    BookListComponent,
    BookEditComponent,
    BookCreateComponent,
    BookViewComponent
  ],
  imports: [
    CommonModule,
    ProductRoutingModule,
    ReactiveFormsModule
  ]
})
export class BookModule { }
