import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DataService {
  private dataUrl = 'assets/api/data.json'

  constructor(private http: HttpClient) { }

  getData(): Observable<object> {
    return this.http.get(this.dataUrl);
  }
}
