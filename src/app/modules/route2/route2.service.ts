import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class Route2Service {

  constructor(private http: HttpClient) { }
  
  getStoreData(): Observable<any> {
    return this.http.get('http://fakestoreapi.com/products');
  }
}
