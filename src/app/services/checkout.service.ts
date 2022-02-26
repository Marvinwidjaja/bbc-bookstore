import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { base64UrlDecode } from '@okta/okta-auth-js/lib/crypto';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Purchase } from '../common/purchase';

@Injectable({
  providedIn: 'root'
})
export class CheckoutService {
  baseUrl=environment.baseUrl;

  private purchaseUrl = this.baseUrl+ 'api/checkout/purchase';

  constructor(private httpClient: HttpClient) { }

  placeOrder(purchase: Purchase): Observable<any> {
    return this.httpClient.post<Purchase>(this.purchaseUrl, purchase);    
  }
  
}
