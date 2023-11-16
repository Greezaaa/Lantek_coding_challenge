import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { environment } from '@env/environment';
import { Machine } from '@interfaces/machine.interface';

@Injectable({
  providedIn: 'root'
})
export class MachineFetchService {

  private apiUrl = environment.API_BASE_URL;
  
  constructor(private http: HttpClient) { }
  
  
  fetchMachinesData(param?: number): Observable<Machine[]> {
    const url = param ? this.apiUrl + '/' + param : this.apiUrl;
    const auth = `${environment.API_USERNAME}:${environment.API_PASSWORD}`;
    const headers = {
      'Authorization': `Basic ${btoa(auth)}`,
      'Content-Type': 'application/json'
    };    
    const machines = this.http.get<Machine[]>(url, { headers });
    return machines;
  }

}
