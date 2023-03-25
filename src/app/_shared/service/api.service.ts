import { environment } from './../../../environments/environment';
import { Model } from '../model/model';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, Observable } from 'rxjs';

const API_KEY = environment.apiKey;
const BASE_URL = environment.baseUrl;

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private headers = new HttpHeaders({
    'X-Rapidapi-Key': API_KEY,
    'X-Rapidapi-Host': BASE_URL,
  });

  constructor(private http: HttpClient) {}

  getDefinitions(word: string): Observable<Model> {
    const url = `https://${BASE_URL}/words/${word}/definitions`;
    return this.http
      .get<any>(url, { headers: this.headers, observe: 'response' })
      .pipe(
        map((response) => {
          if (response.status === 200) {
            return response.body;
          }
        })
      );
  }
}
