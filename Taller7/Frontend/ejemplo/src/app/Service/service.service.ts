import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Person } from '../Model/Person';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {


  constructor(private http:HttpClient) { }

  Url='http://localhost8080/ejemplo01/persons';


  getPersons(){
    return this.http.get<Person[]>(this.Url);
  }
}
