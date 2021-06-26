import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { MainHeaderInterceptor } from './main-header.interceptor.service';

export const mainInterceptorBarrel = [
  { provide: HTTP_INTERCEPTORS, useClass: MainHeaderInterceptor, multi: true },
];
