import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  url = 'http://localhost:3000/order'

  constructor(private http: HttpClient) { }


addOrder(formdata){
    return this.http.post(this.url+'/add', formdata);
  }

getAllOrders(){
  return this.http.get(this.url+'/getall');
}
getByUser(id){
  return this.http.get(this.url+'/getbyuser/'+id);
}
}