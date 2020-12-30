import { Component } from '@angular/core';
import { SearchdataService } from './services/searchdata.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularapiproject';
  searchFor: any
  booksData: any
  constructor(private searchService: SearchdataService) { }
  ngOnInit(): void {

  }

  searchBooks() {
    this.searchFor = document.getElementById('searchFor');
    this.searchFor = this.searchFor.value;
    this.searchService.setKey(this.searchFor);
    this.searchService.getBooksData().subscribe({
      next: (data) => {
        this.booksData = data['items'];
      },
      error: (msg) => {
        console.log('error is : ', msg);
      }
    })
  }

}
