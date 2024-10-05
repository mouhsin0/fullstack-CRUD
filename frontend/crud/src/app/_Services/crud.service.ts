import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

const URL = 'http://localhost:3000/crud'

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  constructor(private http: HttpClient) { }

  checked = new BehaviorSubject<boolean>(false)

  toggle(val: boolean){

    this.checked.next(val)
  }

  getValueOfToggle(): Observable<boolean>{
    return this.checked.asObservable()
  }

  // get all Products 
  getAllProducts(): Observable<any> {
    return this.http.get(`${URL}/allProducts`)
  }

  // add product
  pushProduct(data: any){
   return this.http.post(`${URL}/addProduct`,data)
  }

  // remove product 
  deleteProduct(id: any){

    return this.http.delete(`${URL}/deleteProduct/${id}`)

  }

  // update product ...

  updateProduct(id: any, data: any){

    return this.http.put(`${URL}/updateProduct/${id}`,data)
  }
}
