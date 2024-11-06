import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { BrowserModule, provideClientHydration } from "@angular/platform-browser";
import { AppRoutingModule } from "./app-routing.module";
import { HttpClientModule } from "@angular/common/http";
import { BookingModule } from './booking.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    HttpClientModule,
    BookingModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
