import {Component, OnInit} from '@angular/core';
import {BookService} from '../../service/book/book.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';

class Category {
}

@Component({
  selector: 'app-product-create',
  templateUrl: './book-create.component.html',
  styleUrls: ['./book-create.component.scss']
})
export class BookCreateComponent implements OnInit {

  bookForm: FormGroup = new FormGroup({
    title: new FormControl('', [Validators.required, Validators.minLength(6)]),
    author: new FormControl('', Validators.required),
    description: new FormControl(),
  });

  constructor(private productService: BookService) {
  }

  ngOnInit() {
  }

  saveBook() {
    if (this.bookForm.valid) {
      console.log(this.bookForm.value);
      this.productService.save(this.bookForm.value).subscribe(() => {
        alert('Thành Công');
        console.log(this.bookForm.value);
      });
    } else {
      alert('Không thành công');
    }
  }

  get name() {
    return this.bookForm.get('name');
  }

}
