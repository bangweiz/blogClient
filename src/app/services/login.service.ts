import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { select, Store } from "@ngrx/store";
import { Observable } from "rxjs";

import { UserLogin } from "../models/auth.model";
import { AppState } from "../reducers/index.reducer";
import { TokenCheck } from "../actions/auth.action";

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  url: string = 'http://localhost:8000/api/user/'
  constructor(private http: HttpClient, private store: Store<AppState>) {}

  login = (data: UserLogin): Observable<any> => {
    return this.http.post(`${this.url}login`, data)
  }

  parseToken = (token: string) => {
    return this.http.get(`${this.url}parse/${token}`)
  }

  isAuthenticated = async (): Promise<boolean> => {
    let res = false
    let auth$ = this.store.pipe(select('auth'))
    await auth$.subscribe(auth => res = auth.isAdmin)
    return res
  }

  checkToken = (): void => {
    const token = window.localStorage.getItem("bz-blog")
    if (token) {
      this.store.dispatch(new TokenCheck(token))
    }
  }
}
