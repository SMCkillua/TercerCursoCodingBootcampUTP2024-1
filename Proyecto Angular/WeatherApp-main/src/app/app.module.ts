import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from "@angular/common/http"

import { AppComponent } from './app.component';
import {MainInfoComponent} from "./main-info/main-info.component";
import { SearchboxComponent } from './searchbox/searchbox.component';
import { DetailsComponent } from './details/details.component'
import {ReactiveFormsModule} from '@angular/forms'

@NgModule({
  declarations: [
    AppComponent,
    MainInfoComponent,
    SearchboxComponent,
    DetailsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
