import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable()
export class MainHeaderInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const { host, key, useQueryString } = environment.mainApiHeaders;
    const headers = req.headers
      .append('x-rapidapi-host', host)
      .append('x-rapidapi-key', key)
      .append('useQueryString', '' + useQueryString);

    const mainReq = req.clone({ headers });
    return next.handle(mainReq);
  }
}
