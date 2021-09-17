import { HttpClient, HttpParams } from '@angular/common/http';
import { Inject, Injectable, InjectionToken, Optional } from '@angular/core';
import { Observable } from 'rxjs';

export const API_BASE_URL = new InjectionToken<string>('API_BASE_URL');

@Injectable({
  providedIn: 'root'
})

export class DataServiceService {
  private http: HttpClient;
  private baseUrl: string;

  constructor(@Inject(HttpClient) http: HttpClient, @Optional() @Inject(API_BASE_URL) baseUrl?: string) {
    this.http = http;
    this.baseUrl = baseUrl ? baseUrl : "";
   }

   public getDresseurs(): Observable<any> {
    return this.http.get(`${this.baseUrl}/pokemon/dresseur`);
   }

   public getPokemons(): Observable<any> {
    return this.http.get(`${this.baseUrl}/pokemon/`);
   }
}
