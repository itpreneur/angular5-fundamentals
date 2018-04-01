import { Injectable } from '@angular/core';
import { Response } from '@angular/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/observable';
import { UserTest, UserI } from '../../models/usertest';
import 'rxjs/add/operator/map';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-type': 'application/json' })
}

@Injectable()
export class HttpuserService {
  userUrl: string = "https://reqres.in/api/users";
  postUrl: string = "https://reqres.in/api/users";


  constructor(private http: HttpClient) { }

  getUsers(): Observable<UserI[]> {
    //console.log('data', this.http.get<UserTest[]>(this.userUrl))
    return this.http.get<UserTest[]>(this.userUrl).map((res, i) => {
      //  console.log('r', res.json())
      return res['data'] || [];
      // return res as UserTest[] || []
    });


  }
  saveUser(user: any) {
    this.http.post<any>(this.postUrl, user, httpOptions).subscribe(x => {
      console.log('response', x)
    })
  }

}
