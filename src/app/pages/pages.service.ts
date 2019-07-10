import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";

const API_URL = 'https://nexedu-timetable.free.beeceptor.com/';

const httpOptions = {
  headers: new HttpHeaders({
    'content-type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class PagesService {

  constructor(private http: HttpClient) { }

  getTopics(){
    return this.http.get(API_URL, {responseType: 'text'});
  }
}
