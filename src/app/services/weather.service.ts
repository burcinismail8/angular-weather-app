import {
  HttpClient,
  HttpClientModule,
  HttpHeaders,
  HttpParams,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { WeatherData } from '../models/weather.models';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'd5f726e3bdmshe3b242e3c1cad19p14f267jsne82937958212',
      'X-RapidAPI-Host': 'community-open-weather-map.p.rapidapi.com',
    },
  };

  constructor(private http: HttpClient) {}
  getWeatherData(city: string): Observable<WeatherData> {
    return this.http.get<WeatherData>(environment.weatherAPIBaseUrl, {
      headers: new HttpHeaders()
        .set(
          environment.XRapidAPIHostHeaderName,
          environment.XRapidAPIHostHeaderValue
        )
        .set(
          environment.XRapidAPIKeyHeaderName,
          environment.XRapidAPIKeyHeaderValue
        ),
      params: new HttpParams()
        .set('q', city)
        .set('units', 'metric')
        .set('mode', 'json'),
    });
  }
}
