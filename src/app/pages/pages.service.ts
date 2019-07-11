import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

const API_URL = 'https://nexedu-timetable.free.beeceptor.com/';

const JSON_SERVER_URL = 'http://localhost:3000/';

const ENDPOINT_NAME = 'weekdays/';

@Injectable({
  providedIn: 'root'
})
export class PagesService {

  constructor(private http: HttpClient) { }

  getWeekdays(){
    return this.http.get(JSON_SERVER_URL+ENDPOINT_NAME);
  }

  getSpecificDay(day: number){
    return this.http.get(JSON_SERVER_URL+ENDPOINT_NAME+day);
  }
}
