import { Injectable } from "@angular/core";
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable()
export class AuthInterceptor  implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let token = window.localStorage.getItem('bz-blog')
    token = token ? token : ''
    const modifiedReq = req.clone({
      headers: req.headers.set('Authrization', token)
    })
    return next.handle(modifiedReq)
  }
}
