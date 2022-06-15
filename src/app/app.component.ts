import { Component, OnInit } from '@angular/core';
import { WeatherService } from './services/weather.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  constructor(private weatherService: WeatherService) {}
  ngOnInit(): void {
    this.weatherService.getWeatherData('Sofia').subscribe({
      next: (response) => {
        console.log(response);
      },
    });
  }
}
