import {Injectable} from '@angular/core';
import {Book} from '../../model/book';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../../environments/environment';

const API_URL = `${environment.api_url}`;

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private http: HttpClient) {
  }

  save(book: Book): Observable<Book> {
    return this.http.post<Book>(`${API_URL}books`, book);
  }

  getAll(): Observable<Book[]> {
    return this.http.get<Book[]>(`${API_URL}books`);
  }

  getById(id: number): Observable<Book> {
    return this.http.get<Book>(`${API_URL}books/${id}`);
  }

  updateById(id: number, product: Book): Observable<Book> {
    return this.http.put<Book>(`${API_URL}books/${id}`, product);
  }

  deleteById(id: number): Observable<Book> {
    return this.http.delete(`${API_URL}books/${id}`);
  }
}
