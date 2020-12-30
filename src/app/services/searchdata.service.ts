import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchdataService {
  searchFor: any
  constructor(private http: HttpClient) { }

  getBooksData(): Observable<any> {
    return this.http.get('https://www.googleapis.com/books/v1/volumes', {
      params: {
        q: this.searchFor
      },
    });
  }
  setKey(searchFor) {
    this.searchFor = searchFor;
  }
}
