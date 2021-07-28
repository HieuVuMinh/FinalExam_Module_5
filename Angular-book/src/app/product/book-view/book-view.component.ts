import { Component, OnInit } from '@angular/core';
import {Book} from '../../model/book';
import {FormControl, FormGroup} from '@angular/forms';
import {BookService} from '../../service/book/book.service';
import {ActivatedRoute, ParamMap} from '@angular/router';

@Component({
  selector: 'app-product-view',
  templateUrl: './book-view.component.html',
  styleUrls: ['./book-view.component.scss']
})
export class BookViewComponent implements OnInit {
  book: Book = {};

  bookForm: FormGroup = new FormGroup({
    name: new FormControl(),
    title: new FormControl(),
    author: new FormControl(),
    description: new FormControl()
  });
  id: number;

  constructor(private bookService: BookService,
              private activatedRoute: ActivatedRoute) {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.id = +paramMap.get('id');
      this.getById(this.id);
    });
  }


  ngOnInit() {
  }

  getById(id) {
    this.bookService.getById(id).subscribe(book => {
      this.book = book;
      this.bookForm = new FormGroup({
        title: new FormControl(this.book.title),
        author: new FormControl(this.book.author),
        description: new FormControl(this.book.description)
      });
    });
  }
}
