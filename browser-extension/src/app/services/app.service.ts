import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  url: string = "http://127.0.0.1:5000/"
  constructor(private httpClient: HttpClient) { }

  predictUsingText(text: string) {
    return this.httpClient.get(this.url + text)
      .pipe(
        map(
          response => response
        )
      )
  }
}
