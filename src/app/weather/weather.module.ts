import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { WeatherHomeComponent } from './weather-home/weatherHome.component';
import { WeatherDataComponent } from './weather-data/weatherData.component';
import { WeatherDateComponent } from './weather-date/weatherDate.component';
import { WeatherTemperatureComponent } from './weather-temperature/weatherTemperature.component';

import { WeatherRoutingModule } from './weather-routing.module';

@NgModule({
  declarations: [
    WeatherHomeComponent,
    WeatherDataComponent,
    WeatherDateComponent,
    WeatherTemperatureComponent,
  ],
  imports: [CommonModule, WeatherRoutingModule],
  exports: [],
})
export class WeatherModule {}
