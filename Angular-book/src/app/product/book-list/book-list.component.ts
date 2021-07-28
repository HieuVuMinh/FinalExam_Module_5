import {Component, OnInit} from '@angular/core';
import {BookService} from '../../service/book/book.service';
import {Book} from '../../model/book';

@Component({
  selector: 'app-product-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit {
  bookList: Book[] = [];

  constructor(private bookService: BookService) {
  }

  ngOnInit() {
    this.getAllBook();
  }

  getAllBook() {
    return this.bookService.getAll().subscribe(bookList => {
      this.bookList = bookList;
      console.log(this.bookList);
    });
  }

  deleteBook(id) {
    return this.bookService.deleteById(id).subscribe(() => {
      alert('Delete thành công');
      this.getAllBook();
    });
  }
}
