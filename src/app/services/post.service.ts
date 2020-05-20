import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private url: string = 'http://localhost:8000/api/post/'
  constructor(private http: HttpClient) { }

  fetchPosts = (): Observable<any> => {
    return this.http.get(`${this.url}all`)
  }

  fetchPost = (id: string): Observable<any> => {
    return this.http.get(`${this.url}${id}`)
  }
}
