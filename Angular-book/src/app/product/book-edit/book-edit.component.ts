import {Component, OnInit} from '@angular/core';
import {BookService} from '../../service/book/book.service';
import {Book} from '../../model/book';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-product-edit',
  templateUrl: './book-edit.component.html',
  styleUrls: ['./book-edit.component.scss']
})
export class BookEditComponent implements OnInit {
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

  get name() {
    return this.bookForm.get('name');
  }

  updateProduct(id) {
    return this.bookService.updateById(id, this.bookForm.value).subscribe(() => {
      console.log(this.bookForm.value);
      alert('Update thành công');
    });
  }
}
