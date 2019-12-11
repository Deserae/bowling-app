import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ScoreComponent } from './score/score.component';
import { ScoreboardComponent } from './scoreboard/scoreboard.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ScoreComponent,
    ScoreboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
