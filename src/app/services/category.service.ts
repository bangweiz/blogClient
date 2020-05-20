import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";

import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  private url: string = 'http://localhost:8000/api/category/'
  private options = {
    headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
  };

  constructor(private http: HttpClient) {}

  fetchCategories = (): Observable<any> => {
    return this.http.get(`${this.url}all`)
  }

  newCategory = (title: string): Observable<any> => {
    let body = new URLSearchParams()
    body.set('title', title)
    return this.http.post(`${this.url}new`, body.toString(), this.options)
  }

  deleteCategory = (id: number): Observable<any> => {
    return this.http.delete(this.url + id)
  }
}
