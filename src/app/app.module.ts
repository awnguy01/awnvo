import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/views/home/home.component';
import { BioComponent } from './components/views/bio/bio.component';
import { NavComponent } from './components/layout/nav/nav.component';
import { UsesComponent } from './components/views/uses/uses.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BioComponent,
    NavComponent,
    UsesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
