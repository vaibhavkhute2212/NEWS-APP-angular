import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class NewsapiService {
  constructor(private _http: HttpClient) { }
  topNews = 'https://newsapi.org/v2/top-headlines?country=us&apiKey=ab3d07b079bf4bb285b22295497af4dc'
  techNews = 'https://newsapi.org/v2/everything?domains=techcrunch.com,thenextweb.com&apiKey=ab3d07b079bf4bb285b22295497af4dc'
  topHeadlines(): Observable<any>{

    return this._http.get(this.topNews);
  }

  techHeadlines(): Observable<any>{

    return this._http.get(this.techNews);
  }

}
