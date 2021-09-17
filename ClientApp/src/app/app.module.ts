import { BrowserModule } from '@angular/platform-browser';
import { APP_INITIALIZER, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { FetchDataComponent } from './components/fetch-data/fetch-data.component';
import { NavbarComponent } from '../shared/components/navbar/navbar.component';
import { ListeDresseurComponent } from './components/liste-dresseur/liste-dresseur.component';
import { HomeComponent } from './components/home/home.component';
import { PokemonComponent } from './components/pokemon/pokemon.component';
import { API_BASE_URL } from 'src/shared/services/data-service.service';
import { appSettingsServiceFactory, ConfigurationService } from 'src/shared/services/configuration-service.service';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    FetchDataComponent,
    NavbarComponent,
    ListeDresseurComponent,
    HomeComponent,
    PokemonComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    CommonModule,
    AppRoutingModule,
    RouterModule.forRoot([])
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: appSettingsServiceFactory,
      deps: [ConfigurationService],
      multi: true,
    },
    { provide: API_BASE_URL, useFactory: (service: ConfigurationService) => service.settings.apiEndpoints.urlApi, deps: [ConfigurationService] }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
