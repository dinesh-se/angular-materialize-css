import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  constructor(private http: HttpClient) { }

  customersDataUrl = "mocks/customers.json";

  getCustomersList() {
    this.http.get(this.customersDataUrl);
  }
}
