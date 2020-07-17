import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoadingScreenComponent } from './loading-screen/loading-screen.component';
import { GamesComponent } from './games/games.component';
import { PolicyComponent } from './policy';
import { HomeComponent } from './home';

@NgModule({
  declarations: [
    AppComponent,
    LoadingScreenComponent,
    GamesComponent,
    PolicyComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
