import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class IpserviceService {
  private httpClient = inject(HttpClient);

  getIPAddress(){
    return this.httpClient.get("http://api.ipify.org/?format=json");
  }
}
