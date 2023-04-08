import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

import { JwtHelperService } from "@auth0/angular-jwt";
import { Products } from '../Model/Products.model';
import { Admin } from '../Model/Admin.model';

const httpOption={
  headers:new HttpHeaders({'Content-Type':'application/Json'})
}
@Injectable({
  providedIn: 'root'
})
export class CrudService {
  registerAdminUrl = "http://localhost:8081/api/admin/registeradmin"
  loginAdminUrl="http://localhost:8081/api/admin/loginadmin"
  apiUrl="http://localhost:8081/api"
  helper=new JwtHelperService();
  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

  addAdmin(admin: Admin) {
    return this.http.post<any>(this.registerAdminUrl, admin);
  }

  loginAdmin(admin: Admin) {
    return this.http.post<any>(this.loginAdminUrl, admin);
  }
  addProd(prod:Products){
    return this.http.post<any>(this.apiUrl+"/products", prod);
  }
  getProd():Observable<Products[]>{
    return this.http.get<Products[]>(this.apiUrl+"/products");
  }
  deleteProd(id:number|undefined){
    const Url=`${this.apiUrl+"/products"}/${id}`
    return this.http.delete(Url,httpOption)
  }
  userDetail(){
    let token:any=localStorage.getItem('mytoken');
    let decotoken=this.helper.decodeToken(token);
    return decotoken.data
  }
}