import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ExpertiseComponent } from './expertise/expertise.component';
import { ContactComponent } from './contact/contact.component';
import { Routes } from '@angular/router';







@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ExpertiseComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
